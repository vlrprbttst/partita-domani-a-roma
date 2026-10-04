// Minimal service worker — keeps the app installable as a PWA. No push or
// notification handling, no offline cache.
// Only page navigations bypass the HTTP cache (so a new deploy shows up on the
// next open); everything else (hashed assets, fonts, analytics) goes straight
// to the network with normal browser caching.

self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', e => e.waitUntil(clients.claim()))

self.addEventListener('fetch', e => {
  if (e.request.mode === 'navigate') {
    e.respondWith(fetch(e.request, { cache: 'no-store' }))
  }
})
// build 2026-10-04T03:51:12Z
