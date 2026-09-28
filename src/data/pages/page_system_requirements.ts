import type { PageContent } from "@/types/content";

export const page_system_requirements: PageContent = {
  id: "system-requirements",
  translationKey: "system-requirements",
  locale: "en-US",
  routeKind: "fixed",
  slug: "system-requirements",
  url: "/system-requirements",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Rivage System Requirements: PC Specs and Steam Deck Status",
  seoTitle: "Rivage System Requirements: PC Specs and Steam Deck Status",
  metaDescription:
    "Rivage system requirements for PC are not yet published as of 2026-09-22. Rivage Steam Deck verification status is also unconfirmed; check the Steam store page.",
  summary:
    "Look up Rivage PC minimum and recommended specifications and the Rivage Steam Deck verification status as of research date.",
  hero: {
    eyebrow: "Rivage System Requirements",
    subtitle:
      "Rivage PC specs are not yet published on the Steam store page; Rivage Steam Deck verification status is unconfirmed as of 2026-09-22.",
    ctas: [
      { label: "Platforms", href: "/platforms" },
      { label: "Steam Store", href: "https://store.steampowered.com/app/4094660" },
    ],
  },
  quickAnswer:
    "As of 2026-09-22, the Rivage Steam store page (AppID 4094660) has not published Rivage PC minimum or recommended system requirements. The Rivage Steam Deck verification status is also unconfirmed as of research date 2026-09-22. When the Rivage developer or Rivage publisher publishes Rivage system requirements on the Rivage Steam store page or on SteamDB, this Rivage system requirements page is the place they are recorded.",
  keyFacts: [
    { label: "Page type", value: "reference" },
    { label: "Source rule", value: "Steam store page only" },
    { label: "Steam Deck", value: "Unconfirmed as of 2026-09-22" },
    { label: "Last reviewed", value: "2026-09-22" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "As of 2026-09-22, the Rivage Steam store page (AppID 4094660) has not published Rivage PC minimum or recommended system requirements. The Rivage Steam Deck verification status is also unconfirmed as of research date 2026-09-22.",
    },
    {
      id: "pc-requirements-status",
      type: "prose",
      heading: "Rivage PC System Requirements Status",
      body:
        "Operating system — Not yet published as of 2026-09-22 — Rivage Steam store page does not list Rivage PC minimum or recommended OS at research date. Processor (CPU) — Not yet published — Rivage Steam store page does not list a Rivage CPU requirement at research date. Graphics (GPU) — Not yet published — Rivage Steam store page does not list a Rivage GPU requirement at research date. Memory (RAM) — Not yet published — Rivage Steam store page does not list a Rivage RAM requirement at research date. Storage — Not yet published — Rivage Steam store page does not list a Rivage storage requirement at research date. DirectX version — Not yet published — Rivage Steam store page does not list a Rivage DirectX requirement at research date. Network — Not yet published — Rivage Steam store page does not list a Rivage network requirement at research date. Sound card — Not yet published — Rivage Steam store page does not list a Rivage sound card requirement at research date. The Rivage PC system requirements table above is intentionally a dated set of 'not yet published' rows rather than guessed CPU, GPU, RAM, storage, DirectX, network, or sound card values.",
    },
    {
      id: "steam-deck-status",
      type: "prose",
      heading: "Rivage Steam Deck Status",
      body:
        "The Rivage Steam Deck verification status is unconfirmed as of research date 2026-09-22. The Rivage Steam store page for AppID 4094660 does not yet carry a Deck Verified, Deck Playable, or Deck Unsupported badge in the Rivage product metadata at research date. SteamDB mirrors the Rivage Steam store metadata but does not yet carry a Rivage Steam Deck verification row either. The 'rivage steam deck' autocomplete suggestion is treated as Rivage search language, not as a Rivage platform confirmation.",
    },
    {
      id: "how-to-recheck",
      type: "prose",
      heading: "How to Recheck Rivage System Requirements",
      body:
        "To recheck the Rivage system requirements status, open the Rivage Steam store page (AppID 4094660) and look at the Rivage product sidebar. When the Rivage developer or Rivage publisher publishes Rivage PC system requirements, they appear in that Rivage sidebar with a Rivage minimum and Rivage recommended column for each spec row. SteamDB mirrors the same Rivage system requirements block as a cross-check, and the Rivage platforms page is the place to track any Rivage Steam Deck verification change. The Rivage release date page is where the Rivage system requirements are anchored to the September 22, 2026 Rivage launch window on Steam.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage release date and launch status", href: "/release-date/", description: "Confirms the Rivage September 22, 2026 Steam release date that anchors the Rivage system requirements page." },
        { label: "Rivage platforms at launch", href: "/platforms/", description: "Rivage platform table (Steam confirmed; PS5, Xbox, Switch not announced as of 2026-09-22) where the Rivage Steam Deck verification flag is tracked." },
      ],
    },
    {
      id: "sources",
      type: "prose",
      heading: "Sources",
      body: "All facts are verified against the sources listed here.",
      links: [
        {
          label: "Rivage on Steam (AppID 4094660)",
          href: "https://store.steampowered.com/app/4094660",
          description:
            "`official/store` - checked `2026-09-22` - Rivage Steam store page does not yet publish Rivage PC minimum or recommended system requirements or Rivage Steam Deck verification status at research date.",
        },
        {
          label: "Rivage on SteamDB (AppID 4094660)",
          href: "https://steamdb.info/app/4094660/",
          description:
            "`official/store` - checked `2026-09-22` - Rivage metadata cross-check confirming no Rivage system requirements block and no Rivage Steam Deck verification badge at research date.",
        },
        {
          label: "Rivage Steam Community hub (AppID 4094660)",
          href: "https://steamcommunity.com/app/4094660",
          description:
            "`community` - checked `2026-09-22` - Rivage community context for the Rivage Steam Deck search phrase, treated as search language and not as a Rivage system requirement fact.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: As of research date 2026-09-22, the Rivage Steam store page (AppID 4094660) does not publish Rivage PC minimum or recommended system requirements and does not carry a Rivage Steam Deck verification badge. Unannounced as of 2026-09-22: Rivage PC minimum OS, CPU, GPU, RAM, storage, DirectX, network, and sound card values; Rivage recommended specs; Rivage Steam Deck verification badge; Rivage macOS or Rivage Linux support. Explicitly excluded non-game Rivage namesakes: Yamaha Rivage PM-series digital mixing consoles (rivage pm10, pm7, pm3) and Beau Rivage spa steam rooms are not Rivage game system requirements.",
    },
  ],
  faqIds: ["system-requirements-1", "system-requirements-2", "system-requirements-3", "system-requirements-4"],
  relatedPageIds: ["release-date", "platforms"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
