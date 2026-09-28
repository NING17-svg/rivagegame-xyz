import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  { href: "/release-date", labels: { "en-US": "Release Date" } },
  { href: "/platforms", labels: { "en-US": "Platforms" } },
  { href: "/demo", labels: { "en-US": "Demo" } },
  { href: "/guides", labels: { "en-US": "Guides" } },
  { href: "/gameplay", labels: { "en-US": "Gameplay" } },
  { href: "/system-requirements", labels: { "en-US": "System Requirements" } },
  { href: "/trailer", labels: { "en-US": "Trailer" } },
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
