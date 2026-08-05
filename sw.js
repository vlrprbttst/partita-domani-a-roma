// Minimal service worker — keeps the app installable as a PWA. No push or
// notification handling. Network-first fetch with a cache fallback.

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(clients.claim()))

self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request, { cache: 'no-store' }).catch(() => caches.match(e.request).then(r => r ?? Response.error())))
})
// build 2026-08-05T13:54:06Z
