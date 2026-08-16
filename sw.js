const CACHE_NAME = 'geniq-v2.7-core-v1';
const RUNTIME_CACHE = 'geniq-v2.7-runtime-v1';

// Core assets to pre-cache for glassmorphic shell
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/style.css',
  '/app.js',
  '/manifest.json'
];

// 1. Install Event: Cache app shell instantly
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// 2. Activate Event: Purge old outdated caches and claim clients immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME && cache !== RUNTIME_CACHE) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// 3. Fetch Event: Advanced Network-First strategy to keep the app fresh online
self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Skip cross-origin or non-GET requests
  if (request.method !== 'GET' || !request.url.startsWith(self.location.origin)) {
    return;
  }

  // For HTML / Navigation: Try Network first, fall back to Cache if offline
  if (request.mode === 'navigate' || request.headers.get('accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then((networkResponse) => {
          return caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          return caches.match(request).then((cachedResponse) => {
            return cachedResponse || caches.match('/index.html');
          });
        })
    );
    return;
  }

  // For CSS, JS, and Static Assets: Stale-While-Revalidate (Fast load + background sync)
  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      const fetchAndUpdate = fetch(request)
        .then((networkResponse) => {
          caches.open(RUNTIME_CACHE).then((cache) => {
            cache.put(request, networkResponse.clone());
          });
          return networkResponse;
        })
        .catch(() => {
          // Ignore network failure if we have a cache fallback
        });

      return cachedResponse || fetchAndUpdate;
    })
  );
});