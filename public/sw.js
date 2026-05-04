importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-app-compat.js')
importScripts('https://www.gstatic.com/firebasejs/10.12.0/firebase-messaging-compat.js')

firebase.initializeApp({
  apiKey:            'AIzaSyD_O5AAH6ESu1Lls8I9q8parzCEIuWCKts',
  projectId:         'partita-domani-a-roma',
  messagingSenderId: '31480853662',
  appId:             '1:31480853662:web:71c40bb1c92ec7ee2e778f',
})

const messaging = firebase.messaging()

// FCM auto-displays the notification using webpush.notification config (set
// in scripts/send-notifications.js). Calling showNotification here would
// produce a second notification on top of the auto-display.
messaging.onBackgroundMessage(() => {})

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
