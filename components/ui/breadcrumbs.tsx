import Link from "next/link";
import { cn } from "@/lib/cn";

export type Crumb = { label: string; href?: string };

export function Breadcrumbs({
  items,
  label,
  tone = "dark",
}: {
  items: Crumb[];
  label: string;
  tone?: "dark" | "light";
}) {
  return (
    <nav aria-label={label}>
      <ol className={cn("flex flex-wrap items-center gap-1 text-[13px]", tone === "dark" ? "text-white/70" : "text-muted")}>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1">
              {item.href && !last ? (
                <Link
                  href={item.href}
                  className={cn("hover:underline", tone === "dark" ? "hover:text-white" : "hover:text-primary")}
                >
                  {item.label}
                </Link>
              ) : (
                <span aria-current={last ? "page" : undefined}>{item.label}</span>
              )}
              {!last ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
