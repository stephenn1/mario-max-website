import type { Dictionary } from "../types";
import { common } from "./common";
import { home } from "./home";
import { about } from "./about";
import { courses } from "./courses";
import { resources } from "./resources";
import { guide } from "./guide";
import { studentLife } from "./student-life";
import { news } from "./news";
import { contact } from "./contact";
import { privacy } from "./privacy";
import { notFound } from "./not-found";

/**
 * German translations — DRAFT.
 * These must be reviewed by a qualified German speaker. Until then, German
 * pages are kept out of search indexing (see `localeSettings` in i18n/config.ts).
 */
export const de: Dictionary = {
  common,
  home,
  about,
  courses,
  resources,
  guide,
  studentLife,
  news,
  contact,
  privacy,
  notFound,
};
