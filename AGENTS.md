# orbita-ui Agent Guide

## Monorepo Structure

- Root: `@tecnologias-orbita/orbita-ui` (private, npm workspaces)
- Package: `orbita-ui-react/` → `@tecnologias-orbita/orbita-ui-react`

## Commands

| Action | Command |
|--------|---------|
| Build React lib | `npm -w orbita-ui-react run build` |
| Dev (watch) | `npm run ui-react:dev` |
| Install deps | `npm i --legacy-peer-deps` (required for peer dep conflicts) |
| Publish | `npm -w orbita-ui-react publish` (auto on push to main via CI) |

## Tech Stack

- React 19, TypeScript 6, TailwindCSS v4
- Rollup (CJS + ESM + .d.ts output)
- ESLint 10 (flat config) with React plugin

## CI/CD

- Workflow: `.github/workflows/npm-publish-github-packages.yml`
- On push to `main`: install → test → build → publish to GitHub Packages
- Requires `GITHUB_TOKEN` with `packages:write` permission
- Registry: `https://npm.pkg.github.com/` (scope `@tecnologias-orbita`)

## Key Files

- `orbita-ui-react/src/index.ts` — public exports (Separator, Btn, Navbar, Footer, Sidebar)
- `orbita-ui-react/rollup.config.js` — dual CJS/ESM bundle + types
- `orbita-ui-react/tsconfig.json` — strict, bundler resolution, React JSX
- `orbita-ui-react/tailwind.config.ts` — content from `src/**/*.{ts,tsx}`

## Documentation Website

- Location: `./documentation`
- Stack: Vite + React + TypeScript
- Content: Markdown files rendered via `react-markdown`
- Dev: `cd documentation && npm run dev`
- Build: `cd documentation && npm run build`

## Known Quirks

- `--legacy-peer-deps` required for install (peer dep version conflicts)
- No test suite implemented (`npm test` echoes error)
- Private package; consumers need `.npmrc` with GitHub Packages registry + token
- Tailwind v4 uses new config format (no `tailwind.config.js` required beyond content)