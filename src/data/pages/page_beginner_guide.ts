import type { PageContent } from "@/types/content";

export const page_beginner_guide: PageContent = {
  id: "beginner-guide",
  translationKey: "beginner-guide",
  locale: "en-US",
  routeKind: "fixed",
  slug: "guides/beginner",
  url: "/guides/beginner",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-full" },
  h1: "Rivage Beginner Guide: Systems, Resources, and Early Priorities",
  seoTitle: "Rivage Beginner Guide: Systems, Resources, and Early Priorities",
  metaDescription:
    "Rivage beginner guide covering the core systems, resource gathering, and early progression priorities for first-time Rivage players on Steam release day.",
  summary:
    "First-time Rivage beginner guidance covering Rivage core systems, Rivage resource gathering, and Rivage early progression priorities as a pre-launch day-one framework.",
  hero: {
    eyebrow: "Rivage Beginner Guide",
    subtitle:
      "Day-one framework organized around the Rivage core loop, Rivage resource flow, and Rivage early progression priorities a first-time player can plan around.",
    ctas: [
      { label: "Walkthrough", href: "/guides/walkthrough" },
      { label: "Gameplay Overview", href: "/gameplay" },
    ],
  },
  quickAnswer:
    "The Rivage beginner guide on this page is a dated day-one framework because the game has not launched as of 2026-09-22. It organizes what the Steam store page and Steam Community hub already confirm about the core loop, the resource flow, and the early progression priorities a first-time player should expect.",
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
        "The Rivage beginner guide on this page is a dated day-one framework because the game has not launched as of 2026-09-22. It organizes what the Steam store page and Steam Community hub already confirm about the core loop, the resource flow, and the early progression priorities a first-time player should expect. Specific resource names and progression values are flagged as unconfirmed until the developer or publisher publishes them.",
    },
    {
      id: "why-day-one-framework",
      type: "prose",
      heading: "Why This Rivage Beginner Guide Is a Day-One Framework",
      body:
        "Because the game is pre-launch as of research date 2026-09-22, the page below describes what a first-time player can expect on release day (September 22, 2026 on Steam) using only the words the Steam store page and the Steam Community hub already use. This Rivage beginner guide does not invent resource names, crafting recipes, or progression numbers; it anchors each topic in a dated source.",
    },
    {
      id: "core-loop",
      type: "prose",
      heading: "Rivage Core Loop",
      body:
        "The core loop on day one is the phrase the Steam store page uses to describe what a player does every play session. This Rivage beginner guide treats the core loop as the anchor for every other system in this page: the resource flow and the early progression priorities both feed back into the core loop.",
    },
    {
      id: "resource-flow",
      type: "prose",
      heading: "Rivage Resource Flow",
      body:
        "The resource flow on day one is what a player gathers, spends, and converts between play sessions. This Rivage beginner guide only names resources that the Steam store page or the Steam Community hub explicitly mentions; specific resource names that have not been published remain unconfirmed as of 2026-09-22 and are not invented here.",
    },
    {
      id: "early-priorities",
      type: "prose",
      heading: "Rivage Early Progression Priorities",
      body:
        "The early progression priorities on day one are the order in which a first-time player should engage with systems. This Rivage beginner guide frames these priorities using the core loop above and the progression categories from the walkthrough. Specific progression values (unlock thresholds, cost curves, time-to-master estimates) are not published as of research date 2026-09-22.",
    },
    {
      id: "use-pre-launch",
      type: "prose",
      heading: "How to Use This Rivage Beginner Guide Before Launch",
      body:
        "Pair this guide with the walkthrough: this Rivage beginner guide assumes a player is about to start the walkthrough on day one. Recheck the Steam store page: this Rivage beginner guide is rebuilt from the Steam store page every time the store description changes. Anchor to the gameplay page: that page carries the genre tags and core loop phrase, and this Rivage beginner guide turns those facts into first-session priorities a player can act on.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage walkthrough", href: "/guides/walkthrough/", description: "Rivage walkthrough framework that the Rivage beginner guide feeds into on Rivage day one." },
        { label: "Rivage core gameplay and genre", href: "/gameplay/", description: "Rivage genre tag and Rivage core loop summary from the Rivage Steam store page that anchors the Rivage beginner guide." },
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
            "`official/store` - checked `2026-09-22` - Rivage core loop phrase, Rivage genre tags, and Rivage day-one systems referenced by the Rivage beginner guide.",
        },
        {
          label: "Rivage Steam Community hub (AppID 4094660)",
          href: "https://steamcommunity.com/app/4094660",
          description:
            "`community` - checked `2026-09-22` - Rivage community context for the Rivage beginner guide, used only when the same Rivage system is also on the Rivage Steam store page.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: Rivage has not launched as of research date 2026-09-22. The Rivage core loop phrase, Rivage genre tags, and the existence of a Rivage resource flow and Rivage early progression priorities are sourced from the Rivage Steam store page (AppID 4094660) and the Rivage Steam Community hub. Unannounced as of 2026-09-22: Specific Rivage resource names, Rivage crafting recipes, Rivage progression values, Rivage unlock thresholds, Rivage difficulty settings, and any Rivage beginner tutorial system that has not been published on the Rivage Steam store page or Rivage Steam Community hub.",
    },
  ],
  faqIds: ["beginner-guide-1", "beginner-guide-2", "beginner-guide-3", "beginner-guide-4"],
  relatedPageIds: ["walkthrough", "gameplay-overview"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
