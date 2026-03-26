# Bark for Life — Clark County, WA

Informational [Next.js](https://nextjs.org) site for **Bark for Life** (Clark County) — a **dog-themed** Relay For Life / **American Cancer Society** fundraising team. It promotes a **one-day dahlia tuber sale** (April 4, 2026) run by a team member (**all but $1 per tuber** to charity), the **main Bark for Life walk** (August 15, 2026), and ways to help. Copy and stock photos lean on **cute dogs + pretty flowers**; add dahlia images in `src/data/stock-images.ts` when ready.

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
- `src/data/stock-images.ts` — paths under `public/img/dogs/` (dog stock) and `public/img/dahlias/` (dahlia stock); optional `dahliaPhotos` toggles the second column beside dogs in tuber sections.
- `public/img/BFL-V_RGB.webp` — Bark for Life / ACS logo (transparent). Subfolders: `dogs/`, `dahlias/`.
- Open Graph / Twitter preview image: dahlia photo from `siteConfig.socialShareImage` (`public/img/dahlias/…`), wired in `layout.tsx` via `metadataBase` so shared links resolve to absolute URLs.
