importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey:            'AIzaSyD_O5AAH6ESu1Lls8I9q8parzCEIuWCKts',
  projectId:         'partita-domani-a-roma',
  messagingSenderId: '31480853662',
  appId:             '1:31480853662:web:71c40bb1c92ec7ee2e778f',
})

const messaging = firebase.messaging()

messaging.onBackgroundMessage((payload) => {
  self.registration.showNotification(payload.data.title, {
    body: payload.data.body,
    icon: '/partita-domani-a-roma/icons/android-chrome-192x192.png',
    data: { url: 'https://vlrprbttst.github.io/partita-domani-a-roma/' },
    tag:  'partita-domani-a-roma',
    renotify: true,
  })
})

self.addEventListener('notificationclick', (e) => {
  e.notification.close()
  e.waitUntil(clients.openWindow(e.notification.data?.url || '/partita-domani-a-roma/'))
})

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(clients.claim()))

self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => caches.match(e.request)))
  } else {
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))
  }
})
