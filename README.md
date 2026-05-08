# Cerrajería y Ferretería San Manuel

Sitio estático listo para publicar en GitHub Pages.

## Stack
- HTML + CSS + JavaScript (sin backend, sin base de datos).
- Formularios/CTAs que derivan a WhatsApp.

## Correr localmente
```bash
python3 -m http.server 4173
```
Abrir `http://localhost:4173`.

## Deploy en GitHub Pages
1. Subir archivos al repo.
2. Ir a **Settings → Pages**.
3. Elegir **Deploy from a branch**.
4. Seleccionar rama (`gh-pages`) y carpeta (`/root`).

### Deploy automático a `gh-pages`
Este repo incluye el workflow `.github/workflows/deploy-gh-pages.yml`, que en cada `push` a `main` publica automáticamente el sitio en la rama `gh-pages`.

## URLs que tenés que editar antes de publicar
Reemplazar `https://TU_USUARIO.github.io/TU_REPO/` en:
- `index.html` (`canonical`, `og:url`, JSON-LD)
- `robots.txt`
- `sitemap.xml`

## Comandos npm (opcional si migrás a Vite)
```bash
npm install
npm run dev
npm run build
npm run preview
```

## Nota
Sitio informativo. Consultar stock, precios, servicios y promociones vigentes.
