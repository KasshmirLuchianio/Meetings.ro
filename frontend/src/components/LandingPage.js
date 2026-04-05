import { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  FileOutput,
  Files,
  FolderTree,
  Globe2,
  Landmark,
  Menu,
  Newspaper,
  Scale,
  ScanSearch,
  ShieldCheck,
  UploadCloud,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  BRAND_LOGO_PATH,
  OG_IMAGE_URL,
  SITE_URL,
  STORE_PLACEHOLDER_URL,
  landingContent,
} from "@/content/landingContent";
import { StoreBadgeGroup } from "@/components/StoreBadgeGroup";
import { useReveal } from "@/hooks/useReveal";

const navigationConfig = [
  { key: "features", href: "#features", testId: "nav-features-link" },
  { key: "structure", href: "#structure", testId: "nav-structure-link" },
  { key: "pricing", href: "#pricing", testId: "nav-pricing-link" },
  { key: "security", href: "#security", testId: "nav-security-link" },
  { key: "faq", href: "#faq", testId: "nav-faq-link" },
];

const sectionIconMap = {
  archive: FolderTree,
  export: FileOutput,
  search: ScanSearch,
};

const verticalIcons = [Building2, Landmark, Scale, Newspaper];

const getRouteUrl = (lang, hash = "") => `${SITE_URL}/${lang}${hash}`;

const createPricingSchema = (lang, content, billingMode) => {
  const offerPlans = content.pricing.plans.map((plan) => {
    const useAnnual = billingMode === "annual" && plan.name !== "Enterprise";
    const price = useAnnual ? plan.annualPrice : plan.monthlyPrice;
    const cleanPrice = price.replace("€", "");
    const period = useAnnual ? plan.annualPeriod : plan.monthlyPeriod;

    return {
      "@type": "Offer",
      name: plan.name,
      price: cleanPrice,
      priceCurrency: "EUR",
      url: getRouteUrl(lang, "#pricing"),
      availability: "https://schema.org/PreOrder",
      category: period,
    };
  });

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Meetings.ro",
    image: OG_IMAGE_URL,
    description: content.meta.description,
    brand: {
      "@type": "Brand",
      name: "Meetings.ro",
    },
    offers: offerPlans,
  };
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

const SectionHeading = ({ eyebrow, title, description }) => (
  <div className="max-w-3xl space-y-4">
    <span className="inline-flex min-h-10 items-center rounded-full bg-[color:var(--accent-gold-soft)] px-4 text-sm font-semibold text-[color:var(--brand-800)]">
      {eyebrow}
    </span>
    <div className="space-y-3">
      <h2 className="font-['Space_Grotesk'] text-3xl font-bold leading-tight tracking-[-0.04em] text-[color:var(--text-strong)] md:text-4xl lg:text-5xl text-balance">
        {title}
      </h2>
      <p className="max-w-[68ch] text-base leading-8 text-[color:var(--text-muted)] md:text-lg">{description}</p>
    </div>
  </div>
);

