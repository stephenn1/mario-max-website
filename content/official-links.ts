/**
 * Official sources linked from the Germany Guide and articles.
 * Verified to resolve on 8 November 2026. Recheck periodically.
 */
export const officialLinks = {
  study: {
    en: "https://www.study-in-germany.com/en/",
    de: "https://www.study-in-germany.com/de/",
  },
  visa: {
    en: "https://nigeria.diplo.de/ng-en",
    de: "https://nigeria.diplo.de/ng-de",
  },
  ausbildung: {
    en: "https://www.make-it-in-germany.com/en/study-vocational-training/training-in-germany",
    de: "https://www.make-it-in-germany.com/de/studium-ausbildung/ausbildung-in-deutschland",
  },
  exams: {
    en: "https://www.goethe.de/en/spr/prf.html",
    de: "https://www.goethe.de/de/spr/prf.html",
  },
} as const;

export type OfficialLinkKey = keyof typeof officialLinks;
