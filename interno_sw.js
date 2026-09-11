// Service worker del lanzador "Savian Apps" (interno_index.html).
// Solo cachea los archivos propios del lanzador (esta pantalla, iconos,
// manifest). Nunca intercepta peticiones hacia las herramientas reales
// (Tickets, Jornada, Guardian, Portal) — esas siguen cargando siempre en
// directo, con su sesión y su login tal cual funcionan hoy.

const CACHE_NAME = "interno-savian-apps-shell-v1";

const SHELL_FILES = [
  "./",
  "./interno_index.html",
  "./interno_manifest.json",
  "./interno_apps.json",
  "./interno_icons/interno_icon-192.png",
  "./interno_icons/interno_icon-512.png",
  "./interno_icons/interno_icon-512-maskable.png",
  "./interno_icons/interno_apple-touch-icon.png",
  "./interno_assets/interno_portal-card.png",
  "./interno_assets/interno_guardian-card.png",
  "./interno_assets/interno_jortick-card.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(SHELL_FILES)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Solo gestiona peticiones de este mismo origen y de la carpeta del
  // lanzador. Todo lo demás (las apps reales, en otros dominios) se deja
  // pasar sin tocar.
  if (url.origin !== self.location.origin) return;
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const network = fetch(event.request)
        .then((response) => {
          if (response && response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => cached);
      return cached || network;
    })
  );
});
