## 2026-11-22 — Detail pages: TCS hero, curtain, Let&apos;s talk form

- **Services / AI Solutions / Industries** detail: removed `BreadcrumbBar` strip (second nav). Hero is full-bleed image + gradient, breadcrumb trail on hero, headline/summary from data; **Let&apos;s talk** → topic contact routes (same as prior Get in touch / `PageCta`). **`DetailPageCurtain`** + `StickyHero` scroll-over reveal (md+). No inline form under hero.

## 2026-11-22 — Nav `#000000` / expanded `#1E2222`

- Default bar: **`#000000`**, links **`#FFFFFF`**, Contact CTA unchanged. When a mega/dropdown is open, bar + panel switch to **`#1E2222`** (200ms transition). Mobile drawer: `#000000`.

## 2026-11-22 — TCS-style charcoal navbar + mega panels (superseded)

## 2026-11-22 — Approved light corporate navbar palette (superseded)

- Bar/dropdowns/mobile drawer: `#F0F4F6`, border `#DCE5EA`, shadow `0 4px 18px rgba(7,19,31,0.08)`. Links `#172B3A` → hover/active `#078BCB`. CTA `#087FC1` / `#FFFFFF`. Tokens in `src/data/navTheme.ts` (`NAV_LIGHT`).

## 2026-11-22 — Light nav bar `#ECF1F2` (superseded)

- Navbar + desktop mega / simple drop panels: `bg-[#ECF1F2]` (was `#FFFFFF`).

## 2026-11-22 — Curtain reveal fix + page surface `#F6F8F9`

- **White gap / hero scroll-away:** `StickyHero` no longer re-gates `md` (parent only); hero keeps `min-h-[calc(100svh-var(--nav-h))]` in curtain mode so it cannot collapse. Sticky uses `top-0` (pins under fixed nav like TCS). `<main>` uses `overflow-x-clip` so sticky isn’t broken by `overflow-x-hidden`.
- **`--color-surface-0`** → `#f6f8f9` (matches `surface-50`); navbar / mega-menus stay **`#FFFFFF`**.

## 2026-11-22 — Homepage hero curtain reveal (TCS-style)

- **`StickyHero`** (`src/components/layout/StickyHero.tsx`): `sticky` + `top: var(--nav-h)` + `height: calc(100svh - var(--nav-h))`, `z-0`, md+ only; disabled for `<768px` and `prefers-reduced-motion` (normal scroll).
- **`HomeHeroCurtain`**: wraps hero + rest of home; post-hero stack is `relative z-10 bg-surface-0` with top edge `shadow-[0_-12px_40px_rgba(11,20,36,0.18)]`. `useScroll` / `useTransform` on hero progress: `translateY` 0→−40px, opacity 1→0.4, scale 1→0.97; GhostFibers `paused` when progress ≥ 0.95 (no remount).
- **Sticky ancestors:** navbar stays `fixed z-50`; layout `pt-[var(--nav-h)]`. `<main>` keeps `overflow-x-hidden` (document scrollport); no transform on `PageTransition` opacity-only. Hero section `overflow-hidden` is inside the sticky box only.

## 2026-11-22 — Fixed navbar pinning (light bar)

- **Cause:** `position: sticky` on the header inside `MainLayout`’s `overflow-x-hidden` flex wrapper — sticky is confined/broken by the overflow ancestor, so the bar scrolled away.
- Navbar is now **`fixed inset-x-0 top-0 z-50`**; layout shell uses **`pt-[var(--nav-h)]`** once; horizontal clip moved to `<main>`. Light bar: solid `#FFFFFF`, `#E1E8F2` border; `scrollY > 8` adds `0 4px 24px rgba(11,20,36,0.10)` (200ms). Mega-menus: white + border + shadow under the bar.

## 2026-11-22 — TCS-style solid navbar (earlier)

- `NAV_THEME` (`light`): navy links, `#2878F0` Contact; `--nav-h` 64/76px; logo `logo-new.png.png`; hero offsets and scroll anchors per `--nav-h`.

## 2026-11-22 — Homepage hero: copy, layout, fibers-only