const DeviceMock = ({ content }) => (
  <div className="device-frame" data-testid="hero-device-mock">
    <div className="device-notch" />
    <div className="device-screen">
      <div className="space-y-4">
        <div className="flex items-center justify-between gap-3">
          <span className="preview-badge">{content.preview.generatedAt}</span>
          <span className="rounded-full border border-[color:var(--border)] bg-white px-3 py-1 text-xs font-semibold text-[color:var(--brand-800)]">
            {content.preview.location}
          </span>
        </div>

        <div className="preview-card p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[color:var(--text-muted)]">{content.preview.title}</p>
          <h3 className="mt-3 font-['Space_Grotesk'] text-2xl font-bold text-[color:var(--text-strong)]">
            {content.fields.items[5].label}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[color:var(--text-muted)]">{content.preview.summary}</p>
          <div className="mt-5 grid gap-3">
            <div className="preview-line w-[78%]" />
            <div className="preview-line w-full" />
            <div className="preview-line w-[72%]" />
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {content.preview.tags.map((tag) => (
            <span key={tag} className="preview-tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="preview-card p-4">
          <div className="grid gap-3">
            {content.preview.sections.map((section) => (
              <div
                key={section}
                className="flex min-h-12 items-center justify-between rounded-2xl border border-[color:rgba(27,42,74,0.10)] bg-white px-4"
              >
                <span className="text-sm font-medium text-[color:var(--text-strong)]">{section}</span>
                <CheckCircle2 className="h-4 w-4 text-[color:var(--success)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Header = ({ content, lang, onLanguageChange }) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="glass-header flex items-center justify-between gap-3 rounded-[28px] px-4 py-3 lg:px-5">
        <Link to={`/${lang}`} className="brand-link" data-testid="brand-link">
          <img src={BRAND_LOGO_PATH} alt="Meetings.ro" className="brand-logo" />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary navigation">
          {navigationConfig.map((item) => (
            <a key={item.key} href={item.href} className="simple-link text-sm font-medium" data-testid={item.testId}>
              {content.navigation[item.key]}
            </a>
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
                {navigationConfig.map((item) => (
                  <SheetClose asChild key={item.key}>
                    <a
                      href={item.href}
                      className="surface-card rounded-2xl px-4 py-4 text-base font-semibold text-[color:var(--text-strong)]"
                      data-testid={`mobile-${item.testId}`}
                    >
                      {content.navigation[item.key]}
                    </a>
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

const HeroSection = ({ content, lang }) => {
  const heroRef = useReveal();

  return (
    <section className="section-anchor relative overflow-hidden pt-10 sm:pt-14" id="hero">
      <div className="hero-glow" />
      <div className="soft-dot-grid" />
      <div
        ref={heroRef}
        data-reveal
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-10 pt-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:pb-16"
      >
        <div className="space-y-8 lg:col-span-7">
          <div className="space-y-5">
            <span className="inline-flex min-h-10 items-center rounded-full bg-[color:var(--accent-gold-soft)] px-4 text-sm font-semibold text-[color:var(--brand-800)]">
              {content.hero.eyebrow}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-[10ch] font-['Space_Grotesk'] text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-[color:var(--text-strong)] sm:text-6xl lg:text-7xl text-balance">
                {content.hero.title}
              </h1>
              <p className="max-w-[66ch] text-base leading-8 text-[color:var(--text-muted)] md:text-lg">{content.hero.lead}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start">
            <div data-testid="hero-primary-cta">
              <StoreBadgeGroup lang={lang} tooltip={content.store.tooltip} label={content.store.label} testIdPrefix="hero-store" />
            </div>
            <Button asChild variant="ghost" className="button-secondary rounded-full px-6 text-sm font-semibold md:text-base" data-testid="hero-secondary-cta">
              <a href="#structure">
                {content.hero.secondaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="text-sm font-medium leading-7 text-[color:var(--text-muted)]">{content.hero.trustLine}</p>

          <div className="grid gap-4 md:grid-cols-3">
            {content.hero.proofs.map((proof) => (
              <div key={proof.value} className="metric-card p-5">
                <p className="font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--text-strong)]">{proof.value}</p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">{proof.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <DeviceMock content={content} />
        </div>
      </div>
    </section>
  );
};

const ProblemSection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="section-anchor mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20" id="features">
      <div ref={sectionRef} data-reveal className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
        <div className="surface-card rounded-[28px] p-6 sm:p-8">
          <SectionHeading eyebrow={content.problem.eyebrow} title={content.problem.title} description={content.problem.lead} />
          <p className="mt-6 max-w-[66ch] text-base leading-8 text-[color:var(--text-muted)]">{content.problem.body}</p>
        </div>
        <Card className="surface-card-strong rounded-[28px] border-[color:rgba(27,42,74,0.18)] p-0" data-testid="problem-solution-section">
          <CardHeader className="space-y-4 p-6 sm:p-8">
            <div className="flex items-center justify-between gap-3">
              <span className="inline-flex min-h-10 items-center rounded-full bg-[color:var(--success-bg)] px-4 text-sm font-semibold text-[color:var(--success)]">
                {content.problem.calloutBadge}
              </span>
              <UploadCloud className="h-6 w-6 text-[color:var(--brand-800)]" />
            </div>
            <div className="space-y-3">
              <CardTitle className="font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-[color:var(--text-strong)]">
                {content.problem.calloutTitle}
              </CardTitle>
              <CardDescription className="text-base leading-8 text-[color:var(--text-muted)]">
                {content.problem.calloutBody}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-3 p-6 pt-0 sm:p-8 sm:pt-0">
            {content.problem.steps.map((step) => (
              <div key={step} className="check-chip text-sm font-medium text-[color:var(--text-strong)]">
                <CheckCircle2 className="h-4 w-4 text-[color:var(--success)]" />
                <span>{step}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const StructureSection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="section-anchor mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20" id="structure">
      <div ref={sectionRef} data-reveal className="space-y-10">
        <div className="surface-card rounded-[28px] p-6 sm:p-8">
          <SectionHeading eyebrow={content.fields.eyebrow} title={content.fields.title} description={content.fields.lead} />
          <div className="mt-6 inline-flex rounded-full bg-[color:var(--accent-gold-soft)] px-4 py-3 text-sm font-semibold text-[color:var(--brand-800)]" data-testid="nine-fields-section">
            {content.fields.statement}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.fields.items.map((field, index) => (
            <Card key={field.label} className="surface-card rounded-[28px] p-0">
              <CardHeader className="space-y-3 p-6">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:rgba(27,42,74,0.08)] text-sm font-bold text-[color:var(--brand-800)]">
                  {index + 1}
                </span>
                <CardTitle className="font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--text-strong)]">
                  {field.label}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-sm leading-7 text-[color:var(--text-muted)]">
                {field.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

const VerticalsSection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20" id="verticals">
      <div ref={sectionRef} data-reveal className="space-y-10" data-testid="industry-verticals-section">
        <div className="surface-card rounded-[28px] p-6 sm:p-8">
          <SectionHeading eyebrow={content.verticals.eyebrow} title={content.verticals.title} description={content.verticals.lead} />
        </div>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(200px,1fr))]">
          {content.verticals.cards.map((card, index) => {
            const Icon = verticalIcons[index] || Globe2;

            return (
              <Card key={card.title} className="surface-card rounded-[28px] p-0" data-testid={card.testid}>
                <CardHeader className="space-y-4 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:rgba(27,42,74,0.08)] text-[color:var(--brand-800)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    {card.isNew ? (
                      <span className="rounded-full bg-[color:var(--accent-gold)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--bg-0)]">
                        {content.verticals.newBadge}
                      </span>
                    ) : null}
                  </div>
                  <CardTitle className="font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--text-strong)]">
                    {card.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-6 pt-0">
                  <ul className="grid gap-3 text-sm leading-7 text-[color:var(--text-strong)]">
                    {card.extracts.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[color:var(--brand-800)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm italic leading-7 text-[color:var(--text-muted)]">{card.useCase}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const SmartFeaturesSection = ({ content }) => {
  const sectionRef = useReveal();
  const iconKeys = ["archive", "export", "search"];

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div ref={sectionRef} data-reveal className="space-y-10">
        <div className="surface-card rounded-[28px] p-6 sm:p-8">
          <SectionHeading eyebrow={content.features.eyebrow} title={content.features.title} description={content.features.lead} />
        </div>
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {content.features.cards.map((feature, index) => {
            const Icon = sectionIconMap[iconKeys[index]] || Files;

            return (
              <Card key={feature.title} className="surface-card rounded-[28px] p-0" data-testid={feature.testid}>
                <CardHeader className="space-y-4 p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:rgba(27,42,74,0.08)] text-[color:var(--brand-800)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--text-strong)]">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-base leading-8 text-[color:var(--text-muted)]">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-sm leading-7 text-[color:var(--brand-800)]">{feature.detail}</CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const SecuritySection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="section-anchor mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20" id="security">
      <div ref={sectionRef} data-reveal className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.86fr)]">
        <div className="surface-card rounded-[28px] p-6 sm:p-8" data-testid="security-trust-section">
          <SectionHeading eyebrow={content.security.eyebrow} title={content.security.title} description={content.security.lead} />
          <div className="mt-8 grid gap-4">
            {content.security.bullets.map((bullet) => (
              <div key={bullet} className="check-chip min-h-14 rounded-2xl px-4 py-3 text-sm font-medium leading-7 text-[color:var(--text-strong)]">
                <ShieldCheck className="h-4 w-4 shrink-0 text-[color:var(--success)]" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        <Card className="surface-card-strong rounded-[28px] p-0">
          <CardHeader className="space-y-4 p-6 sm:p-8">
            <div className="flex flex-wrap gap-2">
              {content.security.badges.map((badge) => (
                <span key={badge} className="rounded-full bg-[color:var(--accent-gold-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-[color:var(--brand-800)]">
                  {badge}
                </span>
              ))}
            </div>
            <div className="space-y-3">
              <CardTitle className="font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-[color:var(--text-strong)]">
                {content.security.cardTitle}
              </CardTitle>
              <CardDescription className="text-base leading-8 text-[color:var(--text-muted)]">
                {content.security.cardLead}
              </CardDescription>
            </div>
          </CardHeader>
          <CardContent className="grid gap-3 p-6 pt-0 sm:p-8 sm:pt-0">
            {content.security.cardItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl border border-[color:rgba(27,42,74,0.1)] bg-white px-4 py-4 text-sm font-medium text-[color:var(--text-strong)]">
                <Building2 className="h-5 w-5 shrink-0 text-[color:var(--brand-800)]" />
                <span>{item}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const PricingSection = ({ content, lang, billingMode, setBillingMode }) => {
  const sectionRef = useReveal();

  return (
    <section className="section-anchor mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20" id="pricing">
      <div ref={sectionRef} data-reveal className="space-y-10">
        <div className="surface-card rounded-[28px] p-6 sm:p-8">
          <SectionHeading eyebrow={content.pricing.eyebrow} title={content.pricing.title} description={content.pricing.lead} />
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="language-toggle" data-testid="pricing-billing-toggle">
              {[{ key: "monthly", label: content.pricing.toggleMonthly }, { key: "annual", label: content.pricing.toggleAnnual }].map((option) => (
                <button
                  key={option.key}
                  type="button"
                  className={`language-button ${billingMode === option.key ? "active" : ""}`}
                  onClick={() => setBillingMode(option.key)}
                  aria-pressed={billingMode === option.key}
                  data-testid={`pricing-toggle-${option.key}`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[color:var(--accent-gold-soft)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-800)]">
              <Clock3 className="h-4 w-4" />
              <span>{content.pricing.savingsLabel}</span>
            </div>
          </div>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {content.pricing.plans.map((plan) => {
            const useAnnual = billingMode === "annual" && plan.name !== "Enterprise";
            const price = useAnnual ? plan.annualPrice : plan.monthlyPrice;
            const period = useAnnual ? plan.annualPeriod : plan.monthlyPeriod;
            const badgeClassName =
              plan.badgeTone === "featured"
                ? "bg-[#E6F1FB] text-[#0C447C]"
                : plan.badgeTone === "enterprise"
                  ? "bg-[color:var(--accent-gold-soft)] text-[color:var(--brand-800)]"
                  : "bg-[color:rgba(27,42,74,0.08)] text-[color:var(--brand-800)]";

            return (
              <Card
                key={plan.name}
                className={`rounded-[28px] p-0 ${plan.highlight ? "surface-card-strong price-highlight highlight-border" : "surface-card"}`}
                data-testid={plan.testid}
              >
                <CardHeader className="space-y-5 p-6 sm:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <CardTitle className="font-['Space_Grotesk'] text-3xl font-bold tracking-[-0.04em] text-[color:var(--text-strong)]">
                        {plan.name}
                      </CardTitle>
                      <CardDescription className="mt-2 text-sm font-medium text-[color:var(--text-muted)]">
                        {plan.detail}
                      </CardDescription>
                    </div>
                    <span className={`rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.08em] ${badgeClassName}`}>
                      {plan.badge}
                    </span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className="font-['Space_Grotesk'] text-5xl font-bold tracking-[-0.05em] text-[color:var(--text-strong)]">{price}</span>
                    <span className="pb-1 text-sm font-medium text-[color:var(--text-muted)]">{period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 p-6 pt-0 sm:p-8 sm:pt-0">
                  <div className="grid gap-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 text-sm leading-7 text-[color:var(--text-strong)]">
                        <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-[color:var(--success)]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3" data-testid={`${plan.testid}-cta`}>
                    <p className="text-sm font-semibold text-[color:var(--brand-800)]">{plan.ctaLabel}</p>
                    <StoreBadgeGroup lang={lang} tooltip={content.store.tooltip} testIdPrefix={`pricing-${plan.name.toLowerCase()}-store`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 text-sm text-[color:var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>{content.pricing.vatNote}</p>
          <p>Schema.org Offer • EUR</p>
        </div>
      </div>
    </section>
  );
};

const FaqSection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="section-anchor mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20" id="faq">
      <div ref={sectionRef} data-reveal className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="surface-card rounded-[28px] p-6 sm:p-8">
          <SectionHeading eyebrow={content.faq.eyebrow} title={content.faq.title} description={content.faq.lead} />
        </div>
        <Card className="surface-card rounded-[28px] p-0">
          <CardContent className="p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              {content.faq.items.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`} className="border-[color:var(--border)]" data-testid={item.testid}>
                  <AccordionTrigger className="py-5 text-left text-base font-semibold text-[color:var(--text-strong)] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-7 text-[color:var(--text-muted)]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

const FinalCta = ({ content, lang }) => {
  const sectionRef = useReveal();

  return (
    <section className="mx-auto max-w-7xl px-4 pb-14 pt-2 sm:px-6 lg:px-8 lg:pb-20">
      <div ref={sectionRef} data-reveal className="surface-card-strong rounded-[32px] px-6 py-8 sm:px-8 sm:py-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
          <div className="space-y-4">
            <div className="inline-flex rounded-full bg-[color:var(--accent-gold-soft)] px-4 py-2 text-sm font-semibold text-[color:var(--brand-800)]">
              {content.navigation.download}
            </div>
            <h2 className="max-w-[18ch] font-['Space_Grotesk'] text-3xl font-bold leading-tight tracking-[-0.04em] text-[color:var(--text-strong)] md:text-4xl text-balance">
              {content.finalCta.title}
            </h2>
            <p className="max-w-[64ch] text-base leading-8 text-[color:var(--text-muted)]">{content.finalCta.lead}</p>
          </div>
          <div className="flex flex-col gap-4">
            <div data-testid="final-primary-cta">
              <StoreBadgeGroup lang={lang} tooltip={content.store.tooltip} testIdPrefix="final-store" />
            </div>
            <Button asChild variant="ghost" className="button-secondary rounded-full px-6 text-sm font-semibold" data-testid="final-secondary-cta">
              <a href="#pricing">{content.finalCta.secondary}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
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
          {content.footer.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="simple-link text-sm font-medium"
              data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {link.label}
            </a>
          ))}
        </div>
        <span className="text-sm text-[color:var(--text-muted)]">{content.footer.copyright}</span>
      </div>
    </div>
  </footer>
);

export const LandingPage = ({ lang, storageKey }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [billingMode, setBillingMode] = useState("monthly");
  const content = useMemo(() => landingContent[lang], [lang]);
  const schemaMarkup = useMemo(
    () => JSON.stringify(createPricingSchema(lang, content, billingMode)),
    [billingMode, content, lang],
  );

  useEffect(() => {
    window.localStorage.setItem(storageKey, lang);
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [lang, location.hash, storageKey]);

  const handleLanguageChange = (nextLanguage) => {
    if (nextLanguage === lang) {
      return;
    }

    window.localStorage.setItem(storageKey, nextLanguage);
    navigate(`/${nextLanguage}${location.hash}`);
  };

  const canonicalUrl = getRouteUrl(lang);
  const alternateRo = getRouteUrl("ro");
  const alternateEn = getRouteUrl("en");

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>{content.meta.title}</title>
        <meta name="description" content={content.meta.description} />
        <meta name="keywords" content={content.meta.keywords.join(", ")} />
        <meta name="theme-color" content="#FAF8F3" />
        <meta property="og:title" content={content.meta.title} />
        <meta property="og:description" content={content.meta.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content={content.locale} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={content.meta.title} />
        <meta name="twitter:description" content={content.meta.description} />
        <meta name="twitter:image" content={OG_IMAGE_URL} />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="ro" href={alternateRo} />
        <link rel="alternate" hrefLang="en" href={alternateEn} />
        <link rel="alternate" hrefLang="x-default" href={alternateRo} />
        <script type="application/ld+json">{schemaMarkup}</script>
      </Helmet>

      <div className="min-h-screen text-left text-[color:var(--text-strong)]">
        <Header content={content} lang={lang} onLanguageChange={handleLanguageChange} />
        <main>
          <HeroSection content={content} lang={lang} />
          <ProblemSection content={content} />
          <StructureSection content={content} />
          <VerticalsSection content={content} />
          <SmartFeaturesSection content={content} />
          <SecuritySection content={content} />
          <PricingSection content={content} lang={lang} billingMode={billingMode} setBillingMode={setBillingMode} />
          <FaqSection content={content} />
          <FinalCta content={content} lang={lang} />
        </main>
        <Footer content={content} lang={lang} />
      </div>
    </>
  );
};
