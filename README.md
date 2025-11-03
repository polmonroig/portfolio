# Pol Company Portfolio

A personal portfolio site built with Next.js (App Router), React, TypeScript, and Tailwind CSS. The site is configured for static export and Firebase Hosting.

Last updated: 2025-10-30 18:53 (local)

---

## Overview

- Next.js 15 App Router (`app/` directory) with React 19 and TypeScript
- Tailwind CSS v4 via PostCSS
- Static export enabled (`output: 'export'`) and build output to `build/`
- Firebase Hosting configured to serve the static build
- Custom fonts via `next/font` and Google Fonts
- Basic navigation and pages: Home, About, Projects, Blog, Contact

---

## Requirements

- Node.js 18.18+ (20+ recommended)
- npm (project uses `package-lock.json`)
- Firebase CLI (optional, for deployment): `npm i -g firebase-tools`

---

## Setup

Install dependencies:

```bash
npm install
```

Start the development server (http://localhost:3000):

```bash
npm run dev
```

Build a production static export (outputs to `build/`):

```bash
npm run build
```

Preview/serve production:

- This project uses static export, so the output is plain HTML/CSS/JS in `build/`.
- You can serve it with any static server, for example:

```bash
npx serve build
```

Note: `npm run start` runs `next start` (Node server), which is not used when `output: 'export'` is enabled. Prefer serving the `build/` folder statically.

---

## Scripts

Defined in `package.json`:

- `dev`: `next dev --turbopack` — start dev server with Turbopack
- `build`: `next build --turbopack` — build and statically export to `build/`
- `start`: `next start` — Node server (not applicable with static export); use a static server instead

---

## Entry Points and Routing

- `app/layout.tsx` — root layout (sets fonts and wraps all pages; injects Umami analytics script)
- `app/projects.tsx` — home page
- `app/about/projects.tsx` — About
- `app/projects/projects.tsx` — Projects
- `app/blog/projects.tsx` — Blog (internal landing; external blog link also used in header)
- `app/contact/projects.tsx` — Contact
- `app/body.tsx` — client component for header/footer/loading screen and analytics helper
- `public/` — static assets (e.g., `logo-white-bg-transparent.webp`)

Global styles and config:

- `app/globals.css` — global Tailwind styles (imported in `app/layout.tsx`)
- `postcss.config.mjs` — enables Tailwind CSS v4 via `@tailwindcss/postcss`
- `next.config.ts` — `distDir: "build"`, `output: 'export'`
- `tsconfig.json` — TypeScript config (path alias `@/*` → project root)

---

## Environment Variables

No environment variables are currently referenced in the codebase.

- Analytics: An Umami script is embedded with a fixed `data-website-id` in `app/body.tsx`.
  - TODO: Consider moving this ID to an env var like `NEXT_PUBLIC_UMAMI_WEBSITE_ID` and reading it in the component.
- If adding runtime configuration, prefer `NEXT_PUBLIC_*` for client-exposed values.

---

## Testing and Quality

- No tests, linters, or formatters are configured in this repository.
  - TODO: Add testing (e.g., Playwright/Cypress for e2e, or Jest/RTL for unit tests)
  - TODO: Add linting (`eslint`) and formatting (`prettier`)

---

## Deployment

Firebase Hosting is configured to serve the `build/` directory (see `firebase.json`). Typical flow:

1. Build the static site:
   ```bash
   npm run build
   ```
2. Initialize Firebase hosting (first time only):
   ```bash
   firebase login
   firebase init hosting
   ```
   - public directory: `build`
   - configure as a single-page app: No (static export includes routes)
3. Deploy:
   ```bash
   firebase deploy --only hosting
   ```

Notes:
- TODO: Set/confirm the Firebase project ID (`firebase use <project-id>`).
- Any static hosting (GitHub Pages, Netlify, Vercel static, S3+CloudFront, etc.) can serve the `build/` directory.

---

## Project Structure

```
.
├─ app/
│  ├─ layout.tsx           # Root layout
│  ├─ projects.tsx             # Home page
│  ├─ body.tsx             # App shell (header/footer/loading/analytics)
│  ├─ about/
│  │  └─ projects.tsx
│  ├─ projects/
│  │  └─ projects.tsx
│  ├─ blog/
│  │  └─ projects.tsx
│  └─ contact/
│     └─ projects.tsx
├─ public/                 # Static assets
├─ next.config.ts          # Next.js config (static export to build/)
├─ postcss.config.mjs      # Tailwind CSS v4 via PostCSS
├─ tsconfig.json           # TypeScript config
├─ package.json            # Scripts and deps
├─ package-lock.json
├─ firebase.json           # Firebase Hosting config
└─ README.md
```

---

## Resources

- Next.js docs: https://nextjs.org/docs
- Learn Next.js: https://nextjs.org/learn
- Tailwind CSS v4: https://tailwindcss.com
- Firebase Hosting: https://firebase.google.com/docs/hosting

---

## License

No license file is present in this repository.
- TODO: Add a `LICENSE` file (e.g., MIT) and update this section accordingly.
