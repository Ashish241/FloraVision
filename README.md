# FloraVision

A React landing page for FloraVision, built with **Vite**, **TypeScript**, **Tailwind CSS v4**, and **React 19**.

## Prerequisites

- **Node.js** (LTS recommended)
- **npm** (comes with Node.js)

## Setup

Clone the repository and install dependencies:

```bash
npm install
```

## Run locally

Start the development server with hot reload:

```bash
npm run dev
```

Then open the URL shown in the terminal (usually `http://localhost:5173`).  
Because `vite.config.ts` sets `base` to `/floravision`, you may need to open:

`http://localhost:5173/floravision/`

## Other commands

| Command | Description |
|--------|-------------|
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Run TypeScript without emitting files |
| `npm run lint` | Run ESLint on the project |

## Project structure (overview)

- `src/App.tsx` — Root layout and section order
- `src/components/` — Reusable UI (navbar, cards, buttons, etc.)
- `src/sections/` — Page sections (trending, top selling, reviews, O₂ block)
- `src/config/` — Copy and navigation data
- `src/assets/` — Images, fonts, and the `@/assets` barrel
