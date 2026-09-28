import type { PageContent } from "@/types/content";

export const page_platforms: PageContent = {
  id: "platforms",
  translationKey: "platforms",
  locale: "en-US",
  routeKind: "fixed",
  slug: "platforms",
  url: "/platforms",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Rivage Platforms at Launch: Steam, PS5, Xbox, Switch Status",
  seoTitle: "Rivage Platforms at Launch: Steam, PS5, Xbox, Switch Status",
  metaDescription:
    "Rivage platforms at launch center on Steam. As of 2026-09-22, Rivage on PS5, Xbox, and Nintendo Switch is not announced. See the platform table.",
  summary:
    "Identify which platforms Rivage is releasing on at launch (Steam confirmed; PS5, Xbox, Switch status as of research date).",
  hero: {
    eyebrow: "Rivage Platforms",
    subtitle:
      "See the Rivage platform table: Steam confirmed on Windows; PS5, Xbox, Nintendo Switch, macOS, Linux, and Steam Deck status as of 2026-09-22.",
    ctas: [
      { label: "Release Date", href: "/release-date" },
      { label: "Steam Store", href: "https://store.steampowered.com/app/4094660" },
    ],
  },
  quickAnswer:
    "Rivage platforms at launch are Steam only on PC for Windows. The Steam store page for AppID 4094660 and the SteamDB listing confirm Windows as the only platform flag as of research date 2026-09-22. As of that date, the developer has not announced a release on PlayStation 5, Xbox Series, or Nintendo Switch.",
  keyFacts: [
    { label: "Page type", value: "reference" },
    { label: "Steam store", value: "Confirmed (PC, Windows)" },
    { label: "PS5", value: "Not announced" },
    { label: "Xbox Series X", value: "Not announced" },
    { label: "Nintendo Switch", value: "Not announced" },
    { label: "Steam Deck", value: "Verification unconfirmed" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "Rivage platforms at launch are Steam only on PC for Windows. The Steam store page for AppID 4094660 and the SteamDB listing confirm Windows as the only platform flag as of research date 2026-09-22. As of that date, the developer has not announced a release on PlayStation 5, Xbox Series, or Nintendo Switch.",
    },
    {
      id: "platform-status-table",
      type: "prose",
      heading: "Rivage Platform Status Table",
      body:
        "Steam (PC, Windows) — Confirmed for launch on September 22, 2026 — Steam store page (AppID 4094660), SteamDB. PlayStation 5 — Not announced as of 2026-09-22 — Steam store listing is PC only at research date. Xbox Series X — Not announced as of 2026-09-22 — Steam store listing is PC only at research date. Nintendo Switch — Not announced as of 2026-09-22 — Steam store listing is PC only at research date. macOS / Linux — Not announced as of 2026-09-22 — Steam store page does not list macOS or Linux tags at research date. Steam Deck — Verification status unconfirmed as of 2026-09-22 — Steam store page does not yet carry a Deck Verified badge at research date. The Rivage platforms table reflects what the Steam store page and SteamDB actually show today.",
    },
    {
      id: "how-platforms-confirmed",
      type: "prose",
      heading: "How Rivage Platforms Are Confirmed",
      body:
        "The Rivage Steam store page lists Windows as a supported platform and does not list macOS or Linux tags at research date. SteamDB mirrors that platform flag for Rivage AppID 4094660 and provides a package-level cross-check for any Rivage macOS or Rivage Linux build that might appear between research date reviews. Steam Community hub threads discuss the Rivage Steam only launch but do not contain a Rivage console announcement as of research date 2026-09-22. If you are choosing between buying Rivage on PC versus waiting for a console version, the Rivage release date page is where any new Rivage PS5 release date or Rivage Xbox release date will first appear, and the Rivage system requirements page is where any Rivage Steam Deck verification badge will appear.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage release date and launch status", href: "/release-date/", description: "Confirms the Rivage September 22, 2026 Steam release date and flags console release dates as not announced as of 2026-09-22." },
        { label: "Rivage PC system requirements", href: "/system-requirements/", description: "Records that Rivage PC minimum and recommended specs are not yet published on the Steam store page as of 2026-09-22, with Rivage Steam Deck verification status unconfirmed." },
        { label: "Is there a Rivage demo?", href: "/demo/", description: "Notes that no Rivage demo is confirmed on Steam as of 2026-09-22 and explains how to recheck the Steam store page." },
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
            "`official/store` - checked `2026-09-22` - Rivage Steam only platform flag and Rivage planned September 22, 2026 launch on Windows.",
        },
        {
          label: "Rivage on SteamDB (AppID 4094660)",
          href: "https://steamdb.info/app/4094660/",
          description:
            "`official/store` - checked `2026-09-22` - Rivage platform flag mirror of the Steam store listing (Steam only) at research date.",
        },
        {
          label: "Rivage Steam Community hub (AppID 4094660)",
          href: "https://steamcommunity.com/app/4094660",
          description:
            "`community` - checked `2026-09-22` - Rivage community discussion confirming the Rivage Steam only launch scope as of research date.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: Rivage at launch is a Steam only release on Windows per the Rivage Steam store page (AppID 4094660) and SteamDB cross-checked on 2026-09-22. Unannounced as of 2026-09-22: Rivage on PlayStation 5, Rivage on Xbox Series, Rivage on Nintendo Switch, Rivage macOS or Rivage Linux versions, and Rivage Steam Deck verification status. Explicitly excluded non-game Rivage namesakes: Yamaha Rivage PM-series digital mixing consoles and any pro audio Rivage console are not Rivage game facts. The platform table above covers the Rivage Steam game only.",
    },
  ],
  faqIds: ["platforms-1", "platforms-2", "platforms-3", "platforms-4"],
  relatedPageIds: ["release-date", "system-requirements", "demo"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
