import { useEffect, useMemo, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { BRAND_LOGO_PATH, landingContent } from "@/content/landingContent";
import { StoreBadgeGroup } from "@/components/StoreBadgeGroup";

const STORAGE_KEY = "meetings-language";

const routeMirror = {
  "/ro": "/en",
  "/en": "/ro",
  "/ro/functionalitati": "/en/features",
  "/en/features": "/ro/functionalitati",
  "/ro/preturi": "/en/pricing",
  "/en/pricing": "/ro/preturi",
  "/ro/domenii": "/en/industries",
  "/en/industries": "/ro/domenii",
  "/ro/intrebari": "/en/faq",
  "/en/faq": "/ro/intrebari",
};

const getMirrorRoute = (pathname, targetLang) => {
  const mirror = routeMirror[pathname];
  if (mirror) return mirror;
  return `/${targetLang}`;
};

const navItems = {
  ro: [
    { label: "Funcționalități", href: "/ro/functionalitati", testId: "nav-features-link" },
    { label: "Domenii", href: "/ro/domenii", testId: "nav-industries-link" },
    { label: "Prețuri", href: "/ro/preturi", testId: "nav-pricing-link" },
    { label: "Întrebări", href: "/ro/intrebari", testId: "nav-faq-link" },
  ],
  en: [
    { label: "Features", href: "/en/features", testId: "nav-features-link" },
    { label: "Industries", href: "/en/industries", testId: "nav-industries-link" },
    { label: "Pricing", href: "/en/pricing", testId: "nav-pricing-link" },
    { label: "FAQ", href: "/en/faq", testId: "nav-faq-link" },
  ],
};

const LanguageToggle = ({ currentLanguage, onChange, testIdPrefix = "" }) => (
  <div
    className="language-toggle"
    role="group"
    aria-label="Language switcher"
    data-testid={testIdPrefix ? `${testIdPrefix}-language-toggle` : "language-toggle"}
  >
    {["en", "ro"].map((option) => (
      <button
        key={option}
        type="button"
        className={`language-button ${currentLanguage === option ? "active" : ""}`}
        onClick={() => onChange(option)}
        aria-pressed={currentLanguage === option}
        data-testid={testIdPrefix ? `${testIdPrefix}-lang-toggle-${option}` : `lang-toggle-${option}`}
      >
        {option.toUpperCase()}
      </button>
    ))}
  </div>
);

const Header = ({ content, lang, onLanguageChange }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const items = navItems[lang] || navItems.ro;

  return (
    <header className="sticky top-3 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="glass-header flex items-center justify-between gap-3 rounded-[28px] px-4 py-3 lg:px-5">
        <Link to={`/${lang}`} className="brand-link" data-testid="brand-link">
          <img src={BRAND_LOGO_PATH} alt="Meetings.ro" className="brand-logo" />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {items.map((item) => (
            <Link key={item.href} to={item.href} className="simple-link text-sm font-medium" data-testid={item.testId}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageToggle currentLanguage={lang} onChange={onLanguageChange} />
          <div className="store-badge-cluster compact" data-testid="header-primary-cta">
            <span className="store-badge-label">{content.navigation.download}</span>
            <StoreBadgeGroup lang={lang} tooltip={content.store.tooltip} testIdPrefix="header-store" compact />
          </div>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle currentLanguage={lang} onChange={onLanguageChange} testIdPrefix="mobile" />
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                className="button-ghost h-11 w-11 rounded-full border border-[color:var(--border)] bg-white"
                aria-label={content.navigation.openMenu}
                data-testid="mobile-menu-trigger"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[88%] max-w-sm border-l border-[color:var(--border)] bg-[color:var(--bg-0)] px-6 py-6 sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="text-left text-2xl text-[color:var(--text-strong)]">
                  <img src={BRAND_LOGO_PATH} alt="Meetings.ro" className="brand-logo" />
                </SheetTitle>
                <SheetDescription className="text-left text-sm leading-6 text-[color:var(--text-muted)]">
                  {content.hero.trustLine}
                </SheetDescription>
              </SheetHeader>
              <div className="mt-8 flex flex-col gap-3">
                {items.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <Link
                      to={item.href}
                      className="surface-card rounded-2xl px-4 py-4 text-base font-semibold text-[color:var(--text-strong)]"
                      data-testid={`mobile-${item.testId}`}
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
              <div className="mt-6">
                <StoreBadgeGroup
                  lang={lang}
                  tooltip={content.store.tooltip}
                  label={content.navigation.download}
                  testIdPrefix="mobile-sheet-store"
                />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

const Footer = ({ content, lang }) => (
  <footer className="border-t border-[color:var(--border)] bg-[color:rgba(255,253,248,0.74)]">
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-10 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-8">
      <div className="space-y-3">
        <Link to={`/${lang}`} className="brand-link" data-testid="footer-brand-link">
          <img src={BRAND_LOGO_PATH} alt="Meetings.ro" className="brand-logo" />
        </Link>
        <p className="max-w-[62ch] text-sm leading-7 text-[color:var(--text-muted)]">{content.footer.statement}</p>
        <p className="text-sm font-medium text-[color:var(--brand-800)]">{content.footer.support}</p>
      </div>
      <div className="flex flex-col gap-4 lg:items-end">
        <div className="flex flex-wrap gap-4">
          {content.footer.links.map((link) =>
            link.internal ? (
              <Link
                key={link.label}
                to={link.href}
                className="simple-link text-sm font-medium"
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="simple-link text-sm font-medium"
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </a>
            )
          )}
        </div>
        <span className="text-sm text-[color:var(--text-muted)]">{content.footer.copyright}</span>
      </div>
    </div>
  </footer>
);

export const PageLayout = ({ lang, children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const content = useMemo(() => landingContent[lang], [lang]);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    window.scrollTo(0, 0);
  }, [lang, location.pathname]);

  const handleLanguageChange = (nextLanguage) => {
    if (nextLanguage === lang) return;
    window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    navigate(getMirrorRoute(location.pathname, nextLanguage));
  };

  return (
    <div className="min-h-screen text-left text-[color:var(--text-strong)]">
      <Header content={content} lang={lang} onLanguageChange={handleLanguageChange} />
      <main>{children}</main>
      <Footer content={content} lang={lang} />
    </div>
  );
};
