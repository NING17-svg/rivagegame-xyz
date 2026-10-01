# Rivage V4 guide template trial

Date: 2026-10-01 (Asia/Shanghai). Template source: game-workflow `codex/v4-guide-template`, commit `385f01c7`. Site baseline: `2d1a625accd7eca2e00f0b160eea7530d1c76398`.

## Why this site

Launched September 28, already repaired at the rendering layer, and has real Parts 1–4/Chess Board content to organize. The two published Editor updates are complete. GSC September 28–29 shows 98 impressions, 1 click and average position 7.18; `/guides` has 54 impressions and 1 click. Queries include `rivage guide` and `rivage walkthrough`. Data are a short cold-start window, with September 29 incomplete. This selects a usable trial; it does not establish demand size or a V4 effect. See `docs/v4-gsc-baseline.json`.

## Page composition

- Home: short guide identity and two CTAs → specific puzzle/beginner entries → existing key facts → game information entries → retained background → related pages/FAQ.
- Guide hub: existing identity → direct puzzle entries → existing context and FAQs.
- Walkthrough: short answer → expandable contents → loop context → Parts 1–4 and Chess Board in 16 numbered steps → troubleshooting → retained overview → FAQ/related pages.
- Navigation: Guides and Game information groups, Demo and FAQ links. All targets already exist.

## Visual direction

Retain the game's paper/ink theme: paper `#F4EFE6`, page surface `#FAF6EE`, ink `#1A2730`, guide blue `#2D5F87`, rule `#C9C0A8`, warning orange `#D9622E`. Keep the existing serif headings and sans-serif body. A solid background and restrained borders make the answer easier to scan; six-entry grids use three columns on desktop and one on narrow screens. No new art, official logo or game facts are introduced.

## Migration boundaries and acceptance

All 16 routes, SEO titles/descriptions, existing FAQ references/schema, ads and analytics configurations are retained. Home H1 and navigation/CTA roles intentionally change and are recorded in CONTENT_INDEX.md. Each existing chapter answer sentence is transferred unchanged into numbered steps. Earlier detailed Quick Answer is retained in the walkthrough overview. Duplicate Quick Answer prefixes in two other pages are shown once rather than twice; extra scope notes remain.

Local acceptance covers the full site's `verify` chain, content conservation and browser behavior. Desktop home entries reach the matching chapter anchor; the mobile contents opens and reaches Part 4 with no horizontal page overflow. Reading tests inspect the actual exported prose, steps and callouts. They do not establish factual accuracy, answer completeness, indexing, engagement or revenue.

Production completion separately requires the same Git commit on main, a matching successful Cloudflare Git build, and public read-back of home, guide hub and walkthrough. Local build success alone is not production completion.
