import { initializeApp } from 'firebase/app'
import { getFirestore, doc, setDoc, getDoc, deleteDoc } from 'firebase/firestore'
import { getMessaging, getToken, deleteToken } from 'firebase/messaging'

const app = initializeApp({
  apiKey:            'AIzaSyD_O5AAH6ESu1Lls8I9q8parzCEIuWCKts',
  authDomain:        'partita-domani-a-roma.firebaseapp.com',
  projectId:         'partita-domani-a-roma',
  storageBucket:     'partita-domani-a-roma.firebasestorage.app',
  messagingSenderId: '31480853662',
  appId:             '1:31480853662:web:71c40bb1c92ec7ee2e778f',
})

const db = getFirestore(app)

export function notificationsSupported() {
  return 'Notification' in window && 'serviceWorker' in navigator
}

// Chrome auto-grants persistent storage to PWAs that have notification permission,
// but only evaluates the criteria at the moment of the call. Calling on every page
// load (not just on subscribe) maximises the chance of being granted before Android
// decides to evict the PWA's storage.
export async function requestPersistentStorage() {
  if (!navigator.storage?.persist) return false
  try { return await navigator.storage.persist() } catch { return false }
}

async function fetchFcmToken() {
  const sw = await navigator.serviceWorker.ready
  const messaging = getMessaging(app)
  return getToken(messaging, {
    vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    serviceWorkerRegistration: sw,
  })
}

export async function subscribeToNotifications() {
  if (!notificationsSupported()) return 'unsupported'

  const permission = await Notification.requestPermission()
  if (permission !== 'granted') return 'denied'

  await requestPersistentStorage()

  const token = await fetchFcmToken()
  if (!token) return 'error'

  await setDoc(doc(db, 'subscriptions', token), {
    token,
    createdAt: new Date().toISOString(),
  })

  localStorage.removeItem('notifUnsubscribed')
  return 'granted'
}

export async function unsubscribeFromNotifications() {
  const messaging = getMessaging(app)
  try {
    const token = await fetchFcmToken()
    if (token) await deleteDoc(doc(db, 'subscriptions', token))
  } catch { /* token già scaduto o assente, procedi comunque */ }
  await deleteToken(messaging)
  localStorage.setItem('notifUnsubscribed', 'true')
}

// Notification.permission is the only signal that survives Android Chrome's
// aggressive storage eviction (which clears localStorage AND IndexedDB on
// low-engagement PWAs every few hours). When permission is granted, we treat the
// user as subscribed unless they have explicitly clicked unsubscribe (tracked in
// localStorage as 'notifUnsubscribed' — also evictable, but the trade-off favours
// accidental re-subscribe over silent loss of subscription on every Android purge).
// Returns 'unsupported' | 'denied' | 'subscribed' | 'idle', or null on transient
// errors (caller keeps the current optimistic state).
export async function detectNotificationState() {
  if (!notificationsSupported())              return 'unsupported'
  if (Notification.permission === 'denied')   return 'denied'
  if (Notification.permission !== 'granted')  return 'idle'

  try {
    const token = await fetchFcmToken()
    if (!token) return 'idle'

    const ref  = doc(db, 'subscriptions', token)
    const snap = await getDoc(ref)
    if (snap.exists()) return 'subscribed'

    // Token not registered for this context. Auto-recover unless the user has
    // explicitly chosen to unsubscribe.
    if (localStorage.getItem('notifUnsubscribed') === 'true') return 'idle'

    await setDoc(ref, { token, createdAt: new Date().toISOString() })
    return 'subscribed'
  } catch {
    return null
  }
}
