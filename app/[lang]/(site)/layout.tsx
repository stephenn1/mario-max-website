import { getDictionary } from "@/i18n/server";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";

/** Shared chrome for all regular pages: header, footer and floating actions. */
export default async function SiteLayout({ children }: LayoutProps<"/[lang]">) {
  const { locale, t } = await getDictionary();
  return (
    <>
      <Header t={t.common} locale={locale} />
      <main id="main" tabIndex={-1} className="flex-1 focus:outline-none">
        {children}
      </main>
      <Footer t={t.common} locale={locale} />
      <FloatingActions
        whatsappLabel={t.common.whatsappFloat}
        whatsappMessage={t.common.whatsappMessage}
        backToTopLabel={t.common.backToTop}
        newTabLabel={t.common.newTab}
      />
    </>
  );
}
