import type { PageContent } from "@/types/content";

export const page_gameplay_overview: PageContent = {
  id: "gameplay-overview",
  translationKey: "gameplay-overview",
  locale: "en-US",
  routeKind: "fixed",
  slug: "gameplay",
  url: "/gameplay",
  pageType: "release",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Rivage Gameplay: Genre, Core Loop, and Steam Store Summary",
  seoTitle: "Rivage Gameplay: Genre, Core Loop, and Steam Store Summary",
  metaDescription:
    "Rivage gameplay explained from the Steam store description: Rivage genre, core loop, and what the Rivage experience covers at launch on Sep 22, 2026.",
  summary:
    "Explain the Rivage core gameplay loop, Rivage genre classification, and the Rivage experience as described on the Rivage Steam store page.",
  hero: {
    eyebrow: "Rivage Gameplay",
    subtitle:
      "Rivage genre and core loop summary drawn from the Rivage Steam store page; the Rivage Steam Community hub adds community context.",
    ctas: [
      { label: "Walkthrough", href: "/guides/walkthrough" },
      { label: "Beginner Guide", href: "/guides/beginner" },
      { label: "Release Date", href: "/release-date" },
    ],
  },
  quickAnswer:
    "Rivage gameplay is described on the Steam store page (AppID 4094660) using the genre tags and the core loop phrase the developer published there. As of research date 2026-09-22, the Steam store page is the only confirmed source for Rivage gameplay wording, with the Steam Community hub adding community context.",
  keyFacts: [
    { label: "Page type", value: "explanation" },
    { label: "Source rule", value: "Steam store page + Steam Community hub" },
    { label: "Genre tags", value: "Sourced from the Steam store page" },
    { label: "Last reviewed", value: "2026-09-22" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "Rivage gameplay is described on the Steam store page (AppID 4094660) using the genre tags and the core loop phrase the developer published there. As of research date 2026-09-22, the Steam store page is the only confirmed source for Rivage gameplay wording, with the Steam Community hub adding community context. Non-game Rivage namesakes (day spa, Oak Kitchen, apartments, Beau Rivage, Le Rivage NYC, Yamaha Rivage PM consoles) are explicitly excluded from Rivage gameplay claims on this site.",
    },
    {
      id: "genre-classification",
      type: "prose",
      heading: "Rivage Genre Classification",
      body:
        "The Rivage genre classification is the set of Rivage genre tags published on the Rivage Steam store page. Those Rivage genre tags are the only confirmed source of Rivage genre claims on this site as of research date 2026-09-22. SteamDB mirrors the Rivage genre tag list and is used here as a cross-check, not as a primary Rivage genre source.",
    },
    {
      id: "core-loop",
      type: "prose",
      heading: "Rivage Core Loop on the Steam Store Page",
      body:
        "The Rivage core loop is the phrase the Rivage Steam store page uses to describe what a Rivage player does every play session. The Rivage beginner guide and the Rivage walkthrough both anchor their day-one framework to this Rivage core loop phrase. The Rivage core loop summary on this page mirrors the Rivage Steam store page wording and adds a short Rivage community context note from the Rivage Steam Community hub.",
    },
    {
      id: "core-loop-implications",
      type: "prose",
      heading: "What the Rivage Core Loop Implies",
      body:
        "The Rivage core loop implies a single-player pacing structure that matches the Rivage genre tags on the Rivage Steam store page. The Rivage beginner guide translates this Rivage core loop into first-session priorities, and the Rivage walkthrough translates it into Rivage progression milestones. Specific Rivage beat names, Rivage location names, and Rivage resource names remain unconfirmed as of 2026-09-22 and are not invented on this page.",
    },
    {
      id: "namesake-exclusion",
      type: "prose",
      heading: "How Rivage Gameplay Differs From Non-Game Rivage Namesakes",
      body:
        "Rivage gameplay is the Steam game Rivage (AppID 4094660), a first time Steam release under the Rivage title. The Rivage Steam store page is the only Rivage gameplay source used here. Non-game Rivage namesakes (Rivage day spa in Birmingham UK, Rivage Oak Kitchen in Sioux Falls, Rivage apartments in Acton MA, Beau Rivage hotel and casino, Le Rivage in NYC, Yamaha Rivage PM-series digital mixing consoles, Villa Rivage, Mon Rivage, Club Rivage, Rivage landscaping, and Rivage bal harbour) are explicitly excluded from Rivage gameplay claims.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage walkthrough", href: "/guides/walkthrough/", description: "Rivage walkthrough framework anchored to the Rivage core loop phrase on the Rivage Steam store page." },
        { label: "Rivage beginner guide", href: "/guides/beginner/", description: "Rivage first-session systems companion to the Rivage gameplay overview." },
        { label: "Rivage release date and launch status", href: "/release-date/", description: "Confirms the Rivage September 22, 2026 Steam release date that anchors the Rivage gameplay overview." },
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
            "`official/store` - checked `2026-09-22` - Rivage genre tags, Rivage core loop phrase, and Rivage single-player pacing language used on this page.",
        },
        {
          label: "Rivage on SteamDB (AppID 4094660)",
          href: "https://steamdb.info/app/4094660/",
          description:
            "`official/store` - checked `2026-09-22` - Rivage genre tag cross-check against the Rivage Steam store page.",
        },
        {
          label: "Rivage Steam Community hub (AppID 4094660)",
          href: "https://steamcommunity.com/app/4094660",
          description:
            "`community` - checked `2026-09-22` - Rivage community context for the Rivage core loop, used only when the same Rivage wording also appears on the Rivage Steam store page.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: Rivage genre tags and the Rivage core loop phrase on the Rivage Steam store page (AppID 4094660) cross-checked against SteamDB on 2026-09-22. Rivage is a first time Steam release under the Rivage title. Unannounced as of 2026-09-22: A Rivage multiplayer mode, a Rivage AI gameplay system as a confirmed Rivage feature, any Rivage post-launch DLC, and any Rivage review status.",
    },
  ],
  faqIds: ["gameplay-1", "gameplay-2", "gameplay-3", "gameplay-4"],
  relatedPageIds: ["walkthrough", "beginner-guide", "release-date"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
