# Cerrajería y Ferretería San Manuel (sitio estático)

Landing page estática orientada a SEO local para **Necochea**. No usa backend, base de datos ni formularios del lado servidor.

## Ejecutar localmente

Como es un sitio estático podés abrir `index.html` directamente o usar un servidor local:

```bash
python3 -m http.server 4173
```

Luego abrir `http://localhost:4173`.

## Publicar en GitHub Pages

1. Subí este contenido al repositorio.
2. En **Settings → Pages** elegí:
   - Source: `Deploy from a branch`
   - Branch: `main` (o la rama deseada), carpeta `/root`.
3. Guardá y esperá el deploy.

## Si preferís workflow con npm (opcional)

Si querés usar los comandos `npm install`, `npm run dev`, `npm run build`, `npm run preview`, podés migrarlo a Vite con estos pasos:

```bash
npm create vite@latest san-manuel -- --template vanilla
cd san-manuel
npm install
npm run dev
npm run build
npm run preview
```

Luego copiá los archivos de este proyecto dentro de `src`/`public` según corresponda.

## Configuración SEO editable

Antes de publicar, reemplazá placeholders:
- `https://TU_USUARIO.github.io/TU_REPO/` en:
  - `index.html` (`canonical`, `og:url`, JSON-LD)
  - `robots.txt`
  - `sitemap.xml`

## Contacto integrado

- WhatsApp principal: `+54 9 2262 656656`
- Teléfono fijo: `02262 426671`
- Formulario visual: abre WhatsApp con mensaje prearmado (no guarda datos).

## Nota legal

Sitio informativo. Consultar stock, precios, servicios y promociones vigentes.
