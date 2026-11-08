import type { ContactValues } from "./validate";

export type DeliveryResult = "sent" | "not_configured" | "failed";

/**
 * Delivers a contact-form message to the school by email.
 *
 * No email provider is configured yet. To enable sending, set these
 * server-side environment variables (never expose them to the browser):
 *
 *   RESEND_API_KEY     API key from https://resend.com
 *   CONTACT_TO_EMAIL   inbox that receives enquiries (e.g. mariomaxglsict@gmail.com)
 *   CONTACT_FROM_EMAIL verified sender address, e.g. "Mario-Max Website <website@your-domain>"
 *
 * Until they are set, this returns "not_configured" and the form tells the
 * visitor honestly that the message was not sent, offering WhatsApp and email.
 * To use another provider, replace the fetch call below.
 */
export async function deliverContact(values: ContactValues): Promise<DeliveryResult> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) return "not_configured";

  const text = [
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${values.phone || "—"}`,
    `Interested level: ${values.level}`,
    "",
    values.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: values.email,
        subject: `Website enquiry from ${values.name}`,
        text,
      }),
      signal: AbortSignal.timeout(10000),
    });
    return response.ok ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
