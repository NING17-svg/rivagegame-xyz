import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
  children?: LocalizedNavigationItem[];
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/guides", labels: { "en-US": "Guides" }, children: [
    { href: "/guides/walkthrough", labels: { "en-US": "Parts 1–4 walkthrough" } },
    { href: "/guides/beginner", labels: { "en-US": "Beginner guide" } },
  ] },
  { href: "/gameplay", labels: { "en-US": "Game information" }, children: [
    { href: "/release-date", labels: { "en-US": "Release date" } },
    { href: "/platforms", labels: { "en-US": "Platforms" } },
    { href: "/system-requirements", labels: { "en-US": "PC requirements" } },
    { href: "/trailer", labels: { "en-US": "Trailer" } },
  ] },
  { href: "/demo", labels: { "en-US": "Demo" } },
  { href: "/faq", labels: { "en-US": "FAQ" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}
