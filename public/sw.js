// Native Web Push handler (no Firebase SDK). Push subscriptions live on the
// SW registration and survive Android Chrome's storage eviction, unlike the
// IndexedDB-backed FCM tokens used previously.

// Public config — the VAPID public key and the Firestore API key are public by
// design and already shipped in the client bundle. The SW is a separate runtime
// and cannot import src/api/firebase.js, so these two values are duplicated
// here: keep them in sync with VITE_VAPID_PUBLIC_KEY (.env) and firebase.js.
const VAPID_PUBLIC = 'BEKqpwuNd4ilvCyMR9F7J1A0g7XnB-VM8yrYFo7uQ7y40MCs4ys1igUOj7a5nTrht2WTfKM33drNb3eVNm4swNc'
const API_KEY      = 'AIzaSyD_O5AAH6ESu1Lls8I9q8parzCEIuWCKts'
const FIRESTORE    = 'https://firestore.googleapis.com/v1/projects/partita-domani-a-roma/databases/(default)/documents'

self.addEventListener('push', (event) => {
  let payload = {}
  try { payload = event.data ? event.data.json() : {} } catch { payload = {} }
  const title = payload.title || 'Partita domani a Roma'
  const body  = payload.body  || ''
  event.waitUntil(self.registration.showNotification(title, {
    body,
    icon: '/partita-domani-a-roma/icons/android-chrome-192x192.png',
    data: { url: 'https://vlrprbttst.github.io/partita-domani-a-roma/' },
    tag:  'partita-domani-a-roma',
    renotify: true,
  }))
})

self.addEventListener('notificationclick', (e) => {
  e.notification.close()
  e.waitUntil(clients.openWindow(e.notification.data?.url || '/partita-domani-a-roma/'))
})

// Fired when the push service rotates or invalidates the subscription. Without
// this handler a dead subscription is only recovered the next time the user
// opens the app — and for a "match tomorrow?" app that may be days. Here the SW
// re-subscribes and rewrites the Firestore doc on its own, no app open needed.
self.addEventListener('pushsubscriptionchange', (event) => {
  event.waitUntil(handleSubscriptionChange(event))
})

async function handleSubscriptionChange(event) {
  if (event.oldSubscription) {
    try { await deleteSubscriptionDoc(subscriptionDocId(event.oldSubscription.endpoint)) } catch { /* doc già rimosso o errore di rete */ }
  }

  // Prefer the subscription the browser already created; otherwise re-subscribe
  // reusing the old subscription's applicationServerKey, falling back to the
  // hardcoded VAPID key if the event carries no oldSubscription.
  let subscription = event.newSubscription
  if (!subscription) {
    subscription = await self.registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey:
        event.oldSubscription?.options?.applicationServerKey || urlBase64ToUint8Array(VAPID_PUBLIC),
    })
  }

  await writeSubscriptionDoc(subscriptionDocId(subscription.endpoint), subscription)
}

// --- Firestore REST helpers (mirror src/api/firebase.js) ---

function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4)
  const base64  = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/')
  const raw     = atob(base64)
  return Uint8Array.from(raw, c => c.charCodeAt(0))
}

function subscriptionDocId(endpoint) {
  return btoa(endpoint).replace(/[^A-Za-z0-9]/g, '_').slice(0, 200)
}

function subscriptionDocUrl(docId) {
  return `${FIRESTORE}/subscriptions/${docId}?key=${API_KEY}`
}

async function writeSubscriptionDoc(docId, subscription) {
  const json = subscription.toJSON()
  await fetch(subscriptionDocUrl(docId), {
    method:  'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      fields: {
        endpoint: { stringValue: json.endpoint },
        keys: {
          mapValue: {
            fields: {
              p256dh: { stringValue: json.keys.p256dh },
              auth:   { stringValue: json.keys.auth },
            },
          },
        },
        createdAt: { stringValue: new Date().toISOString() },
      },
    }),
  })
}

async function deleteSubscriptionDoc(docId) {
  await fetch(subscriptionDocUrl(docId), { method: 'DELETE' })
}

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(clients.claim()))

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => caches.match(e.request).then(r => r ?? Response.error())))
})
