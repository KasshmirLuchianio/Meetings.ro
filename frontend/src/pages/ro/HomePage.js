import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import {
  HeroSection,
  ProblemSection,
  SmartFeaturesSection,
  VerticalsSection,
  FinalCta,
} from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const HomePage = () => {
  const content = useMemo(() => landingContent.ro, []);

  return (
    <PageLayout lang="ro">
      <Helmet>
        <html lang="ro" />
        <title>Meetings.ro — Proces verbal automat din orice înregistrare</title>
        <meta name="description" content="Transformă orice înregistrare audio într-un proces verbal structurat, gata de semnat. Diarizare pe vorbitori, export PDF și DOCX." />
        <meta name="theme-color" content="#FAF8F3" />
        <link rel="canonical" href={`${SITE_URL}/ro`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <meta property="og:title" content="Meetings.ro — Proces verbal automat din orice înregistrare" />
        <meta property="og:description" content="Transformă orice înregistrare audio într-un proces verbal structurat, gata de semnat." />
        <meta property="og:url" content={`${SITE_URL}/ro`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
      </Helmet>
      <HeroSection content={content} lang="ro" />
      <ProblemSection content={content} />
      <SmartFeaturesSection content={content} />
      <VerticalsSection content={content} />
      <FinalCta content={content} lang="ro" />
    </PageLayout>
  );
};

export default HomePage;
