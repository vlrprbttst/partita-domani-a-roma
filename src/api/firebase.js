import { initializeApp } from 'firebase/app'
import { getFirestore, collection, addDoc, query, where, getDocs, deleteDoc } from 'firebase/firestore'
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

export async function subscribeToNotifications() {
  if (!notificationsSupported()) return 'unsupported'

  const permission = await Notification.requestPermission()
  if (permission !== 'granted') return 'denied'

  const sw = await navigator.serviceWorker.ready
  const messaging = getMessaging(app)
  const token = await getToken(messaging, {
    vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
    serviceWorkerRegistration: sw,
  })

  if (!token) return 'error'

  // Always write — duplicates are deduplicated server-side in send-notifications.js
  await addDoc(collection(db, 'subscriptions'), {
    token,
    createdAt: new Date().toISOString(),
  })

  return 'granted'
}

export async function unsubscribeFromNotifications() {
  const sw = await navigator.serviceWorker.ready
  const messaging = getMessaging(app)
  try {
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      serviceWorkerRegistration: sw,
    })
    if (token) {
      const snap = await getDocs(query(collection(db, 'subscriptions'), where('token', '==', token)))
      snap.forEach(doc => deleteDoc(doc.ref))
    }
  } catch { /* token già scaduto o assente, procedi comunque */ }
  await deleteToken(messaging)
}
