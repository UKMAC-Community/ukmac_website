# UKMAC Website

Interactive public website for the Union of Kampuchea Modern Agricultural Community (UKMAC), migrated from Vite to the Next.js App Router.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Checks

```bash
npm run lint
npm run build
npm audit
```

## Project structure

- `app/` contains the Next.js route, metadata, fonts, and global Tailwind theme.
- `components/` contains the landing page and interactive sections.
- `lib/data.ts` contains the website's static content and regional data.
- `public/images/` contains the local agricultural photography.

The contact form currently preserves the original prototype behavior: it validates in the browser and displays a generated registration reference, but does not send or store submissions.
