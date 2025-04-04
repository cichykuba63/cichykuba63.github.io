const staticCacheUEK = "dev-UEK"
const assets = [
  "/",
  "/index.html",
  "/navigation.html",
  "/SOS.html",
  "/css/main.css",
  "/css/main.css.map",
  "/sass/main.scss",
  "/img/Budynek_Główny (0).jpg",
  "/img/logo_UEK_bordo_pl_crop.png",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticCacheUEK).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })
