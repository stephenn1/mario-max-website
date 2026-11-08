import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import "../globals.css";
import { locales, localeSettings } from "@/i18n/config";
import { getDictionary } from "@/i18n/server";
import { getSiteUrl } from "@/lib/site-url";
import { site } from "@/content/site";
import { ToastProvider } from "@/components/ui/toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata(): Promise<Metadata> {
  const { locale, t } = await getDictionary();
  const siteUrl = getSiteUrl();
  return {
    ...(siteUrl ? { metadataBase: siteUrl } : {}),
    title: {
      default: t.home.meta.title,
      template: `%s | ${site.shortName}`,
    },
    description: t.home.meta.description,
    applicationName: site.shortName,
    ...(localeSettings[locale].indexable ? {} : { robots: { index: false, follow: true } }),
  };
}

export const viewport: Viewport = {
  themeColor: "#0e2148",
  colorScheme: "light",
};

export default async function RootLayout({ children }: LayoutProps<"/[lang]">) {
  const { locale, t } = await getDictionary();
  return (
    <html
      lang={localeSettings[locale].htmlLang}
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[80] focus:rounded-btn focus:bg-gold focus:px-4 focus:py-3 focus:font-heading focus:font-bold focus:text-primary"
        >
          {t.common.skipToContent}
        </a>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
