import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  "id": "home",
  "translationKey": "home",
  "locale": "en-US",
  "routeKind": "home",
  "slug": "",
  "url": "/",
  "pageType": "home",
  "presentation": {
    "shell": "home"
  },
  "h1": "Rivage on Steam: Release Date, Platforms, and Guides Hub",
  "seoTitle": "Rivage on Steam: Release Date, Platforms, and Guides Hub",
  "metaDescription": "Rivage releases on Steam Sep 22, 2026. Track Rivage launch status, confirm Rivage platforms, and browse Rivage guides, demo news, and Rivage PC requirements.",
  "summary": "Direct US English search users into the Rivage launch status, platforms, gameplay overview, and guides hub for the September 22, 2026 Steam release.",
  "hero": {
    "eyebrow": "Rivage Pre-Launch Hub",
    "subtitle": "Track Rivage launch status on Steam, confirm Rivage platforms, and follow Rivage guides, demo news, and Rivage PC requirements in one dated reference hub.",
    "ctas": [
      {
        "label": "Release Date",
        "href": "/release-date"
      },
      {
        "label": "Platforms",
        "href": "/platforms"
      },
      {
        "label": "Browse Guides",
        "href": "/guides"
      },
      {
        "label": "Steam Store",
        "href": "https://store.steampowered.com/app/4094660"
      }
    ]
  },
  "quickAnswer": "Rivage is a first-time Steam release under AppID 4094660, planned for September 22, 2026 on PC. This hub tracks the official launch status, confirms the platforms at launch, and links to the gameplay overview, the guides hub, the demo status page, and the system requirements page so you can plan around launch day.",
  "keyFacts": [
    {
      "label": "Steam AppID",
      "value": "4094660"
    },
    {
      "label": "Planned release",
      "value": "September 22, 2026"
    },
    {
      "label": "Launch platforms",
      "value": "Steam (PC, Windows)"
    },
    {
      "label": "Demo",
      "value": "Available on Steam (AppID 4465080)"
    },
    {
      "label": "Steam Deck",
      "value": "Verification unconfirmed"
    }
  ],
  "modules": [
    {
      "id": "release-date-block",
      "type": "prose",
      "heading": "Rivage Release Date and Launch Status",
      "body": "The Steam store page lists a planned release date of September 22, 2026 on PC. That date is the current confirmed launch date per the store page and the SteamDB listing cross-checked. Console release windows on PS5, Xbox, and Nintendo Switch have not been announced. The release date page carries the same confirmed status without any console speculation. The launch window is the same week as the store's planned release, so there is no public roadmap entry beyond that date at this time."
    },
    {
      "id": "platforms-block",
      "type": "prose",
      "heading": "Platforms at Launch",
      "body": "At launch the title is a PC only release on Steam. The store listing for AppID 4094660 confirms Windows support and does not list PlayStation 5, Xbox Series, or Nintendo Switch SKUs as of research date. SteamDB mirrors the same Steam only platform flag. If you are deciding between buying on PC versus waiting for a console version, the platforms page lays out the dated platform status table and points back to the release date page when console SKUs become real."
    },
    {
      "id": "gameplay-block",
      "type": "prose",
      "heading": "Gameplay and Where to Start",
      "body": "The Steam store description sets the genre tags and the core loop phrase used on this site. Gameplay systems, exploration focus, and progression pacing are summarized on the gameplay page using only the words the store page and Steam Community hub discussions use today. New players should start at the guides hub, which routes into the beginner guide for first session systems and the walkthrough for longer progression milestones. None of those guides promise content the store page has not described."
    },
    {
      "id": "next-steps-block",
      "type": "prose",
      "heading": "Demo, System Requirements, and Trailer Next Steps",
      "body": "A standalone Rivage Demo is on Steam under AppID 4465080 since April 16, 2026 alongside Steam Next Fest and the Cerebral Puzzle Showcase; demo saves do not carry over to the full release. System requirements have not been published on the store page; the system requirements page records that fact and flags Steam Deck verification status as unconfirmed. For media, the trailer and gameplay footage live on the trailer page, which links to the Steam store media block and the Steam Community hub."
    }
  ],
  "faqIds": [
    "home-1",
    "home-2",
    "home-3",
    "home-4"
  ],
  "relatedPageIds": [
    "release-date",
    "platforms",
    "guides",
    "gameplay-overview",
    "demo",
    "system-requirements"
  ],
  "schemaTypes": [
    "WebSite",
    "CollectionPage",
    "FAQPage"
  ],
  "sourceStatus": "official",
  "lastReviewed": "2026-09-22"
};
