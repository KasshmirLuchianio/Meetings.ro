import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Clock3,
  FileOutput,
  Files,
  FileText,
  Globe2,
  Landmark,
  Mail,
  Mic,
  Scale,
  ShieldCheck,
  Stethoscope,
  UploadCloud,
  User,
  Users,
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
import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { SITE_URL, OG_IMAGE_URL, HERO_VIDEO_PATH, HERO_POSTER_PATH } from "@/content/landingContent";
import { StoreBadgeGroup } from "@/components/StoreBadgeGroup";
import { useReveal } from "@/hooks/useReveal";

gsap.registerPlugin(ScrollTrigger);

// Feature card icons (order matches content.features.cards)
const featureIcons = [Users, FileText, FileOutput];

// Vertical card icons (order matches content.verticals.cards)
const verticalIcons = [Landmark, Building2, Scale, Stethoscope, Mic, User];

export const createPricingSchema = (lang, content, billingMode) => {
  const offerPlans = content.pricing.plans.map((plan) => {
    const useAnnual = billingMode === "annual";
    const price = useAnnual ? plan.annualPrice : plan.monthlyPrice;
    const cleanPrice = price.replace("€", "");
    const period = useAnnual ? plan.annualPeriod : plan.monthlyPeriod;
    return {
      "@type": "Offer",
      name: plan.name,
      price: cleanPrice,
      priceCurrency: "EUR",
      url: `${SITE_URL}/${lang}${lang === "ro" ? "/preturi" : "/pricing"}`,
      availability: "https://schema.org/OnlineOnly",
      category: period,
    };
  });
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Meetings.ro",
    image: OG_IMAGE_URL,
    description: content.meta.description,
    brand: { "@type": "Brand", name: "Meetings.ro" },
    offers: offerPlans,
  };
};

