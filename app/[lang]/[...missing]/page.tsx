import { notFound } from "next/navigation";

/** Any unmatched path under a locale (e.g. /en/does-not-exist) shows the localised 404. */
export default function CatchAll() {
  notFound();
}
