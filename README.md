# Omer Gottlieb — Personal Portfolio

A premium light-mode glassmorphism portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion. Designed as a static export so it can be deployed to GitHub Pages, Vercel, Netlify, or any static host.

## Tech stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **Icons:** lucide-react
- **Motion:** Framer Motion
- **Output:** Static export (`output: "export"`)

## Local development

```bash
npm install
npm run dev
```

Open <http://localhost:3000>.

## Production build

```bash
npm run build
```

The static site is emitted to `./out`.

## Deploying to GitHub Pages

A GitHub Actions workflow at `.github/workflows/deploy.yml` builds and deploys on every push to `main`. To enable it:

1. Push the repository to GitHub.
2. In your repo, open **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Push to `main` — the workflow will build and publish.

The workflow auto-detects whether your repo is a **user page** (`<user>.github.io`, served at the root) or a **project page** (any other repo name, served at `/<repo>/`) and configures `basePath` accordingly.

> Note: this repo is currently named `omer_gottlieb.github.io` under the user `omergot5`, so it deploys as a project page at `https://omergot5.github.io/omer_gottlieb.github.io/`. If you rename the repo to `omergot5.github.io`, it will deploy at the root `https://omergot5.github.io/` automatically.

To build locally for a project page deploy, set the env var:

```bash
NEXT_PUBLIC_BASE_PATH=/omer_gottlieb.github.io npm run build
```

## Deploying to Vercel

Push to a Git provider and import the project into Vercel. No additional configuration required — leave `NEXT_PUBLIC_BASE_PATH` unset.

## Project structure

```
app/                # App Router entry (layout, page, globals)
components/         # UI components (Hero, Navbar, GlassCard, ...)
lib/                # Typed CV data
public/             # Static assets (favicon, .nojekyll)
.github/workflows/  # GH Pages deployment
```

## Accessibility

- Semantic HTML5 landmarks (`header`, `nav`, `main`, `section`, `footer`).
- `aria-label` on all interactive elements.
- WCAG AA color contrast for body text against glass surfaces.
- `prefers-reduced-motion` honored.
- Visible focus rings on keyboard navigation.

## Editing CV content

All copy lives in [`lib/cv.ts`](./lib/cv.ts) as a strictly-typed data module. Update fields there to change what the page renders — components consume the same types.
