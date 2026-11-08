import type { WordRow } from "./types";

/**
 * Shared German word lists with English meanings.
 * English glosses are shown in both language versions of the site,
 * because the learning material is written for English-speaking learners.
 */

export const greetings: WordRow[] = [
  { de: "Hallo", gloss: "Hello" },
  { de: "Guten Morgen", gloss: "Good morning" },
  { de: "Guten Tag", gloss: "Hello / Good day" },
  { de: "Guten Abend", gloss: "Good evening" },
  { de: "Gute Nacht", gloss: "Good night" },
  { de: "Tschüss", gloss: "Bye", note: "informal" },
  { de: "Auf Wiedersehen", gloss: "Goodbye", note: "formal" },
  { de: "Danke", gloss: "Thank you" },
  { de: "Bitte", gloss: "Please / You're welcome" },
  { de: "Entschuldigung", gloss: "Excuse me / Sorry" },
  { de: "Ja", gloss: "Yes" },
  { de: "Nein", gloss: "No" },
];

export const numbers: WordRow[] = [
  { de: "null", gloss: "0" },
  { de: "eins", gloss: "1" },
  { de: "zwei", gloss: "2" },
  { de: "drei", gloss: "3" },
  { de: "vier", gloss: "4" },
  { de: "fünf", gloss: "5" },
  { de: "sechs", gloss: "6" },
  { de: "sieben", gloss: "7" },
  { de: "acht", gloss: "8" },
  { de: "neun", gloss: "9" },
  { de: "zehn", gloss: "10" },
  { de: "elf", gloss: "11" },
  { de: "zwölf", gloss: "12" },
  { de: "zwanzig", gloss: "20" },
  { de: "hundert", gloss: "100" },
];

export const days: WordRow[] = [
  { de: "der Montag", gloss: "Monday" },
  { de: "der Dienstag", gloss: "Tuesday" },
  { de: "der Mittwoch", gloss: "Wednesday" },
  { de: "der Donnerstag", gloss: "Thursday" },
  { de: "der Freitag", gloss: "Friday" },
  { de: "der Samstag", gloss: "Saturday" },
  { de: "der Sonntag", gloss: "Sunday" },
];

export const family: WordRow[] = [
  { de: "die Familie", gloss: "the family" },
  { de: "die Mutter", gloss: "the mother" },
  { de: "der Vater", gloss: "the father" },
  { de: "die Eltern", gloss: "the parents", note: "plural" },
  { de: "die Schwester", gloss: "the sister" },
  { de: "der Bruder", gloss: "the brother" },
  { de: "das Kind", gloss: "the child" },
  { de: "die Kinder", gloss: "the children", note: "plural" },
];

export const classroom: WordRow[] = [
  { de: "der Tisch", gloss: "the table" },
  { de: "der Stuhl", gloss: "the chair" },
  { de: "die Tür", gloss: "the door" },
  { de: "das Fenster", gloss: "the window" },
  { de: "das Buch", gloss: "the book" },
  { de: "das Heft", gloss: "the exercise book" },
  { de: "der Stift", gloss: "the pen" },
  { de: "die Tafel", gloss: "the board" },
];

export const introductions: WordRow[] = [
  { de: "Wie heißen Sie?", gloss: "What is your name?", note: "formal" },
  { de: "Wie heißt du?", gloss: "What is your name?", note: "informal" },
  { de: "Ich heiße …", gloss: "My name is …" },
  { de: "Woher kommen Sie?", gloss: "Where are you from?", note: "formal" },
  { de: "Ich komme aus Nigeria.", gloss: "I come from Nigeria." },
  { de: "Ich wohne in Abuja.", gloss: "I live in Abuja." },
  { de: "Wie geht es Ihnen?", gloss: "How are you?", note: "formal" },
  { de: "Wie geht's?", gloss: "How are you?", note: "informal" },
  { de: "Mir geht es gut, danke.", gloss: "I'm fine, thank you." },
  { de: "Freut mich!", gloss: "Nice to meet you!" },
];

export const understanding: WordRow[] = [
  { de: "Ich verstehe das nicht.", gloss: "I don't understand that." },
  { de: "Können Sie das bitte wiederholen?", gloss: "Could you repeat that, please?" },
  { de: "Sprechen Sie bitte langsamer.", gloss: "Please speak more slowly." },
  { de: "Wie sagt man … auf Deutsch?", gloss: "How do you say … in German?" },
  { de: "Was bedeutet …?", gloss: "What does … mean?" },
];

