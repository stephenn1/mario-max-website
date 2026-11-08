import type { Dictionary } from "../types";

// German draft — to be reviewed by a qualified German speaker before publication.
export const contact: Dictionary["contact"] = {
  meta: {
    title: "Kontakt",
    description:
      "Kontaktieren Sie die Mario-Max German Language School in Kubwa, Abuja. Telefon oder WhatsApp +234 906 125 4572, E-Mail mariomaxglsict@gmail.com. Geöffnet Montag–Samstag, 7:30–20:00 Uhr.",
  },
  hero: {
    title: "Kontakt",
    lead: "Fragen zu Kursen, Niveaus oder zum Einstieg? Wir freuen uns auf Ihre Nachricht.",
  },
  whatsappButton: "Auf WhatsApp mit uns chatten",
  form: {
    title: "Schreiben Sie uns",
    intro: "Füllen Sie das Formular aus, um der Schule eine Nachricht zu senden.",
    required: "Mit * gekennzeichnete Felder sind Pflichtfelder.",
    labels: {
      name: "Vollständiger Name",
      phone: "Telefon",
      email: "E-Mail",
      level: "Gewünschtes Niveau",
      message: "Nachricht",
    },
    placeholders: {
      name: "Ihr Name",
      phone: "+234 …",
      email: "name@email.com",
      message: "Wie können wir helfen?",
    },
    levels: {
      "not-sure": "Noch nicht sicher",
      A1: "A1 – Anfänger",
      A2: "A2 – Grundlagen",
      B1: "B1 – Mittelstufe",
      B2: "B2 – Obere Mittelstufe",
      C1: "C1 – Fortgeschritten",
      C2: "C2 – Sehr fortgeschritten",
      goethe: "Vorbereitung auf Goethe-Prüfungen",
    },
    optional: "(optional)",
    submit: "Nachricht senden",
    sending: "Wird gesendet …",
    preferEmail: "Lieber per E-Mail? Schreiben Sie an",
    privacyBefore: "Wir verwenden Ihre Angaben nur, um Ihre Anfrage zu beantworten. Siehe unsere",
    privacyLink: "Datenschutzerklärung",
    honeypot: "Dieses Feld bitte leer lassen",
    errors: {
      nameRequired: "Bitte geben Sie Ihren Namen ein.",
      nameLength: "Bitte geben Sie Ihren vollständigen Namen ein (mindestens 2 Zeichen).",
      emailRequired: "Bitte geben Sie Ihre E-Mail-Adresse ein.",
      emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse ein, z. B. name@email.com.",
      phoneInvalid: "Bitte geben Sie eine gültige Telefonnummer ein oder lassen Sie das Feld leer.",
      messageRequired: "Bitte geben Sie eine Nachricht ein.",
      messageShort: "Bitte schreiben Sie etwas mehr (mindestens 10 Zeichen).",
      messageLong: "Bitte fassen Sie Ihre Nachricht in weniger als 2.000 Zeichen.",
      summary: "Bitte prüfen Sie die markierten Felder.",
    },
    status: {
      successTitle: "Nachricht gesendet",
      successBody: "Vielen Dank – Ihre Nachricht wurde an die Schule gesendet. Wir antworten so bald wie möglich.",
      notConfiguredTitle: "Der Online-Versand ist noch nicht verfügbar",
      notConfiguredBody:
        "Ihre Nachricht wurde nicht gesendet. Bitte kontaktieren Sie die Schule direkt – Ihre Nachricht ist bereit zum Senden per WhatsApp oder E-Mail.",
      errorTitle: "Ihre Nachricht konnte nicht gesendet werden",
      errorBody:
        "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder kontaktieren Sie die Schule direkt per WhatsApp oder E-Mail.",
      sendWhatsapp: "Per WhatsApp senden",
      sendEmail: "Per E-Mail senden",
      toastSent: "Nachricht gesendet",
    },
    compose: {
      subject: "Anfrage über die Mario-Max-Website",
      greeting: "Hallo Mario-Max,",
      name: "Name",
      email: "E-Mail",
      phone: "Telefon",
      level: "Gewünschtes Niveau",
    },
  },
  map: {
    eyebrow: "So finden Sie uns",
    title: "Besuchen Sie die Schule",
  },
  faq: {
    eyebrow: "Kurze Antworten",
    title: "Bevor Sie sich melden",
    items: [
      {
        q: "Mit welchem Niveau sollte ich anfangen?",
        a: "Wenn Sie neu im Deutschen sind, beginnen Sie mit A1. Wenn Sie schon etwas Deutsch können, schreiben Sie uns – wir helfen Ihnen, das passende Niveau zu finden.",
      },
      {
        q: "Wie schnell antworten Sie?",
        a: "Die Schule ist von Montag bis Samstag, 7:30 bis 20:00 Uhr, geöffnet. Für eine schnelle Antwort rufen Sie während der Öffnungszeiten an oder schreiben Sie uns auf WhatsApp.",
      },
      {
        q: "Kann ich die Schule vorher besuchen?",
        a: "Bitte fragen Sie telefonisch, per WhatsApp oder per E-Mail nach einem Besuch. Sie finden uns in der Blue and Yellow Plaza, Gado Nasko Road, Kubwa, Abuja.",
      },
      {
        q: "Bereiten Sie auf die Goethe-Prüfungen vor?",
        a: "Ja. Mario-Max bereitet auf die Deutschprüfungen des Goethe-Instituts vor.",
      },
    ],
  },
};
