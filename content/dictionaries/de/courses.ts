import type { Dictionary } from "../types";

// German draft — to be reviewed by a qualified German speaker before publication.
export const courses: Dictionary["courses"] = {
  meta: {
    title: "Deutschkurse A1–C2",
    description:
      "Entdecken Sie die GER-Niveaus von A1 bis C2 und die Vorbereitung auf die Goethe-Prüfungen an der Mario-Max German Language School in Kubwa, Abuja.",
  },
  hero: {
    title: "Deutschkurse von A1 bis C2",
    lead: "Ein strukturierter Weg vom ersten Wort bis zur sicheren Sprachbeherrschung – mit Vorbereitung auf die Goethe-Prüfungen. Dauer, Zeiten und Gebühren erfahren Sie auf Anfrage.",
  },
  notice: {
    label: "Unsere Leistungen:",
    strongA: "Deutschunterricht",
    and: "und",
    strongB: "Vorbereitung auf die Goethe-Prüfungen",
    rest: "Die sechs Niveaus unten erklären den Gemeinsamen Europäischen Referenzrahmen (GER). Welche Niveaus derzeit angeboten werden, sowie Zeiten und Gebühren erfahren Sie auf Anfrage.",
  },
  filters: {
    label: "Niveaus filtern",
    all: "Alle Niveaus",
    beginner: "Anfänger (A1–A2)",
    intermediate: "Mittelstufe (B1–B2)",
    advanced: "Fortgeschritten (C1–C2)",
    shown: "{count} Niveaus angezeigt",
  },
  labels: {
    objectives: "Lernziele",
    suitable: "Geeignet für",
    duration: "Dauer",
    schedule: "Zeiten",
    fee: "Gebühr",
    onEnquiry: "Auf Anfrage",
    ask: "Anfragen zu",
  },
  levels: {
    A1: {
      name: "Anfänger",
      cefr: "GER A1 · Elementare Sprachverwendung",
      short: "Ihr erstes Deutsch – Begrüßungen, das Wichtigste und Alltagsgrundlagen.",
      summary: "Ihr allererstes Deutsch – Begrüßungen, sich vorstellen und das Wichtigste für den Alltag.",
      objectives: [
        "Menschen begrüßen und sich vorstellen",
        "Einfache Fragen stellen und beantworten",
        "Langsames, deutliches Sprechen verstehen",
      ],
      suitable: "Absolute Anfänger ohne Vorkenntnisse.",
    },
    A2: {
      name: "Grundlagen",
      cefr: "GER A2 · Elementare Sprachverwendung",
      short: "Auf den Grundlagen aufbauen – mit mehr Wortschatz und einfachen Gesprächen.",
      summary: "Auf den Grundlagen aufbauen – mit mehr Wortschatz und einfachen Alltagsgesprächen.",
      objectives: [
        "Tagesabläufe und Umgebung beschreiben",
        "Kurze Gespräche im Alltag führen",
        "Kurze, einfache Texte lesen",
      ],
      suitable: "Lernende mit Grundkenntnissen, die weiterkommen möchten.",
    },
    B1: {
      name: "Mittelstufe",
      cefr: "GER B1 · Selbstständige Sprachverwendung",
      short: "Alltagssituationen meistern und sich zunehmend sicher ausdrücken.",
      summary: "Die meisten Alltagssituationen bewältigen und sich mit wachsender Sicherheit ausdrücken.",
      objectives: [
        "Reisen und Alltagssituationen bewältigen",
        "Erfahrungen und Pläne beschreiben",
        "Zusammenhängende Texte zu vertrauten Themen schreiben",
      ],
      suitable: "Selbstständige Lernende, die Deutsch im Alltag nutzen möchten.",
    },
    B2: {
      name: "Obere Mittelstufe",
      cefr: "GER B2 · Selbstständige Sprachverwendung",
      short: "Komplexe Themen besprechen und klar und flüssig kommunizieren.",
      summary: "Komplexe Themen besprechen und klar, flüssig und spontan kommunizieren.",
      objectives: [
        "Abstrakte und fachliche Themen besprechen",
        "Sich fließend mit Muttersprachlern verständigen",
        "Klare, detaillierte Texte schreiben",
      ],
      suitable: "Lernende, die auf Deutsch studieren oder arbeiten möchten.",
    },
    C1: {
      name: "Fortgeschritten",
      cefr: "GER C1 · Kompetente Sprachverwendung",
      short: "Deutsch flexibel und wirksam für Studium und Beruf einsetzen.",
      summary: "Deutsch flexibel und wirksam für akademische und berufliche Zwecke einsetzen.",
      objectives: [
        "Gedanken flüssig und präzise ausdrücken",
        "Anspruchsvolle, längere Texte verstehen",
        "Sprache flexibel in Beruf oder Studium einsetzen",
      ],
      suitable: "Fortgeschrittene mit akademischen oder beruflichen Zielen.",
    },
    C2: {
      name: "Sehr fortgeschritten",
      cefr: "GER C2 · Kompetente Sprachverwendung",
      short: "Das höchste GER-Niveau – nahezu alles verstehen und ausdrücken.",
      summary: "Praktisch alles verstehen, was man hört oder liest, und feine Bedeutungsunterschiede ausdrücken.",
      objectives: [
        "Praktisch alles Gehörte und Gelesene verstehen",
        "Informationen aus verschiedenen Quellen zusammenfassen",
        "Feine Bedeutungsnuancen ausdrücken",
      ],
      suitable: "Lernende, die das höchste Deutschniveau anstreben.",
    },
  },
  comparison: {
    eyebrow: "Auf einen Blick",
    title: "Kursvergleich",
    caption: "Die sechs GER-Niveaus im Vergleich",
    headers: { level: "Niveau", can: "Sie können …", goal: "Typisches Ziel" },
    rows: {
      A1: { can: "Begrüßungen & Grundbedürfnisse bewältigen", goal: "Erste Schritte im Deutschen" },
      A2: { can: "Einfache Alltagsgespräche führen", goal: "Alltagsgrundlagen" },
      B1: { can: "Die meisten Reise- und Alltagssituationen bewältigen", goal: "Selbstständige Sprachverwendung" },
      B2: { can: "Komplexe Themen klar besprechen", goal: "Studium oder Beruf" },
      C1: { can: "Deutsch flexibel & wirksam einsetzen", goal: "Akademisch / beruflich" },
      C2: { can: "Praktisch alles Gehörte und Gelesene verstehen", goal: "Volle Sprachbeherrschung" },
    },
  },
  faq: {
    eyebrow: "Gut zu wissen",
    title: "Häufig gestellte Fragen",
    items: [
      {
        q: "Brauche ich Deutschkenntnisse, um anzufangen?",
        a: "Nein. A1 ist für absolute Anfänger gedacht. Wenn Sie schon etwas Deutsch können, kontaktieren Sie die Schule – wir helfen Ihnen, das passende Niveau zu finden.",
      },
      {
        q: "Wie sind die Unterrichtszeiten geregelt?",
        a: "Die Unterrichtszeiten erfahren Sie auf Anfrage. Die Schule ist von Montag bis Samstag, 7:30 bis 20:00 Uhr, geöffnet – fragen Sie uns nach dem aktuellen Stundenplan.",
      },
      {
        q: "Was kosten die Kurse?",
        a: "Die Gebühren erhalten Sie auf Anfrage. Kontaktieren Sie die Schule telefonisch, per WhatsApp oder per E-Mail.",
      },
      {
        q: "Bereiten Sie auf die Goethe-Prüfungen vor?",
        a: "Ja. Mario-Max bereitet auf die Deutschprüfungen des Goethe-Instituts vor.",
      },
      {
        q: "Welche Niveaus werden derzeit angeboten?",
        a: "Die sechs GER-Niveaus auf dieser Seite erklären den gesamten Referenzrahmen. Fragen Sie die Schule, welche Niveaus derzeit stattfinden.",
      },
    ],
  },
  cta: {
    title: "Nicht sicher, welches Niveau passt?",
    lead: "Melden Sie sich – wir helfen Ihnen, den besten Einstiegspunkt für Ihr Deutsch zu finden.",
    primary: "Sprechen Sie uns an",
    secondary: "WhatsApp",
  },
};
