self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('v1').then(cache => {
      return cache.addAll([
        '/Web/',
        '/Web/app.html',
        '/Web/manifest.json',
        '/Web/favicon.ico',
        '/Web/favicon-16x16.png',
        '/Web/favicon-32x32.png',
        '/Web/icon-192x192.png',
        '/Web/icon-512x512.png',
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
