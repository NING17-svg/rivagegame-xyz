import type { PageContent } from "@/types/content";

export const page_walkthrough: PageContent = {
  id: "walkthrough",
  translationKey: "walkthrough",
  locale: "en-US",
  routeKind: "fixed",
  slug: "guides/walkthrough",
  url: "/guides/walkthrough",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Rivage Walkthrough: Story Beats, Locations, and Progression",
  seoTitle: "Rivage Walkthrough: Story Beats, Locations, and Progression",
  metaDescription:
    "Rivage walkthrough framework for the Sep 22, 2026 Steam release. Covers Rivage story beats, key locations, and progression; specific beats pending publication.",
  summary:
    "Step-by-step Rivage walkthrough framework covering Rivage core story beats, Rivage key locations, and Rivage progression milestones as a pre-launch dated guide.",
  hero: {
    eyebrow: "Rivage Walkthrough",
    subtitle:
      "Rivage walkthrough framework organized around the Rivage core loop and Rivage progression milestones as a dated pre-launch guide as of 2026-09-22.",
    ctas: [
      { label: "Beginner Guide", href: "/guides/beginner" },
      { label: "Gameplay Overview", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "The Rivage walkthrough on this page is a dated pre-launch framework because the game has not launched as of 2026-09-22. It organizes what the Steam store page and Steam Community hub already confirm about the core loop and progression milestones, with specific story beats and location names flagged as unconfirmed.",
  keyFacts: [
    { label: "Page type", value: "guide" },
    { label: "Source rule", value: "Steam store page + Steam Community hub" },
    { label: "Pre-launch framework", value: "Yes, dated 2026-09-22" },
    { label: "Last reviewed", value: "2026-09-22" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "The Rivage walkthrough on this page is a dated pre-launch framework because the game has not launched as of 2026-09-22. It organizes what the Steam store page and Steam Community hub already confirm about the core loop and progression milestones, with specific story beats and location names flagged as unconfirmed until the developer or publisher publishes them.",
    },
    {
      id: "why-framework",
      type: "prose",
      heading: "Why This Rivage Walkthrough Is a Framework",
      body:
        "Because the game has not launched as of research date 2026-09-22, the page below is structured as a framework rather than a finished step by step guide. The Steam store page (AppID 4094660) sets the genre tags and the core loop phrase, and the Steam Community hub threads echo the same core loop language.",
    },
    {
      id: "core-loop-anchors",
      type: "prose",
      heading: "Rivage Core Loop Anchors",
      body:
        "The Rivage core loop anchors come from the Steam store page description and from the Steam Community hub discussion context. These anchors describe what players will be doing on launch day, but they are not a substitute for a step by step guide until the Steam store page or Steam Community hub posts a more detailed reference.",
    },
    {
      id: "progression-categories",
      type: "prose",
      heading: "Rivage Progression Categories",
      body:
        "The progression milestones fall into a small set of categories that fit the genre tags and the core loop phrase on the Steam store page: opening section, mid game section, late game section, and post-launch content section.",
    },
    {
      id: "opening-section",
      type: "prose",
      heading: "Opening Section",
      body:
        "The opening section begins when a new player launches the game on September 22, 2026. The Steam store page describes the opening as an introduction to the core loop phrase and the genre tag set. This framework treats the opening section as the place where a new player learns the first-session systems described in the beginner guide.",
    },
    {
      id: "mid-game-section",
      type: "prose",
      heading: "Mid Game Section",
      body:
        "The mid game section is where progression milestones start to layer up. This framework tracks mid game beats using the progression categories above. Specific mid game story beats and mid game location names are not published as of research date 2026-09-22.",
    },
    {
      id: "late-game-section",
      type: "prose",
      heading: "Late Game Section",
      body:
        "The late game section is where progression milestones are the longest. This framework treats the late game section as the point at which players have mastered the core loop and are ready for end-game content. Specific late game beats are unconfirmed as of research date 2026-09-22.",
    },
    {
      id: "use-pre-launch",
      type: "prose",
      heading: "How to Use This Rivage Walkthrough Pre-Launch",
      body:
        "Before relying on this framework, recheck the Steam store page (AppID 4094660). The store description is updated when the developer or publisher publishes new media, new story beats, or new location names. Cross-check the Steam Community hub: that is the second place where the framework gains new story beats and new location names. Anchor to the beginner guide: that page covers first-session priorities that any walkthrough assumes the player already knows.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage beginner guide", href: "/guides/beginner/", description: "Rivage first-session systems and Rivage early progression priorities that the Rivage walkthrough framework assumes." },
        { label: "Rivage core gameplay and genre", href: "/gameplay/", description: "Rivage core loop summary from the Rivage Steam store page that anchors the Rivage walkthrough framework." },
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
            "`official/store` - checked `2026-09-22` - Rivage core loop phrase, Rivage genre tags, and Rivage progression milestones used to structure the Rivage walkthrough framework.",
        },
        {
          label: "Rivage Steam Community hub (AppID 4094660)",
          href: "https://steamcommunity.com/app/4094660",
          description:
            "`community` - checked `2026-09-22` - Rivage community discussion context for the Rivage walkthrough framework, treated as search language and confirmed Rivage facts only.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: Rivage has not launched as of research date 2026-09-22. The Rivage core loop phrase, Rivage genre tags, and Rivage progression categories are sourced from the Rivage Steam store page (AppID 4094660) and the Rivage Steam Community hub. Unannounced as of 2026-09-22: Specific Rivage story beats, Rivage location names, Rivage NPC names, Rivage boss order, Rivage ending branches, and Rivage post-launch DLC scope.",
    },
  ],
  faqIds: ["walkthrough-1", "walkthrough-2", "walkthrough-3", "walkthrough-4"],
  relatedPageIds: ["beginner-guide", "gameplay-overview"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
