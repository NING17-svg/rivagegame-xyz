import type { PageContent } from "@/types/content";

export const page_guides_hub: PageContent = {
  id: "guides",
  translationKey: "guides-hub",
  locale: "en-US",
  routeKind: "fixed",
  slug: "guides",
  url: "/guides",
  pageType: "guides",
  presentation: { shell: "hub", variant: "card-grid" },
  h1: "Rivage Guides: Beginner, Walkthrough, and Progression Hub",
  seoTitle: "Rivage Guides: Beginner, Walkthrough, and Progression Hub",
  metaDescription:
    "Browse Rivage guides by stage: beginner guide, walkthrough, and exploration guides for Rivage. New Rivage players start here, with links to Rivage walkthroughs.",
  summary:
    "Index Rivage beginner, progression, and exploration guides grouped by stage for new Rivage players.",
  hero: {
    eyebrow: "Rivage Guides",
    subtitle:
      "Start at the Rivage beginner guide for first-session systems and move into the Rivage walkthrough for longer progression milestones.",
    ctas: [
      { label: "Beginner Guide", href: "/guides/beginner" },
      { label: "Walkthrough", href: "/guides/walkthrough" },
      { label: "Gameplay Overview", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "The Rivage guides hub indexes the Rivage beginner guide, the Rivage walkthrough, and the Rivage progression guides by stage. New Rivage players start at the Rivage beginner guide for first-session systems and then move to the Rivage walkthrough for longer progression milestones.",
  keyFacts: [
    { label: "Page type", value: "hub" },
    { label: "Beginner stage", value: "First-session systems and resources" },
    { label: "Progression stage", value: "Parts 1-4 + Chess Board walkthrough" },
    { label: "Source rule", value: "Steam store page + Rivage coverage" },
    { label: "Last reviewed", value: "2026-09-29" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "The Rivage guides hub indexes the Rivage beginner guide, the Rivage walkthrough, and the Rivage progression guides by stage. New Rivage players start at the Rivage beginner guide for first-session systems and then move to the Rivage walkthrough for longer progression milestones. The Rivage guides hub links only to Rivage first-party sources and does not promise a third party Rivage wiki.",
    },
    {
      id: "beginner-stage",
      type: "prose",
      heading: "Beginner Stage: Rivage Beginner Guide",
      body:
        "The Rivage beginner guide covers first-session systems for Rivage: the Rivage core loop described on the Steam store page, the Rivage resource flow a new player can expect, and the Rivage early progression priorities that show up in Steam Community hub discussions. The Rivage beginner guide is the right starting place if you have not played Rivage before and want a short systems overview before diving into the Rivage walkthrough.",
    },
    {
      id: "progression-stage",
      type: "prose",
      heading: "Progression Stage: Rivage Walkthrough (Parts 1-4 + Chess Board)",
      body:
        "The Rivage walkthrough is now organized into Parts 1-4 plus the Chess Board endgame. Each Part covers the rooms you visit and the puzzle chain you solve to keep K9 and the loop moving: Part 1 (Miranda's laptop and the Pod Bay Stardust login), Part 2 (the Garage Chain Rail Detector with the Star Map and Cubik Cube), Part 3 (Rafael's Computer and the Emergency Pharmacy), Part 4 (the Wooden Clock cogs and Constellation Controls), and the endgame Chess Board solution with the Jahi's Room safe. Jump straight to the Part you are stuck on using the anchor links in the walkthrough.",
    },
    {
      id: "exploration-stage",
      type: "prose",
      heading: "Exploration Stage: Rivage Location and Route Notes",
      body:
        "The exploration stage of the Rivage guides hub tracks Rivage location and route notes that the Steam store page and Steam Community hub confirm. Specific Rivage location names and Rivage route beats are not invented on this page; they appear here only when the Rivage Steam store page description or the Rivage Steam Community hub posts a dated reference.",
    },
    {
      id: "launch-status-callout",
      type: "prose",
      heading: "Launch Status Callout: Rivage Release Date",
      body:
        "The Rivage release date page carries the dated Rivage launch status: September 22, 2026 on Steam for PC, with Rivage PS5, Rivage Xbox, and Rivage Nintendo Switch release dates not announced as of 2026-09-22. The Rivage guides hub anchors every guide back to that Rivage release date.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage walkthrough", href: "/guides/walkthrough/", description: "Rivage walkthrough organized into Parts 1-4 plus the Chess Board endgame, each with concrete puzzle access steps." },
        { label: "Rivage beginner guide", href: "/guides/beginner/", description: "First-time Rivage beginner guidance covering Rivage core systems and Rivage early progression priorities." },
        { label: "Rivage core gameplay and genre", href: "/gameplay/", description: "Summarizes the Rivage genre tag and the Rivage core loop described on the Rivage Steam store page." },
        { label: "Rivage release date and launch status", href: "/release-date/", description: "Confirms the Rivage September 22, 2026 Steam release date and the Rivage launch stage status as of 2026-09-22." },
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
            "`official/store` - checked `2026-09-22` - Rivage core loop description and Rivage genre tags used to frame the Rivage guides hub.",
        },
        {
          label: "Rivage Steam Community hub (AppID 4094660)",
          href: "https://steamcommunity.com/app/4094660",
          description:
            "`community` - checked `2026-09-22` - Rivage community discussion context for the Rivage beginner guide and Rivage walkthrough as of research date.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: The Rivage guides hub indexes the Rivage beginner guide and Rivage walkthrough. Both guides are framed by the Rivage core loop phrase used on the Rivage Steam store page (AppID 4094660) and the Rivage Steam Community hub discussion context as of 2026-09-22. Unannounced as of 2026-09-22: A third party Rivage wiki, a Rivage community maintained guide directory, specific Rivage story beats and Rivage location names, and any Rivage guide covering Rivage post-launch DLC.",
    },
  ],
  faqIds: ["guides-1", "guides-2", "guides-3", "guides-4"],
  relatedPageIds: ["walkthrough", "beginner-guide", "gameplay-overview", "release-date"],
  schemaTypes: ["CollectionPage", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