export const outAndAbout: WordRow[] = [
  { de: "Ich hätte gern einen Kaffee.", gloss: "I'd like a coffee, please." },
  { de: "Was kostet das?", gloss: "How much does that cost?" },
  { de: "Die Rechnung, bitte.", gloss: "The bill, please." },
  { de: "Wo ist der Bahnhof?", gloss: "Where is the train station?" },
  { de: "Wie spät ist es?", gloss: "What time is it?" },
];

export const sein: WordRow[] = [
  { de: "ich bin", gloss: "I am" },
  { de: "du bist", gloss: "you are", note: "informal" },
  { de: "er / sie / es ist", gloss: "he / she / it is" },
  { de: "wir sind", gloss: "we are" },
  { de: "ihr seid", gloss: "you are", note: "pluralInformal" },
  { de: "sie / Sie sind", gloss: "they are / you are", note: "formalSie" },
];

export const haben: WordRow[] = [
  { de: "ich habe", gloss: "I have" },
  { de: "du hast", gloss: "you have", note: "informal" },
  { de: "er / sie / es hat", gloss: "he / she / it has" },
  { de: "wir haben", gloss: "we have" },
  { de: "ihr habt", gloss: "you have", note: "pluralInformal" },
  { de: "sie / Sie haben", gloss: "they have / you have", note: "formalSie" },
];

export const wohnen: WordRow[] = [
  { de: "ich wohne", gloss: "I live" },
  { de: "du wohnst", gloss: "you live", note: "informal" },
  { de: "er / sie / es wohnt", gloss: "he / she / it lives" },
  { de: "wir wohnen", gloss: "we live" },
  { de: "ihr wohnt", gloss: "you live", note: "pluralInformal" },
  { de: "sie / Sie wohnen", gloss: "they live / you live", note: "formalSie" },
];

export const articleExamples: WordRow[] = [
  { de: "der Tisch", gloss: "the table", note: "masculine" },
  { de: "die Lampe", gloss: "the lamp", note: "feminine" },
  { de: "das Buch", gloss: "the book", note: "neuter" },
  { de: "die Bücher", gloss: "the books", note: "plural" },
];

export const wordOrder: WordRow[] = [
  { de: "Ich lerne heute Deutsch.", gloss: "I am learning German today." },
  { de: "Heute lerne ich Deutsch.", gloss: "Today I am learning German." },
  { de: "Am Montag habe ich Unterricht.", gloss: "On Monday I have a lesson." },
];

export const connectors: WordRow[] = [
  { de: "und", gloss: "and" },
  { de: "aber", gloss: "but" },
  { de: "oder", gloss: "or" },
  { de: "denn", gloss: "because", note: "normalOrder" },
  { de: "weil", gloss: "because", note: "verbEnd" },
  { de: "zuerst", gloss: "first" },
  { de: "dann", gloss: "then" },
];

export const readingA1Glossary: WordRow[] = [
  { de: "wohnen", gloss: "to live" },
  { de: "möchte", gloss: "would like" },
  { de: "jeden Morgen", gloss: "every morning" },
  { de: "leicht", gloss: "easy" },
  { de: "Spaß machen", gloss: "to be fun" },
];

export const readingA2Glossary: WordRow[] = [
  { de: "aufstehen", gloss: "to get up" },
  { de: "frühstücken", gloss: "to have breakfast" },
  { de: "der Markt", gloss: "the market" },
  { de: "besuchen", gloss: "to visit" },
  { de: "bleiben", gloss: "to stay" },
];

/** German reading texts (identical in both language versions). */
export const readingA1Text: string[] = [
  "Hallo! Ich heiße Amaka. Ich komme aus Nigeria und wohne in Abuja. Ich bin 24 Jahre alt. Ich lerne Deutsch, denn ich möchte in Deutschland studieren.",
  "Jeden Morgen trinke ich Tee und lerne zehn neue Wörter. Am Abend höre ich deutsche Musik. Deutsch ist nicht leicht, aber es macht Spaß!",
];

export const readingA2Text: string[] = [
  "Am Samstag bin ich früh aufgestanden. Zuerst habe ich gefrühstückt, dann bin ich mit dem Bus zum Markt gefahren. Dort habe ich Obst und Gemüse gekauft.",
  "Am Nachmittag hat mich meine Freundin Chiamaka besucht. Wir haben zusammen gekocht und viel gelacht.",
  "Am Sonntag war es sehr heiß. Ich bin zu Hause geblieben, habe ein Buch gelesen und für meinen Deutschkurs gelernt. Am Abend habe ich mit meiner Familie telefoniert.",
];

export const modelTextA1: string[] = [
  "Ich heiße Tunde. Ich komme aus Nigeria und wohne in Kubwa. Ich bin Student. Meine Hobbys sind Fußball und Musik. Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.",
];
