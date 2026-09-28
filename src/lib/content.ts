import type { FAQItem, PageContent, RouteKind } from "@/types/content";
import { entityFamilies } from "@/data/entities";
import { faqItems } from "@/data/faq";
import { homePage } from "@/data/pages/home";
import { page_release_date } from "@/data/pages/page_release_date";
import { page_platforms } from "@/data/pages/page_platforms";
import { page_system_requirements } from "@/data/pages/page_system_requirements";
import { page_demo } from "@/data/pages/page_demo";
import { page_guides_hub } from "@/data/pages/page_guides_hub";
import { page_walkthrough } from "@/data/pages/page_walkthrough";
import { page_beginner_guide } from "@/data/pages/page_beginner_guide";
import { page_gameplay_overview } from "@/data/pages/page_gameplay_overview";
import { page_trailer_and_media } from "@/data/pages/page_trailer_and_media";
import { sitePages } from "@/data/pages/site-pages";
import { wikiPages } from "@/data/pages/wiki-pages";
import { buildEntityPages } from "@/lib/entities";
import { normalizePath } from "@/lib/localization";

const fixedPages: PageContent[] = [
  homePage,
  page_release_date,
  page_platforms,
  page_system_requirements,
  page_demo,
  page_guides_hub,
  page_walkthrough,
  page_beginner_guide,
  page_gameplay_overview,
  page_trailer_and_media,
  ...sitePages,
  ...wikiPages,
];

const pages: PageContent[] = [
  ...fixedPages,
  ...buildEntityPages(entityFamilies),
];

export interface FinalRouteManifestEntry {
  id: string;
  translationKey: string;
  locale: string;
  routeKind: RouteKind;
  url: string;
  alternates: Record<string, string>;
}

export function getAllPages(): PageContent[] {
  return pages;
}

export function getIndexablePages(): PageContent[] {
  return pages;
}

export function getPageByUrl(url: string): PageContent | undefined {
  const normalized = normalizePath(url);
  return pages.find((page) => page.url === normalized);
}

export function getPageBySlug(slug: string): PageContent | undefined {
  const normalizedSlug = slug.replace(/^\/+|\/+$/g, "");
  return pages.find((page) => page.slug === normalizedSlug);
}

export function getPageById(id: string): PageContent | undefined {
  return pages.find((page) => page.id === id);
}

export function getLanguageAlternates(
  page: PageContent,
  sourcePages: PageContent[] = pages,
): Record<string, string> {
  return Object.fromEntries(
    sourcePages
      .filter((candidate) => candidate.translationKey === page.translationKey)
      .map((candidate) => [candidate.locale, candidate.url]),
  );
}

export function getFinalRouteManifest(
  sourcePages: PageContent[] = pages,
): FinalRouteManifestEntry[] {
  return sourcePages
    .map((page) => ({
      id: page.id,
      translationKey: page.translationKey,
      locale: page.locale,
      routeKind: page.routeKind,
      url: page.url,
      alternates: getLanguageAlternates(page, sourcePages),
    }))
    .sort((left, right) => left.url.localeCompare(right.url));
}

export function getRelatedPages(page: PageContent): PageContent[] {
  return page.relatedPageIds
    .map((id) => getPageById(id))
    .filter((value): value is PageContent => value !== undefined);
}

export function getFaqsForPage(page: PageContent): FAQItem[] {
  return page.faqIds
    .map((id) => faqItems.find((faq) => faq.id === id))
    .filter((value): value is FAQItem => value !== undefined);
}

export function getRecentUpdates(
  locale?: string,
  limit = 5,
  fallback: PageContent[] = [],
): PageContent[] {
  const source = fallback.length > 0 ? fallback : pages;
  const reviewed = source
    .filter((page) => (locale ? page.locale === locale : true))
    .filter((page) => page.routeKind !== "home")
    .filter((page) => page.pageType !== "site" && page.pageType !== "faq")
    .sort((left, right) => {
      const dateDiff = right.lastReviewed.localeCompare(left.lastReviewed);
      if (dateDiff !== 0) return dateDiff;
      return left.id.localeCompare(right.id);
    });
  return reviewed.slice(0, limit);
}
