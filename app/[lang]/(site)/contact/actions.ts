"use server";

import { deliverContact } from "@/lib/contact/deliver";
import {
  emptyContactValues,
  toLevel,
  validateContact,
  type ContactErrors,
  type ContactValues,
} from "@/lib/contact/validate";

export type ContactState = {
  status: "idle" | "invalid" | "success" | "not_configured" | "error";
  errors: ContactErrors;
  values: ContactValues;
};

function field(formData: FormData, name: string, max = 2000): string {
  const value = formData.get(name);
  return typeof value === "string" ? value.slice(0, max) : "";
}

/** Validates the enquiry on the server and hands it to the email delivery adapter. */
export async function submitContact(_previous: ContactState, formData: FormData): Promise<ContactState> {
  const values: ContactValues = {
    name: field(formData, "name", 120),
    email: field(formData, "email", 200),
    phone: field(formData, "phone", 30),
    level: toLevel(formData.get("level")),
    message: field(formData, "message", 2100),
  };

  // Spam trap: real visitors never fill this hidden field.
  if (field(formData, "company")) {
    return { status: "error", errors: {}, values: emptyContactValues };
  }

  const errors = validateContact(values);
  if (Object.keys(errors).length > 0) {
    return { status: "invalid", errors, values };
  }

  const result = await deliverContact(values);
  if (result === "sent") return { status: "success", errors: {}, values: emptyContactValues };
  if (result === "not_configured") return { status: "not_configured", errors: {}, values };
  return { status: "error", errors: {}, values };
}
