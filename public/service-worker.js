const cache = [];
self.addEventListener('install', function (e) {
  const FILES_TO_CACHE = [
    "./index.html",
    "./css/styles.css",
    "./icons/icon-72x72.png",
    "./icons/icon-96x96.png",
    "./icons/icon-128x128.png",
    "./icons/icon-144x144.png",
    "./icons/icon-152x152.png",
    "./icons/icon-192x192.png",
    "./icons/icon-384x384.png",
    "./icons/icon-512x512.png"
  ]

});
self.addEventListener('fetch', (event) => {
  console.log('fetch intercepted for: ', event.request.url);
  event.respondWith(
    caches.match(event.request).then((cachedResponse) =>{
      if(cachedResponse) return cachedResponse;

      return fetch(event.request);
    })

  )

})