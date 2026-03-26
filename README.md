# Bark for Life — Clark County, WA

Informational [Next.js](https://nextjs.org) site for the **Bark for Life** team: dahlia tuber cancer benefit sale (April 4, 2026), main walk (August 15, 2026), ways to contribute (links only — no payments on this site), and the full tuber variety list.

## Repository

**GitHub:** [github.com/natebrantley/barkforlife](https://github.com/natebrantley/barkforlife)

```bash
git clone https://github.com/natebrantley/barkforlife.git
cd barkforlife
npm install
```

Default branch: use `main` for new work (rename from `master` if your local repo still uses it: `git branch -m main`).

## Local development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run lint
```

### Environment

| Variable | Purpose |
| -------- | ------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL (no trailing slash), used for `metadataBase` and Open Graph. Example: `https://your-domain.vercel.app` |

Copy `.env.example` to `.env.local` and set values as needed.

### Regenerating the tuber list

Variety data is generated from the project plan file:

```bash
npm run gen-tubers
```

Requires the plan at `%USERPROFILE%\.cursor\plans\bark_for_life_next.js_6388717b.plan.md` (adjust `scripts/gen-tubers.mjs` if you move the source of truth).

## Deploy on Vercel

1. Push this repository to GitHub (see remote above).
2. In [Vercel](https://vercel.com), **Add New Project** → **Import** `natebrantley/barkforlife`.
3. Framework preset: **Next.js** (auto-detected). Deploy.
4. Under **Settings → Environment Variables**, set `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://barkforlife.vercel.app` or your custom domain). Redeploy so metadata and share previews use the correct base URL.

## Project layout

- `src/site.config.ts` — event copy, links, hashtags.
- `src/data/tubers.ts` — tuber varieties (generated).
- `src/app/opengraph-image.tsx` — 1200×630 share image for Open Graph / Twitter.
