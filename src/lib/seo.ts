import { siteConfig } from '../config/site';

/** Directory-style paths (`/guides/slug/`) for HTML pages. Files such as `/rss.xml` stay as-is. */
export function canonicalPath(pathname: string): string {
  const raw = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const qIndex = raw.indexOf('?');
  const bare = qIndex === -1 ? raw : raw.slice(0, qIndex);
  const query = qIndex === -1 ? '' : raw.slice(qIndex);
  if (bare !== '/' && /\.[a-z0-9]+$/i.test(bare)) return `${bare}${query}`;
  const slashed = bare === '/' || bare.endsWith('/') ? bare : `${bare}/`;
  return `${slashed}${query}`;
}

export function absoluteUrl(pathname: string): string {
  return new URL(canonicalPath(pathname), siteConfig.url).toString();
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

/**
 * Markdown heading text is sometimes already entity-encoded.
 * Decode it before Astro escapes the string again, or the page shows a literal `&amp;`.
 */
export function unescapeHeading(text: string): string {
  return text
    .replaceAll('&amp;', '&')
    .replaceAll('&#38;', '&')
    .replaceAll('&#x26;', '&')
    .replaceAll('&AMP;', '&');
}

export const defaultOgImage = absoluteUrl('/og-default.png');
