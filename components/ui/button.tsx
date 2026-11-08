import Link from "next/link";
import { cn } from "@/lib/cn";

export type ButtonVariant = "primary" | "secondary" | "outline-light" | "dark" | "whatsapp";
type ButtonSize = "md" | "sm";

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn font-heading font-bold transition-colors duration-150 disabled:pointer-events-none disabled:opacity-55";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-gold text-primary shadow-[0_6px_14px_-6px_rgb(231_169_35/0.7)] hover:bg-[#d99b14]",
  secondary: "border border-line bg-white text-primary hover:border-primary-600/40 hover:bg-primary-50",
  "outline-light": "border border-white/45 bg-transparent text-white hover:bg-white/10",
  dark: "bg-primary text-white hover:bg-primary-700",
  whatsapp: "bg-gold text-primary hover:bg-[#d99b14]",
};

const sizes: Record<ButtonSize, string> = {
  md: "min-h-12 px-5 text-[15px]",
  sm: "min-h-10 px-4 text-sm",
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type LinkProps = {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: React.ReactNode;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
  newTabLabel?: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

/** A link styled as a button. Internal links use next/link. */
export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  newTabLabel,
  ...rest
}: LinkProps) {
  const classes = buttonClasses(variant, size, className);
  const isPlainAnchor = external || /^(https?:|mailto:|tel:)/.test(href);
  if (isPlainAnchor) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
        {external && newTabLabel ? <span className="sr-only"> {newTabLabel}</span> : null}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}
