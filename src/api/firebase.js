import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore'

const app = initializeApp({
  apiKey:            'AIzaSyD_O5AAH6ESu1Lls8I9q8parzCEIuWCKts',
  authDomain:        'partita-domani-a-roma.firebaseapp.com',
  projectId:         'partita-domani-a-roma',
  storageBucket:     'partita-domani-a-roma.firebasestorage.app',
  messagingSenderId: '31480853662',
  appId:             '1:31480853662:web:71c40bb1c92ec7ee2e778f',
})

const db = getFirestore(app)

const VAPID_PUBLIC = import.meta.env.VITE_VAPID_PUBLIC_KEY

// Web Push subscriptions live on the SW registration (not in IndexedDB), so
// they survive the aggressive storage eviction Android Chrome inflicts on
// PWAs. This is the primary reason for using raw PushManager instead of
// firebase/messaging — the FCM SDK's IndexedDB-backed token gets recreated
// on every eviction, churning the Firestore subscription records.

export function notificationsSupported() {
  return 'Notification' in window && 'serviceWorker' in navigator && 'PushManager' in window
}

export async function requestPersistentStorage() {
  if (!navigator.storage?.persist) return false
  try { return await navigator.storage.persist() } catch { return false }
}

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64  = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const raw     = atob(base64)
  return Uint8Array.from(raw, c => c.charCodeAt(0))
}

// Stable Firestore doc ID derived from the push endpoint URL. The endpoint is
// the same across IndexedDB eviction (it lives on the SW push subscription),
// so the doc ID is stable too — no orphan accumulation.
function subscriptionDocId(subscription) {
  const endpoint = typeof subscription === 'string' ? subscription : subscription.endpoint
  return btoa(endpoint).replace(/[^A-Za-z0-9]/g, '_').slice(0, 200)
}

function serializeSubscription(subscription) {
  const json = subscription.toJSON()
  return {
    endpoint:  json.endpoint,
    keys:      { p256dh: json.keys.p256dh, auth: json.keys.auth },
    createdAt: new Date().toISOString(),
  }
}

async function getOrCreateSubscription() {
  const sw = await navigator.serviceWorker.ready
  const existing = await sw.pushManager.getSubscription()

  if (existing) {
    // If a previous subscription exists with a different applicationServerKey
    // (e.g. left over from the firebase/messaging era), pushManager.subscribe
    // throws InvalidStateError. In that case, unsubscribe and create a new one
    // with our own VAPID key.
    try {
      return await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC),
      })
    } catch (err) {
      if (err.name !== 'InvalidStateError') throw err
      await existing.unsubscribe()
    }
  }

  return sw.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC),
  })
}

export async function subscribeToNotifications() {
  if (!notificationsSupported()) return 'unsupported'

  const permission = await Notification.requestPermission()
  if (permission !== 'granted') return 'denied'

  await requestPersistentStorage()

  const subscription = await getOrCreateSubscription()
  if (!subscription) return 'error'

  await setDoc(
    doc(db, 'subscriptions', subscriptionDocId(subscription)),
    serializeSubscription(subscription)
  )

  localStorage.removeItem('notifUnsubscribed')
  return 'granted'
}

export async function unsubscribeFromNotifications() {
  const sw = await navigator.serviceWorker.ready
  const subscription = await sw.pushManager.getSubscription()
  if (subscription) {
    try {
      await deleteDoc(doc(db, 'subscriptions', subscriptionDocId(subscription)))
    } catch { /* doc già rimosso o errore di rete, procedi comunque */ }
    await subscription.unsubscribe()
  }
  localStorage.setItem('notifUnsubscribed', 'true')
}

// Notification.permission is the only signal that survives Android Chrome's
// storage eviction. When permission is granted, we treat the user as subscribed
// unless they have explicitly clicked unsubscribe (tracked in localStorage as
// 'notifUnsubscribed'). After eviction, autoRecover saves the (still-valid)
// push subscription to Firestore — same endpoint, so the same doc ID, no churn.
// Returns 'unsupported' | 'denied' | 'subscribed' | 'idle', or null on
// transient errors (caller keeps the current optimistic state).
export async function detectNotificationState() {
  if (!notificationsSupported())              return 'unsupported'
  if (Notification.permission === 'denied')   return 'denied'
  if (Notification.permission !== 'granted')  return 'idle'

  try {
    const sw = await navigator.serviceWorker.ready
    let subscription = await sw.pushManager.getSubscription()

    if (!subscription) {
      // No push subscription yet (e.g., eviction also dropped the SW push
      // registration, or first visit after permission was granted elsewhere).
      // Auto-create one unless the user explicitly opted out.
      if (localStorage.getItem('notifUnsubscribed') === 'true') return 'idle'
      subscription = await sw.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC),
      })
    }

    const ref  = doc(db, 'subscriptions', subscriptionDocId(subscription))
    const snap = await getDoc(ref)
    if (snap.exists()) return 'subscribed'

    if (localStorage.getItem('notifUnsubscribed') === 'true') return 'idle'

    await setDoc(ref, serializeSubscription(subscription))
    return 'subscribed'
  } catch {
    return null
  }
}
