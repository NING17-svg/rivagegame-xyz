import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  {
    id: "home-1",
    question: "When does Rivage release on Steam?",
    answer:
      "Rivage is planned for September 22, 2026 on PC per the Steam store page for AppID 4094660 and the SteamDB listing cross-checked on 2026-09-22.",
    pageIds: ["home", "release-date", "faq", "about"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-2",
    question: "Is Rivage coming to PS5, Xbox, or Nintendo Switch?",
    answer:
      "As of 2026-09-22, the developer has not announced Rivage for PlayStation 5, Xbox Series, or Nintendo Switch. The platforms page tracks per-console status and points back to the release date page when an SKU is added.",
    pageIds: ["home", "platforms", "faq", "about"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-3",
    question: "Is there a Rivage demo on Steam?",
    answer:
      "As of 2026-09-22, no Rivage demo is listed on the Steam store page. The demo page explains how to recheck the store page and the Steam Community hub for a future announcement.",
    pageIds: ["home", "demo", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "home-4",
    question: "Where can I find guides for new Rivage players?",
    answer:
      "The guides hub at /guides indexes beginner, progression, and exploration guides and routes first-time players into the beginner guide and the walkthrough.",
    pageIds: ["home", "guides", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-date-1",
    question: "What is the Rivage release date?",
    answer:
      "The Rivage release date is September 22, 2026 on Steam for PC per the Steam store page for AppID 4094660, cross-checked against SteamDB on 2026-09-22.",
    pageIds: ["release-date", "faq"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-date-2",
    question: "Has a Rivage PS5 release date been announced?",
    answer:
      "As of 2026-09-22, no PS5 release date has been announced. The Steam store listing is PC only at research date, so the Rivage release date on PlayStation 5 is treated as unconfirmed.",
    pageIds: ["release-date", "platforms"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "release-date-3",
    question: "When will Rivage release on Xbox or Nintendo Switch?",
    answer:
      "Neither an Xbox release date nor a Nintendo Switch release date has been published as of 2026-09-22. The platforms page tracks those flags and links back here when a console SKU is added.",
    pageIds: ["release-date", "platforms"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-1",
    question: "Is Rivage on Steam?",
    answer:
      "Yes. Rivage is on Steam under AppID 4094660 with a planned release date of September 22, 2026 per the Steam store page and SteamDB cross-checked on 2026-09-22.",
    pageIds: ["platforms", "faq"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-2",
    question: "Is Rivage coming to PS5 or Xbox?",
    answer:
      "As of 2026-09-22, no Rivage PS5 release or Rivage Xbox release has been announced. The Steam store listing is PC only at research date, so the Rivage PS5 status and Rivage Xbox status remain unconfirmed until the developer adds a console SKU.",
    pageIds: ["platforms", "release-date"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-3",
    question: "Will Rivage be on Nintendo Switch?",
    answer:
      "A Rivage Nintendo Switch version has not been announced as of 2026-09-22. The Steam store page does not list Switch at research date, and the Steam Community hub has no Rivage Switch announcement.",
    pageIds: ["platforms", "release-date"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "platforms-4",
    question: "Does Rivage work on macOS, Linux, or Steam Deck?",
    answer:
      "Rivage macOS and Rivage Linux versions are not listed on the Steam store page as of 2026-09-22. Rivage Steam Deck verification status is unconfirmed at research date because the store page does not yet show a Deck Verified badge.",
    pageIds: ["platforms", "system-requirements"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "system-requirements-1",
    question: "Are Rivage PC system requirements published yet?",
    answer:
      "As of 2026-09-22, the Rivage Steam store page has not published Rivage PC minimum or recommended system requirements. The Rivage Steam store sidebar does not yet carry Rivage CPU, GPU, RAM, storage, DirectX, network, or sound card rows.",
    pageIds: ["system-requirements", "platforms"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "system-requirements-2",
    question: "Will my PC run Rivage at launch?",
    answer:
      "The Rivage system requirements table does not yet estimate a Rivage compatible PC build because the Rivage Steam store page has not published the Rivage spec rows. Recheck the Rivage Steam store page on or after September 22, 2026 for the Rivage PC requirements.",
    pageIds: ["system-requirements"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "system-requirements-3",
    question: "Is Rivage verified for Steam Deck?",
    answer:
      "As of 2026-09-22, the Rivage Steam Deck verification status is unconfirmed. The Rivage Steam store page does not carry a Deck Verified, Deck Playable, or Deck Unsupported badge for Rivage at research date.",
    pageIds: ["system-requirements", "platforms"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "system-requirements-4",
    question: "Does Rivage run on macOS or Linux?",
    answer:
      "The Rivage Steam store page lists only Windows support for Rivage at research date 2026-09-22. Rivage macOS or Rivage Linux versions are not announced.",
    pageIds: ["system-requirements", "platforms"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-1",
    question: "Is there a Rivage demo on Steam?",
    answer:
      "As of 2026-09-22, the Steam store page (AppID 4094660) does not list a demo. The Rivage demo status is unconfirmed until the store page adds an entry.",
    pageIds: ["demo", "release-date"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-2",
    question: "Can I download a Rivage demo outside of Steam?",
    answer:
      "No download path outside the Steam client is published as of 2026-09-22. Any demo download offered outside the Steam store page or SteamDB is not an official source.",
    pageIds: ["demo"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-3",
    question: "Will the Rivage demo include the full game?",
    answer:
      "The demo content scope has not been announced as of 2026-09-22. A demo is typically a slice of the main release, but the Steam store page does not yet publish any demo content list.",
    pageIds: ["demo"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "demo-4",
    question: "Did the developer say anything about a demo on Reddit?",
    answer:
      "The demo Reddit search phrase is community speculation language, not an official source. The Steam store page and Steam Community hub remain the only places to confirm a demo announcement.",
    pageIds: ["demo"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "guides-1",
    question: "Where should a new Rivage player start?",
    answer:
      "Start at the Rivage beginner guide for the Rivage core loop and the Rivage early progression priorities. Move into the Rivage walkthrough once the Rivage first-session systems feel familiar.",
    pageIds: ["guides", "beginner-guide"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "guides-2",
    question: "Does the Rivage guides hub include a third party wiki?",
    answer:
      "No. The Rivage guides hub does not link to a third party Rivage wiki. Every Rivage guide on this site is written from the Rivage Steam store page, Rivage SteamDB, and the Rivage Steam Community hub.",
    pageIds: ["guides"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "guides-3",
    question: "Are the Rivage guides updated after launch?",
    answer:
      "The Rivage beginner guide and Rivage walkthrough update as the Rivage Steam store page and Rivage Steam Community hub publish new Rivage media, Rivage location notes, and Rivage progression milestones.",
    pageIds: ["guides", "walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "guides-4",
    question: "Can the Rivage guides be used before launch?",
    answer:
      "The Rivage beginner guide and Rivage walkthrough are written as a dated pre-launch framework as of 2026-09-22. Specific Rivage story beats and Rivage location names are added once the Rivage Steam store page or Rivage Steam Community hub confirms them.",
    pageIds: ["guides", "walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "walkthrough-1",
    question: "Is the Rivage walkthrough complete?",
    answer:
      "As of 2026-09-22, this page is a dated pre-launch framework. Specific story beats and location names are added when the Steam store page or Steam Community hub publishes them.",
    pageIds: ["walkthrough", "guides"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "walkthrough-2",
    question: "Will the Rivage walkthrough be updated after launch?",
    answer:
      "Yes. The page updates as the Steam store page and Steam Community hub publish new media, story beats, and location names.",
    pageIds: ["walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "walkthrough-3",
    question: "Does the Rivage walkthrough contain spoilers?",
    answer:
      "This framework does not invent story beats or location names. It only organizes what the Steam store page and Steam Community hub have already confirmed as of research date 2026-09-22.",
    pageIds: ["walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "walkthrough-4",
    question: "Where do Rivage walkthrough spoilers get posted first?",
    answer:
      "Spoiler-heavy walkthrough detail lives on the Steam Community hub and in any future developer post. This page stays organized around confirmed facts.",
    pageIds: ["walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "beginner-guide-1",
    question: "Is Rivage good for first-time players?",
    answer:
      "As of 2026-09-22, the Steam store page sets the genre tags and core loop phrase, but the Rivage beginner guide does not rate difficulty. The page focuses on day-one priorities a new player can plan around.",
    pageIds: ["beginner-guide", "guides"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "beginner-guide-2",
    question: "What should a new Rivage player do first?",
    answer:
      "A new player should first read the core loop section and the early progression priorities section before opening the game on launch day. The walkthrough picks up after this Rivage beginner guide.",
    pageIds: ["beginner-guide", "walkthrough"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "beginner-guide-3",
    question: "Do I need to play Rivage before reading this guide?",
    answer:
      "The page is written as a pre-launch framework as of 2026-09-22. A new player can read it before launch and revisit it on day one.",
    pageIds: ["beginner-guide"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "beginner-guide-4",
    question: "Where can I find beginner resources after launch?",
    answer:
      "The Rivage beginner guide updates as the Steam store page and Steam Community hub publish new systems. The gameplay page and walkthrough are the cross-references for any new beginner content.",
    pageIds: ["beginner-guide", "gameplay-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gameplay-1",
    question: "What kind of game is Rivage?",
    answer:
      "Rivage is described on the Rivage Steam store page (AppID 4094660) using the Rivage genre tags and Rivage core loop phrase published by the developer. Those tags and that phrase are the only confirmed Rivage genre sources on this site as of 2026-09-22.",
    pageIds: ["gameplay-overview", "faq"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gameplay-2",
    question: "Is Rivage a single player or multiplayer game?",
    answer:
      "The Rivage Steam store page describes Rivage gameplay in single-player pacing terms as of research date 2026-09-22. A Rivage multiplayer mode has not been published on the Rivage Steam store page or Rivage Steam Community hub.",
    pageIds: ["gameplay-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gameplay-3",
    question: "Does Rivage use AI systems?",
    answer:
      "The 'rivage game ai' autocomplete suggestion is search language only as of 2026-09-22. The Rivage Steam store page does not yet publish any Rivage AI system as a Rivage gameplay fact.",
    pageIds: ["gameplay-overview"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "gameplay-4",
    question: "Is Rivage the same as Beau Rivage or Le Rivage?",
    answer:
      "No. Rivage is the Steam game Rivage (AppID 4094660). Beau Rivage is a hotel and casino, Le Rivage is a NYC restaurant, and Yamaha Rivage is a digital mixing console line. None of those Rivage namesakes are Rivage gameplay facts.",
    pageIds: ["gameplay-overview"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trailer-1",
    question: "Where can I watch the Rivage trailer?",
    answer:
      "Watch the Rivage trailer on the Steam store page for AppID 4094660 or in the Steam Community hub. SteamDB mirrors the trailer list as a cross-check.",
    pageIds: ["trailer-and-media"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trailer-2",
    question: "Does Rivage have a gameplay trailer?",
    answer:
      "Gameplay footage appears on the Steam store page alongside the trailer. Any gameplay clip shared on the Steam Community hub is also media as long as the post is an official source.",
    pageIds: ["trailer-and-media"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trailer-3",
    question: "Has the developer posted a launch trailer?",
    answer:
      "A launch trailer is not confirmed separately from the existing media on the Steam store page as of 2026-09-22. When one is published, it shows up on the Steam store page media block first.",
    pageIds: ["trailer-and-media", "release-date"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "trailer-4",
    question: "Is there a Rivage trailer on YouTube or social media?",
    answer:
      "The trailer and gameplay footage are not promised on any third party platform by this site as of 2026-09-22. The Steam store page and Steam Community hub are the only confirmed sources.",
    pageIds: ["trailer-and-media"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
];
