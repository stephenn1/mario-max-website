"use client";

import Link from "next/link";
import { CircleAlert, CircleCheck, LoaderCircle, Mail } from "lucide-react";
import { startTransition, useActionState, useEffect, useRef, useState } from "react";
import { submitContact, type ContactState } from "@/app/[lang]/(site)/contact/actions";
import type { Dictionary } from "@/content/dictionaries";
import { site } from "@/content/site";
import { mailtoHref, whatsappHref } from "@/lib/links";
import {
  contactLevels,
  emptyContactValues,
  toLevel,
  validateContact,
  type ContactErrors,
  type ContactField,
  type ContactValues,
} from "@/lib/contact/validate";
import { WhatsAppIcon } from "@/components/icons/brand";
import { useToast } from "@/components/ui/toast";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/cn";

type FormText = Dictionary["contact"]["form"];

const initialState: ContactState = { status: "idle", errors: {}, values: emptyContactValues };

const inputClasses =
  "w-full rounded-btn border-[1.5px] bg-white px-3.5 text-[15px] text-ink placeholder:text-muted/80 focus:border-primary-600 focus:outline-none focus:ring-4 focus:ring-primary/15";

function composeMessage(values: ContactValues, text: FormText): string {
  return [
    text.compose.greeting,
    "",
    values.message.trim(),
    "",
    `${text.compose.name}: ${values.name.trim()}`,
    `${text.compose.email}: ${values.email.trim()}`,
    values.phone.trim() ? `${text.compose.phone}: ${values.phone.trim()}` : "",
    `${text.compose.level}: ${text.levels[values.level]}`,
  ]
    .filter((line, i, all) => line !== "" || (all[i - 1] ?? "") !== "")
    .join("\n");
}

