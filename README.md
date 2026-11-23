# Sempera Health — Website

Marketing site for Sempera Health (semperahealth.com). **Frontend only** — there is no backend or
telehealth partner yet.

## Stack

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · pnpm · Vercel

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm lint
pnpm typecheck
pnpm build
```

## Project layout

```
src/
  app/                 layout (fonts, metadata, header/footer) + homepage
  components/
    layout/            Header (mobile menu), Footer
    sections/          One file per homepage section
    ui.tsx             Container, Eyebrow, ButtonLink, TextLink
    icons.tsx, Logo.tsx
  lib/site.ts          ALL homepage copy, prices, links and image paths
public/images/         Optimized photography (served via next/image)
docs/design/           Approved design screenshots for reference
```

Most copy and link changes only need `src/lib/site.ts`.

## Design tokens (`src/app/globals.css`)

| Token        | Value     | Use                                                    |
| ------------ | --------- | ------------------------------------------------------ |
| `navy`       | `#143159` | Brand color — headings and key text on light sections  |
| `navy-deep`  | `#0b1f45` | Dark section backgrounds (matches the designs)          |
| `teal-600`   | `#14807b` | Buttons, eyebrows, links (4.77:1 on white — WCAG AA)    |
| `teal`       | `#20a39e` | Decorative only (icons, rings, timeline)                |
| `aqua`       | `#3fc9c2` | Eyebrows on dark backgrounds                            |
| `cream`      | `#f7f3ec` | Soft section background                                 |

Fonts: Source Serif 4 (headings) and DM Sans (body), self-hosted via `next/font`.

## Still needed

- **Program card photos** (5): add to `public/images/` and set `image` / `imageAlt` per program in `site.ts`.
  Until then each card shows a soft gradient.
- **Hero video** (optional): add an optimized MP4 to `public/media/` and set `hero.video`.
  It only plays on tablet/desktop for users without reduced-motion; the photo stays as poster/fallback.
- **Official logo file** to replace the interim SVG in `components/Logo.tsx`.
- **Diagnostics photo** is cropped from the design screenshot. Swap in the original for sharper output.
- **Partner contact**: `links.partner` is a placeholder `mailto:` — confirm the address or build a partner form.
- **Claims to verify with the clinical partner before launch**: prices, "Licensed across all 50 states",
  "Board-certified…", "compounding pharmacies… shipping nationwide".

## Future backend / partner integration

No partner has been chosen. When one is:

- Every "Get Started" CTA reads `links.getStarted` in `site.ts` — that's the single swap point.
- Partner API keys must stay server-side (Route Handlers / Server Actions), in env vars **without** a
  `NEXT_PUBLIC_` prefix. Never commit `.env*` files (already git-ignored).
- When adding a hosted checkout or any third-party script, allow-list its origin in the CSP in `next.config.ts`.

## Security

`next.config.ts` sets a Content-Security-Policy, HSTS, `X-Frame-Options: DENY`, `nosniff`,
a strict Referrer-Policy and a locked-down Permissions-Policy on every route.
