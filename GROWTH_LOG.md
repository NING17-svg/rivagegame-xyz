# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-10-01 - V4 guide template trial

- Baseline: repair commit `2d1a625accd7eca2e00f0b160eea7530d1c76398`; launched September 28. GSC property `sc-domain:rivagegame.xyz`, September 28–29: 98 impressions, 1 click; `/guides` has 54 impressions and 1 click. September 29 is marked incomplete by GSC. This is selection evidence, not proof of an improvement.
- UI: first homepage module links to five existing walkthrough sections and the beginner guide; grouped Guides/Game information navigation; existing paper/blue theme retained with a solid background; Markdown structure, compact content headers and mobile contents from V4.
- Page assembly: Parts 1–4 and Chess Board become 16 numbered steps using the exact earlier sentences. Guide hub gains direct puzzle entries. Home H1 and CTAs describe the guide task; SEO titles/descriptions, routes, chapter IDs, FAQs, ads, analytics and deployment settings stay intact.
- Content repair: removed duplicated summary prefixes in the beginner and gameplay modules; those sentences still appear in each page's Quick Answer, and extra scope text is retained.
- Verification: template/content/render integrity, static export, rendered SEO and reading checks; one-time conservation of guide answer sentences and page identity; browser checks of desktop task-card navigation and 390px mobile contents. The trial does not verify game facts again or establish a traffic/revenue effect.
- Affected public URLs: shared header/rendering across all 16 routes; content assembly changes on `/`, `/guides`, `/guides/walkthrough`, `/guides/beginner`, `/gameplay`. See `V4_TRIAL.md` and `docs/v4-gsc-baseline.json`.

## Change Log

### 2026-10-01 - The guides hub Quick Answer module reduced, and the page-type label unpublished

- Task: Stop the authoring pipeline's own page-type label from being published as a reader-facing fact, and remove the last Quick Answer module that repeated its page's Quick Answer.
- Copy changed: Eight pages listed "Page type: hub / guide / reference / explanation / status" as a Key Fact. That is the pipeline's label for the page, not a fact about Rivage, and it sat at the top of the fold above the real facts. It is removed. The remaining Key Facts on those pages (Source rule, Pre-launch framework, Demo entry, platform list, Structure, Genre tags, stage summaries, Last reviewed) are unchanged.
- Changed: `/guides` opened with a "Quick Answer" prose module whose body was the page's Quick Answer field plus one sentence the field did not carry -- that the hub promises no third-party Rivage wiki. The duplicated sentences are removed and the module is retitled "What this hub sources from", so the page keeps the one claim no sibling makes and no longer prints the same paragraph twice. The `puzzle-entries` entity-grid added by the V4 trial above is untouched and remains the hub's entry-point block.
- Interaction with the V4 trial: the same V4 commit had already replaced the duplicated modules on `/guides/beginner` and `/gameplay` with "What this guide covers" and "Scope of this overview", reaching the same conclusion by keeping the one non-duplicated sentence rather than deleting the module. Those two pages are left as that commit made them; this change is rebased on top of it, not applied over it.
- URLs affected: None. No title, H1, canonical, page type, keyword, CTA or internal-link role changed, so `CONTENT_INDEX.md` is not revised.
- Verification: `npm run verify` (typecheck, lint, template, content, IndexNow, static export, rendered SEO, reading checks for 16 pages / 16 sitemap URLs / 16 manifest routes) passes, the render-quality audit reports 0 findings across all 16 pages, and a sweep of the exported HTML finds no unrendered Markdown link and no "Page type" label.

### 2026-10-01 - Public page render-quality repair

- Task: Repair the homepage and inner pages so the first screen carries a positioning line, key facts and priority entry points, and so authoring-pipeline artifacts never reach a public page.
- Defects found: duplicated_quick_answer, internal_production_note (16 finding(s)) across 16 page(s).
- Files changed: `src/data/pages/*.ts` and `src/data/faq.ts` (fold and module data), `src/components/content/ModuleRenderer.tsx` (prose body now renders Markdown), `src/components/pages/ContentPage.tsx` (Quick Answer renders inline Markdown), `src/lib/markdown.tsx` (new minimal Markdown-to-React renderer, including tables), `src/styles/modules.css` (prose body and table rules), `scripts/validate-render-integrity.ts` (new regression), `package.json` (new `validate:render` step in the `verify` chain).
- URLs affected: None. Titles, H1s, canonicals, CTAs, page types and internal-link roles are unchanged, so `CONTENT_INDEX.md` is not revised.
- SEO/GEO changed: FAQ entries that previously existed only as a Markdown module are now real entries in `src/data/faq.ts` and render through the accessible FAQ block, so FAQPage schema coverage is no longer limited to the pre-existing entries. `hero.subtitle` is now a positioning line and `quickAnswer` is the concise answer, so the fold is a summary rather than a duplicate of the article.
- Copy changed: Reader copy no longer refers to the build-now brief, the game-check brief, the research cut-off date or the source-tier labels. Game facts, URLs, keyword intent, ad units and analytics are unchanged.
- Verification: `npm run verify` (typecheck, lint, template, content, render integrity, IndexNow tests, static export, rendered SEO) passes; a full-text scan of every exported page finds no raw heading markers, raw Markdown links, tables or bold markers, pipeline headings, research metadata or literal question/answer labels; a content-conservation check against the previous commit confirms no reader copy, page identity or SEO field was lost.


## 2026-10-01 — shared Worker deployment maintenance

User-authorized routing migration to `guide-pool-08` / Worker `moggedlooksmaxxordie-wiki`; source push is connected to the shared Cloudflare Git build via the repository deploy hook. Content and public URL identities are unchanged. Completion is tracked by the central group migration report and live source/version verification.
