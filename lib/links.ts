import { site } from "@/content/site";

export const telHref = `tel:${site.phone.e164}`;

export function mailtoHref(subject?: string, body?: string): string {
  const params = new URLSearchParams();
  if (subject) params.set("subject", subject);
  if (body) params.set("body", body);
  const query = params.toString().replace(/\+/g, "%20");
  return `mailto:${site.email}${query ? `?${query}` : ""}`;
}

export function whatsappHref(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

/** Opens Google Maps searching for the confirmed address (or the verified place link). */
export const mapsSearchHref =
  site.map.placeUrl ??
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address.full)}`;

/** Opens Google Maps directions to the confirmed address. */
export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  site.address.full,
)}`;
