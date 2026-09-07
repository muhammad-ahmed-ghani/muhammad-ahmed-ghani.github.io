/*
 * Tombstone service worker.
 *
 * The previous file here was left over from an older jQuery/Bootstrap version
 * of this site. It cache-first served '/' and precached paths that no longer
 * exist (/css/style.css, /js/jquery.min.js, /images/profile.jpg). Nothing in
 * the current site registers it — but any browser that registered it in the
 * past still has it installed, and would keep serving a stale cached shell,
 * silently undoing the prerendered HTML.
 *
 * Deleting the file would not help: a 404 leaves the existing worker in place.
 * This replacement unregisters itself and purges every cache it owns.
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const names = await caches.keys();
      await Promise.all(names.map((name) => caches.delete(name)));
      await self.registration.unregister();

      const clientList = await self.clients.matchAll({ type: 'window' });
      for (const client of clientList) client.navigate(client.url);
    })()
  );
});

// Never intercept a request while winding down.
self.addEventListener('fetch', () => {});
