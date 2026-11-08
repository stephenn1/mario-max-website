import type { Dictionary } from "../types";

// German draft — to be reviewed by a qualified German speaker before publication.
export const studentLife: Dictionary["studentLife"] = {
  meta: {
    title: "Schulleben",
    description:
      "Möglichkeiten, Deutsch im und außerhalb des Unterrichts zu üben – und was zum Deutschlernen bei Mario-Max in Kubwa, Abuja, gehört.",
  },
  hero: {
    title: "Leben bei Mario-Max",
    lead: "Deutschlernen bedeutet Übung, Kultur und Gemeinschaft – im Unterricht und darüber hinaus.",
  },
  experiences: {
    eyebrow: "Deutsch lernen",
    title: "Was zum Sprachenlernen gehört",
    p1: "Deutschlernen ist aktiv. Neben Grammatik und Wortschatz üben Lernende Hören, Sprechen, Lesen und Schreiben und gewinnen Schritt für Schritt an Sicherheit.",
    p2: "Bei Mario-Max stehen Deutschunterricht und die Vorbereitung auf die Goethe-Prüfungen im Mittelpunkt. Fragen Sie die Schule, wie die aktuellen Kurse organisiert sind.",
    bubbleOne: "Hallo!",
    bubbleTwo: "Wie geht's?",
  },
  classroom: {
    eyebrow: "Im Unterricht",
    title: "Möglichkeiten, Deutsch zu üben",
    lead: "Beispiele für Aktivitäten, die beim Sprachenlernen häufig eingesetzt werden.",
    items: [
      { icon: "messages", title: "Sprechübungen", text: "Gespräche zu zweit oder in der Gruppe." },
      { icon: "squareCheck", title: "Spiele & Quizze", text: "Wortschatzspiele, mit denen neue Wörter hängen bleiben." },
      { icon: "book", title: "Gemeinsam lesen", text: "Kurze Texte lesen und besprechen." },
      { icon: "globe", title: "Kulturecke", text: "Die Kultur hinter der Sprache." },
    ],
  },
  beyond: {
    eyebrow: "Weiter üben",
    title: "Üben außerhalb des Unterrichts",
    lead: "Ideen, wie Sie Deutsch auch außerhalb des Unterrichts nutzen können. Fragen Sie die Schule nach aktuellen Angeboten.",
    items: [
      { icon: "messages", title: "Gesprächsübung", text: "Sprechen Sie mit anderen Lernenden, wann immer es geht." },
      { icon: "film", title: "Filme & Serien", text: "Deutsche Filme und Serien mit Untertiteln schulen das Hörverstehen." },
      { icon: "award", title: "Prüfungstraining", text: "Arbeiten Sie mit Übungsmaterialien, während Sie sich auf die Goethe-Prüfungen vorbereiten." },
      { icon: "fileText", title: "Kostenlose Materialien", text: "Nutzen Sie die Quizze, Karteikarten und Wortlisten auf dieser Website." },
    ],
    resourcesLink: "Lernmaterialien öffnen",
  },
  gallery: {
    eyebrow: "Galerie",
    title: "Deutsch in Bildern",
    lead: "Szenen aus dem Deutschlernen. Tippen Sie auf ein Bild, um es zu vergrößern.",
    open: "Vergrößern: {caption}",
    close: "Schließen",
    previous: "Vorheriges Bild",
    next: "Nächstes Bild",
    position: "Bild {current} von {total}",
    items: {
      greetings: "Begrüßen & Vorstellen",
      articles: "der, die, das lernen",
      levels: "Von Niveau zu Niveau",
      conversation: "Gespräche im Alltag",
      polite: "Höfliche Wendungen",
      exam: "Vorbereitung auf Goethe-Prüfungen",
      reading: "Leseübung",
      culture: "Deutsche Kultur",
    },
  },
  cta: {
    title: "Jetzt Deutsch lernen",
    lead: "Kontaktieren Sie die Schule und fragen Sie nach Kursen und dem Einstieg.",
    primary: "Jetzt starten",
    secondary: "Kurse ansehen",
  },
};
