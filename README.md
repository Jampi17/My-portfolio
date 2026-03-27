# React Portfolio (Vite)

Este proyecto migra el portafolio a React usando Vite.

## Requisitos
- Node.js 18+

## Scripts
- `npm install` — instala dependencias
- `npm run dev` — inicia servidor de desarrollo
- `npm run build` — build de producción
- `npm run preview` — vista previa del build

## Estructura
- `src/contexts` — Tema e i18n
- `src/components` — Header, Sidebar, Content, Footer

## Inicio rápido
```bash
cd react-portfolio
npm install
npm run dev
```

## Publicar en GitHub Pages (rama main)
Si publicas desde la rama `main`, GitHub Pages debe apuntar a la carpeta `docs`.

1. Genera los archivos listos para Pages:

```bash
npm run deploy:main
```

2. En GitHub ve a **Settings > Pages** y configura:
	- **Source**: Deploy from a branch
	- **Branch**: `main`
	- **Folder**: `/docs`

Esto evita el error 404 al publicar en Pages desde `main`.
