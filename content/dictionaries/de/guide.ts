import type { Dictionary } from "../types";

// German draft — to be reviewed by a qualified German speaker before publication.
export const guide: Dictionary["guide"] = {
  meta: {
    title: "Deutschland-Ratgeber",
    description:
      "Informative Überblicke zu Studium, Ausbildung, Arbeit und Leben in Deutschland – und welche Rolle Deutsch dabei spielt. Nur allgemeine Informationen, keine Einwanderungs- oder Rechtsberatung.",
  },
  hero: {
    title: "Ihr Ratgeber für Deutschland",
    lead: "Informative Überblicke zu Studium, Ausbildung, Arbeit und Leben in Deutschland – und welche Rolle die Sprache auf jedem dieser Wege spielt.",
  },
  notice: {
    label: "Bitte beachten Sie:",
    text: "Dieser Ratgeber dient nur der allgemeinen Information. Mario-Max ist eine Sprachschule für Deutsch und keine Einwanderungs-, Visa- oder Rechtsberatung. Bitte prüfen Sie aktuelle Voraussetzungen immer bei den zuständigen offiziellen Stellen.",
  },
  topics: [
    {
      id: "study",
      tag: "Studium",
      tone: "navy",
      title: "Studieren in Deutschland",
      text: "Ein Überblick über das Hochschulstudium und wie Deutschkenntnisse Ihre Studienpläne unterstützen.",
      points: [
        "Studiengänge werden auf Deutsch und teilweise auf Englisch angeboten",
        "Für deutschsprachige Studiengänge wird meist ein Sprachnachweis verlangt",
      ],
    },
    {
      id: "universities",
      tag: "Studium",
      tone: "navy",
      title: "Hochschulen",
      text: "In Deutschland gibt es verschiedene Arten von Hochschulen, jede mit eigenem Bewerbungsverfahren.",
      points: [
        "Universitäten und Hochschulen für angewandte Wissenschaften",
        "Jede Hochschule legt eigene Zulassungsvoraussetzungen fest",
      ],
    },
    {
      id: "ausbildung",
      tag: "Ausbildung",
      tone: "red",
      title: "Ausbildung",
      text: "Berufsausbildung, die praktische Arbeit in einem Betrieb mit Unterricht an einer Berufsschule verbindet.",
      points: [
        "Dauert in der Regel zwei bis dreieinhalb Jahre",
        "Betrieb und Berufsschule finden auf Deutsch statt",
      ],
    },
    {
      id: "work",
      tag: "Arbeit",
      tone: "gold",
      title: "Arbeiten in Deutschland",
      text: "Wie Deutsch Ihre beruflichen Ziele und die Kommunikation am Arbeitsplatz unterstützt.",
      points: [
        "Sprachanforderungen hängen von Beruf und Arbeitgeber ab",
        "Offizielle Portale erklären die aktuellen Regeln",
      ],
    },
    {
      id: "living",
      tag: "Leben",
      tone: "navy",
      title: "Leben in Deutschland",
      text: "Das Wichtigste für den Alltag und praktisches Deutsch, das Ihnen beim Ankommen hilft.",
      points: ["Wohnen, Bankgeschäfte und Termine", "Alltagsgespräche und Behördengänge"],
    },
    {
      id: "culture",
      tag: "Kultur",
      tone: "crimson",
      title: "Deutsche Kultur",
      text: "Bräuche, Gewohnheiten und der kulturelle Hintergrund der Sprache, die Sie lernen.",
      points: ["Umgangsformen im Alltag", "Traditionen und Feste"],
    },
    {
      id: "language",
      tag: "Sprache",
      tone: "navy",
      title: "Sprachanforderungen",
      text: "Wie die GER-Niveaus typischerweise mit Studium, Ausbildung und Arbeit zusammenhängen.",
      points: [
        "Anforderungen hängen vom Studiengang oder Arbeitgeber ab",
        "Goethe-Zertifikate sind weithin anerkannt",
      ],
    },
  ],
  cost: {
    eyebrow: "Vorausplanen",
    title: "Lebenshaltungskosten",
    lead: "Die Kosten im Alltag hängen von Stadt und Lebensstil ab. Nutzen Sie diese Kategorien als Ausgangspunkt für Ihre eigene Recherche und prüfen Sie aktuelle offizielle Informationen.",
    items: [
      { icon: "building", title: "Wohnen", text: "Miete und Unterkunft – meist der größte monatliche Kostenpunkt" },
      { icon: "basket", title: "Lebensmittel & Alltag", text: "Einkäufe und tägliche Ausgaben" },
      { icon: "train", title: "Mobilität", text: "Öffentlicher Nahverkehr und Reisen" },
    ],
    source: "Aktuelle Informationen: Study in Germany (offizielles Portal)",
  },
  references: {
    eyebrow: "Quellen",
    title: "Nützliche offizielle Quellen",
    lead: "Links zu offiziellen deutschen Informationsquellen. Voraussetzungen ändern sich – prüfen Sie daher immer die aktuellen Informationen direkt.",
    links: [
      { key: "study", title: "Study in Germany", text: "Offizielles Studienportal (DAAD)" },
      { key: "visa", title: "Visa-Informationen", text: "Deutsche Vertretungen in Nigeria" },
      { key: "ausbildung", title: "Infos zur Ausbildung", text: "Make it in Germany – Berufsausbildung" },
      { key: "exams", title: "Prüfungen & Zertifikate", text: "Goethe-Institut" },
    ],
  },
  cta: {
    title: "Mit der Sprache beginnen",
    lead: "Was auch immer Sie in Deutschland vorhaben: Gute Deutschkenntnisse öffnen mehr Türen. Beginnen Sie mit dem passenden Kurs.",
    primary: "Kurse entdecken",
    secondary: "Kontakt aufnehmen",
  },
};