export const SectionHeading = ({ eyebrow, title, description }) => (
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
            <span key={tag} className="preview-tag">{tag}</span>
          ))}
        </div>
        <div className="preview-card p-4">
          <div className="grid gap-3">
            {content.preview.sections.map((section) => (
              <div key={section} className="flex min-h-12 items-center justify-between rounded-2xl border border-[color:rgba(27,42,74,0.10)] bg-white px-4">
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

const SplitTitle = ({ text }) => {
  const words = text.split(" ");
  return (
    <>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="hero-word-mask">
          <span className={`hero-word ${index === words.length - 1 ? "hero-word-gold" : ""}`}>{word}</span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </>
  );
};

export const HeroSection = ({ content, lang }) => {
  const heroRef = useRef(null);
  const deviceRef = useRef(null);
  const featuresHref = lang === "ro" ? "/ro/functionalitati" : "/en/features";

  useLayoutEffect(() => {
    const node = heroRef.current;
    if (!node) return undefined;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduceMotion) {
      gsap.set(node.querySelectorAll(".hero-word, [data-hero-fade], [data-hero-proof]"), { clearProps: "all", opacity: 1 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        node.querySelectorAll(".hero-word"),
        { yPercent: 112 },
        { yPercent: 0, duration: 0.9, stagger: 0.07 },
        0.1,
      )
        .fromTo(
          node.querySelectorAll("[data-hero-fade]"),
          { opacity: 0, y: 22 },
          { opacity: 1, y: 0, duration: 0.7, stagger: 0.1 },
          0.45,
        )
        .fromTo(
          node.querySelectorAll("[data-hero-proof]"),
          { opacity: 0, y: 26, scale: 0.97 },
          { opacity: 1, y: 0, scale: 1, duration: 0.65, stagger: 0.09 },
          0.8,
        )
        .fromTo(
          deviceRef.current,
          { opacity: 0, y: 56, rotate: 2.2 },
          { opacity: 1, y: 0, rotate: 0, duration: 1.1, ease: "power4.out" },
          0.35,
        );

      // continuous gentle float on the device mock
      gsap.to(deviceRef.current, {
        y: -10,
        rotate: -0.6,
        duration: 3.4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 1.5,
      });

      // scroll parallax — device drifts up slightly slower than the page
      gsap.to(deviceRef.current, {
        yPercent: -6,
        ease: "none",
        scrollTrigger: { trigger: node, start: "top top", end: "bottom top", scrub: 0.6 },
      });
    }, node);

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-anchor relative overflow-hidden pt-10 sm:pt-14" id="hero">
      <video
        className="hero-video"
        src={HERO_VIDEO_PATH}
        poster={HERO_POSTER_PATH}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
      <div className="hero-video-scrim" aria-hidden="true" />
      <div className="hero-glow" />
      <div className="soft-dot-grid" />
      <div
        ref={heroRef}
        className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-10 pt-4 sm:px-6 lg:grid-cols-12 lg:items-center lg:gap-12 lg:px-8 lg:pb-16"
      >
        <div className="space-y-8 lg:col-span-7">
          <div className="space-y-5">
            <span
              data-hero-fade
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-[color:var(--accent-gold-soft)] px-4 text-sm font-semibold text-[color:var(--brand-800)]"
            >
              <span className="hero-pulse-dot" aria-hidden="true" />
              {content.hero.eyebrow}
            </span>
            <div className="space-y-5">
              <h1 className="max-w-[10ch] font-['Space_Grotesk'] text-5xl font-bold leading-[0.94] tracking-[-0.05em] text-[color:var(--text-strong)] sm:text-6xl lg:text-7xl text-balance">
                <SplitTitle text={content.hero.title} />
              </h1>
              <p data-hero-fade className="max-w-[66ch] text-base leading-8 text-[color:var(--text-muted)] md:text-lg">
                {content.hero.lead}
              </p>
            </div>
          </div>
          <div data-hero-fade className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-start">
            <div data-testid="hero-primary-cta">
              <StoreBadgeGroup lang={lang} tooltip={content.store.tooltip} label={content.store.label} testIdPrefix="hero-store" />
            </div>
            <Button asChild variant="ghost" className="button-secondary rounded-full px-6 text-sm font-semibold md:text-base" data-testid="hero-secondary-cta">
              <a href={featuresHref}>
                {content.hero.secondaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <p data-hero-fade className="text-sm font-medium leading-7 text-[color:var(--text-muted)]">{content.hero.trustLine}</p>
          <div className="grid gap-4 md:grid-cols-3">
            {content.hero.proofs.map((proof) => (
              <div key={proof.value} data-hero-proof className="metric-card hover-lift p-5">
                <p className="font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--text-strong)]">{proof.value}</p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--text-muted)]">{proof.label}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5">
          <div ref={deviceRef} className="device-float-wrap">
            <DeviceMock content={content} />
          </div>
        </div>
      </div>
    </section>
  );
};

export const ProblemSection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="section-anchor mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
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

export const StructureSection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="section-anchor mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div ref={sectionRef} data-reveal className="space-y-10">
        <div className="surface-card rounded-[28px] p-6 sm:p-8">
          <SectionHeading eyebrow={content.fields.eyebrow} title={content.fields.title} description={content.fields.lead} />
          <div className="mt-6 inline-flex rounded-full bg-[color:var(--accent-gold-soft)] px-4 py-3 text-sm font-semibold text-[color:var(--brand-800)]" data-testid="nine-fields-section">
            {content.fields.statement}
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {content.fields.items.map((field, index) => (
            <Card key={field.label} data-reveal-child className="surface-card hover-lift rounded-[28px] p-0">
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

export const VerticalsSection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div ref={sectionRef} data-reveal className="space-y-10" data-testid="industry-verticals-section">
        <div className="surface-card rounded-[28px] p-6 sm:p-8">
          <SectionHeading eyebrow={content.verticals.eyebrow} title={content.verticals.title} description={content.verticals.lead} />
        </div>
        <div className="grid gap-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
          {content.verticals.cards.map((card, index) => {
            const Icon = verticalIcons[index] || Globe2;

            return (
              <Card key={card.title} data-reveal-child className="surface-card hover-lift rounded-[28px] p-0" data-testid={card.testid}>
                <CardHeader className="space-y-4 p-6">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:rgba(27,42,74,0.08)] text-[color:var(--brand-800)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <CardTitle className="font-['Space_Grotesk'] text-2xl font-bold tracking-[-0.04em] text-[color:var(--text-strong)]">
                    {card.title}
                  </CardTitle>
                  {card.subtitle ? (
                    <p className="text-sm leading-7 text-[color:var(--text-muted)]">{card.subtitle}</p>
                  ) : null}
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

export const SmartFeaturesSection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
      <div ref={sectionRef} data-reveal className="space-y-10">
        <div className="surface-card rounded-[28px] p-6 sm:p-8">
          <SectionHeading eyebrow={content.features.eyebrow} title={content.features.title} description={content.features.lead} />
        </div>
        <div className="grid gap-4 lg:grid-cols-3 lg:gap-6">
          {content.features.cards.map((feature, index) => {
            const Icon = featureIcons[index] || Files;

            return (
              <Card key={feature.title} data-reveal-child className="surface-card hover-lift rounded-[28px] p-0" data-testid={feature.testid}>
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

export const SecuritySection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="section-anchor mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
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

export const PricingSection = ({ content, lang, billingMode, setBillingMode }) => {
  const sectionRef = useReveal();

  return (
    <section className="section-anchor mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
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
            const useAnnual = billingMode === "annual";
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
                data-reveal-child
                className={`hover-lift rounded-[28px] p-0 ${plan.highlight ? "surface-card-strong price-highlight highlight-border" : "surface-card"}`}
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
                    {plan.ctaType === "contact" ? (
                      <a
                        href={plan.ctaHref}
                        className="flex items-center justify-center gap-2 w-full rounded-full border border-[color:var(--border)] bg-[color:var(--brand-800)] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[color:var(--brand-900)]"
                        data-testid={`${plan.testid}-contact-cta`}
                      >
                        <Mail className="h-4 w-4" />
                        {plan.ctaLabel}
                      </a>
                    ) : (
                      <StoreBadgeGroup lang={lang} tooltip={content.store.tooltip} testIdPrefix={`pricing-${plan.name.toLowerCase()}-store`} />
                    )}
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


export const TestimonialsSection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div ref={sectionRef} data-reveal>
        <div className="surface-card rounded-[28px] px-6 py-6 sm:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-[color:var(--text-muted)]">
              {content.testimonials.eyebrow}
            </p>
            <div className="flex flex-wrap gap-4">
              {content.testimonials.clients.map((client) => (
                <div
                  key={client.name}
                  className="flex items-center gap-3 rounded-2xl border border-[color:var(--border)] bg-white px-5 py-4"
                  data-testid={client.testid}
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[color:rgba(27,42,74,0.08)]">
                    <Users className="h-5 w-5 text-[color:var(--brand-800)]" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[color:var(--text-strong)]">{client.name}</p>
                    <p className="text-xs text-[color:var(--text-muted)]">{client.role} · Plan {client.plan}</p>
                  </div>
                  <span className="ml-2 rounded-full bg-[color:var(--success-bg)] px-3 py-1 text-xs font-semibold text-[color:var(--success)]">
                    ✓ Client activ
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const FaqSection = ({ content }) => {
  const sectionRef = useReveal();

  return (
    <section className="section-anchor mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
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

export const FinalCta = ({ content, lang }) => {
  const sectionRef = useReveal();
  const pricingHref = lang === "ro" ? "/ro/preturi" : "/en/pricing";

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
              <a href={pricingHref}>{content.finalCta.secondary}</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
