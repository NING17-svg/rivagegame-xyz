# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline. Localized versions keep the same
`translationKey`, use their configured locale prefix, and must appear in canonical,
hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | Rivage release date and Steam hub | Find the Rivage launch entry point | Release Date / Browse Guides / Steam Store | Hub | Routes US English search users into Rivage coverage. |
| `/release-date` | `src/data/pages/page_release_date.ts` | Guide | Rivage release date | Confirm the Rivage Steam launch date | Platforms / FAQ | Supporting hub | Tied to Steam store page for AppID 4094660. |
| `/platforms` | `src/data/pages/page_platforms.ts` | Guide | Rivage platforms | Check Rivage console and PC platform status | Release Date / FAQ | Supporting hub | Flags PS5/Xbox/Switch/Deck status as unconfirmed. |
| `/system-requirements` | `src/data/pages/page_system_requirements.ts` | Guide | Rivage PC system requirements | Check Rivage PC spec status | Platforms / FAQ | Supporting | Notes that store page has not published spec rows. |
| `/demo` | `src/data/pages/page_demo.ts` | Guide | Rivage demo | Confirm Rivage demo status | Release Date / FAQ | Supporting | Standalone Rivage Demo on Steam (AppID 4465080) since April 16, 2026; saves do not carry over. |
| `/guides` | `src/data/pages/page_guides_hub.ts` | Guide | Rivage guides | Browse Rivage beginner, walkthrough, progression guides | Beginner Guide / Walkthrough | Hub | Card-grid hub shell. |
| `/guides/walkthrough` | `src/data/pages/page_walkthrough.ts` | Guide | Rivage walkthrough | Read the Parts 1-4 plus Chess Board endgame walkthrough | Beginner Guide / Gameplay | Supporting | Anchor sections per Part plus Chess Board endgame with randomized-code caveat. |
| `/guides/beginner` | `src/data/pages/page_beginner_guide.ts` | Guide | Rivage beginner guide | Read first-session Rivage systems | Walkthrough / Gameplay | Supporting | Anchored to Steam store page genre tags. |
| `/gameplay` | `src/data/pages/page_gameplay_overview.ts` | Guide | Rivage gameplay | Read Rivage genre and core loop summary | Guides / FAQ | Supporting | Steam store description is the only source. |
| `/trailer` | `src/data/pages/page_trailer_and_media.ts` | Guide | Rivage trailer | Locate official Rivage trailer and gameplay footage | Release Date / FAQ | Supporting | Steam store page + Steam Community hub. |
| `/faq` | `src/data/pages/site-pages.ts` | Guide | Rivage FAQ | Get short answers | Release Info / Contact | Answer hub | FAQ schema enabled. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about Rivage pre-launch hub | Trust and editorial policy | Contact | Trust | Explain unofficial status and sourcing rules. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact Rivage hub | Corrections and source updates | About | Trust | Contact channel pending. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Keep unofficial disclaimer clear. |
| `/wiki-archive` | `src/data/pages/wiki-pages.ts` | Guide | Rivage reference index | Reference index of Rivage coverage pages | Release Date / Platforms | Hub | Reserved route used by the template fixture. |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: not used for Rivage (no entity families configured).
- Final route inventory: `npm run routes:manifest`.
- Secondary-locale routes use the prefix configured in `src/data/site.ts`; the primary locale remains on root paths.

## Content Clusters

- Launch facts: `/release-date`, `/platforms`, `/demo`, `/system-requirements`, `/trailer`
- Official facts and safe guide structure: `/guides`, `/guides/walkthrough`, `/guides/beginner`, `/gameplay`
- Evergreen hub and trust: `/`, `/wiki-archive`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage should link to the most current high-demand pages: release date, platforms, guides, gameplay, demo, system requirements.
- Guides hub should link to beginner guide, walkthrough, gameplay, release date.
- Release Date should link to platforms, demo, FAQ, official Steam sources.
- FAQ should include all current high-demand answer pages.

## Open Questions

- Rivage PS5, Xbox, and Nintendo Switch release status — unannounced as of 2026-09-29.
- Rivage PC minimum and recommended system requirements — not published on the store page as of 2026-09-29.
- Rivage Steam Deck verification status — unconfirmed as of 2026-09-29.