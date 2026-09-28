import type { PageContent } from "@/types/content";

export const page_release_date: PageContent = {
  id: "release-date",
  translationKey: "release-date",
  locale: "en-US",
  routeKind: "fixed",
  slug: "release-date",
  url: "/release-date",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Rivage Release Date on Steam: Sep 22, 2026 Launch Status",
  seoTitle: "Rivage Release Date on Steam: Sep 22, 2026 Launch Status",
  metaDescription:
    "Rivage releases on Steam on Sep 22, 2026. The Rivage release date on PS5, Xbox, and Nintendo Switch is not announced as of 2026-09-22.",
  summary:
    "Confirm the official Rivage release date on Steam and the current launch-stage status, with console and demo dates flagged as unannounced.",
  hero: {
    eyebrow: "Rivage Release Date",
    subtitle:
      "Confirm the Rivage September 22, 2026 Steam release date and the current launch-stage status, with console and demo dates flagged as unannounced.",
    ctas: [
      { label: "Platforms", href: "/platforms" },
      { label: "Steam Store", href: "https://store.steampowered.com/app/4094660" },
    ],
  },
  quickAnswer:
    "The Rivage release date on Steam is September 22, 2026. That date comes from the official Steam store page for AppID 4094660 and is mirrored on the SteamDB listing and in Steam Community hub discussion as of research date 2026-09-22. Console release dates on PS5, Xbox, and Nintendo Switch have not been announced as of that date.",
  keyFacts: [
    { label: "Steam AppID", value: "4094660" },
    { label: "Planned release", value: "September 22, 2026" },
    { label: "Launch stage", value: "Standard full launch on planned date" },
    { label: "Console dates", value: "Not announced as of 2026-09-22" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "The Rivage release date on Steam is September 22, 2026. That date comes from the official Steam store page for AppID 4094660 and is mirrored on the SteamDB listing and in Steam Community hub discussion as of research date 2026-09-22. Console release dates on PS5, Xbox, and Nintendo Switch have not been announced as of that date.",
    },
    {
      id: "confirmed-launch-date",
      type: "prose",
      heading: "Confirmed Rivage Release Date and Launch Stage",
      body:
        "The Steam store page lists the planned release date as September 22, 2026. SteamDB mirrors that date as the planned launch timestamp on its public profile for AppID 4094660. The Steam Community hub threads center on that same September 22, 2026 target. There is no separate early access window published on the store page at research date, so the launch stage is the standard full launch on the planned release date. Any claim about a beta, prologue, or pre-launch demo tied to a different date is not in the Steam store metadata as of 2026-09-22 and is treated here as unconfirmed.",
    },
    {
      id: "per-platform-table",
      type: "prose",
      heading: "Per-Platform Release Status",
      body:
        "Platform table — see Related Pages and Sources modules. The Rivage release date on console is treated as unannounced until the developer or publisher adds a new SKU on the Steam store page or posts a console announcement on the Steam Community hub. The platforms page tracks the same per-platform status with full context, and the demo page covers any pre-launch demo that would change the launch-stage story.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage platforms at launch", href: "/platforms/", description: "Lists the Rivage platform table (Steam confirmed; PS5, Xbox, Switch not announced as of 2026-09-22)." },
        { label: "Is there a Rivage demo?", href: "/demo/", description: "Notes that no Rivage demo is confirmed on Steam as of 2026-09-22 and explains how to recheck the Steam store page." },
        { label: "Rivage PC system requirements", href: "/system-requirements/", description: "Records that Rivage minimum and recommended PC specs are not yet published on the Steam store page as of 2026-09-22." },
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
            "`official/store` - checked `2026-09-22` - Rivage planned release date September 22, 2026 and Rivage Steam only platform scope.",
        },
        {
          label: "Rivage on SteamDB (AppID 4094660)",
          href: "https://steamdb.info/app/4094660/",
          description:
            "`official/store` - checked `2026-09-22` - Rivage planned launch timestamp and Rivage Steam only platform flag mirror.",
        },
        {
          label: "Rivage Steam Community hub (AppID 4094660)",
          href: "https://steamcommunity.com/app/4094660",
          description:
            "`community` - checked `2026-09-22` - Rivage community context echoing the September 22, 2026 Rivage release date.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: Rivage planned release date September 22, 2026 on Steam for PC per the Steam store page (AppID 4094660) and SteamDB, both checked on 2026-09-22. Unannounced as of 2026-09-22: Rivage release date on PS5, Rivage release date on Xbox, Rivage release date on Nintendo Switch, any Rivage early access window, any Rivage pre-launch demo tied to a different date, and any Rivage price point change tied to a regional storefront. Explicitly excluded non-game Rivage namesakes: Yamaha Rivage PM-series digital mixing consoles (rivage pm10, pm7, pm3) and Beau Rivage tournament scheduling. Those autocomplete terms refer to Yamaha pro audio consoles and the Beau Rivage casino and are not Rivage game facts.",
    },
  ],
  faqIds: ["release-date-1", "release-date-2", "release-date-3"],
  relatedPageIds: ["platforms", "demo", "system-requirements"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
