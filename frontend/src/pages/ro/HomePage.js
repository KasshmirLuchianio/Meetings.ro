import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { HeroSection, ProblemSection, TestimonialsSection, FinalCta } from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const HomePage = () => {
  const content = useMemo(() => landingContent.ro, []);

  return (
    <PageLayout lang="ro">
      <Helmet>
        <html lang="ro" />
        <title>Meetings.ro — Rapoarte structurate din orice ședință</title>
        <meta name="description" content="Înregistrezi ședința. Primești raportul gata în 2 minute. Pentru Banking, Legal, Jurnalism și administrație." />
        <meta name="theme-color" content="#FAF8F3" />
        <link rel="canonical" href={`${SITE_URL}/ro`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <meta property="og:title" content="Meetings.ro — Rapoarte structurate din orice ședință" />
        <meta property="og:description" content="Înregistrezi ședința. Prime��ti raportul gata în 2 minute." />
        <meta property="og:url" content={`${SITE_URL}/ro`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
      </Helmet>
      <HeroSection content={content} lang="ro" />
      <ProblemSection content={content} />
      <TestimonialsSection content={content} />
      <FinalCta content={content} lang="ro" />
    </PageLayout>
  );
};

export default HomePage;
