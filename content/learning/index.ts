import type { Locale } from "@/i18n/config";
import { learningEn } from "./en";
import { learningDe } from "./de";
import { topicSlugs, type LearningContent, type TopicSlug } from "./types";

export const learning: Record<Locale, LearningContent> = { en: learningEn, de: learningDe };

export function isTopicSlug(value: string): value is TopicSlug {
  return (topicSlugs as readonly string[]).includes(value);
}

export { topicSlugs };
export type { TopicSlug };
