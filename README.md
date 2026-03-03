# Ashot Simonyan FE Clone (Vite + React + TypeScript)

Structured React implementation that reproduces the UI, colors, spacing, and interaction behavior of:
`https://ashot-simonyan-fe.netlify.app/`

## Run

```bash
npm install
npm run dev
npm run build
npm run preview
npm run lint
npm run test
```

## Notes

- Source of truth for copy/content: `src/data/siteData.ts`
- Global visual styles and animations: `src/styles/tailwind.css`
- Main interaction logic (scroll/nav/hero/contact effects): `src/hooks/useSiteEffects.ts`
- Section components: `src/components/sections/*`
- Layout shell (loader/nav/sidebars/footer): `src/components/layout/*`

## Quality

- Lint: `npm run lint`
- Tests: `npm run test`
- Build: `npm run build`

All three pass in this workspace.
