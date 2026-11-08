/**
 * Confirmed school information — the single source of truth.
 * Only add details here once the school has confirmed them.
 */

export type SocialLink = {
  network: "facebook" | "instagram" | "youtube" | "x" | "tiktok" | "linkedin";
  url: string;
};

export const site = {
  name: "Mario-Max German Language School Nig Ltd.",
  brand: "Mario-Max",
  shortName: "Mario-Max German Language School",

  address: {
    full: "Blue and Yellow Plaza, Gado Nasko Road, Kubwa, Abuja, FCT, Nigeria",
    short: "Blue and Yellow Plaza, Gado Nasko Road, Kubwa, Abuja",
    street: "Blue and Yellow Plaza, Gado Nasko Road",
    locality: "Kubwa",
    city: "Abuja",
    region: "FCT",
    country: "Nigeria",
    countryCode: "NG",
  },

  phone: {
    display: "+234 906 125 4572",
    e164: "+2349061254572",
  },

  /** WhatsApp uses the same confirmed number (digits only, no "+"). */
  whatsapp: "2349061254572",

  email: "mariomaxglsict@gmail.com",

  /** Monday–Saturday, 7:30 AM – 8:00 PM (24-hour values for structured data). */
  hours: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "07:30",
    closes: "20:00",
  },

  /** Add verified social media accounts here. Icons only render for entries in this list. */
  social: [] as SocialLink[],

  map: {
    /**
     * A Google Maps "Embed a map" URL for the verified school location.
     * When set, location sections offer a click-to-load interactive map.
     * Leave null until the exact location has been confirmed.
     */
    embedUrl: null as string | null,
    /** The school's verified Google Maps place link, if available. */
    placeUrl: null as string | null,
  },
} as const;
