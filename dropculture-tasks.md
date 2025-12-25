# Development Tasks - DropCulture (Editorial Brutal Retail)

Source docs:

- `DropCulture/dropculture.md`
- Reference format: `cafe-restaurant-demo/Demo 1 - Cafe - Restaurant - Tasks.md`

How to use:

- Mark items complete by changing `- [ ]` to `- [x]`.
- Work top-to-bottom; later phases depend on earlier setup.

## Phase 0 - Project Decisions

- [ ] Confirm GitHub Pages repo name for Astro `base` (must be `"/<repo>/"`).
- [ ] Confirm primary conversions and route labels: Shop Drop, New Drops, Visit Store, Enquire.
- [ ] Confirm store placeholders (Perth, WA) + suburb mentions allowed (Perth CBD, Northbridge, Subiaco).
- [ ] Confirm product taxonomy: drop, category, sizes, and status (available / sold-out / coming-soon).
- [ ] Confirm whether the optional Drop/Category filter island is included (and whether it's Solid or Preact).

## Phase 1 - Astro Setup (SSG + GitHub Pages)

- [ ] Create Astro 4 project (static output / SSG).
- [ ] Configure `astro.config.mjs` with `site` + `base` placeholders for GitHub Pages.
- [ ] Enable View Transitions globally.
- [ ] Ensure internal links and asset URLs work under the base path (no hard-coded `/`).
- [ ] Add/verify scripts: `dev`, `build`, `preview`.
- [ ] Install/configure Tailwind for Astro (layout + tokens only).
- [ ] Add `src/assets/` placeholders (products, lookbook, store, OG image).

## Phase 2 - Design System (Lookbook Brutal)

- [ ] Add tokens to Tailwind (or CSS variables) for:
  - [ ] Void `#0A0A0C`, Bone `#F3F0EA`, Ink `#111113`, Muted `#8B8B92`
  - [ ] Acid Magenta `#FF2DAB` (only accent)
  - [ ] Line tokens: `rgba(17,17,19,0.14)` (light) and `rgba(255,255,255,0.12)` (dark)
- [ ] Enforce acid magenta rules:
  - [ ] Use only for active states, editorial emphasis, drop labels, underlines/markers/chips
  - [ ] Never use as large background fills
- [ ] Typography:
  - [ ] Load Space Grotesk (headings) + Inter (body)
  - [ ] Headings use `letter-spacing: -0.03em`
  - [ ] Type scale: H1 `clamp(2.2rem, 6vw, 5rem)`, H2 `clamp(1.6rem, 3.5vw, 2.6rem)`, body `1rem-1.05rem`
  - [ ] Uppercase only for labels/categories/drop names
- [ ] Grid system (layout-first):
  - [ ] 12 columns desktop, 6 tablet, 4 mobile
  - [ ] Asymmetry encouraged, randomness forbidden
  - [ ] Section padding large; internal spacing tight; avoid "center everything" layouts
- [ ] UI rules:
  - [ ] No rounded corners, no shadows, no skeuomorphism/neumorphism
  - [ ] Use 1-2px lines only (from line tokens)
  - [ ] Avoid gradients; if used, keep extremely subtle and editorial
  - [ ] Hover language: magenta underlines, corner ticks, label-printer chips sliding in
- [ ] Implement focus-visible styles (clear and consistent).
- [ ] Implement `prefers-reduced-motion` baseline (disable non-essential motion).

## Phase 3 - Core Layout & Shared Components

- [ ] Create `src/layouts/MainLayout.astro` with:
  - [ ] Skip link
  - [ ] Minimal header/nav (no mega menus)
  - [ ] Sparse footer (no sitemap clutter)
  - [ ] SEO meta slots/placeholders (title/description/canonical/OG/Twitter)
- [ ] Create a small component class layer to avoid "utility soup":
  - [ ] Use Tailwind for layout/token utilities; keep component styling in named classes (`@layer components` or CSS).
- [ ] Build required components:
  - [ ] `PosterCard.astro` (printed poster product card; hard crop, no rounding/shadow)
  - [ ] `DropGrid.astro` (asymmetric/masonry-style grid with bold type overlays)
  - [ ] `LabelChip.astro` (label-printer chip; magenta accents)
  - [ ] `ProductGallery.astro` (editorial imagery module)
- [ ] Optional: `DropFilter.tsx` island (Solid/Preact) for Drop/Category filtering (hydrate only where used).

## Phase 4 - Content & Data Layer (Typed)

- [ ] Create `src/data/products.ts` (strongly typed) with required fields:
  - [ ] `slug`, `title`, `drop`, `price`, `images[]`, `sizes[]`, `status` (available/sold-out/coming-soon)
  - [ ] Optional fields as needed: `category`, `materials`, `specs[]`, `tags[]`
- [ ] Create `src/data/drops.ts` (typed) with fields needed for:
  - [ ] latest drop selection
  - [ ] static countdown display (release date or label)
  - [ ] drop descriptions/hero copy
- [ ] Add realistic sample content (enough to populate grids + lookbook + details).
- [ ] Generate static routes for `/product/[slug]/` from product data.

## Phase 5 - Pages (IA + Conversion)

### Home (`src/pages/index.astro`)

- [ ] Hero: oversized poster headline + short editorial subline.
- [ ] Add static drop countdown module (visual only).
- [ ] Primary CTA: Shop Drop.
- [ ] Feature the latest drop (preview grid driven by `drops.ts`).

### Drops (`src/pages/drops/index.astro`)

- [ ] Drop index (core): render drops from `drops.ts`.
- [ ] Render asymmetric Drop Grid with large typography overlays.
- [ ] Render magenta labels for NEW / SOLD OUT / LIMITED (driven by product status/tags).
- [ ] If `DropFilter.tsx` exists, wire it to filter by Drop/Category.

### Product Detail (`src/pages/product/[slug].astro`)

- [ ] Two-column layout:
  - [ ] Left: imagery (hard crop; avoid carousel fluff)
  - [ ] Right: title, price, size chips, specs in a tight grid, Notify me mock action
- [ ] Related items (same drop/category).

### Lookbook (`src/pages/lookbook/index.astro`)

- [ ] Editorial imagery grid (poster crops) with strong captions/labels and proper alt text.

### Store (`src/pages/store/index.astro`)

- [ ] Physical store info: location + hours + map placeholder.
- [ ] Mention Perth CBD, Northbridge, Subiaco naturally (no keyword stuffing).

### Contact (`src/pages/contact/index.astro`)

- [ ] Enquiry form UI (non-functional OK) with accessible labels.
- [ ] Reinforce Visit Store + Drop links.

## Phase 6 - Motion & View Transitions

- [ ] Implement poster-reveal scroll motion (CSS transforms + clip-path unmask; no JS animation libs).
- [ ] Product hover: image zoom to `scale(1.03)` + label chip slides in.
- [ ] View Transitions are snappy (avoid long crossfades).
- [ ] Avoid forbidden motion patterns: long fades, parallax, elastic easing, scroll hijacking.
- [ ] Reduced motion behavior:
  - [ ] Disable clip-path
  - [ ] Replace with simple opacity (and minimal translate if needed)

## Phase 7 - SEO & Localization (Perth)

- [ ] Set per-page titles + meta descriptions (editorial tone, conversion-safe).
- [ ] Canonical URLs respect `site` + `base`.
- [ ] Add OpenGraph + Twitter meta with placeholder OG image.
- [ ] Inject JSON-LD `Store` + `LocalBusiness` (Perth, WA, AU placeholders).

## Phase 8 - Accessibility & UX Checks

- [ ] One H1 per page; logical heading order.
- [ ] Keyboard navigation works across nav, grids, and forms.
- [ ] Focus-visible is obvious and consistent.
- [ ] Contrast meets WCAG AA minimum.
- [ ] Touch targets are large enough on mobile.

## Phase 9 - Performance, QA & Deployment

- [ ] Keep runtime JS near-zero; add islands only when justified.
- [ ] Use `astro:assets` for responsive images (lazy-load, correct sizing).
- [ ] Verify build works under GitHub Pages base path (no broken links/assets).
- [ ] Add `README.md` covering:
  - [ ] design intent + layout rules
  - [ ] motion rules + reduced motion behavior
  - [ ] GitHub Pages base path notes

## Optional / Bonus

- [ ] Add a print stylesheet for product specs (clean, editorial).
