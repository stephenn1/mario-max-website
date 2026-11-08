import type { ArticleContent } from "./types";
import { officialLinks } from "@/content/official-links";

/** German article content — DRAFT, to be reviewed by a qualified German speaker. */
export const articlesDe: Record<string, ArticleContent> = {
  "habits-that-help-you-learn-german": {
    title: "Gewohnheiten, die beim Deutschlernen helfen",
    excerpt:
      "Ein kurzer, praktischer Leitfaden für stetigen Fortschritt beim Deutschlernen – mit Gewohnheiten, die Sie schon diese Woche anwenden können.",
    blocks: [
      {
        type: "p",
        text: "Beim Sprachenlernen kommt es weniger auf Talent an als auf beständige, gut gewählte Gewohnheiten. Kleine Schritte, die man täglich wiederholt, bringen meist mehr als gelegentliche Kraftakte. Hier sind fünf Gewohnheiten, die beim Deutschlernen helfen.",
      },
      { type: "h2", text: "1. Jeden Tag ein wenig üben" },
      {
        type: "p",
        text: "Fünfzehn konzentrierte Minuten am Tag sind oft wirksamer als eine lange Lerneinheit pro Woche. Kurzes, regelmäßiges Üben hält neue Wörter frisch und lässt Grammatikmuster mit der Zeit natürlich wirken.",
      },
      {
        type: "quote",
        text: "Regelmäßiges Üben hilft oft mehr als gelegentliche Kraftakte – viele Lernende merken, dass Beständigkeit mit der Zeit einen echten Unterschied macht.",
      },
      { type: "h2", text: "2. Von Anfang an sprechen" },
      {
        type: "p",
        text: "Sie müssen nicht warten, bis Sie sich bereit fühlen. Wer einfache Sätze laut ausspricht – auch mit Fehlern –, trainiert Aussprache und Selbstvertrauen zugleich.",
      },
      {
        type: "tip",
        items: [
          "Beschreiben Sie Ihren Tag auf Deutsch, Satz für Satz.",
          "Benennen Sie Gegenstände in Ihrer Umgebung, sobald Sie sie sehen.",
          "Sprechen Sie kurze Sätze nach einer Audioaufnahme nach, bis sie Ihnen leichtfallen.",
        ],
      },
      { type: "h2", text: "3. Wörter im Zusammenhang lernen" },
      {
        type: "p",
        text: "Einzelne Wortlisten bleiben schlecht im Gedächtnis. Wer Vokabeln in kurzen Wendungen oder Sätzen lernt, gibt jedem Wort einen festen Platz im Gedächtnis.",
      },
      { type: "h2", text: "4. Nach Plan wiederholen" },
      {
        type: "p",
        text: "Verteiltes Wiederholen – nach einem Tag, dann nach einigen Tagen, dann nach einer Woche – hilft, Sprache vom Kurzzeit- ins Langzeitgedächtnis zu bringen. Karteikarten machen das einfach.",
      },
      { type: "h2", text: "5. Mit Freude lernen" },
      {
        type: "p",
        text: "Wählen Sie schließlich Übungen, die Ihnen wirklich gefallen. Lieder, kurze Videos, einfache Geschichten und Spiele zählen alle. Die Gewohnheit, die Ihnen Spaß macht, ist die Gewohnheit, die Sie beibehalten.",
      },
    ],
  },
  "understanding-ausbildung": {
    title: "Die Ausbildung verstehen: ein Überblick für Einsteiger",
    excerpt: "Was eine Berufsausbildung in Deutschland ist, wie sie funktioniert und warum Deutsch dabei wichtig ist.",
    blocks: [
      {
        type: "p",
        text: "Die Ausbildung ist einer der häufigsten Wege in einen qualifizierten Beruf in Deutschland, und viele Lernende möchten wissen, wie sie funktioniert. Hier ein kurzer, allgemeiner Überblick.",
      },
      { type: "h2", text: "Was ist eine Ausbildung?" },
      {
        type: "p",
        text: "Die meisten Ausbildungen folgen dem dualen System: Auszubildende arbeiten einen Teil der Zeit in einem Betrieb und lernen den anderen Teil an einer Berufsschule. Eine Ausbildung dauert je nach Beruf in der Regel zwei bis dreieinhalb Jahre.",
      },
      {
        type: "p",
        text: "Es gibt Ausbildungen für viele Berufe – von Gesundheit und Gastgewerbe über Handwerk und Technik bis zu kaufmännischen Berufen.",
      },
      { type: "h2", text: "Warum Deutsch wichtig ist" },
      {
        type: "p",
        text: "Die Arbeit im Betrieb und der Unterricht an der Berufsschule finden auf Deutsch statt. Auszubildende müssen Anweisungen verstehen, mit Kolleginnen, Kollegen und Kundschaft sprechen und Prüfungen auf Deutsch ablegen. Betriebe und Schulen haben eigene Erwartungen, daher ist das nötige Niveau unterschiedlich.",
      },
      {
        type: "quote",
        text: "Je besser Ihr Deutsch, desto sicherer fühlen Sie sich in beiden Teilen der Ausbildung – im Betrieb und im Unterricht.",
      },
      { type: "h2", text: "So beginnen Sie Ihre Recherche" },
      {
        type: "ul",
        items: [
          "Informieren Sie sich über die Berufe, die Sie interessieren, und was die Ausbildung beinhaltet.",
          "Lesen Sie die offiziellen Informationen zur Berufsausbildung für internationale Bewerberinnen und Bewerber.",
          "Prüfen Sie aktuelle Einreise- und Visavoraussetzungen bei den offiziellen Stellen – sie können sich ändern.",
          "Bauen Sie Ihr Deutsch Schritt für Schritt weiter aus.",
        ],
      },
      {
        type: "sources",
        items: [
          { label: "Make it in Germany – Berufsausbildung", href: officialLinks.ausbildung.de },
          { label: "Deutsche Vertretungen in Nigeria", href: officialLinks.visa.de },
        ],
      },
      {
        type: "p",
        text: "Dieser Artikel dient der allgemeinen Information und ist keine Einwanderungs- oder Rechtsberatung. Bitte prüfen Sie aktuelle Voraussetzungen immer bei den zuständigen offiziellen Stellen.",
      },
    ],
  },
  "der-die-das-remembering-articles": {
    title: "der, die, das: Artikel leichter merken",
    excerpt: "Praktische Tricks, um sich das Genus deutscher Nomen zu merken.",
    blocks: [
      {
        type: "p",
        text: "Jedes deutsche Nomen hat ein Genus – maskulin (der), feminin (die) oder neutral (das). Für viele Lernende ist das eine der ersten großen Überraschungen. Die gute Nachricht: Mit ein paar Gewohnheiten und Mustern werden Artikel viel einfacher.",
      },
      { type: "h2", text: "1. Nomen immer mit Artikel lernen" },
      {
        type: "p",
        text: "Lernen Sie nicht „Tisch“, sondern „der Tisch“. Wenn Sie Artikel und Nomen gemeinsam laut aussprechen, bleiben sie als Einheit im Gedächtnis.",
      },
      { type: "h2", text: "2. Mit Farben arbeiten" },
      {
        type: "p",
        text: "Viele Lernende markieren ihre Notizen farbig: Blau für der, Rot für die und Grün für das. Wer sich das Wort vorstellt, sieht dann auch seine Farbe.",
      },
      { type: "h2", text: "3. Hilfreiche Muster lernen" },
      {
        type: "ul",
        items: [
          "Nomen auf -ung, -heit, -keit, -schaft und -ion sind feminin: die Zeitung, die Freiheit.",
          "Nomen auf -chen und -lein sind neutral: das Mädchen, das Brötchen.",
          "Wochentage, Monate und Jahreszeiten sind maskulin: der Montag, der Mai, der Sommer.",
        ],
      },
      { type: "h2", text: "4. An den Plural denken" },
      {
        type: "p",
        text: "Im Plural steht bei allen Nomen die: der Tisch → die Tische, das Buch → die Bücher.",
      },
      {
        type: "quote",
        text: "Muster helfen, aber es gibt Ausnahmen. Jedes Nomen mit seinem Artikel zu lernen, ist noch immer die zuverlässigste Methode.",
      },
      { type: "h2", text: "5. Oft und in kleinen Portionen üben" },
      {
        type: "p",
        text: "Kurzes, regelmäßiges Üben mit Karteikarten oder Quizzen hält die Artikel frisch. Probieren Sie das der-die-das-Quiz in unseren Lernmaterialien aus.",
      },
    ],
  },
  "studying-in-germany-where-to-begin": {
    title: "Studieren in Deutschland: Wo anfangen?",
    excerpt: "Ein Überblick über Studienmöglichkeiten und die Rolle der deutschen Sprache.",
    blocks: [
      {
        type: "p",
        text: "Deutschland ist ein beliebtes Studienland für internationale Studierende. Wenn Sie über ein Studium dort nachdenken, erklärt dieser Überblick die Grundlagen und die Rolle der deutschen Sprache. Es handelt sich nur um allgemeine Informationen.",
      },
      { type: "h2", text: "Arten von Hochschulen" },
      {
        type: "p",
        text: "In Deutschland gibt es Universitäten, die eher auf wissenschaftliches und forschungsorientiertes Studium ausgerichtet sind, und Hochschulen für angewandte Wissenschaften, die eher praxis- und berufsorientiert sind. Daneben gibt es Kunst-, Film- und Musikhochschulen.",
      },
      { type: "h2", text: "Studiengänge auf Deutsch und Englisch" },
      {
        type: "p",
        text: "Viele Studiengänge werden auf Deutsch unterrichtet, einige – vor allem im Master – auf Englisch. Für deutschsprachige Studiengänge verlangen Hochschulen meist einen Nachweis von Deutschkenntnissen. Welche Zertifikate und Niveaus anerkannt werden, hängt von der Hochschule und vom Studiengang ab.",
      },
      {
        type: "quote",
        text: "Auch in einem englischsprachigen Studiengang hilft Deutsch im Alltag, beim Nebenjob und beim Knüpfen von Freundschaften.",
      },
      { type: "h2", text: "Erste Schritte" },
      {
        type: "ul",
        items: [
          "Überlegen Sie, was und wo Sie studieren möchten.",
          "Prüfen Sie die Zulassungsvoraussetzungen jedes Studiengangs auf der Website der Hochschule.",
          "Finden Sie heraus, welche Sprachzertifikate auf welchem Niveau anerkannt werden.",
          "Lesen Sie die offiziellen Informationen zu Studium und Visum – und planen Sie frühzeitig.",
        ],
      },
      {
        type: "sources",
        items: [
          { label: "Study in Germany (DAAD)", href: officialLinks.study.de },
          { label: "Deutsche Vertretungen in Nigeria", href: officialLinks.visa.de },
        ],
      },
      {
        type: "p",
        text: "Voraussetzungen ändern sich und unterscheiden sich je nach Hochschule. Prüfen Sie immer die aktuellen Informationen bei der Hochschule und den offiziellen Stellen.",
      },
    ],
  },
  "speaking-exercises-at-home": {
    title: "Fünf Sprechübungen für zu Hause",
    excerpt: "Mit diesen einfachen Übungen sprechen Sie zwischen den Unterrichtsstunden flüssiger.",
    blocks: [
      {
        type: "p",
        text: "Sprechen ist oft die Fertigkeit, die Lernende am wenigsten üben – besonders außerhalb des Unterrichts. Für diese fünf Übungen brauchen Sie keinen Partner und nur wenige Minuten am Tag.",
      },
      { type: "h2", text: "1. Selbstgespräche führen" },
      {
        type: "p",
        text: "Beschreiben Sie, was Sie gerade tun: Ich koche Reis. Ich trinke Wasser. Solche einfachen Sätze machen das Sprechen nach und nach automatischer.",
      },
      { type: "h2", text: "2. Shadowing" },
      {
        type: "p",
        text: "Spielen Sie einen kurzen deutschen Audioausschnitt ab, halten Sie nach jedem Satz an und sprechen Sie ihn nach. Ahmen Sie Rhythmus und Melodie so genau wie möglich nach.",
      },
      { type: "h2", text: "3. Ein Bild beschreiben" },
      {
        type: "p",
        text: "Wählen Sie ein beliebiges Foto und beschreiben Sie es eine Minute lang auf Deutsch: Wer ist zu sehen, wo sind die Personen und was tun sie?",
      },
      { type: "h2", text: "4. Sich selbst aufnehmen" },
      {
        type: "p",
        text: "Nehmen Sie eine kurze Antwort auf eine Frage auf, zum Beispiel: Was hast du am Wochenende gemacht? Hören Sie sie an und notieren Sie einen Punkt, den Sie verbessern möchten.",
      },
      { type: "h2", text: "5. Kurze Dialoge vorbereiten" },
      {
        type: "p",
        text: "Schreiben und üben Sie kurze Dialoge für echte Situationen – Essen bestellen, nach dem Weg fragen oder sich vorstellen.",
      },
      {
        type: "tip",
        items: [
          "Stellen Sie sich jeden Tag einen Timer auf fünf Minuten.",
          "Sprechen Sie laut – Flüstern zählt nicht!",
          "Nutzen Sie die Anhören-Schaltflächen in unseren Lernmaterialien, um Ihre Aussprache zu vergleichen.",
        ],
      },
    ],
  },
};
