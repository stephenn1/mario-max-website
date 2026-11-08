import { site } from "@/content/site";
import { getSiteUrl } from "./site-url";

/** Renders a JSON-LD script tag, escaping "<" to prevent script injection. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

/** Structured data for the school, using only confirmed information. */
export function schoolJsonLd(description: string): Record<string, unknown> {
  const siteUrl = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: site.name,
    description,
    ...(siteUrl ? { url: siteUrl.toString() } : {}),
    email: site.email,
    telephone: site.phone.e164,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: `${site.address.city}, ${site.address.region}`,
      addressCountry: site.address.countryCode,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: site.hours.days,
        opens: site.hours.opens,
        closes: site.hours.closes,
      },
    ],
  };
}
