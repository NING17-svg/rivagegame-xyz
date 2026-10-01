import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const wikiPages: PageContent[] = [
  {
    "id": "wiki",
    "translationKey": "wiki",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "wiki-archive",
    "url": "/wiki-archive",
    "pageType": "wiki",
    "presentation": {
      "shell": "hub"
    },
    "h1": "Rivage Reference Index",
    "seoTitle": "Rivage Reference Index",
    "metaDescription": "Reference index for the Rivage pre-launch hub: release status, platforms, demo, guides, gameplay, system requirements, and trailer pages.",
    "summary": "Reference index covering the Rivage release status, platforms, demo news, guides, gameplay, system requirements, and trailer coverage.",
    "hero": {
      "eyebrow": "Reference",
      "subtitle": "Reference index covering the Rivage release status, platforms, demo, guides, gameplay, system requirements, and trailer coverage.",
      "ctas": [
        {
          "label": "Release Date",
          "href": "/release-date"
        },
        {
          "label": "Platforms",
          "href": "/platforms"
        }
      ]
    },
    "quickAnswer": "This reference index lists every dedicated Rivage coverage page on this hub, including the release date, platforms, demo, guides, gameplay, system requirements, and trailer pages.",
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
        "label": "Source rule",
        "value": "Steam store page + SteamDB"
      }
    ],
    "modules": [
      {
        "id": "wiki-index-note",
        "type": "prose",
        "heading": "About this index",
        "body": "The Rivage pre-launch reference hub organizes release status, platforms, demo news, gameplay, system requirements, and trailer coverage into dedicated pages instead of a generic wiki."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [
      "release-date",
      "platforms",
      "guides"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-22"
  }
]