# orbita-ui Agent Guide

## Monorepo Structure

- Root: `@tecnologias-orbita/orbita-ui` (private, npm workspaces)
- Package: `orbita-ui-react/` → `@tecnologias-orbita/orbita-ui-react`

## Commands

| Action | Command |
|--------|---------|
| Build React lib | `npm -w orbita-ui-react run build` (runs Rollup) |
| Dev (watch) | `npm run ui-react:dev` (Rollup --watch) |
| Install deps (root) | `npm i --legacy-peer-deps` (required for peer dep conflicts) |
| Install deps (docs) | `cd documentation && npm i --legacy-peer-deps` |
| Lint root | `npm run lint` (ESLint 10 flat config) |
| Build docs | `cd documentation && npm run build` (tsc -b && vite build) |
| Dev docs | `cd documentation && npm run dev` (Vite) |
| Preview docs | `cd documentation && npm run preview` (Vite preview) |
| Lint docs | `cd documentation && npm run lint` |
| Publish | `npm -w orbita-ui-react publish` (auto on push to main via CI) |

## Tech Stack

- **orbita-ui-react**: React 19, TypeScript 6, TailwindCSS v4, Rollup (CJS + ESM + .d.ts)
- **Documentation**: Vite 8, React 19, TypeScript 6, TailwindCSS v4, React Router v7
- **Linting**: ESLint 10 (flat config) with React plugin
- **Markdown**: vite-plugin-markdown for .md file processing

## CI/CD

- Workflow: `.github/workflows/npm-publish-github-packages.yml`
- Triggers: push to `main`, workflow_dispatch
- Jobs:
  1. `test` - install → test (currently echoes error)
  2. `publish-gpr` - install → build → publish to GitHub Packages
- Requires `GITHUB_TOKEN` with `packages:write` permission
- Registry: `https://npm.pkg.github.com/` (scope `@tecnologias-orbita`)

## Key Files - orbita-ui-react

- `src/index.ts` — public exports: `Separator`, `Btn`, `Navbar`, `Footer`, `Sidebar`
- `src/index.css` — Tailwind v4 styles + CSS variables, content config
- `rollup.config.js` — dual CJS/ESM bundle + types via rollup-plugin-dts
- `tsconfig.json` — strict, bundler moduleResolution, React JSX
- `tailwind.config.ts` — content from `src/**/*.{ts,tsx}`
- `src/components/`:
  - `common/Separator.tsx`
  - `buttons/Btn.tsx` (with variants, sizes, loading states)
  - `layout/Navbar.tsx`, `Footer.tsx`, `Sidebar.tsx` (with context)
  - `icons/burger.tsx`, `x.tsx`
- `src/contexts/NavbarContext.tsx` — responsive navbar state

## Key Files - Documentation (`./documentation`)

- `vite.config.ts` — Vite + React + Tailwind + vite-plugin-markdown + tsconfig paths
- `tsconfig.json` — project references to `tsconfig.app.json` + `tsconfig.node.json`
- `src/main.tsx` — entry point
- `src/App.tsx` — BrowserRouter, Navbar, Sidebar, routes
- `src/docs/Docs.router.tsx` — dynamic route matching via `useParams`
- `src/docs/docs.map.ts` — `DOCS_MAP` config for package/segment/page hierarchy
- `src/types/doc-map.d.ts` — `DocMapType` recursive type definition
- `src/utils/getDocRef.ts` — helpers for doc/error paths
- `src/index.css` — imports orbita-ui-react dist styles via `@source`
- `src/pages/` — `Home.page.tsx`, `404.page.tsx`
- `src/docs/orbita-ui-react/` — package docs (page.tsx, installation/, getting-started/, components/)

## Routing Architecture (Documentation)

```
/
  HomePage
/docs/:pkg?/:segment?/:page?
  DocsRouter → matches DOCS_MAP[pkg].childMap[segment].childMap[page]
```

Sidebar navigation auto-generated from `DOCS_MAP` keys.

## Known Quirks

- `--legacy-peer-deps` required for all installs (peer dep version conflicts: React 19 vs peer React ^18, Tailwind v4 vs peer ^3)
- No test suite implemented (`npm test` echoes error)
- Private package; consumers need `.npmrc` with GitHub Packages registry + token
- Tailwind v4 uses new config format (no `tailwind.config.js` required beyond content)
- Documentation pages currently return `null` (placeholder components)
- `vite.config.ts` uses `tsconfigPaths: true` for `@/` path aliases
- orbita-ui-react exports CSS via `dist/` - docs import from `../../node_modules/@tecnologias-orbita/orbita-ui-react/dist`