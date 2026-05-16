// Native Web Push handler (no Firebase SDK). Push subscriptions live on the
// SW registration and survive Android Chrome's storage eviction, unlike the
// IndexedDB-backed FCM tokens used previously.

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

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(clients.claim()))

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => caches.match(e.request).then(r => r ?? Response.error())))
})
// build 2026-05-16T13:11:03Z
