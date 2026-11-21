# Office AI Guide (Astro v2)

Practical how-to guides, playbooks, and a copyable prompt library for **Claude**, **Grok Bot**, and **ChatGPT**—built for business owners and office teams adopting AI at work.

## Quick start

```bash
npm install
npm run dev
```

Build & preview:

```bash
npm run build
npm run preview -- --host 0.0.0.0 --port 4321
```

## Rebrand in one file

Edit `src/config/site.ts` to change:

- Site name & tagline
- Domain URL
- Navigation links
- Newsletter form action / copy

Tool accent colors live in `src/styles/global.css` (`--color-claude`, `--color-grok`, `--color-chatgpt`).

## Add a new Markdown guide

1. Create a file in `src/content/guides/your-slug.md`
2. Include frontmatter that matches the schema in `src/content.config.ts`:

```md
---
title: Your guide title
summary: One or two sentences.
tool: Claude # Claude | Grok Bot | ChatGPT | Multi-Tool
department: Operations # Operations | Sales & Client Comms | Finance & Admin | Leadership & Strategy
difficulty: Beginner # Beginner | Intermediate
timeToComplete: 20–30 min
publishedDate: 2026-11-05
featured: false
---

## Why this matters
...
```

3. Include at least one fenced prompt block and a **Team Safety & Privacy Note** section.
4. Run `npm run build` to validate the schema.

## Prompt library

Editable prompts live in `src/data/prompts.ts`. The `/prompts` page filters by tool and department client-side.

## Deploy to Cloudflare Pages

1. Connect this repository and choose the **Astro** framework preset.
2. Build command: `npm run build`
3. Output directory: `dist`
4. Node.js version: `22.23.4` (pinned in `.nvmrc`; `package.json` `engines` requires `>=22.23.4`). Cloudflare Pages reads `.nvmrc` when choosing the Node version.

### Vercel

1. Import the repository
2. Framework preset: Astro
3. Build command: `npm run build`
4. Output directory: `dist`

Update `site` in `astro.config.mjs` and `url` in `src/config/site.ts` to your production domain before launch.

## Project map

```
src/
  config/site.ts          # brand + nav + newsletter
  content.config.ts       # guides collection schema
  content/guides/*.md     # playbooks
  data/prompts.ts         # prompt library
  components/             # UI building blocks
  layouts/BaseLayout.astro
  pages/                  # routes + rss.xml + robots.txt
```
