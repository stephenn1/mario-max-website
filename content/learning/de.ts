import type { LearningContent } from "./types";
import * as w from "./words";
import { learningEn } from "./en";

/**
 * German version of the learning content — DRAFT for review.
 * The German examples are identical to the English version; explanations,
 * prompts and questions are translated. English meanings are kept because the
 * material is written for English-speaking learners of German.
 */
export const learningDe: LearningContent = {
  columns: {
    german: "Deutsch",
    meaning: "Englisch",
    note: "Hinweis",
    sound: "Laut",
    example: "Beispiel",
    tip: "So klingt es",
  },
  glossaryTitle: "Nützliche Wörter",
  notes: {
    informal: "informell",
    formal: "formell",
    plural: "Plural",
    pluralInformal: "Plural, informell",
    formalSie: "Sie = formelle Anrede",
    masculine: "maskulin",
    feminine: "feminin",
    neuter: "neutral",
    normalOrder: "normale Wortstellung",
    verbEnd: "Verb steht am Ende",
  },
  topics: [
    {
      slug: "vocabulary",
      icon: "book",
      title: "Wortschatz",
      summary: "Thematische Wortlisten und Alltagswortschatz.",
      lead: "Bauen Sie Ihren Wortschatz mit thematischen Listen für Anfänger auf – Begrüßungen, Zahlen, Wochentage, Familie und Klassenzimmer. Lernen Sie jedes Nomen zusammen mit seinem Artikel.",
      keywords: ["wörter", "wortlisten", "begrüßungen", "zahlen", "wochentage", "familie", "klassenzimmer", "a1", "vocabulary"],
      blocks: [
        { type: "words", id: "greetings", title: "Begrüßungen & Grundwörter", rows: w.greetings, speak: true },
        { type: "words", id: "numbers", title: "Zahlen", rows: w.numbers, speak: true },
        { type: "words", id: "days", title: "Wochentage", rows: w.days, speak: true },
        { type: "words", id: "family", title: "Familie", rows: w.family, speak: true },
        { type: "words", id: "classroom", title: "Im Klassenzimmer", rows: w.classroom, speak: true },
        { type: "flashcards", id: "flashcards", title: "Mit Karteikarten üben", deckId: "classroom" },
        { type: "quiz", id: "quiz", title: "Wortschatz testen", setId: "vocabulary" },
      ],
    },
    {
      slug: "grammar",
      icon: "fileText",
      title: "Grammatik",
      summary: "Deutsche Grammatik klar und einfach erklärt.",
      lead: "Die Grundlagen der deutschen Grammatik für Anfänger: Artikel und Genus, die Verben sein und haben, regelmäßige Verben und die Wortstellung.",
      keywords: ["grammatik", "artikel", "der die das", "genus", "verben", "sein", "haben", "wortstellung", "grammar"],
      blocks: [
        {
          type: "text",
          id: "articles",
          title: "Nomen und Artikel: der, die, das",
          paragraphs: [
            "Jedes deutsche Nomen hat ein grammatisches Geschlecht (Genus): maskulin (der), feminin (die) oder neutral (das). Im Plural ist der Artikel immer die.",
            "Deutsche Nomen schreibt man immer groß – auch mitten im Satz.",
          ],
        },
        { type: "words", title: "Beispiele", rows: w.articleExamples, speak: true },
        {
          type: "list",
          title: "Hilfreiche Muster",
          items: [
            "Nomen auf -ung, -heit, -keit, -schaft und -ion sind feminin: die Zeitung, die Freiheit.",
            "Nomen auf -chen und -lein sind neutral: das Mädchen, das Brötchen.",
            "Wochentage, Monate und Jahreszeiten sind maskulin: der Montag, der Mai, der Sommer.",
            "Es gibt viele Ausnahmen – lernen Sie jedes Nomen immer mit seinem Artikel.",
          ],
        },
        { type: "quiz", id: "articles-quiz", title: "der, die, das üben", setId: "articles" },
        { type: "words", id: "sein", title: "Das Verb sein", rows: w.sein, speak: true },
        { type: "words", id: "haben", title: "Das Verb haben", rows: w.haben, speak: true },
        {
          type: "words",
          id: "regular-verbs",
          title: "Regelmäßige Verben: wohnen",
          intro: "Die meisten regelmäßigen Verben folgen diesem Muster: Nehmen Sie den Stamm (wohn-) und hängen Sie die Endungen -e, -st, -t, -en, -t, -en an.",
          rows: w.wohnen,
          speak: true,
        },
        {
          type: "text",
          id: "word-order",
          title: "Wortstellung: Das Verb steht an zweiter Stelle",
          paragraphs: [
            "In einem deutschen Aussagesatz steht das konjugierte Verb an zweiter Stelle. Beginnt der Satz nicht mit dem Subjekt, sondern zum Beispiel mit einer Zeitangabe, steht das Subjekt direkt nach dem Verb.",
          ],
        },
        { type: "words", title: "Beispiele", rows: w.wordOrder, speak: true },
      ],
    },
    {
      slug: "pronunciation",
      icon: "mic",
      title: "Aussprache",
      summary: "Laute, Betonung und Tipps für deutliches Sprechen.",
      lead: "Die deutsche Rechtschreibung ist recht regelmäßig: Wenn Sie wissen, wie Buchstaben und Buchstabenkombinationen klingen, können Sie die meisten Wörter vorlesen. Mit den Anhören-Schaltflächen hören Sie jedes Beispiel.",
      keywords: ["aussprache", "laute", "umlaut", "ä ö ü", "ß", "betonung", "sprechen", "pronunciation"],
      blocks: [
        {
          type: "sounds",
          id: "sounds",
          title: "Wichtige deutsche Laute",
          rows: [
            { sound: "ä", example: "Mädchen", tip: "Wie das „e“ im englischen „bed“" },
            { sound: "ö", example: "schön", tip: "„e“ sprechen und dabei die Lippen runden" },
            { sound: "ü", example: "über", tip: "„i“ sprechen und dabei die Lippen runden" },
            { sound: "ß", example: "Straße", tip: "Ein scharfes, stimmloses „s“" },
            { sound: "ei", example: "mein", tip: "Wie „ai“" },
            { sound: "ie", example: "Liebe", tip: "Ein langes „i“" },
            { sound: "eu / äu", example: "heute", tip: "Wie „oi“" },
            { sound: "ch", example: "ich", tip: "Weich nach e und i (Ich-Laut)" },
            { sound: "ch", example: "acht", tip: "Weiter hinten im Rachen nach a, o und u (Ach-Laut)" },
            { sound: "sch", example: "Schule", tip: "Wie das englische „sh“" },
            { sound: "sp / st", example: "Sport", tip: "Am Wortanfang: „schp“ / „scht“" },
            { sound: "w", example: "Wasser", tip: "Wie das englische „v“" },
            { sound: "v", example: "Vater", tip: "Meist wie „f“" },
            { sound: "z", example: "Zeit", tip: "Wie „ts“" },
            { sound: "j", example: "ja", tip: "Wie das englische „y“" },
          ],
        },
        {
          type: "list",
          id: "stress",
          title: "Betonung und Wortenden",
          items: [
            "Die Betonung liegt meist auf der ersten Silbe: Montag, Lehrer, Fenster.",
            "Verben mit den Vorsilben be-, ver- und ge- werden nach der Vorsilbe betont: bezahlen, verstehen.",
            "Am Wortende klingen b, d und g wie p, t und k: gelb, Hund, Tag.",
          ],
        },
      ],
    },
    {
      slug: "everyday-expressions",
      icon: "message",
      title: "Redewendungen",
      summary: "Nützliche Wendungen und Alltagsdialoge.",
      lead: "Wendungen, die Sie sofort nutzen können – zum Vorstellen, für Fragen im Unterricht und für unterwegs.",
      keywords: ["wendungen", "redewendungen", "begrüßungen", "vorstellen", "gespräch", "dialog", "alltag", "phrases"],
      blocks: [
        { type: "words", id: "introductions", title: "Sich vorstellen", rows: w.introductions, speak: true },
        { type: "words", id: "in-class", title: "Wenn Sie etwas nicht verstehen", rows: w.understanding, speak: true },
        { type: "words", id: "out-and-about", title: "Unterwegs", rows: w.outAndAbout, speak: true },
        { type: "flashcards", id: "flashcards", title: "Begrüßungen üben", deckId: "greetings" },
        { type: "quiz", id: "quiz", title: "Wendungen testen", setId: "phrases" },
      ],
    },
    {
      slug: "reading",
      icon: "bookText",
      title: "Lesen",
      summary: "Kurze Texte nach Niveau, mit Übungen.",
      lead: "Kurze deutsche Texte für Anfänger, mit nützlichen Wörtern und Fragen zum Textverständnis. Lesen Sie jeden Text zweimal: zuerst für den Hauptgedanken, dann für die Details.",
      keywords: ["lesen", "texte", "textverständnis", "a1", "a2", "geschichte", "reading"],
      blocks: [
        {
          type: "reading",
          id: "a1",
          title: "Ich lerne Deutsch",
          level: "A1",
          paragraphs: w.readingA1Text,
          glossary: w.readingA1Glossary,
          quizSetId: "reading-a1",
        },
        {
          type: "reading",
          id: "a2",
          title: "Mein Wochenende",
          level: "A2",
          paragraphs: w.readingA2Text,
          glossary: w.readingA2Glossary,
          quizSetId: "reading-a2",
        },
      ],
    },
    {
      slug: "writing",
      icon: "pen",
      title: "Schreiben",
      summary: "Schreibanlässe und Mustertexte für Ihre Schreibfertigkeit.",
      lead: "Schreiben hilft, das Gelernte zu ordnen. Beginnen Sie mit kurzen Sätzen, verwenden Sie Verbindungswörter und prüfen Sie Ihren Text mit der Liste unten.",
      keywords: ["schreiben", "schreibanlässe", "e-mail", "mustertext", "konnektoren", "sätze", "writing"],
      blocks: [
        {
          type: "prompts",
          id: "prompts",
          title: "Schreibanlässe",
          groups: [
            {
              level: "A1",
              items: [
                "Stellen Sie sich in 4–5 Sätzen vor: Name, Herkunft, Wohnort und Hobbys.",
                "Schreiben Sie eine kurze Liste der Dinge in Ihrem Zimmer – mit dem Artikel zu jedem Nomen.",
              ],
            },
            {
              level: "A2",
              items: [
                "Schreiben Sie einer Freundin oder einem Freund eine kurze E-Mail über Ihr Wochenende (60–80 Wörter).",
                "Beschreiben Sie Ihren Tagesablauf von morgens bis abends.",
              ],
            },
            {
              level: "B1",
              items: [
                "Warum lernen Sie Deutsch? Nennen Sie mindestens zwei Gründe und verwenden Sie weil oder denn.",
                "Schreiben Sie über Vor- und Nachteile des Online-Sprachenlernens.",
              ],
            },
          ],
        },
        {
          type: "reading",
          id: "model",
          title: "Mustertext: Über mich",
          level: "A1",
          paragraphs: w.modelTextA1,
        },
        { type: "words", id: "connectors", title: "Nützliche Verbindungswörter", rows: w.connectors, speak: true },
        {
          type: "list",
          id: "checklist",
          title: "Prüfen Sie Ihren Text",
          items: [
            "Beginnen alle Nomen mit einem Großbuchstaben?",
            "Steht das Verb in jedem Aussagesatz an zweiter Stelle?",
            "Steht das Verb nach weil am Ende des Nebensatzes?",
            "Haben Sie die richtigen Verbendungen verwendet (ich wohne, du wohnst …)?",
          ],
        },
      ],
    },
    {
      slug: "listening-speaking",
      icon: "headphones",
      title: "Hören & Sprechen",
      summary: "Hörübungen und Sprechanlässe.",
      lead: "Hören Sie Alltagswendungen, sprechen Sie sie laut nach und üben Sie das Sprechen mit Anlässen für verschiedene Niveaus.",
      keywords: ["hören", "sprechen", "audio", "sprechanlässe", "über die woche sprechen", "gespräch", "shadowing", "listening", "speaking"],
      blocks: [
        {
          type: "words",
          id: "listen",
          title: "Hören und nachsprechen",
          intro: "Drücken Sie auf Anhören und sprechen Sie jede Wendung laut nach. Versuchen Sie, Rhythmus und Melodie nachzuahmen.",
          rows: w.introductions,
          speak: true,
        },
        {
          type: "prompts",
          id: "prompts",
          title: "Sprechanlässe",
          groups: [
            {
              level: "A1",
              items: [
                "Stellen Sie sich vor: Name, Herkunft und Wohnort (Ich heiße … Ich komme aus … Ich wohne in …).",
                "Zählen Sie laut von eins bis zwanzig.",
                "Nennen Sie fünf Gegenstände in Ihrem Zimmer – mit Artikel.",
              ],
            },
            {
              level: "A2",
              items: [
                "Beschreiben Sie Ihren Tagesablauf von morgens bis abends.",
                "Erzählen Sie, was Sie letztes Wochenende gemacht haben (Am Samstag habe ich …).",
              ],
            },
            {
              level: "B1",
              items: [
                "Über die Woche sprechen: Erzählen Sie, was Sie am Montag, in der Wochenmitte und am Wochenende gemacht haben.",
                "Erklären Sie mit weil oder denn, warum Sie Deutsch lernen.",
                "Vergleichen Sie diese Woche mit einer typischen Woche im letzten Jahr.",
              ],
            },
          ],
        },
        {
          type: "list",
          id: "tips",
          title: "Tipps für das Sprechtraining",
          items: [
            "Shadowing: Spielen Sie einen kurzen Audioausschnitt ab, halten Sie nach jedem Satz an und sprechen Sie ihn nach.",
            "Nehmen Sie sich auf, hören Sie zu und wählen Sie einen Punkt zum Verbessern.",
            "Sprechen Sie laut – schon wenige Minuten am Tag machen einen Unterschied.",
          ],
        },
      ],
    },
    {
      slug: "learning-tips",
      icon: "lightbulb",
      title: "Lerntipps",
      summary: "Praktische Gewohnheiten und Lerntipps fürs Deutschlernen.",
      lead: "Kleine, regelmäßige Gewohnheiten bewirken am meisten. Diese Tipps helfen Ihnen, zwischen den Unterrichtsstunden weiterzulernen.",
      keywords: ["tipps", "gewohnheiten", "lernen", "motivation", "gedächtnis", "tips"],
      blocks: [
        {
          type: "list",
          id: "tips",
          title: "Gewohnheiten, die helfen",
          items: [
            "Üben Sie lieber jeden Tag ein wenig als einmal pro Woche sehr viel.",
            "Lernen Sie neue Wörter in kurzen Wendungen, nicht einzeln.",
            "Wiederholen Sie mit Karteikarten: nach einem Tag, nach einigen Tagen, nach einer Woche.",
            "Sprechen Sie von Anfang an – Fehler gehören zum Lernen dazu.",
            "Wählen Sie Übungen, die Ihnen Spaß machen: Lieder, Videos, Geschichten und Spiele zählen alle.",
          ],
        },
        { type: "articles", id: "articles", title: "Unsere Artikel mit Lerntipps", category: "learning-tips" },
      ],
    },
  ],
  practice: [
    {
      level: "A1",
      title: "Begrüßen & Vorstellen im Alltag",
      type: "Kurzes Übungsset",
      href: "/resources/everyday-expressions",
      keywords: ["begrüßungen", "vorstellen", "wendungen", "sprechen"],
    },
    {
      level: "A1",
      title: "der, die, das – Artikel üben",
      type: "Grammatikübung",
      href: "/resources/grammar#articles",
      keywords: ["artikel", "grammatik", "der die das", "genus"],
    },
    {
      level: "B1",
      title: "Über die eigene Woche sprechen",
      type: "Sprechanlässe",
      href: "/resources/listening-speaking#prompts",
      keywords: ["sprechen", "sprechanlässe", "gespräch", "woche"],
    },
    {
      level: "A2",
      title: "Lesen: ein kurzer deutscher Text",
      type: "Leseübung",
      href: "/resources/reading#a2",
      keywords: ["lesen", "text", "textverständnis"],
    },
  ],
  quizzes: [
    {
      id: "vocabulary",
      title: "Wortschatz",
      questions: [
        { prompt: "Was bedeutet „danke“ auf Englisch?", options: ["Thank you", "Please", "Sorry", "Goodbye"], answer: 0 },
        { prompt: "Was bedeutet „Tschüss“ auf Englisch?", options: ["Hello", "Bye", "Good night", "Yes"], answer: 1 },
        { prompt: "Was bedeutet „der Tisch“ auf Englisch?", options: ["the chair", "the door", "the table", "the window"], answer: 2 },
        { prompt: "Was bedeutet „Guten Morgen“ auf Englisch?", options: ["Good evening", "Good night", "Good day", "Good morning"], answer: 3 },
        { prompt: "Was bedeutet „die Tür“ auf Englisch?", options: ["the door", "the board", "the book", "the pen"], answer: 0 },
        { prompt: "Wie heißt „Wednesday“ auf Deutsch?", options: ["Montag", "Mittwoch", "Donnerstag", "Sonntag"], answer: 1 },
      ],
    },
    {
      id: "articles",
      title: "der, die, das",
      questions: [
        { prompt: "Welcher Artikel passt zu „Tisch“?", options: ["der", "die", "das"], answer: 0 },
        { prompt: "Welcher Artikel passt zu „Lampe“?", options: ["der", "die", "das"], answer: 1 },
        { prompt: "Welcher Artikel passt zu „Buch“?", options: ["der", "die", "das"], answer: 2 },
        { prompt: "Welcher Artikel passt zu „Mädchen“? Tipp: -chen", options: ["der", "die", "das"], answer: 2 },
        { prompt: "Welcher Artikel passt zu „Zeitung“? Tipp: -ung", options: ["der", "die", "das"], answer: 1 },
        { prompt: "Welcher Artikel passt zu „Montag“?", options: ["der", "die", "das"], answer: 0 },
      ],
    },
    {
      id: "phrases",
      title: "Redewendungen",
      questions: [
        { prompt: "Wie sagt man „My name is …“?", options: ["Ich komme aus …", "Ich heiße …", "Ich wohne in …", "Ich habe …"], answer: 1 },
        { prompt: "Was bedeutet „Wie geht es Ihnen?“ auf Englisch?", options: ["Where are you from?", "What is your name?", "How are you?", "What time is it?"], answer: 2 },
        { prompt: "Wie bitten Sie jemanden, etwas zu wiederholen?", options: ["Können Sie das bitte wiederholen?", "Was kostet das?", "Die Rechnung, bitte.", "Freut mich!"], answer: 0 },
        { prompt: "Was bedeutet „Ich verstehe das nicht“ auf Englisch?", options: ["I don't understand that.", "I don't like that.", "I don't have that.", "I'm not from here."], answer: 0 },
        { prompt: "Wie bitten Sie im Café um die Rechnung?", options: ["Wo ist der Bahnhof?", "Ich hätte gern einen Kaffee.", "Die Rechnung, bitte.", "Wie spät ist es?"], answer: 2 },
      ],
    },
    {
      id: "reading-a1",
      title: "Ich lerne Deutsch",
      questions: [
        { prompt: "Wo wohnt Amaka?", options: ["In Lagos", "In Abuja", "In Berlin", "In Kano"], answer: 1 },
        { prompt: "Warum lernt Amaka Deutsch?", options: ["Sie möchte in Deutschland studieren.", "Ihre Familie ist deutsch.", "Sie arbeitet in Deutschland.", "Sie ist Deutschlehrerin."], answer: 0 },
        { prompt: "Was macht sie jeden Morgen?", options: ["Sie sieht einen Film.", "Sie schreibt einen Brief.", "Sie trinkt Tee und lernt zehn neue Wörter.", "Sie geht zum Markt."], answer: 2 },
        { prompt: "Was macht sie am Abend?", options: ["Sie liest ein Buch.", "Sie hört deutsche Musik.", "Sie spielt Fußball.", "Sie kocht mit Freunden."], answer: 1 },
      ],
    },
    {
      id: "reading-a2",
      title: "Mein Wochenende",
      questions: [
        { prompt: "Wie ist die Erzählerin zum Markt gefahren?", options: ["Zu Fuß", "Mit dem Auto", "Mit dem Bus", "Mit dem Zug"], answer: 2 },
        { prompt: "Wer hat sie am Samstagnachmittag besucht?", options: ["Ihre Freundin Chiamaka", "Ihr Lehrer", "Ihr Bruder", "Niemand"], answer: 0 },
        { prompt: "Was hat sie am Sonntag gemacht?", options: ["Sie ist zum Markt gefahren.", "Sie ist zu Hause geblieben, hat gelesen und gelernt.", "Sie ist nach Lagos gereist.", "Sie hat ihre Familie besucht."], answer: 1 },
      ],
    },
  ],
  decks: [
    { id: "greetings", title: "Begrüßungen", cards: learningEn.decks[0].cards },
    { id: "classroom", title: "Im Klassenzimmer", cards: learningEn.decks[1].cards },
    { id: "days", title: "Wochentage", cards: learningEn.decks[2].cards },
  ],
};