/** Contact form: validated in the browser and on the server; never reports a send that didn't happen. */
export function ContactForm({ text, privacyHref }: { text: FormText; privacyHref: string }) {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const [clientErrors, setClientErrors] = useState<ContactErrors>({});
  const levelRef = useRef<HTMLSelectElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const { show } = useToast();

  const errors: ContactErrors = { ...state.errors, ...clientErrors };

  // Pre-select a level when arriving from a course card (?level=A1).
  useEffect(() => {
    const fromUrl = new URLSearchParams(window.location.search).get("level");
    if (fromUrl && levelRef.current) levelRef.current.value = toLevel(fromUrl);
  }, []);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
      show(text.status.toastSent);
    }
    if (state.status !== "idle" && state.status !== "invalid") {
      statusRef.current?.focus();
    }
    if (state.status === "invalid") {
      const first = Object.keys(state.errors)[0];
      if (first) formRef.current?.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
    }
  }, [state, show, text.status.toastSent]);

  function readValues(form: HTMLFormElement): ContactValues {
    const data = new FormData(form);
    const get = (name: string) => String(data.get(name) ?? "");
    return { name: get("name"), email: get("email"), phone: get("phone"), level: toLevel(get("level")), message: get("message") };
  }

  // With JavaScript, submit via the action directly so typed values are kept if
  // the message cannot be sent. Without JavaScript, the form posts natively.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const found = validateContact(readValues(form));
    setClientErrors(found);
    if (Object.keys(found).length > 0) {
      const first = Object.keys(found)[0];
      form.querySelector<HTMLElement>(`[name="${first}"]`)?.focus();
      return;
    }
    const data = new FormData(form);
    startTransition(() => formAction(data));
  }

  function clearError(name: ContactField) {
    if (!clientErrors[name]) return;
    setClientErrors((previous) => {
      const next = { ...previous };
      delete next[name];
      return next;
    });
  }

  const fieldProps = (name: ContactField) => ({
    name,
    id: `contact-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    onInput: () => clearError(name),
  });

  function errorText(name: ContactField) {
    const key = errors[name];
    if (!key) return null;
    return (
      <p id={`contact-${name}-error`} className="mt-1.5 flex items-center gap-1.5 text-[13px] text-accent">
        <CircleAlert aria-hidden="true" className="size-3.5 shrink-0" />
        {text.errors[key]}
      </p>
    );
  }

  const composed = composeMessage(state.values, text);
  const fallback = (
    <div className="mt-4 flex flex-col gap-2.5 sm:flex-row">
      <a href={whatsappHref(composed)} target="_blank" rel="noopener noreferrer" className={buttonClasses("primary", "sm")}>
        <WhatsAppIcon className="size-4" />
        {text.status.sendWhatsapp}
      </a>
      <a href={mailtoHref(text.compose.subject, composed)} className={buttonClasses("secondary", "sm")}>
        <Mail aria-hidden="true" className="size-4" />
        {text.status.sendEmail}
      </a>
    </div>
  );

  return (
    <form ref={formRef} action={formAction} onSubmit={handleSubmit} noValidate aria-describedby="contact-required">
      <div ref={statusRef} tabIndex={-1} aria-live="polite" className="focus:outline-none">
        {state.status === "success" ? (
          <div className="mb-5 flex gap-3 rounded-card-sm border border-emerald-600/30 bg-emerald-50 p-4 text-sm text-emerald-900">
            <CircleCheck aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
            <div>
              <p className="font-heading font-bold">{text.status.successTitle}</p>
              <p className="mt-1">{text.status.successBody}</p>
            </div>
          </div>
        ) : null}
        {state.status === "not_configured" || state.status === "error" ? (
          <div className="mb-5 rounded-card-sm border border-gold/50 bg-[#fff8e6] p-4 text-sm text-ink">
            <p className="flex items-center gap-2 font-heading font-bold text-primary">
              <CircleAlert aria-hidden="true" className="size-5 shrink-0 text-gold-ink" />
              {state.status === "not_configured" ? text.status.notConfiguredTitle : text.status.errorTitle}
            </p>
            <p className="mt-1.5">{state.status === "not_configured" ? text.status.notConfiguredBody : text.status.errorBody}</p>
            {fallback}
          </div>
        ) : null}
        {Object.keys(errors).length > 0 ? (
          <p className="mb-4 text-sm font-semibold text-accent">{text.errors.summary}</p>
        ) : null}
      </div>

      <p id="contact-required" className="mb-5 text-sm text-muted">
        {text.required}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-1.5 block font-heading text-sm font-bold text-primary">
            {text.labels.name} <span aria-hidden="true" className="text-accent">*</span>
          </label>
          <input
            {...fieldProps("name")}
            type="text"
            autoComplete="name"
            required
            defaultValue={state.values.name}
            placeholder={text.placeholders.name}
            className={cn(inputClasses, "h-[46px]", errors.name ? "border-accent" : "border-line")}
          />
          {errorText("name")}
        </div>
        <div>
          <label htmlFor="contact-phone" className="mb-1.5 block font-heading text-sm font-bold text-primary">
            {text.labels.phone} <span className="font-normal text-muted">{text.optional}</span>
          </label>
          <input
            {...fieldProps("phone")}
            type="tel"
            autoComplete="tel"
            defaultValue={state.values.phone}
            placeholder={text.placeholders.phone}
            className={cn(inputClasses, "h-[46px]", errors.phone ? "border-accent" : "border-line")}
          />
          {errorText("phone")}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-email" className="mb-1.5 block font-heading text-sm font-bold text-primary">
          {text.labels.email} <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <input
          {...fieldProps("email")}
          type="email"
          autoComplete="email"
          required
          defaultValue={state.values.email}
          placeholder={text.placeholders.email}
          className={cn(inputClasses, "h-[46px]", errors.email ? "border-accent" : "border-line")}
        />
        {errorText("email")}
      </div>

      <div className="mt-4">
        <label htmlFor="contact-level" className="mb-1.5 block font-heading text-sm font-bold text-primary">
          {text.labels.level}
        </label>
        <select
          id="contact-level"
          name="level"
          ref={levelRef}
          defaultValue={state.values.level}
          className={cn(inputClasses, "h-[46px] border-line")}
        >
          {contactLevels.map((value) => (
            <option key={value} value={value}>
              {text.levels[value]}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-4">
        <label htmlFor="contact-message" className="mb-1.5 block font-heading text-sm font-bold text-primary">
          {text.labels.message} <span aria-hidden="true" className="text-accent">*</span>
        </label>
        <textarea
          {...fieldProps("message")}
          required
          rows={5}
          maxLength={2000}
          defaultValue={state.values.message}
          placeholder={text.placeholders.message}
          className={cn(inputClasses, "min-h-[120px] py-3", errors.message ? "border-accent" : "border-line")}
        />
        {errorText("message")}
      </div>

      {/* Spam trap — hidden from people and assistive technology. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="contact-company">{text.honeypot}</label>
        <input id="contact-company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <button type="submit" disabled={pending} className={buttonClasses("primary", "md", "mt-6 w-full")}>
        {pending ? <LoaderCircle aria-hidden="true" className="size-4 animate-spin" /> : null}
        {pending ? text.sending : text.submit}
      </button>

      <p className="mt-4 text-center text-[13px] text-muted">
        {text.preferEmail}{" "}
        <a href={mailtoHref()} className="font-medium text-primary-600 hover:underline">
          {site.email}
        </a>
      </p>
      <p className="mt-2 text-center text-xs text-muted">
        {text.privacyBefore}{" "}
        <Link href={privacyHref} className="text-primary-600 underline underline-offset-2">
          {text.privacyLink}
        </Link>
        .
      </p>
    </form>
  );
}
