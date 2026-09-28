import type { PageContent } from "@/types/content";

export const page_demo: PageContent = {
  id: "demo",
  translationKey: "demo",
  locale: "en-US",
  routeKind: "fixed",
  slug: "demo",
  url: "/demo",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Rivage Demo on Steam: Availability and Download Status",
  seoTitle: "Rivage Demo on Steam: Availability and Download Status",
  metaDescription:
    "Is there a Rivage demo on Steam? As of 2026-09-22, no Rivage demo is confirmed. See where to check the Rivage demo status and Steam download path.",
  summary:
    "Report whether a Rivage demo is available on Steam and explain how to check the Steam store page and Community hub for a demo announcement.",
  hero: {
    eyebrow: "Rivage Demo",
    subtitle:
      "No Rivage demo is confirmed on Steam as of 2026-09-22. Use the Steam store page and Steam Community hub to recheck the Rivage demo status.",
    ctas: [
      { label: "Release Date", href: "/release-date" },
      { label: "Steam Store", href: "https://store.steampowered.com/app/4094660" },
    ],
  },
  quickAnswer:
    "As of 2026-09-22, no Rivage demo is confirmed on Steam. The Steam store page for AppID 4094660 does not list a separate demo entry at research date, and SteamDB shows no demo package published alongside the main build.",
  keyFacts: [
    { label: "Page type", value: "status" },
    { label: "Demo entry", value: "Not confirmed" },
    { label: "Source rule", value: "Steam store page + SteamDB" },
    { label: "Last reviewed", value: "2026-09-22" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "As of 2026-09-22, no Rivage demo is confirmed on Steam. The Steam store page for AppID 4094660 does not list a separate demo entry at research date, and SteamDB shows no demo package published alongside the main build. The demo status changes only when the developer or publisher adds a demo build on the Steam store page or posts a demo announcement on the Steam Community hub.",
    },
    {
      id: "where-to-check",
      type: "prose",
      heading: "Where to Check for a Rivage Demo",
      body:
        "The Steam store page (AppID 4094660) is the canonical place to watch. When one is added, the store page surfaces it either as a separate Play Demo button next to the main Add to Cart action or as an entry in the Steam Community hub announcements. SteamDB also lists any demo package separately from the main build, so the status can be cross-checked against the SteamDB app page. The demo Reddit search phrase is a search language signal, not a fact. Treat any demo Reddit thread or leak as community speculation until the same demo appears on the Steam store page or SteamDB.",
    },
    {
      id: "how-to-download",
      type: "prose",
      heading: "How to Download a Rivage Demo When It Appears",
      body:
        "When the demo is published on Steam, the download path is the same as for any other Steam demo: open the Steam store page for AppID 4094660; click the Play Demo button if the developer has enabled it, or follow the Steam Community hub announcement to the demo store page; install the demo through the Steam client on the same account that owns or will own the game on launch day; launch the demo from the Steam library and use the release date page to track whether the demo survives into launch. Until a Rivage demo appears on the Steam store page, the download path above is the only confirmed way to install one. There is no separate demo launcher or installer outside the Steam client.",
    },
    {
      id: "what-demo-would-change",
      type: "prose",
      heading: "What a Rivage Demo Would Change",
      body:
        "A Rivage demo would not change the September 22, 2026 release date on Steam, but it would change the launch stage story. The release date page would add a demo line, the platforms page would add a demo scope note, and the walkthrough would no longer be a pre-launch framework only.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage release date and launch status", href: "/release-date/", description: "Confirms the Rivage September 22, 2026 Steam release date and the Rivage launch stage status as of 2026-09-22." },
        { label: "Rivage platforms at launch", href: "/platforms/", description: "Lists the Rivage platform table (Steam confirmed; PS5, Xbox, Switch not announced as of 2026-09-22) where a Rivage demo scope would be added." },
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
            "`official/store` - checked `2026-09-22` - Rivage demo status (no Rivage demo entry on the Steam store page at research date).",
        },
        {
          label: "Rivage on SteamDB (AppID 4094660)",
          href: "https://steamdb.info/app/4094660/",
          description:
            "`official/store` - checked `2026-09-22` - Rivage package listing cross-check confirming no Rivage demo package separate from the main Rivage build at research date.",
        },
        {
          label: "Rivage Steam Community hub (AppID 4094660)",
          href: "https://steamcommunity.com/app/4094660",
          description:
            "`community` - checked `2026-09-22` - Rivage community discussion context for the Rivage demo Reddit demand signal, treated as search language not Rivage fact.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: No Rivage demo entry exists on the Rivage Steam store page (AppID 4094660) or SteamDB as of 2026-09-22. The Rivage demo download path on Steam is documented as the only official route once a demo appears. Unannounced as of 2026-09-22: Rivage demo content scope, Rivage demo length, Rivage demo save carryover into the Rivage full release, and any Rivage demo beta key program outside the Steam client. Explicitly excluded non-game Rivage namesakes: Beau Rivage spa and steam room references, Yamaha Rivage PM-series consoles, and the Rivage day spa (Birmingham) are not Rivage game facts.",
    },
  ],
  faqIds: ["demo-1", "demo-2", "demo-3", "demo-4"],
  relatedPageIds: ["release-date", "platforms"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
