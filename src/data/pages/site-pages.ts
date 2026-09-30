import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const sitePages: PageContent[] = [
  {
    "id": "faq",
    "translationKey": "faq",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "faq",
    "url": "/faq",
    "pageType": "faq",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "Rivage FAQ",
    "seoTitle": "Rivage FAQ | Common Questions",
    "metaDescription": "Common questions about Rivage pre-launch coverage: Steam release date, platforms, demo status, and where to read Rivage guides.",
    "summary": "Quick answers to launch questions about the Rivage Steam store page (AppID 4094660) and dated community context as of 2026-09-22.",
    "hero": {
      "eyebrow": "FAQ",
      "subtitle": "Quick answers to launch questions about Rivage on Steam (AppID 4094660).",
      "ctas": [
        {
          "label": "Release Info",
          "href": "/release-date"
        },
        {
          "label": "Contact",
          "href": "/contact"
        }
      ]
    },
    "quickAnswer": "Answers below are sourced from the Steam store page for Rivage AppID 4094660, the SteamDB listing, and the Steam Community hub discussion.",
    "keyFacts": [
      {
        "label": "FAQ source",
        "value": "Steam store page + SteamDB"
      },
      {
        "label": "Schema",
        "value": "FAQ JSON-LD enabled"
      },
      {
        "label": "Review",
        "value": "Update as launch facts change"
      }
    ],
    "modules": [
      {
        "id": "faq-policy",
        "type": "prose",
        "heading": "About this FAQ",
        "body": "Keep answers short, source-aware, and easy to update. Avoid speculative claims about release dates, platforms, gameplay systems, or technical details. Every Rivage answer is anchored to the Rivage Steam store page (AppID 4094660) or Rivage Steam Community hub discussion."
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
      "about"
    ],
    "schemaTypes": [
      "FAQPage",
      "BreadcrumbList"
    ],
    "sourceStatus": "official",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "about",
    "translationKey": "about",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "about",
    "url": "/about",
    "pageType": "site",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "About Rivage",
    "seoTitle": "About Rivage",
    "metaDescription": "About the Rivage pre-launch reference hub: scope, sourcing, and editorial principles for this unofficial guide site.",
    "summary": "A trust page explaining the Rivage hub's unofficial status, sourcing rules, and guide scope.",
    "hero": {
      "eyebrow": "About",
      "subtitle": "What this Rivage site covers, how facts are sourced, and what readers should expect before launch.",
      "ctas": [
        {
          "label": "Contact",
          "href": "/contact"
        }
      ]
    },
    "quickAnswer": "This site is an unofficial Rivage pre-launch reference hub for US English search users, built from the Rivage Steam store page (AppID 4094660), the Rivage SteamDB listing, and the Rivage Steam Community hub discussion.",
    "keyFacts": [
      {
        "label": "Status",
        "value": "Unofficial fan guide"
      },
      {
        "label": "Editorial rule",
        "value": "Verified Steam facts first"
      },
      {
        "label": "Scope",
        "value": "Release date, platforms, demo, guides, gameplay, trailer"
      }
    ],
    "modules": [
      {
        "id": "mission",
        "type": "prose",
        "heading": "Mission",
        "body": "Help US English search users confirm Rivage pre-launch status, navigate Rivage platform and demo questions, and access Rivage guides that stay anchored to the Rivage Steam store page (AppID 4094660)."
      },
      {
        "id": "sourcing",
        "type": "prose",
        "heading": "Sourcing",
        "body": "All Rivage current-game facts come from the Rivage Steam store page, the Rivage SteamDB listing, and dated Rivage Steam Community hub discussion. Unannounced Rivage areas (console releases, demo, system requirements) are flagged as such rather than guessed."
      }
    ],
    "faqIds": [
      "home-1",
      "home-2"
    ],
    "relatedPageIds": [
      "contact",
      "privacy-policy",
      "terms"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList",
      "FAQPage"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "contact",
    "translationKey": "contact",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "contact",
    "url": "/contact",
    "pageType": "site",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "Contact",
    "seoTitle": "Contact | Rivage",
    "metaDescription": "Contact page for corrections, official source updates, and site feedback on the Rivage pre-launch hub.",
    "summary": "A trust page for corrections, source updates, and site feedback.",
    "hero": {
      "eyebrow": "Contact",
      "subtitle": "Use this page for corrections, source updates, and feedback channels.",
      "ctas": [
        {
          "label": "Read About",
          "href": "/about"
        }
      ]
    },
    "quickAnswer": "Use the contact channel on this page to send corrections, official source links, or feedback about the Rivage pre-launch hub.",
    "keyFacts": [
      {
        "label": "Primary use",
        "value": "Corrections and feedback"
      },
      {
        "label": "Recommended channel",
        "value": "Email address listed below"
      },
      {
        "label": "Response",
        "value": "Set expectations clearly"
      }
    ],
    "modules": [
      {
        "id": "contact-method",
        "type": "prose",
        "heading": "Contact method",
        "body": "Reach the maintainers via the email address or contact form listed in the footer. The contact channel is for corrections, official source links, and feedback only."
      },
      {
        "id": "corrections",
        "type": "prose",
        "heading": "Corrections",
        "body": "Invite readers to send official source links when facts change. Do not ask for private account information or game account credentials."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [
      "about",
      "privacy-policy",
      "terms"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-06-18"
  },
  {
    "id": "privacy-policy",
    "translationKey": "privacy-policy",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "privacy-policy",
    "url": "/privacy-policy",
    "pageType": "site",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "Privacy Policy",
    "seoTitle": "Privacy Policy | Rivage",
    "metaDescription": "Privacy policy for the Rivage pre-launch reference hub: analytics, hosting, and contact channels for this lightweight guide site.",
    "summary": "A starter privacy policy page for analytics, logs, and contact messages.",
    "hero": {
      "eyebrow": "Privacy",
      "subtitle": "What data this Rivage site collects, why it is used, and how visitors can make contact.",
      "ctas": [
        {
          "label": "Terms",
          "href": "/terms"
        }
      ]
    },
    "quickAnswer": "This privacy policy describes what the Rivage pre-launch reference hub collects (analytics when configured, hosting logs, contact messages) and what it does not collect (accounts, payments).",
    "keyFacts": [
      {
        "label": "Analytics",
        "value": "GA4 only when configured"
      },
      {
        "label": "Accounts",
        "value": "No user accounts"
      },
      {
        "label": "Ads",
        "value": "Adsterra only when enabled"
      }
    ],
    "modules": [
      {
        "id": "data",
        "type": "prose",
        "heading": "Information we collect",
        "body": "This Rivage hub does not include accounts, comments, or payments. If GA4 is configured, analytics may collect aggregate usage information according to Google Analytics settings. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads."
      },
      {
        "id": "contact",
        "type": "prose",
        "heading": "Contact messages",
        "body": "If a contact method is added, messages may include the information visitors choose to send. Do not request sensitive personal information."
      },
      {
        "id": "updates",
        "type": "prose",
        "heading": "Policy updates",
        "body": "Update this policy when analytics, hosting, contact methods, advertising providers, or other data collection behavior changes."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [
      "about",
      "contact",
      "terms"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-22"
  },
  {
    "id": "terms",
    "translationKey": "terms",
    "locale": "en-US",
    "routeKind": "fixed",
    "slug": "terms",
    "url": "/terms",
    "pageType": "site",
    "presentation": {
      "shell": "content",
      "variant": "reading-full"
    },
    "h1": "Terms of Use",
    "seoTitle": "Terms of Use | Rivage",
    "metaDescription": "Terms of use for the Rivage pre-launch hub: scope, disclaimers, and acceptable use for this unofficial game guide site.",
    "summary": "A terms of use page covering scope, disclaimers, and acceptable use for an unofficial guide site.",
    "hero": {
      "eyebrow": "Terms",
      "subtitle": "Set clear expectations for unofficial status, informational use, and site changes.",
      "ctas": [
        {
          "label": "Privacy Policy",
          "href": "/privacy-policy"
        }
      ]
    },
    "quickAnswer": "Use the Rivage pre-launch hub for informational research only. The site is not affiliated with the Rivage publisher, Rivage developer, or platform holders.",
    "keyFacts": [
      {
        "label": "Use",
        "value": "Informational guide content"
      },
      {
        "label": "Official status",
        "value": "Unofficial fan site"
      },
      {
        "label": "Maintenance",
        "value": "Updated as facts change"
      }
    ],
    "modules": [
      {
        "id": "unofficial",
        "type": "prose",
        "heading": "Unofficial site",
        "body": "This Rivage site is not affiliated with the Rivage publisher, Rivage developer, Steam, Sony, Microsoft, Nintendo, or trademark owners unless explicitly stated after launch."
      },
      {
        "id": "accuracy",
        "type": "prose",
        "heading": "Information accuracy",
        "body": "Rivage guide information may change as official details are updated. Use the Rivage Steam store page for final purchase, platform, and release decisions."
      },
      {
        "id": "acceptable-use",
        "type": "prose",
        "heading": "Acceptable use",
        "body": "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any future contact channel."
      }
    ],
    "faqIds": [],
    "relatedPageIds": [
      "about",
      "contact",
      "privacy-policy"
    ],
    "schemaTypes": [
      "Article",
      "BreadcrumbList"
    ],
    "sourceStatus": "internal",
    "lastReviewed": "2026-09-22"
  }
];
