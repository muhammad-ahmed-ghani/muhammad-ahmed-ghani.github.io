/* ========================================
   SERVICE WORKER
   Progressive Web App Capabilities
   ======================================== */

const CACHE_NAME = 'ahmedghani-v1.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/enhancements.css',
  '/css/cursor.css',
  '/css/critical.css',
  '/css/animate.css',
  '/css/aos.css',
  '/css/icomoon.css',
  '/css/flaticon.css',
  '/js/main.js',
  '/js/enhancements.js',
  '/js/jquery.min.js',
  '/js/bootstrap.min.js',
  '/js/aos.js',
  '/js/particles.min.js',
  '/js/app.js',
  '/images/profile.jpg',
  '/images/favicon.png',
  '/images/header-image.jpg',
  '/images/header-image2.jpg',
  '/manifest.json'
];

// Install event - cache assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .catch(err => {
        console.log('Cache install error:', err);
      })
  );
  self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        });
      })
      .catch(() => {
        // Return offline page if available
        return caches.match('/index.html');
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );

  self.clients.claim();
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(syncData());
  }
});

async function syncData() {
  // Implement background sync logic here
  console.log('Background sync triggered');
}

// Push notification support
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/images/profile.jpg',
    badge: '/images/favicon.png',
    vibrate: [200, 100, 200],
    tag: 'notification',
    requireInteraction: false
  };

  event.waitUntil(
    self.registration.showNotification('Muhammad Ahmed Ghani', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('https://ahmedghani.com')
  );
});
