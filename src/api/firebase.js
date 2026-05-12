// Firestore access via raw REST API — no firebase/firestore SDK (saves ~100KB
// bundle). Security Rules in firestore.rules govern access; the API key only
// identifies the project. Same on-disk doc shape as before.

const PROJECT_ID = 'partita-domani-a-roma'
const API_KEY    = 'AIzaSyD_O5AAH6ESu1Lls8I9q8parzCEIuWCKts'
const FIRESTORE  = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents`

const VAPID_PUBLIC = import.meta.env.VITE_VAPID_PUBLIC_KEY

// Web Push subscriptions live on the SW registration (not in IndexedDB), so
// they survive the aggressive storage eviction Android Chrome inflicts on
// PWAs. This is the primary reason for using raw PushManager — the FCM SDK's
// IndexedDB-backed token gets recreated on every eviction, churning the
// Firestore subscription records.

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

function subscriptionDocUrl(docId) {
  return `${FIRESTORE}/subscriptions/${docId}?key=${API_KEY}`
}

function serializeSubscription(subscription) {
  const json = subscription.toJSON()
  return {
    endpoint:  json.endpoint,
    keys:      { p256dh: json.keys.p256dh, auth: json.keys.auth },
    createdAt: new Date().toISOString(),
  }
}

// Firestore REST docs wrap each value in a typed envelope.
function toFirestoreFields(data) {
  return {
    fields: {
      endpoint: { stringValue: data.endpoint },
      keys: {
        mapValue: {
          fields: {
            p256dh: { stringValue: data.keys.p256dh },
            auth:   { stringValue: data.keys.auth },
          },
        },
      },
      createdAt: { stringValue: data.createdAt },
    },
  }
}

async function subscriptionDocExists(docId) {
  const res = await fetch(subscriptionDocUrl(docId))
  return res.ok
}

async function writeSubscriptionDoc(docId, data) {
  const res = await fetch(subscriptionDocUrl(docId), {
    method:  'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify(toFirestoreFields(data)),
  })
  if (!res.ok) throw new Error(`Firestore write failed: ${res.status}`)
}

async function deleteSubscriptionDoc(docId) {
  await fetch(subscriptionDocUrl(docId), { method: 'DELETE' })
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

  await writeSubscriptionDoc(subscriptionDocId(subscription), serializeSubscription(subscription))

  localStorage.removeItem('notifUnsubscribed')
  return 'granted'
}

export async function unsubscribeFromNotifications() {
  const sw = await navigator.serviceWorker.ready
  const subscription = await sw.pushManager.getSubscription()
  if (subscription) {
    try {
      await deleteSubscriptionDoc(subscriptionDocId(subscription))
    } catch { /* doc già rimosso o errore di rete, procedi comunque */ }
    await subscription.unsubscribe()
  }
  localStorage.setItem('notifUnsubscribed', 'true')
}

// Notification.permission is the only signal that survives Android Chrome's
// storage eviction. When permission is granted, we treat the user as subscribed
// unless they have explicitly clicked unsubscribe (tracked in localStorage as
// 'notifUnsubscribed'). After eviction, this auto-saves the (still-valid)
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
      if (localStorage.getItem('notifUnsubscribed') === 'true') return 'idle'
      try {
        subscription = await sw.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(VAPID_PUBLIC),
        })
      } catch {
        // subscribe() failed without user gesture (iOS after SW update, etc.).
        // Return idle so the user can re-tap the bell rather than silently
        // appearing subscribed while never receiving pushes.
        return 'idle'
      }
    }

    const docId = subscriptionDocId(subscription)
    if (await subscriptionDocExists(docId)) return 'subscribed'

    if (localStorage.getItem('notifUnsubscribed') === 'true') return 'idle'

    await writeSubscriptionDoc(docId, serializeSubscription(subscription))
    return 'subscribed'
  } catch {
    return null
  }
}
