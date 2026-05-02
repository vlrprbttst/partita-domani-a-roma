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

  navigator.storage?.persist?.()

  const token = await fetchFcmToken()
  if (!token) return 'error'

  await setDoc(doc(db, 'subscriptions', token), {
    token,
    createdAt: new Date().toISOString(),
  })

  return 'granted'
}

export async function unsubscribeFromNotifications() {
  const messaging = getMessaging(app)
  try {
    const token = await fetchFcmToken()
    if (token) await deleteDoc(doc(db, 'subscriptions', token))
  } catch { /* token già scaduto o assente, procedi comunque */ }
  await deleteToken(messaging)
}

// Source-of-truth detection: queries Firestore for the actual subscription instead of
// the fragile localStorage flag. Self-heals when localStorage is evicted (Android Chrome
// memory pressure, Safari ITP, manual data clear). With autoRecover, re-registers a new
// FCM token in Firestore if the user previously expressed subscription intent but the
// IndexedDB-backed token was rotated/cleared.
// Returns 'unsupported' | 'denied' | 'subscribed' | 'idle', or null on transient errors
// (caller should keep the current optimistic state).
export async function detectNotificationState({ autoRecover = false } = {}) {
  if (!notificationsSupported())              return 'unsupported'
  if (Notification.permission === 'denied')   return 'denied'
  if (Notification.permission !== 'granted')  return 'idle'

  try {
    const token = await fetchFcmToken()
    if (!token) return 'idle'

    const ref  = doc(db, 'subscriptions', token)
    const snap = await getDoc(ref)
    if (snap.exists()) return 'subscribed'

    if (autoRecover) {
      await setDoc(ref, { token, createdAt: new Date().toISOString() })
      return 'subscribed'
    }
    return 'idle'
  } catch {
    return null
  }
}
