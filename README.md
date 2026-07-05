# Zeyad Khaled — Portfolio

Next.js 15 / React 19 / TypeScript / Tailwind CSS / Framer Motion / GSAP / Lenis.

## Status

**Full site built — every section from the spec, real code, no placeholders:**
- Full project scaffold: config, folder structure, design tokens (`tailwind.config.ts`)
- Global styles, custom cursor, Lenis smooth-scroll provider
- `data/projects.ts` — single source of truth for all 4 real projects (Prime State, Lumina Dental, Savoré, Nexus AI), with real live-demo and GitHub links and your real uploaded screenshots
- Luxury loading screen (tuned for a fast, snappy feel — not a slow intro)
- Sticky glass navbar (hides on scroll down, reappears on scroll up)
- **Hero** — badge, editorial heading, magnetic buttons, animated stats, floating tech cards, trust badges, scroll indicator, floating "MacBook" showcase auto-cycling your 4 real project screenshots in a browser-chrome mockup
- **Featured Work** — alternating image/content rows per project, real tech badges, live-demo/GitHub/case-study buttons
- **Case study pages** at `/projects/[slug]` (statically generated for all 4 projects) — hero banner, overview, challenge/solution/features/results, image gallery with lightbox, CTA, prev/next navigation, full per-page SEO metadata
- **About** — storytelling intro + animated vertical timeline
- **Services** — 12 animated glass service cards
- **Tech Stack** — interactive orbiting animation around a Next.js center icon, with hover tooltips
- **Tools** — daily toolkit as an animated pill grid
- **GitHub** — server-rendered section that fetches your *live* GitHub profile + repos at build/request time (`lib/github.ts`), with a graceful static fallback to your real project data if the API is unreachable
- **Testimonials** — honest "coming soon" messaging (no fake reviews, per spec)
- **FAQ** — animated accordion
- **Contact** — copy-to-clipboard email, real links to GitHub/Fiverr/Contra, resume download, Hire Me mailto
- **Footer** — logo, nav, socials, back-to-top, copyright
- **SEO** — `app/robots.ts`, `app/sitemap.ts` (auto-generated from project data), and Person JSON-LD structured data in the root layout

Verified clean: `npm install`, `npx tsc --noEmit`, and `npx eslint .` all pass with zero errors.

**Still to add on your end:**
- `/public/resume.pdf`
- Additional gallery shots per project (each project's `gallery` array currently only has the one cover image)
- A real production domain to replace the placeholder `https://zeyadkhaled.dev` used in metadata, `robots.ts` and `sitemap.ts`

## Setup

```bash
npm install
npm run dev
```

## Assets

Real cover screenshots are now in place for all 4 projects:
- `/public/projects/prime-state/cover.png` ✅
- `/public/projects/lumina-dental/cover.png` ✅
- `/public/projects/savore/cover.png` ✅
- `/public/projects/nexus-ai/cover.png` ✅

Still needed:
- `/public/resume.pdf`
- Additional gallery shots per project (currently each project's `gallery` array only contains the one cover image — add more to `data/projects.ts` as you get them, e.g. properties grid, listing detail, mobile views)

Note: the cover PNGs are ~1.4–1.7MB each (marketing-style renders, not raw screenshots). Next's `<Image>` component will automatically serve optimized AVIF/WebP versions at runtime, but for best results consider compressing the source PNGs before final deploy.

## Note on "Clash Display"

Clash Display is a licensed Fontshare font, not distributable via `next/font/google`. This scaffold currently uses **Bricolage Grotesque** (a free, structurally similar editorial display font) as the heading font via `--font-clash`. If you own the Clash Display license, drop the `.woff2` files into `/public/fonts` and swap the loader in `app/layout.tsx` for `next/font/local` — every component already references the font through the `font-heading` Tailwind class, so nothing else needs to change.
