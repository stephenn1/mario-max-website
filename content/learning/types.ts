import type { ArticleCategory } from "@/content/articles/meta";
import type { IconName } from "@/components/ui/icon";

export type QuizQuestion = {
  prompt: string;
  options: string[];
  /** Index of the correct option. */
  answer: number;
};

export type QuizSet = {
  id: string;
  title: string;
  questions: QuizQuestion[];
};

export type Flashcard = { front: string; back: string };

export type Deck = { id: string; title: string; cards: Flashcard[] };

export type NoteKey =
  | "informal"
  | "formal"
  | "plural"
  | "pluralInformal"
  | "formalSie"
  | "masculine"
  | "feminine"
  | "neuter"
  | "normalOrder"
  | "verbEnd";

export type WordRow = { de: string; gloss: string; note?: NoteKey };

export type TopicBlock =
  | { type: "text"; id?: string; title?: string; paragraphs: string[] }
  | { type: "words"; id?: string; title: string; intro?: string; rows: WordRow[]; speak?: boolean }
  | { type: "sounds"; id?: string; title: string; rows: { sound: string; example: string; tip: string }[] }
  | { type: "list"; id?: string; title: string; items: string[] }
  | { type: "quiz"; id?: string; title: string; setId: string }
  | { type: "flashcards"; id?: string; title: string; deckId: string }
  | {
      type: "reading";
      id?: string;
      title: string;
      level: string;
      paragraphs: string[];
      glossary?: WordRow[];
      quizSetId?: string;
    }
  | { type: "prompts"; id?: string; title: string; groups: { level: string; items: string[] }[] }
  | { type: "articles"; id?: string; title: string; category: ArticleCategory };

export const topicSlugs = [
  "vocabulary",
  "grammar",
  "pronunciation",
  "everyday-expressions",
  "reading",
  "writing",
  "listening-speaking",
  "learning-tips",
] as const;

export type TopicSlug = (typeof topicSlugs)[number];

export type Topic = {
  slug: TopicSlug;
  icon: IconName;
  title: string;
  summary: string;
  lead: string;
  keywords: string[];
  blocks: TopicBlock[];
};

export type PracticeItem = {
  level: string;
  title: string;
  type: string;
  href: string;
  keywords: string[];
};

export type LearningContent = {
  /** Column headers for word tables. */
  columns: { german: string; meaning: string; note: string; sound: string; example: string; tip: string };
  glossaryTitle: string;
  notes: Record<NoteKey, string>;
  topics: Topic[];
  practice: PracticeItem[];
  quizzes: QuizSet[];
  decks: Deck[];
};
