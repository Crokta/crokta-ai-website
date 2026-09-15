# Crokta AI — marketing website

Public site for Crokta AI (`crokta.ai`). Next.js App Router, TypeScript, Tailwind CSS v4, pnpm.

```bash
pnpm install
pnpm dev      # http://localhost:3000
pnpm build && pnpm start
pnpm lint
```

## Layout

- `src/app/` — routes: `/`, `/product`, `/hardware`, `/pricing`, `/partners`, `/trust`, `/contact`,
  plus `sitemap.ts`, `robots.ts`, `icon.svg`, `opengraph-image.tsx` and the `/api/pilot-request` handler.
- `src/components/` — nav, footer, hero visual, WhatsApp alert mock, offline timeline, sections, form.
- `src/lib/content.ts` — all marketing copy that is data (detectors, steps, pricing, FAQ, tiers, segments).
- `src/lib/site.ts` — site name, URL, contact email, primary nav.

## Copy rules

Copy is derived from `docs/product/prd-summary.md` and `docs/design/`. Performance figures are the PRD's
design targets and are labelled as such on the page. Do not claim customer counts, certifications or
detector availability that the plans in `docs/plans/` do not support. The ethics commitments on `/trust`
mirror `docs/design/05-privacy-biometrics-and-ethics.md` and are not negotiable marketing copy.

## SEO

- `src/lib/seo.ts` — `pageMetadata()` builds title, description, canonical, Open Graph, Twitter and robots for a
  route; JSON-LD builders for Organization, WebSite, SoftwareApplication, WebPage, FAQPage, BreadcrumbList.
- `src/lib/og.tsx` — shared Open Graph image renderer; each route has `opengraph-image.tsx` and `twitter-image.tsx`.
- `src/app/sitemap.ts`, `robots.ts`, `manifest.ts` — bump a page's `lastModified` in the sitemap when its content changes.
- `public/llms.txt` — concise product summary for AI crawlers.
- `next.config.ts` — security headers and cache headers for generated images.
- Set `NEXT_PUBLIC_SITE_URL` in production so canonicals and the sitemap point at the real domain.

## Form delivery

`/api/pilot-request` validates the form and forwards it to `PILOT_WEBHOOK_URL` when set (see `.env.example`).
Without it, requests are logged to the server console only.
