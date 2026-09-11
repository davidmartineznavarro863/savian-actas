# Savian Apps

Lanzador único, instalable, con acceso a las herramientas internas de
Savian: **Tickets internos**, **JORNADA**, **Savian Guardian** y **Portal
Savian**. Cada herramienta tiene, dentro del hub, dos botones:

- **Abrir** → va directa a la herramienta, sin más (como un enlace normal).
- **Descargar** → lleva a una mini-página propia de esa herramienta desde
  la que el usuario puede crear un icono independiente en su escritorio o
  pantalla de inicio, **con el nombre y el logo de esa app en concreto**
  (no el de Savian Apps). Al abrir ese icono más adelante, entra
  directamente en la herramienta, a pantalla completa.

Todos los nombres de archivo llevan el prefijo `interno_` para que no
choquen con nada de lo que ya tengas en el repositorio.

## Estructura

```
interno_savian_apps/
├── interno_index.html          → pantalla del hub (las 4 tarjetas, Abrir/Descargar)
├── interno_manifest.json        → app instalable "Savian Apps" (el hub en sí)
├── interno_sw.js                 → service worker del hub
├── interno_apps.json             → ⭐ lista de apps que se muestran en el hub (edítalo para añadir/quitar)
├── interno_icons/                → iconos del hub (pantalla de inicio, favicon…)
├── interno_assets/               → logos usados dentro de las tarjetas del hub
├── interno_apps/
│   ├── interno_tickets/          → mini-lanzador instalable de Tickets internos
│   ├── interno_jornada/          → mini-lanzador instalable de JORNADA
│   ├── interno_guardian/         → mini-lanzador instalable de Savian Guardian
│   ├── interno_portal/           → mini-lanzador instalable de Portal Savian
│   └── interno_template/         → ⭐ EJEMPLO para dar de alta una app nueva (ver LEEME_PLANTILLA.md dentro)
└── interno_scripts/
    └── interno_generar_iconos.py → genera el juego de iconos de una app a partir de un logo
```

Cada carpeta dentro de `interno_apps/` es autosuficiente: tiene su propio
`interno_manifest.json`, sus propios iconos y su propio
`interno_index.html`, que es lo que hace que el sistema operativo pueda
instalarla como una app diferenciada, con su propio nombre y logo.

## Por qué hace falta una carpeta por app

Un navegador no deja que una página instale *otra* página distinta como
si fuera una app aparte con un solo clic — es una restricción de
seguridad de todos los navegadores, no algo que se pueda evitar con
código. Lo que sí puede hacer una página **propia** es declararse a sí
misma instalable, con su nombre y su icono. Por eso cada botón
"Descargar" no instala la herramienta externa directamente: lleva a una
mini-página nuestra (dentro de este mismo proyecto) que:

1. Si el usuario la abre desde el icono ya instalado → le manda
   automáticamente a la herramienta real, sin enseñar nada más.
2. Si la abre por primera vez (desde el botón "Descargar") → le explica
   cómo instalarla, con el nombre/logo de esa app concreta.

## Publicarlo

Es 100% estático (HTML/CSS/JS + JSON + imágenes), sin backend ni build.
Solo necesita **HTTPS** para poder instalarse (sin HTTPS no funciona
"Añadir a pantalla de inicio" ni el service worker). Súbelo tal cual,
como una carpeta más de tu repositorio, a GitHub Pages, Azure Static Web
Apps, Netlify, Vercel, o el hosting donde ya esté el resto de Savian.

## Cómo se instala (para los usuarios)

**Savian Apps (el hub completo):**
- Android/Chrome: al entrar aparece un aviso "Instalar Savian Apps" (o
  menú ⋮ → "Instalar aplicación").
- iPhone/Safari: compartir ⬆️ → "Añadir a pantalla de inicio".
- Ordenador (Chrome/Edge): icono de instalar en la barra de direcciones,
  o el mismo aviso que en Android.

**Cada app por separado ("Descargar" dentro de su tarjeta):**
- Lleva a la mini-página de esa app, que ofrece el mismo tipo de aviso
  (botón "Instalar" en Android/Chrome/escritorio, pasos de "Añadir a
  pantalla de inicio" en iPhone).
- Nota para escritorio: Safari de macOS no soporta instalar PWAs como
  Chrome/Edge, así que en Mac con Safari no aparecerá esa opción — sí
  funciona igual en iPhone/iPad con Safari.

## Cómo añadir una aplicación nueva

Resumen (todos los detalles están en
`interno_apps/interno_template/LEEME_PLANTILLA.md`):

1. Añade un bloque nuevo en `interno_apps.json` → la tarjeta aparece sola
   en el hub, con su botón "Abrir" ya funcionando.
2. Copia `interno_apps/interno_template/` a una carpeta nueva, genera sus
   iconos con `interno_scripts/interno_generar_iconos.py`, cambia la URL
   dentro de su `interno_index.html` y los datos de su
   `interno_manifest.json` → el botón "Descargar" de esa tarjeta ya deja
   instalarla con su propio icono.

## Cómo cambiar algo que ya existe

- **URL de una app:** en `interno_apps.json` (para el botón "Abrir" del
  hub) y en `interno_apps/interno_<app>/interno_index.html`, constante
  `APP_URL` (para el acceso instalado de esa app). Están separados a
  propósito para que la mini-página funcione sola, sin depender de una
  petición de red al abrirse.
- **Logos:** cambia los archivos en `interno_assets/` (tarjetas del hub) y
  regenera los de `interno_icons/` y de la carpeta de la app en
  `interno_apps/` con `interno_scripts/interno_generar_iconos.py`.
- **Nombre/colores del hub:** `interno_manifest.json` (raíz).
- **Nombre/colores de una app instalada por separado:**
  `interno_apps/interno_<app>/interno_manifest.json`.

## Aviso sobre el inicio de sesión

Cada herramienta conserva su propio login tal cual funciona hoy — el
lanzador no toca nada de eso, solo abre la URL real.

## Icono del hub

Se usa el logo que enviaste de **Portal Savian** (el cristal turquesa)
como icono de "Savian Apps" en sí, por ser el más parecido a una marca
general y no a un módulo concreto. Si prefieres otro, cámbialo en
`interno_icons/` (o regenera con `interno_generar_iconos.py`).
