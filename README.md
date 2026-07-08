# ericredulfin.com

Personal/corporate landing page for Eric M. Redulfin, CEO of TNC Group of Companies. A single-page site built with Vue 3, Vue Router, and Tailwind CSS, bundled with Vite.

## Tech Stack

- [Vue 3](https://vuejs.org/)
- [Vue Router](https://router.vuejs.org/) (hash mode)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vite](https://vitejs.dev/)

## Prerequisites

- Node.js 20+ and npm — for local development or building
- Docker — only needed if you want to run the containerized build

## Running Locally (Node/npm)

```bash
npm install
npm run dev
```

Vite will start a dev server (by default at `http://localhost:5173`) with hot module reload.

Other useful scripts:

```bash
npm run build    # production build, output goes to dist/
npm run preview  # serve the production build locally for a final check
```

## Running via Docker

The included `Dockerfile` builds the app and serves the static output with nginx.

```bash
docker build -t ericredulfin .
docker run --rm -p 8080:80 --name ericredulfin ericredulfin
```

Then open `http://localhost:8080`.

Stop the container with `Ctrl+C`, or from another terminal:

```bash
docker stop ericredulfin
```