- Hero background is **only** navy `#0B1424` + GhostFibers (`HeroFibersLayer` unchanged); homepage video/poster removed (`public/videos/hero.mp4`, `src/config/heroMedia.ts`, `src/data/hero.ts`).
- Bondist-style left-aligned block: eyebrow pill, exact headline (`Smarter Enterprise.` in electric blue), senior description, CTAs → `/services` and `/contact`; dual rotating tagline rows per BRIEF (no `docs/reference/index.html` in repo).
- Contact banner `media` variant now uses bundled `src/assets/hero.png` (no shared video asset).

## 2026-11-18 — Design tokens & primitives (v0.1)

- Theme anchored on **#081d29** with restrained teal accents (`accent-500/600`), light surfaces, and dual **light/dark** tone props on primitives.
- Typography: **Sora** (headings) + **Inter** (body) via `@fontsource-variable`, wired through `src/styles/globals.css`.
- Added `/design` review route showcasing buttons, cards, badges, type scale, color swatches, `Reveal`, and SVG wordmark.

## 2026-11-18 — Content model (data layer)

- Typed `src/data` modules for 9 services, 6 solutions, 8 industries, 4 **DRAFT** insights, and `company` (vision, mission, values, approach, contact placeholders).
- Cross-links use stable slugs; industry **exampleScenarios** are flagged `illustrative: true` per compliance guardrails.
- Copy written for enterprise readers—no client logos, stats, or delivered-work claims.

## 2026-11-18 — App shell & navigation

- `MainLayout` with sticky navbar (transparent on home hero → solid on scroll), data-driven mega-menus, and mobile full-screen drawer with accordions.
- Footer, `Seo`, skip link, `ScrollToTop`, and subtle `PageTransition` (respects reduced motion); stub routes wired for all BRIEF §3 pages plus privacy/terms/404; `/design` kept outside layout.

## 2026-11-18 — Shell polish (contrast & nav)

- Headings inherit on `.dark-surface`; hero/footer copy uses light text. Navbar/footer/`Container` share content width; mega-menus render full-bleed under header with intro column + truncated grid.
- Solid nav links use navy + electric-blue active/hover underlines; dev-only form endpoint note removed from UI (documented in README).

## 2026-11-18 — Homepage

- Ten content sections on `/`: hero (full-viewport navy + network SVG), intro, interactive services, alternating solution rows, industry tiles, why, scroll timeline, tech matrix, sample insights, closing CTA.
- Layouts differ by section; motion is fade-up, hover, and a scroll-drawn timeline, all reduced when `prefers-reduced-motion` is set. No invented metrics.

## 2026-11-18 — Homepage v2 (hero, services, solutions)

- Hero is a full-bleed `/videos/hero.mp4` with navy overlay and white type. Reduced motion or a failed video shows `/videos/hero-poster.jpg` only. The node SVG is gone.
- Services are nine equal cards (icon, summary, detail link). Solutions keep alternating rows, each with a distinct line illustration and the first practical use case from `src/data`.

## 2026-11-18 — Homepage v2 (Carevie, industries, why)

- **Carevie** spotlight follows AI Solutions; `/carevie` page uses `src/data/carevie.ts`, marketing image `carevie.png`, and labelled UI placeholders. Non-live features use **Coming soon** badges.
- **Industries** bento grid: featured wide tiles, dot texture, hover lift, sector gradients, arrow CTA.
- **Why Zeldapro** pairs company values with a numbered expectation panel and About link.
- Verified on dev (`/` section order, `/carevie`); `npm run lint` + `npm run build` pass. No `src/assets/carevie/` screenshots yet—spotlight and product page use labelled UI placeholders.

## 2026-11-18 — Homepage v2 (how we work, tech, insights, contact)

- **How we work:** `ApproachTimeline` uses `company.approachSteps` (Discover → Evolve). Five-step **horizontal** grid on `lg+`, **vertical** timeline on smaller viewports—scroll-draw animation removed for clarity.
- **Technology capabilities:** Simplified to eight BRIEF-aligned domain chips in `src/data/aiDomains.ts` (`TechMatrix` flex-wrap, no dense icon matrix).
- **Insights:** One featured (7-col) + two supporting cards; category and read time on all; “All insights” visible on mobile.
- **Contact CTA:** Inset panel on textured navy with **Talk to our team** + **Explore services**; `MainLayout` gets `overflow-x-hidden` to curb horizontal scroll on narrow viewports.

