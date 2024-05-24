self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/web/',
        '/web/app.html',
        '/web/manifest.json',
        '/web/favicon.ico',
        '/web/favicon-16x16.png',
        '/web/favicon-32x32.png',
        '/web/icon-192x192.png',
        '/web/icon-512x512.png',
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
