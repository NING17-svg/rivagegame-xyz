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
  h1: "Rivage Demo on Steam: How to Get It and What Carries Over",
  seoTitle: "Rivage Demo on Steam: How to Get It and What Carries Over",
  metaDescription:
    "Yes, a standalone Rivage Demo is on Steam under AppID 4465080 since April 16, 2026. Here's the store link, the install path, and what does not carry over.",
  summary:
    "Confirm the standalone Rivage Demo on Steam (AppID 4465080), show the store link and install path, and flag that demo saves do not carry into the full release.",
  hero: {
    eyebrow: "Rivage Demo",
    subtitle:
      "A standalone Rivage Demo is live on Steam under AppID 4465080 since April 16, 2026. Wishlist the full game if you want day-one access.",
    ctas: [
      { label: "Rivage Demo on Steam", href: "https://store.steampowered.com/app/4465080/Rivage_Demo" },
      { label: "Full Game on Steam", href: "https://store.steampowered.com/app/4094660" },
      { label: "Walkthrough", href: "/guides/walkthrough" },
    ],
  },
  quickAnswer:
    "Yes. A standalone Rivage Demo is on Steam under AppID 4465080. It launched April 16, 2026 alongside Steam Next Fest and the Cerebral Puzzle Showcase, with localized store pages in French, Portuguese, Romanian, Finnish, Latam, Italian, Danish, and Malay. SteamDB lists the demo package separately from the main build (AppID 4094660). Demo saves do not carry over to the full release.",
  keyFacts: [
    { label: "Page type", value: "status" },
    { label: "Demo entry", value: "Available on Steam (AppID 4465080)" },
    { label: "Demo release date", value: "April 16, 2026" },
    { label: "Save carryover", value: "Does not carry into the full release" },
    { label: "Source rule", value: "Steam store page + SteamDB" },
    { label: "Last reviewed", value: "2026-09-29" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "A standalone Rivage Demo is on Steam under AppID 4465080. It went live April 16, 2026 alongside Steam Next Fest and the Cerebral Puzzle Showcase and ships with localized store pages in French, Portuguese, Romanian, Finnish, Latam, Italian, Danish, and Malay. SteamDB lists the demo package separately from the main build (AppID 4094660), so the demo install lives on its own app entry. Demo progress does not carry over when the full game unlocks on September 22, 2026.",
    },
    {
      id: "install-path",
      type: "prose",
      heading: "How to Install the Rivage Demo",
      body:
        "Open the Rivage Demo store page (AppID 4465080), click Install Game, and let Steam pull the demo build. You do not need to own the full game first. The demo appears as its own library entry, separate from Rivage (AppID 4094660). Launch from your Steam library once the download finishes. The full game still uses its own AppID, so installing the demo does not pre-load or unlock the September 22 release.",
    },
    {
      id: "what-the-demo-covers",
      type: "prose",
      heading: "What the Demo Covers",
      body:
        "The demo was the build used during Steam Next Fest and the Cerebral Puzzle Showcase on April 16, 2026, so it shows the early loop and the first set of puzzle rooms rather than the full campaign. It is enough to learn the controls, see one full puzzle chain, and decide whether to wishlist the full release. If you want chapter-by-chapter guidance, the walkthrough covers the same rooms with concrete solution steps.",
    },
    {
      id: "save-carryover",
      type: "prose",
      heading: "Save Carryover to the Full Release",
      body:
        "Demo saves do not transfer to the full game on September 22, 2026. Rivage (AppID 4094660) ships its own save slot independent of the demo's AppID 4465080. Expect to replay the early chapters once the full build unlocks, and use the walkthrough to skip any puzzle that already cost you time in the demo.",
    },
    {
      id: "regional-store-pages",
      type: "prose",
      heading: "Localized Demo Store Pages",
      body:
        "The demo is mirrored across regional Steam storefronts: French, Portuguese, Romanian, Finnish, Latam, Italian, Danish, and Malay. If your default Steam locale does not show the Play Demo button, switch to one of those locales or use the direct demo store URL. Same AppID, same build.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage release date and launch status", href: "/release-date/", description: "Confirms the Rivage September 22, 2026 Steam release date for the full game (AppID 4094660)." },
        { label: "Rivage walkthrough", href: "/guides/walkthrough/", description: "Per-part puzzle solutions and access steps for the chapters the demo introduces." },
        { label: "Rivage platforms at launch", href: "/platforms/", description: "Lists the Rivage platform table (Steam confirmed; PS5, Xbox, Switch not announced)." },
      ],
    },
    {
      id: "sources",
      type: "prose",
      heading: "Sources",
      body: "All facts are verified against the sources listed here.",
      links: [
        {
          label: "Rivage Demo on Steam (AppID 4465080)",
          href: "https://store.steampowered.com/app/4465080/Rivage_Demo",
          description:
            "`official/store` - checked `2026-09-29` - Confirms the standalone Rivage Demo, the April 16, 2026 release, Next Fest and Cerebral Puzzle Showcase participation, and the regional storefront mirrors.",
        },
        {
          label: "Rivage on SteamDB (AppID 4094660)",
          href: "https://steamdb.info/app/4094660/",
          description:
            "`official/store` - checked `2026-09-29` - SteamDB cross-reference for the Rivage demo package distinct from the main Rivage build.",
        },
        {
          label: "Rivage on Steam (AppID 4094660)",
          href: "https://store.steampowered.com/app/4094660",
          description:
            "`official/store` - checked `2026-09-29` - Full Rivage Steam store page used to confirm the demo is a separate AppID and saves do not carry between them.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: A standalone Rivage Demo is on Steam under AppID 4465080 and launched April 16, 2026 alongside Steam Next Fest and the Cerebral Puzzle Showcase. Localized storefronts include French, Portuguese, Romanian, Finnish, Latam, Italian, Danish, and Malay. SteamDB lists the demo package separately from the main Rivage build. Demo saves do not carry into the full Rivage release on September 22, 2026. Unannounced as of 2026-09-29: any Rivage demo beta key program outside the Steam client.",
    },
  ],
  faqIds: ["demo-1", "demo-2", "demo-3", "demo-4"],
  relatedPageIds: ["release-date", "platforms", "walkthrough"],
  schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-29",
};