## 2026-11-19 — Homepage v3 (hero & navbar, §1)

- **Hero (Bondist-inspired):** `min-h-[90vh]`, layered navy overlay on existing hero video/poster; left-aligned pill badge “AI-Powered Engineering”; headline/mission/CTA copy unchanged—last two headline words in `electric-400`; primary CTA solid electric blue + arrow, secondary outlined.
- **Hero stats strip:** Counts from `services`, `solutions`, `industries`, `company.approachSteps` with divider—labels Core services, AI solution areas, Industries, 5-step Delivery approach.
- **Navbar (Infosys-inspired):** Fixed overlay on home until ~80px scroll, then floating white pill (blur/shadow); non-home uses pill immediately; mega-menus, mobile drawer, and Contact CTA preserved; `MainLayout` top padding on inner pages for fixed header clearance.

## 2026-11-19 — Homepage v4 (hero cover, compact nav, transparent logo)

- Hero media is `absolute inset-0` with `object-cover` so the video/poster fills the section with no side gaps; navy overlay unchanged. Copy, badge, buttons, and stats row unchanged.
- Navbar State A stays a full-width dark glass bar (logo left, links centre, Contact right). After ~80px it becomes a shorter frosted white pill (`py-1`, smaller type and logo) via Framer Motion border-radius animation.
- Logo asset is `src/assets/logo/logo-transparent.png` (white field removed, colours unchanged). Dark surfaces use a frosted white pill (nav State A, footer, mobile drawer); State B shows the mark directly on the light bar.

## 2026-11-19 — Homepage v4 (overlay preview & services catalog)

- Overlay items show `ItemPreview` (icon + existing summary) on hover/focus for fine pointers, positioned inside the panel and viewport. Touch keeps the summary in the stacked list and navigates on tap.
- `/services` uses reusable `InteractiveCatalog`: navy grid/network backdrop, numbered editorial rows, existing service summaries, Lucide icons. Desktop hover/focus preview; mobile shows the summary under each title.

## 2026-11-19 — Services catalog layout & dark nav offset

- `InteractiveCatalog` rework: cinematic layered hero (gradient, ice grid, network lines, top-right radial), desktop 45/55 split with sticky glass preview (icon, summary, three `capabilities` chips, Explore service), mobile tap accordion, contact CTA band. Props: `items`, `basePath`.
- Dark index pages (`/services`, `/ai-solutions`, `/industries`): no `main` top padding; navbar transparent wrapper, home-style State A over dark hero until ~80px scroll. Logo default height ~44px (`h-11`).

## 2026-11-19 — Marketing detail pages (BRIEF §3)

- Shared **EnterprisePageHero**, **ContentSection**, **PageCta**, **RelatedLinks**, and detail templates for services, solutions, and industries (data-driven sections, cross-links via `relatedContent.ts`).
- **About** from `company.ts`: vision, mission, values, approach lifecycle, why section; no invented metrics.
- **Insights** listing with category filter; article pages marked **Sample** / draft. **Privacy** and **Terms** as clearly labelled legal drafts.

## 2026-11-19 — Homepage v3 (category cards & overlay, §2–3)

- Replaced home `ServicesExplorer`, `SolutionsRows`, and `IndustriesGrid` with **`CategoryCards`**: three Infosys-style tall cards with `src/assets/home` photography (`services.avif`, `solutions.webp`, `industries.webp`), uniform 5:4 image frame, image-only hover zoom, gradient fallback on load error; overlapping white panels, hover lift/dim on fine pointer only.
- Removed SVG/CSS **`CategoryCardArt`** from the three home cards (Vite static imports, `800×500` attrs, lazy load). Verified identical image frames at 360 / 768 / 1440 px; no horizontal overflow; console clean on home.

