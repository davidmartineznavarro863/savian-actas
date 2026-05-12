/* ══════════════════════════════════════════════════
   🔄  SERVICE WORKER — Network First
   Savian · Acta Visita Técnica
   ──────────────────────────────────────────────────
   Estrategia: cuando hay conexión, SIEMPRE se pide
   el archivo al servidor (código siempre actualizado).
   Sin conexión, se sirve la copia local guardada.

   ✅ No necesitas borrar caché al actualizar el código.
   ✅ La app funciona sin conexión (útil en campo).
   ✅ Sin números de versión que mantener.
══════════════════════════════════════════════════ */

const CACHE_NAME = 'savian-actas-cache-v1';

// Archivos locales que se guardan para uso offline
const ASSETS_LOCALES = [
  './',
  './index.html',
  './app.js',
  './styles.css'
];

/* ── INSTALL: guarda copia local de los archivos esenciales ── */
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_LOCALES))
      .then(() => self.skipWaiting()) // Activa el SW inmediatamente, sin esperar
  );
});

/* ── ACTIVATE: elimina cachés de versiones anteriores del SW ── */
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== CACHE_NAME) // Borra cualquier caché que no sea la actual
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim()) // Toma el control de las pestañas abiertas
  );
});

/* ── FETCH: Network First para archivos locales ── */
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Solo gestionamos peticiones del mismo origen (index.html, app.js, styles.css).
  // Las llamadas a CDNs externos (jsPDF, html2canvas, Google Fonts)
  // y a las APIs (Azure, web3forms) pasan directamente sin interceptar.
  if (url.origin !== self.location.origin) return;

  // Ignorar peticiones que no son GET (no tienen sentido en caché)
  if (event.request.method !== 'GET') return;

  event.respondWith(
    fetch(event.request)
      .then(response => {
        // Red disponible: guardar copia fresca y devolver la respuesta
        if (response && response.status === 200) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Sin conexión: servir desde caché
        return caches.match(event.request);
      })
  );
});
