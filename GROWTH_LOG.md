# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### 2026-09-28 - Rivage pre-launch configuration

- Task: Configure the generated V3 template for Rivage (Steam AppID 4094660, planned release Sep 22, 2026) on `rivagegame.xyz`.
- Files changed: `src/data/site.ts`, `wrangler.jsonc`, `package.json`, `src/data/pages/*.ts` (10 content pages + trust pages + wiki fixture), `src/data/faq.ts` (31 FAQ items), `src/data/navigation.ts`, `src/lib/content.ts` helpers, `AGENTS.md`, `CONTENT_INDEX.md`, `public/indexnow-*.txt`.
- URLs affected: `/`, `/release-date`, `/platforms`, `/system-requirements`, `/demo`, `/guides`, `/guides/walkthrough`, `/guides/beginner`, `/gameplay`, `/trailer`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`, `/wiki-archive` (reserved fixture).
- Content changed: All page copy anchored to the Steam store page, SteamDB listing, and Steam Community hub as of 2026-09-22. Unannounced areas (PS5, Xbox, Switch, demo, system requirements, Steam Deck verification) are flagged rather than guessed.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted. Only `adsterra-integrator` may populate the six Adsterra unit values after registry activation.
- Verification: `npm run verify` (typecheck + lint + validate:template + validate:content + validate:indexnow + build + validate:rendered-seo) passed; V3 route contract validation passed; public-content-hygiene-check passed.

### 2026-09-28 - Adsterra six-unit integration

- Task: Populate the fixed six Adsterra units (Native Banner, Banner 728x90, Banner 468x60, Banner 320x50, Banner 160x600, Smartlink) for `rivagegame.xyz` after registry activation.
- Files changed: `src/data/ads.ts`.
- URLs affected: No URL or layout changes; only the previously empty six ad values were populated with real Adsterra code per the fixed-ad contract.
- Ad baseline: All six units are now populated and the shared `src/data/ads.ts` config drives them; no other ad components or page layouts were touched.
- Verification: `npm run verify` to be re-run after the change.
