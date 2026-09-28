import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "Rivage",
  brandMark: "RV",
  gameName: "Rivage",
  domain: "rivagegame.xyz",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://rivagegame.xyz").replace(/\/$/, ""),
  description:
    "Rivage launch hub: release status, platforms, demo availability, walkthrough, and beginner guidance for US English search users.",
  tagline: "Rivage release status, platforms, demo, walkthrough, and beginner guides.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "Rivage Pre-Launch Reference Hub",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "Rivage on Steam (AppID 4094660, planned release Sep 22, 2026)",
      href: "https://store.steampowered.com/app/4094660",
      description: "Official Steam store page for Rivage, primary current-game source.",
    },
  ],
  disclaimer:
    "This is an unofficial Rivage pre-launch reference hub built from public Steam store, SteamDB, and dated media coverage. Facts are dated to research date 2026-09-22.",
};
