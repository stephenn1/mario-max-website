import type { Dictionary } from "../types";

// German draft — to be reviewed by a qualified German speaker before publication.
export const resources: Dictionary["resources"] = {
  meta: {
    title: "Lernmaterialien",
    description:
      "Kostenlose Materialien zum Deutschlernen von Mario-Max: Wortschatz, Grammatik, Aussprache, Redewendungen, Lesen, Schreiben, Quizze und Karteikarten.",
  },
  hero: {
    title: "Kostenlose Materialien zum Weiterlernen",
    lead: "Wortschatz, Grammatik, Aussprache und mehr – Hilfsmittel für Ihr Deutsch zwischen den Unterrichtsstunden.",
    searchLabel: "Materialien durchsuchen",
    searchPlaceholder: "Materialien durchsuchen – z. B. „Grammatik“ oder „Sprechen“",
  },
  categories: {
    eyebrow: "Stöbern",
    title: "Themenbereiche",
    open: "Öffnen",
  },
  practice: {
    eyebrow: "Übungen & Artikel",
    title: "Lernartikel & Übungen",
    tryLink: "Quiz & Karteikarten ausprobieren",
  },
  search: {
    results: "{count} passende Materialien",
    noResultsTitle: "Keine passenden Materialien gefunden",
    noResultsBody: "Versuchen Sie ein anderes Wort, zum Beispiel „Wortschatz“ oder „Sprechen“.",
    clear: "Suche zurücksetzen",
  },
  tools: {
    eyebrow: "Üben",
    title: "Quiz & Karteikarten",
    lead: "Testen Sie Ihr Wissen mit kurzen Quizzen und wiederholen Sie Vokabeln mit Karteikarten.",
    quizHeading: "Quiz zu Wortschatz & Grammatik",
    quizIntro: "Wählen Sie die richtige Antwort. Sie erhalten sofort eine Rückmeldung und am Ende Ihr Ergebnis.",
    flashHeading: "Karteikarten",
    flashIntro: "Tippen Sie auf die Karte, um zwischen Deutsch und Englisch zu wechseln.",
    chooseQuiz: "Quiz auswählen",
    chooseDeck: "Kartenstapel auswählen",
  },
  cta: {
    title: "Testen Sie, was Sie gelernt haben",
    lead: "Interaktive Vokabelquizze und Karteikarten zum Üben – jederzeit.",
    primary: "Quiz öffnen",
    secondary: "Karteikarten",
  },
  topicPage: {
    breadcrumb: "Lernmaterialien",
    otherTopics: "Weitere Materialien",
    backToResources: "Alle Lernmaterialien",
    contents: "Auf dieser Seite",
  },
  quizUi: {
    questionOf: "Frage {current} von {total}",
    score: "Punkte: {score}",
    correct: "Richtig!",
    incorrect: "Nicht ganz – die richtige Antwort ist „{answer}“.",
    next: "Nächste Frage",
    finish: "Ergebnis anzeigen",
    resultTitle: "Quiz abgeschlossen",
    result: "Sie haben {score} von {total} Punkten erreicht.",
    resultGreat: "Ausgezeichnet – weiter so!",
    resultGood: "Guter Fortschritt – versuchen Sie es noch einmal, um Ihr Ergebnis zu verbessern.",
    restart: "Noch einmal",
    progressLabel: "Quiz-Fortschritt",
  },
  flashUi: {
    tapToFlip: "Zum Umdrehen tippen",
    flip: "Karte umdrehen",
    previous: "Vorherige Karte",
    next: "Nächste Karte",
    counter: "{current} / {total}",
    frontLabel: "Deutsch",
    backLabel: "Englisch",
  },
  speakUi: {
    listen: "Anhören",
    listenTo: "„{text}“ anhören",
    note: "Die Audiowiedergabe nutzt die integrierte deutsche Stimme Ihres Geräts, sofern verfügbar.",
  },
};
