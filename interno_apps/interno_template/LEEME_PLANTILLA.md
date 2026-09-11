# Plantilla: cómo añadir una app nueva a Savian Apps

Esta carpeta (`interno_template/`) es un ejemplo completo y funcional que
puedes copiar tal cual cuando desarrollemos una herramienta web nueva.
Ahora mismo NO aparece en el hub porque no está listada en
`interno_apps.json` — es solo la plantilla.

## Pasos para dar de alta "Mi App Nueva"

1. **Duplica esta carpeta.**
   `interno_apps/interno_template/` → `interno_apps/interno_miappnueva/`

2. **Genera los iconos** a partir del logo de la nueva app (necesitas
   Pillow: `pip install pillow`):

   ```
   python3 ../../interno_scripts/interno_generar_iconos.py \
       /ruta/al/logo_mi_app_nueva.png \
       . \
       --bg "#0FA3A4"
   ```

   (ejecútalo estando dentro de `interno_apps/interno_miappnueva/`; el
   `--bg` es el color de fondo que se usa si el logo tiene transparencia).
   Esto sustituye los iconos de ejemplo por los de la app real.

3. **Edita `interno_manifest.json`** de esta carpeta: cambia `name`,
   `short_name`, `description` y `theme_color`.

4. **Edita `interno_index.html`** de esta carpeta: dentro del
   `<script>`, cambia la constante `APP_URL` por la URL real de la
   nueva app. También puedes ajustar el texto `{name}`/`{short_name}`
   que aparece en el `<title>` y en los textos visibles si los copiaste
   de otra app.

5. **Añade la app al hub**: abre `interno_apps.json` (en la raíz) y
   añade un bloque nuevo al array `apps`, por ejemplo:

   ```json
   {
     "id": "miappnueva",
     "name": "Mi App Nueva",
     "shortName": "MiApp",
     "description": "Qué hace esta herramienta, en una frase.",
     "url": "https://miappnueva.savian.ai/",
     "themeColor": "#0FA3A4",
     "cardIcon": "interno_assets/interno_miappnueva-card.png",
     "installPath": "interno_apps/interno_miappnueva/interno_index.html"
   }
   ```

   El `cardIcon` es la imagen pequeña que se ve dentro de la tarjeta del
   hub — copia el logo a `interno_assets/interno_miappnueva-card.png`
   (256x256 aprox. va bien).

Con esto, la tarjeta nueva aparece sola en `interno_index.html` (se
generan solas desde `interno_apps.json`, no hay que tocar ese archivo),
con su botón "Abrir" y su botón "Descargar" ya funcionando: al pulsar
Descargar, el usuario llega a esta mini-página, que le deja instalar
"Mi App Nueva" con su propio icono en el escritorio o la pantalla de
inicio, tanto en Android como en iPhone.

## Por qué existe esta carpeta y no basta con `interno_apps.json`

El nombre, el icono y el color de un acceso instalado en el escritorio
o la pantalla de inicio los define el navegador a partir de un
`manifest.json` propio de esa página — no se puede generar "al vuelo"
de forma fiable (sobre todo en iPhone). Por eso cada app necesita su
propia carpeta con su propio `interno_manifest.json` e iconos, aunque
sea una copia de esta plantilla con los datos cambiados.