## 2026-11-19 — Contact hub & topic forms (Infosys-style structure, Zeldapro brand)

- **`/contact`**: rounded hero banner (home poster/video or gradient), floating transparent nav, breadcrumb, centred “How can we help you?”, topic grid (`contactTopics.ts`) with ice-blue underlined links (4 / 2 / 1 columns).
- **`/contact/:topic`**: gradient banner, topic title + **`ContactForm`** (validation, honeypot, toggles, service preselect from `?service=`, POST `VITE_FORM_ENDPOINT` with topic in payload, success/error). Invalid slug → 404.
- Layout/nav: contact routes drop main top padding and use dark-hero navbar like home. Service/solution/industry CTAs deep-link to relevant topics.

## 2026-11-19 — Software & Innovation pages + homepage links

- Added `docs/reference/software.html` and `innovation.html` (reference copy; replace with senior files if wording updates), data modules, **`/software`** and **`/innovation`** pages (dark hero, breadcrumbs, capability grid / innovation path, “Start a conversation” CTA).
- Homepage **`SoftwareInnovationLinks`** after category cards (11 underlined navy links, Reveal, anchor targets for software capabilities).
- Routes + footer links; navbar **Software & Innovation** simple two-link dropdown + mobile accordion; nav link sizing tuned for 1024–1440 px.
- **TCS-style overlay:** `CategoryOverlay` dialog—navy panel, ice-blue links, 3/2/1 column grid from `services` / `solutions` / `industries` data; Esc, backdrop, focus trap, scroll lock, return focus to card. Legacy section components retained for other routes.

## 2026-11-20 — Hero landing layout & favicon

- **Favicon:** `public/favicon.png` from approved `logo-transparent.png`; `index.html` links PNG + apple-touch-icon (replaces default Vite SVG).
- **Hero:** Full viewport (`h-svh`), centred headline only; mission, pill badge, CTA buttons, and stats strip removed; looping fade taglines below headline (`AI-Powered Engineering` + former stat labels); staggered initial fade-in via Framer Motion (respects reduced motion).

## 2026-11-20 — Services index (Infosys-style panel)

- `/services` body only: 280px dark band + tech backdrop; `#F5F7FA` page; white card overlapping ~80px. Reusable `CategoryPanelList` (`title`, `items`, `basePath`) — 5+4 split, `#EEF3FC` panels, hover/focus summary popup on desktop; real links to `/services/:slug`. Removed `InteractiveCatalog` from this page.

## 2026-11-20 — Industry detail (Capgemini-inspired layout)

- `/industries/:slug`: `DetailHero`, `BreadcrumbBar`, `SectionNav`, `DetailLinkTiles`; hero images via `src/assets/industries/<slug>.webp` glob; Get in touch → `/contact/industry-enquiry`. Reusable detail primitives for future service/solution templates.
- Industry detail: hero full-bleed under fixed navbar (no main top padding); `darkHeroIndex` + breadcrumb row below nav like Capgemini; placeholder/image to viewport top.

## 2026-11-20 — Pinned navbar + wordmark

- New wordmark: `src/assets/logo/zeldapro-wordmark.jpg`. Navbar fixed `top-0` (no scroll pill / position shift); navy frosted bar with light links on all routes.

## 2026-11-21 — Solution detail: trim content sections

- AI solution detail: removed on-page **Problems it solves**, **Use cases**, and **Business benefits** (data unchanged in `solutions.ts`); section nav updated.

## 2026-11-21 — Solution detail: Relevant industries peek carousel

- `RelatedCarousel` `variant="peek"`: `#EAF0FA`, 66/86% slides, scale/blur inactive, no wrap, industry hero glob, click-to-focus. Default variant unchanged for service Related AI solutions.

## 2026-11-21 — Relevant services offerings panel (industry + solution detail)

- `RelevantServicesOfferingsPanel`: Infosys-style left tabs, hero visual, numbered capabilities from `services.ts`, dual CTAs to service page and `/contact/request-for-services?service=<slug>`. Industry `relevant-services` + solution `related-services` only.

## 2026-11-20 — Service detail: Related AI solutions carousel

