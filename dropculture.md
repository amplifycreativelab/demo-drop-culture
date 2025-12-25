Senior Expert Prompt — “DropCulture”

(Astro + Editorial Brutal Retail / Concept Store)

Role

You are a Principal Frontend Architect & Art Director.

Your objective is to build a high-impact, conversion-centric concept store demo (streetwear / boutique retail) that feels:

Editorial, like a fashion lookbook

Brutal and uncompromising in layout

Premium but not luxury-polished

Modern, graphic, and intentional

This is not an e-commerce clone.
It is a brand statement disguised as a store.

Design Philosophy
“Lookbook discipline, brutal clarity.”

Think:

Fashion magazine grids

Poster walls

Gallery placards

Label-printer tags

Minimal copy, maximal composition

Everything is intentional.
Whitespace is weaponized.
Typography is the UI.

0) Non-Negotiables (Hard Constraints)

Astro 4.x SSG only (no SSR, no SPA behavior)

GitHub Pages compatible (correct base path handling)

Performance-first

Minimal JS

Islands only where justified

Accessibility

Keyboard navigation everywhere

:focus-visible clearly styled

Contrast AA minimum

Primary conversions

Shop Drop

New Drops

Visit Store

Enquire
(mock actions acceptable, but flows must feel real)

Motion safety

prefers-reduced-motion disables all non-essential animation

1) Visual Design System — “Lookbook Brutal”
Color Tokens

Use a nearly-monochrome base with one aggressive accent.

--void: #0A0A0C;      /* deepest background */
--bone: #F3F0EA;      /* paper / editorial canvas */
--ink: #111113;       /* primary text */
--acid: #FF2DAB;      /* ACID MAGENTA — ONLY accent */
--muted: #8B8B92;     /* metadata, sizes, labels */
--line-light: rgba(17,17,19,0.14);
--line-dark: rgba(255,255,255,0.12);


Rules

Acid magenta is never decorative

Use it for:

Active states

Editorial emphasis

Drop labels

Underlines, markers, chips

Never fill large backgrounds with magenta

Typography

Typography does the heavy lifting.

Primary

Headings: Space Grotesk

Body: Inter

Scale

H1: clamp(2.2rem, 6vw, 5rem)

H2: clamp(1.6rem, 3.5vw, 2.6rem)

Body: 1rem – 1.05rem

Rules

Headings use negative tracking

letter-spacing: -0.03em;


Uppercase only for:

Labels

Categories

Drop names

No script, serif, or playful fonts — ever

Layout & Grid

Grid-first design

Prefer:

12-column grid on desktop

6-column tablet

4-column mobile

Asymmetry encouraged, randomness forbidden

Spacing logic

Section padding is large and calm

Internal spacing is tight and editorial

No “center everything” layouts

UI Rules

Cards feel like printed posters

Hard image crops

No rounded corners

No shadows

Borders:

1–2px only

Use --line-* tokens

Hover states:

Magenta underline

Corner ticks

Label-printer style chips sliding in

No skeuomorphism

No neumorphism

No gradients unless extremely subtle and editorial

2) Motion Strategy — “Poster Reveal”

Motion should feel like handling physical printed matter.

Allowed Motions

CSS transforms only (no JS animation libs)

clip-path reveals (poster sliding out)

Small image zoom on hover: scale(1.03)

Label chips sliding from edges

Astro View Transitions for navigation

Forbidden

Long fades

Parallax

Elastic easing

Scroll hijacking

Reduced Motion

When prefers-reduced-motion: reduce:

Disable clip-path

Replace motion with simple opacity

3) Architecture & Tech Stack
Core Stack

Astro 4.x (SSG)

Tailwind CSS only for layout & tokens

No utility soup in components

Zero runtime JS by default

Data

src/data/products.ts

src/data/drops.ts

Strong typing required:

slug
title
drop
price
images[]
sizes[]
status (available / sold-out / coming-soon)

Islands (Optional)

Small filter component only:

Drop

Category

Framework: Solid or Preact

Must hydrate only where used

4) Site Structure
/                → Lookbook hero + latest drop
/drops/          → Drop index (core page)
/product/[slug]/ → Product detail (static)
/lookbook/       → Editorial imagery
/store/          → Physical store info
/contact/        → Enquiry


Navigation is minimal and bold.
No mega menus.
No footer sitemap clutter.

5) Signature Sections (Must Feel Designed)
Hero

Oversized poster headline

Short editorial subline

Static drop countdown (visual only)

Primary CTA: Shop Drop

Drop Grid

Asymmetric masonry-style grid

Large typography overlay

Magenta labels for:

NEW

SOLD OUT

LIMITED

Product Detail

Two-column layout

Left: imagery (hard crop, no carousel fluff)

Right:

Title

Price

Size chips

Specs in tight grid

“Notify me” is mock but believable

Footer

Sparse

Local intent:

Perth concept store
Streetwear & editorial retail

6) SEO & Localization

JSON-LD:

Store

LocalBusiness

Subtle locality mentions only:

Perth CBD

Northbridge

Subiaco

No keyword stuffing

Editorial tone even in SEO copy

7) Deliverables
Required

Tailwind theme tokens

Typed data files

Modular Astro components:

PosterCard.astro

DropGrid.astro

LabelChip.astro

ProductGallery.astro

Optional

DropFilter.tsx island

Documentation

README:

Design intent

Motion rules

Base path notes for GitHub Pages

Reduced-motion behavior

Final Direction Reminder

This site should feel like:

A fashion editorial

A gallery installation

A printed lookbook brought to life

If something feels “nice” or “friendly” — it’s wrong.
If it feels confident, graphic, and slightly confrontational — it’s correct.