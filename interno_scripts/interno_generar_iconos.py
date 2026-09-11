#!/usr/bin/env python3
"""
Genera el juego de iconos de una app de Savian Apps a partir de un único
logo cuadrado (idealmente 512x512 o más).

Uso:
    python3 interno_generar_iconos.py MI_LOGO.png CARPETA_DESTINO --bg "#0FA3A4"

Ejemplo real, para una app nueva llamada "interno_miappnueva":
    python3 interno_generar_iconos.py logo_nueva_app.png \
        ../interno_apps/interno_miappnueva --bg "#0FA3A4"

Esto crea, dentro de CARPETA_DESTINO:
    interno_icon-192.png
    interno_icon-512.png
    interno_icon-512-maskable.png   (con margen de seguridad para Android)
    interno_apple-touch-icon.png
    interno_favicon.png
    interno_favicon-32.png

Requiere Pillow:  pip install pillow
"""

import argparse
import os
import sys

try:
    from PIL import Image
except ImportError:
    sys.exit("Falta la librería Pillow. Instálala con: pip install pillow")


def hex_to_rgb(value):
    value = value.lstrip("#")
    return tuple(int(value[i:i + 2], 16) for i in (0, 2, 4))


def load_flat(path, bg_rgb):
    """Si el logo tiene transparencia, la aplana sobre bg_rgb."""
    im = Image.open(path).convert("RGBA")
    bg = Image.new("RGBA", im.size, bg_rgb + (255,))
    bg.alpha_composite(im)
    return bg.convert("RGB")


def make_maskable(im, bg_rgb, size, scale=0.78):
    """Deja un margen de seguridad alrededor del logo (requisito de los
    iconos 'maskable' de Android, que se recortan con formas distintas
    según el fabricante del teléfono)."""
    canvas = Image.new("RGB", im.size, bg_rgb)
    inner = int(im.size[0] * scale)
    small = im.resize((inner, inner), Image.LANCZOS)
    offset = ((im.size[0] - inner) // 2, (im.size[1] - inner) // 2)
    canvas.paste(small, offset)
    return canvas.resize((size, size), Image.LANCZOS)


def main():
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("logo", help="Ruta al logo de origen (PNG, cuadrado)")
    parser.add_argument("destino", help="Carpeta donde guardar los iconos (se crea si no existe)")
    parser.add_argument("--bg", default="#FFFFFF", help="Color de fondo si el logo tiene transparencia, en hex (por defecto blanco)")
    args = parser.parse_args()

    bg_rgb = hex_to_rgb(args.bg)
    os.makedirs(args.destino, exist_ok=True)

    flat = load_flat(args.logo, bg_rgb)

    flat.resize((192, 192), Image.LANCZOS).save(os.path.join(args.destino, "interno_icon-192.png"))
    flat.resize((512, 512), Image.LANCZOS).save(os.path.join(args.destino, "interno_icon-512.png"))
    make_maskable(flat, bg_rgb, 512).save(os.path.join(args.destino, "interno_icon-512-maskable.png"))
    flat.resize((180, 180), Image.LANCZOS).save(os.path.join(args.destino, "interno_apple-touch-icon.png"))
    flat.resize((64, 64), Image.LANCZOS).save(os.path.join(args.destino, "interno_favicon.png"))
    flat.resize((32, 32), Image.LANCZOS).save(os.path.join(args.destino, "interno_favicon-32.png"))

    print(f"Iconos generados en: {args.destino}")


if __name__ == "__main__":
    main()
