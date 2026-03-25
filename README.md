# Arcline

Arcline is a custom Astro site for Brady Stoffel's WLED lighting installation business in Bloomington, Minnesota.

## What is in the site

- Lead-focused home page
- Examples page for real installations
- About page for Brady and the install process
- Beginner-friendly WLED explainer
- Light styles page focused on appearance and use case
- Article section reserved for future install writeups and guides

## Local development

Run from the project root:

```bash
npm install
npm run dev
```

## Key commands

| Command          | Action                                                       |
| :--------------- | :----------------------------------------------------------- |
| `npm run dev`    | Start the Astro dev server                                   |
| `npm run build`  | Build the production site                                    |
| `npm run check`  | Run the production build, TypeScript, and Cloudflare dry run |
| `npm run deploy` | Deploy with Wrangler                                         |

## Content notes

- Shared business data lives in `src/data/site.ts`
- Public images and videos live in `public/`
- The blog content collection remains available for future articles, but starter filler posts were removed

## Deployment

This project is configured for Cloudflare Workers using Astro's Cloudflare adapter and Wrangler.
