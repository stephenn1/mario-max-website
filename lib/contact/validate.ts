/** Contact form validation shared by the browser and the Server Action. */

export const contactLevels = ["not-sure", "A1", "A2", "B1", "B2", "C1", "C2", "goethe"] as const;

export type ContactLevel = (typeof contactLevels)[number];

export type ContactValues = {
  name: string;
  email: string;
  phone: string;
  level: ContactLevel;
  message: string;
};

export type ContactField = keyof ContactValues;

export type ContactErrorKey =
  | "nameRequired"
  | "nameLength"
  | "emailRequired"
  | "emailInvalid"
  | "phoneInvalid"
  | "messageRequired"
  | "messageShort"
  | "messageLong";

export type ContactErrors = Partial<Record<ContactField, ContactErrorKey>>;

export const emptyContactValues: ContactValues = { name: "", email: "", phone: "", level: "not-sure", message: "" };

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const PHONE = /^\+?[0-9\s\-().]{7,20}$/;

export function toLevel(value: unknown): ContactLevel {
  return (contactLevels as readonly string[]).includes(String(value)) ? (value as ContactLevel) : "not-sure";
}

export function validateContact(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};
  const name = values.name.trim();
  const email = values.email.trim();
  const phone = values.phone.trim();
  const message = values.message.trim();

  if (!name) errors.name = "nameRequired";
  else if (name.length < 2) errors.name = "nameLength";

  if (!email) errors.email = "emailRequired";
  else if (!EMAIL.test(email) || email.length > 200) errors.email = "emailInvalid";

  if (phone && !PHONE.test(phone)) errors.phone = "phoneInvalid";

  if (!message) errors.message = "messageRequired";
  else if (message.length < 10) errors.message = "messageShort";
  else if (message.length > 2000) errors.message = "messageLong";

  return errors;
}
