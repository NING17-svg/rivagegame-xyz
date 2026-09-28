import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home" },
  h1: "Rivage on Steam: Release Date, Platforms, and Guides Hub",
  seoTitle: "Rivage on Steam: Release Date, Platforms, and Guides Hub",
  metaDescription:
    "Rivage releases on Steam Sep 22, 2026. Track Rivage launch status, confirm Rivage platforms, and browse Rivage guides, demo news, and Rivage PC requirements.",
  summary:
    "Direct US English search users into the Rivage launch status, platforms, gameplay overview, and guides hub for the September 22, 2026 Steam release.",
  hero: {
    eyebrow: "Rivage Pre-Launch Hub",
    subtitle:
      "Track Rivage launch status on Steam, confirm Rivage platforms, and follow Rivage guides, demo news, and Rivage PC requirements in one dated reference hub.",
    ctas: [
      { label: "Release Date", href: "/release-date" },
      { label: "Platforms", href: "/platforms" },
      { label: "Browse Guides", href: "/guides" },
      { label: "Steam Store", href: "https://store.steampowered.com/app/4094660" },
    ],
  },
  quickAnswer:
    "Rivage is a first-time Steam release under AppID 4094660, planned for September 22, 2026 on PC. This hub tracks the official launch status, confirms the platforms at launch, and links to the gameplay overview, the guides hub, the demo status page, and the system requirements page so you can plan around launch day.",
  keyFacts: [
    { label: "Steam AppID", value: "4094660" },
    { label: "Planned release", value: "September 22, 2026" },
    { label: "Launch platforms", value: "Steam (PC, Windows)" },
    { label: "Demo", value: "Not confirmed as of 2026-09-22" },
    { label: "Steam Deck", value: "Verification unconfirmed" },
  ],
  modules: [
    {
      id: "quick-answer",
      type: "prose",
      heading: "Quick Answer",
      body:
        "Rivage is a first-time Steam release under AppID 4094660, planned for September 22, 2026 on PC. This hub tracks the official launch status, confirms the platforms at launch, and links to the gameplay overview, the guides hub, the demo status page, and the system requirements page so you can plan around launch day.",
    },
    {
      id: "release-date-block",
      type: "prose",
      heading: "Rivage Release Date and Launch Status",
      body:
        "The Steam store page lists a planned release date of September 22, 2026 on PC. That date is the current confirmed launch date per the store page and the SteamDB listing cross-checked on 2026-09-22. Console release windows on PS5, Xbox, and Nintendo Switch have not been announced. The release date page carries the same confirmed status without any console speculation. The launch window is the same week as the store's planned release, so there is no public roadmap entry beyond that date at this time.",
    },
    {
      id: "platforms-block",
      type: "prose",
      heading: "Platforms at Launch",
      body:
        "At launch the title is a PC only release on Steam. The store listing for AppID 4094660 confirms Windows support and does not list PlayStation 5, Xbox Series, or Nintendo Switch SKUs as of research date. SteamDB mirrors the same Steam only platform flag. If you are deciding between buying on PC versus waiting for a console version, the platforms page lays out the dated platform status table and points back to the release date page when console SKUs become real.",
    },
    {
      id: "gameplay-block",
      type: "prose",
      heading: "Gameplay and Where to Start",
      body:
        "The Steam store description sets the genre tags and the core loop phrase used on this site. Gameplay systems, exploration focus, and progression pacing are summarized on the gameplay page using only the words the store page and Steam Community hub discussions use today. New players should start at the guides hub, which routes into the beginner guide for first session systems and the walkthrough for longer progression milestones. None of those guides promise content the store page has not described.",
    },
    {
      id: "next-steps-block",
      type: "prose",
      heading: "Demo, System Requirements, and Trailer Next Steps",
      body:
        "A demo on Steam is not confirmed as of 2026-09-22. The demo page explains where to check the store page and the Steam Community hub for any future announcement. System requirements have not been published on the store page; the system requirements page records that fact and flags Steam Deck verification status as unconfirmed. For media, the trailer and gameplay footage live on the trailer page, which links to the Steam store media block and the Steam Community hub.",
    },
    {
      id: "internal-links",
      type: "prose",
      heading: "Related Pages",
      body: "Cross-reference the launch pages that match each link target.",
      links: [
        { label: "Rivage release date and launch status", href: "/release-date/", description: "Confirms the Rivage September 22, 2026 Steam launch and the current Rivage launch stage status as of research date." },
        { label: "Rivage platforms at launch", href: "/platforms/", description: "Lists Rivage platform status (Steam confirmed; PS5, Xbox, Switch not announced as of 2026-09-22)." },
        { label: "Browse the Rivage guides hub", href: "/guides/", description: "Indexes the Rivage beginner guide, Rivage walkthrough, and Rivage progression guides for new Rivage players." },
        { label: "Rivage core gameplay and genre", href: "/gameplay/", description: "Summarizes the Rivage genre tag and core loop described on the Rivage Steam store page." },
        { label: "Is there a Rivage demo?", href: "/demo/", description: "Records Rivage demo status (not confirmed as of 2026-09-22) and the Steam download path to recheck." },
        { label: "Rivage PC system requirements", href: "/system-requirements/", description: "Notes that Rivage minimum and recommended PC specs have not been published on the Steam store page as of 2026-09-22." },
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
            "`official/store` - checked `2026-09-22` - Rivage release date Sep 22, 2026 and Rivage platform scope (PC only) at research date.",
        },
        {
          label: "Rivage on SteamDB (AppID 4094660)",
          href: "https://steamdb.info/app/4094660/",
          description:
            "`official/store` - checked `2026-09-22` - Rivage platform flag (Steam) and Rivage metadata mirror of the Steam store listing.",
        },
        {
          label: "Rivage Steam Community hub (AppID 4094660)",
          href: "https://steamcommunity.com/app/4094660",
          description:
            "`community` - checked `2026-09-22` - Rivage community discussion context for the Rivage demo question and the Rivage trailer reference.",
        },
      ],
    },
    {
      id: "fact-boundaries",
      type: "prose",
      heading: "Fact Boundaries",
      body:
        "Confirmed current-game facts: Rivage is the first Steam release under the Rivage title (AppID 4094660), Rivage planned release date is September 22, 2026, and Rivage at launch is Steam only on PC per the Steam store page and SteamDB listing checked on 2026-09-22. Unannounced as of 2026-09-22: Rivage console versions on PS5, Xbox, and Nintendo Switch; Rivage demo on Steam; Rivage PC minimum and recommended system requirements; Rivage Steam Deck verification status. Explicitly excluded non-game Rivage namesakes: Rivage day spa (Birmingham), Rivage Oak Kitchen (Sioux Falls), Rivage apartments (Acton MA), Beau Rivage hotel and casino, Le Rivage (NYC restaurant), Yamaha Rivage PM-series digital mixing consoles, Villa Rivage, Mon Rivage, Club Rivage, Rivage landscaping, and Rivage bal harbour.",
    },
  ],
  faqIds: ["home-1", "home-2", "home-3", "home-4"],
  relatedPageIds: ["release-date", "platforms", "guides", "gameplay-overview", "demo", "system-requirements"],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-22",
};
