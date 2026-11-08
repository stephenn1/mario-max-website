import type { ArticleContent } from "./types";
import { officialLinks } from "@/content/official-links";

/** English article content — educational drafts for the school to review. */
export const articlesEn: Record<string, ArticleContent> = {
  "habits-that-help-you-learn-german": {
    title: "Habits that can help you learn German",
    excerpt:
      "A short, practical guide to building steady momentum in your German studies, with habits you can start using this week.",
    blocks: [
      {
        type: "p",
        text: "Learning a new language is less about talent and more about consistent, well-chosen habits. Small actions repeated daily tend to beat occasional bursts of effort. Below are five habits that help students build momentum in their German.",
      },
      { type: "h2", text: "1. Practise a little, every day" },
      {
        type: "p",
        text: "Fifteen focused minutes a day is often more effective than a single long session once a week. Short, regular practice keeps new vocabulary fresh and makes grammar patterns feel natural over time.",
      },
      {
        type: "quote",
        text: "Regular practice often helps more than occasional bursts — many learners find that showing up consistently makes a real difference over time.",
      },
      { type: "h2", text: "2. Speak from the very beginning" },
      {
        type: "p",
        text: "You don't need to wait until you feel ready to speak. Saying simple sentences out loud, even imperfectly, trains your mouth and your confidence at the same time.",
      },
      {
        type: "tip",
        items: [
          "Describe your day in German, one sentence at a time.",
          "Name objects around you as you see them.",
          "Repeat short phrases after audio until they feel comfortable.",
        ],
      },
      { type: "h2", text: "3. Learn words in context" },
      {
        type: "p",
        text: "Isolated word lists are hard to remember. Learning vocabulary inside short phrases or sentences gives each word a place to live in your memory.",
      },
      { type: "h2", text: "4. Review on a schedule" },
      {
        type: "p",
        text: "Spaced review — coming back to material after a day, then a few days, then a week — helps move language from short-term to long-term memory. Flashcards make this easy.",
      },
      { type: "h2", text: "5. Make it enjoyable" },
      {
        type: "p",
        text: "Finally, choose practice you actually like. Songs, short videos, simple stories and games all count. The habit you enjoy is the habit you'll keep.",
      },
    ],
  },
  "understanding-ausbildung": {
    title: "Understanding Ausbildung: a beginner's overview",
    excerpt: "What vocational training in Germany is, how it works and why German matters.",
    blocks: [
      {
        type: "p",
        text: "Ausbildung is the German word for vocational training. It is one of the most common routes into a skilled occupation in Germany, and many learners are curious about how it works. Here is a short, general overview.",
      },
      { type: "h2", text: "What is an Ausbildung?" },
      {
        type: "p",
        text: "Most Ausbildung programmes follow the dual system: trainees spend part of their time working in a company and part of their time at a vocational school (Berufsschule). Training usually lasts between two and three and a half years, depending on the occupation.",
      },
      {
        type: "p",
        text: "There are training programmes for many occupations — from healthcare and hospitality to trades, technology and business.",
      },
      { type: "h2", text: "Why German matters" },
      {
        type: "p",
        text: "Work in the company and lessons at the vocational school take place in German. Trainees need to follow instructions, talk to colleagues and customers, and pass examinations in German. Companies and schools set their own expectations, so the level needed varies.",
      },
      {
        type: "quote",
        text: "The stronger your German, the more comfortable you will be in both parts of the training — at work and in class.",
      },
      { type: "h2", text: "How to start your research" },
      {
        type: "ul",
        items: [
          "Find out about the occupations that interest you and what the training involves.",
          "Read the official information on vocational training for international applicants.",
          "Check current entry and visa requirements with the official authorities — they can change.",
          "Keep building your German step by step.",
        ],
      },
      {
        type: "sources",
        items: [
          { label: "Make it in Germany — vocational training", href: officialLinks.ausbildung.en },
          { label: "German Missions in Nigeria", href: officialLinks.visa.en },
        ],
      },
      {
        type: "p",
        text: "This article is general information, not immigration or legal advice. Always confirm current requirements with the relevant official authorities.",
      },
    ],
  },
  "der-die-das-remembering-articles": {
    title: "Der, die, das: a simple way to remember articles",
    excerpt: "Practical tricks for learning German noun genders.",
    blocks: [
      {
        type: "p",
        text: "Every German noun has a gender — masculine (der), feminine (die) or neuter (das). For many learners this is one of the first big surprises. The good news: with a few habits and patterns, articles become much easier.",
      },
      { type: "h2", text: "1. Always learn the noun with its article" },
      {
        type: "p",
        text: "Don't learn Tisch — learn der Tisch. Saying the article and the noun together, out loud, helps them stick as one unit.",
      },
      { type: "h2", text: "2. Use colours" },
      {
        type: "p",
        text: "Many learners colour-code their notes: blue for der, red for die and green for das. When you picture the word, you also picture its colour.",
      },
      { type: "h2", text: "3. Learn the helpful patterns" },
      {
        type: "ul",
        items: [
          "Nouns ending in -ung, -heit, -keit, -schaft and -ion are feminine: die Zeitung, die Freiheit.",
          "Nouns ending in -chen and -lein are neuter: das Mädchen, das Brötchen.",
          "Days, months and seasons are masculine: der Montag, der Mai, der Sommer.",
        ],
      },
      { type: "h2", text: "4. Remember the plural" },
      {
        type: "p",
        text: "In the plural, every noun uses die: der Tisch → die Tische, das Buch → die Bücher.",
      },
      {
        type: "quote",
        text: "Patterns help, but there are exceptions. Learning each noun with its article is still the most reliable method.",
      },
      { type: "h2", text: "5. Practise little and often" },
      {
        type: "p",
        text: "Short, regular practice with flashcards or quizzes keeps articles fresh. Try the der, die, das quiz in our learning resources.",
      },
    ],
  },
  "studying-in-germany-where-to-begin": {
    title: "Studying in Germany: where to begin",
    excerpt: "An overview of study options and how German fits in.",
    blocks: [
      {
        type: "p",
        text: "Germany is a popular study destination for international students. If you are thinking about studying there, this overview explains the basics and the role German plays. It is general information only.",
      },
      { type: "h2", text: "Types of institutions" },
      {
        type: "p",
        text: "Germany has universities, which tend to focus on academic and research-oriented study, and universities of applied sciences, which tend to focus on practical, career-oriented study. There are also colleges of art, film and music.",
      },
      { type: "h2", text: "Programmes in German and English" },
      {
        type: "p",
        text: "Many programmes are taught in German, and some — particularly at master's level — are taught in English. For German-taught programmes, universities usually ask for proof of German language skills. Which certificates and levels they accept depends on the university and the programme.",
      },
      {
        type: "quote",
        text: "Even on an English-taught programme, German helps with everyday life, part-time work and making friends.",
      },
      { type: "h2", text: "First steps" },
      {
        type: "ul",
        items: [
          "Decide what and where you would like to study.",
          "Check the entry requirements of each programme on the university's own website.",
          "Find out which language certificates are accepted, and at which level.",
          "Read the official information on studying and visas — and plan early.",
        ],
      },
      {
        type: "sources",
        items: [
          { label: "Study in Germany (DAAD)", href: officialLinks.study.en },
          { label: "German Missions in Nigeria", href: officialLinks.visa.en },
        ],
      },
      {
        type: "p",
        text: "Requirements change and vary between institutions. Always check the latest information with the university and the official authorities.",
      },
    ],
  },
  "speaking-exercises-at-home": {
    title: "Five speaking exercises you can do at home",
    excerpt: "Build fluency between lessons with these simple drills.",
    blocks: [
      {
        type: "p",
        text: "Speaking is often the skill learners practise least — especially outside class. These five exercises need no partner and only a few minutes a day.",
      },
      { type: "h2", text: "1. Talk to yourself" },
      {
        type: "p",
        text: "Describe what you are doing as you do it: Ich koche Reis. Ich trinke Wasser. Simple sentences like these build automatic speech.",
      },
      { type: "h2", text: "2. Shadowing" },
      {
        type: "p",
        text: "Play a short German audio clip, pause after each sentence and repeat it, copying the rhythm and melody as closely as you can.",
      },
      { type: "h2", text: "3. Describe a picture" },
      {
        type: "p",
        text: "Choose any photo and describe it in German for one minute: who is in it, where they are and what they are doing.",
      },
      { type: "h2", text: "4. Record yourself" },
      {
        type: "p",
        text: "Record a short answer to a question such as Was hast du am Wochenende gemacht? Listen back and note one thing to improve.",
      },
      { type: "h2", text: "5. Prepare mini-dialogues" },
      {
        type: "p",
        text: "Write and practise short dialogues for real situations — ordering food, asking for directions or introducing yourself.",
      },
      {
        type: "tip",
        items: [
          "Set a timer for five minutes a day.",
          "Speak out loud — whispering doesn't count!",
          "Use the Listen buttons in our learning resources to compare your pronunciation.",
        ],
      },
    ],
  },
};
