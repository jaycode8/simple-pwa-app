const cacheName = "demo-v1";
const assets = [
  "/",
  "/index.html",
  "/imgs/logo.png",
  "/script.js"
];

// Install event
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

// Fetch event
self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});
