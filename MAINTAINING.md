# Maintaining This Portfolio Clone

## Change copy/content

- Edit `src/data/siteData.ts`.
- Main keys used by UI: `name`, `role`, `headline`, `resumeUrl`, `email`, `navLinks`, `socialLinks`, `skills`, `experiences`, `processSteps`, `featuredProjects`, `otherProjects`.

## Update experience tabs

- Add or edit items in `siteData.experiences`.
- `tabLabel` controls the left tab text.
- `title`, `company`, `date`, and `bullets` render in the active panel.

## Update projects

- Featured cards: `siteData.featuredProjects`.
- Table rows: `siteData.otherProjects`.

## Theme / animation tuning

- Global tokens + all section styles are in `src/styles/tailwind.css`.
- Interaction behavior is in `src/hooks/useSiteEffects.ts`.

## Resume file

- Replace `public/Resume_Ashot_Simonyan.pdf` with your real file.
- Keep `siteData.resumeUrl` in sync with that path.