- `RelatedCarousel` on `/services/:slug` only: Infosys-style stacked slide, prev/next + keyboard/swipe, solution hero glob or icon placeholder, `#F5F7FA` band.
- Carousel: Infosys-style `#E4EAF2` rounded tray, white slide card + shadow; side peek strips removed per review.

## 2026-11-20 — Service & AI solution detail (industry-parity layout)

- `/services/:slug` and `/ai-solutions/:slug`: `DetailHero` + breadcrumb dropdowns + `SectionNav` + alternating `#fff` / `#F5F7FA` sections + `PageCta`. Hero images: `src/assets/services/<slug>.webp`, `src/assets/ai-solutions/<slug>.webp` (glob, placeholder if missing). Shared: `DetailSection`, `ChallengeList`, `IconCardGrid`, `ChipList`, `HowItWorksFlow`. Contact: `/contact/request-for-services?service=<slug>`, `/contact/ai-solutions-enquiry`. MainLayout dark-hero for service/solution detail URLs.

## 2026-11-20 — Navbar State A (catalog index + home)

- Restored full desktop row on dark-hero State A: Home, About Us, three megas, Software & Innovation, Insights, Contact Us (`lg+`). Cause of gap: prior trim left only megas + About; Contact and static links were removed from the `ul` / CTA slot.

## 2026-11-20 — AI Solutions & Industries index (panel layout)

- Extracted `PageHeaderBand` (`backgroundImage`); `CategoryIndexBand` wraps it for `/services` unchanged.
- `/ai-solutions` and `/industries` mirror services layout: header images under `src/assets/headers/`, 3+3 and 4+4 `CategoryPanelList`, links to detail slugs; row previews use `whatItIs` / first challenge from data.

## 2026-11-23 — Industry hero assets + hero overlay

- `industryHeroImages.ts`: multi-format glob (`jpg` / `jpeg` / `png` / `webp` / `avif`), slug resolution with format preference (jpeg → png → webp → avif); tolerant parse for misnamed `slug.jpg.<ext>` uploads until renamed to `slug.<ext>`.
- Legacy `.webp` for slugs with new JPEG assets moved to `old-assets/industries-backup/` (not deleted).
- Global `hero-section-overlay` (`::before` horizontal dark gradient) on `DetailHero` and `EnterprisePageHero` (not homepage `HeroSection`); `hero-primary-text` (white + text-shadow) on hero headlines and supporting copy for photo legibility.

## 2026-11-23 — AI solution hero assets (multi-format loader)

- `solutionHeroImages.ts`: same pattern as industries—glob `src/assets/ai-solutions/*.{jpg,jpeg,png,webp,avif}`, format priority, tolerant `slug.jpg.<ext>` parsing; missing files return `null` (no build break).
- Fix: hero files were under `src/assets/AI Solutions/` (not globs); copies placed in `src/assets/ai-solutions/`. `import.meta.glob` paths must be string literals (no `flatMap`).

## 2026-11-23 — Footer simplification

- Footer trimmed to brand column + **Company** (About, Insights, Contact), **Capabilities** (hub links to services / AI solutions / industries), and **Connect** (email, phone, site, social). Long per-item service/solution/industry lists removed; primary CTA **Talk to our experts**.

## 2026-11-23 — Nav trim, contact form contrast, homepage sections

- Navbar: removed **Home** and **Software & Innovation** (desktop + mobile); `/software` and `/innovation` routes unchanged.
- Homepage: removed **Why Zeldapro** block; Carevie spotlight drops secondary “AI-enabled products” link.
- Contact topic forms: white card + bordered fields on `bg-surface-100` for clearer separation from page background.
- **Technology capabilities** (`TechMatrix`): 4-column capability cards with icons, numbered labels, gradient accents, hover lift, and soft ambient background.

## 2026-11-23 — Service hero assets (multi-format loader)

- `serviceHeroImages.ts`: same pattern as industries and AI solutions—glob `src/assets/services/*.{jpg,jpeg,png,webp,avif}`, format priority, tolerant `slug.jpg.<ext>` parsing; missing files return `null` (no build break).