/**
 * The public site URL, used for canonical links, hreflang alternates,
 * Open Graph URLs, the sitemap and robots.txt.
 *
 * No production domain has been registered yet, so nothing is invented:
 * - Set NEXT_PUBLIC_SITE_URL (e.g. "https://www.example.com") once the
 *   domain exists to enable all domain-dependent metadata.
 * - During `next dev` only, localhost is used so the metadata can be checked.
 * - Otherwise this returns undefined and domain-dependent tags are omitted.
 */
export function getSiteUrl(): URL | undefined {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  if (configured) {
    try {
      return new URL(configured);
    } catch {
      // Ignore malformed values rather than emitting broken URLs.
    }
  }
  if (process.env.NODE_ENV === "development") {
    return new URL("http://localhost:3000");
  }
  return undefined;
}
