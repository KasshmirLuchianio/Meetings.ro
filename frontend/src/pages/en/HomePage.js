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
  const content = useMemo(() => landingContent.en, []);

  return (
    <PageLayout lang="en">
      <Helmet>
        <html lang="en" />
        <title>Meetings.ro — Automatic minutes from any recording</title>
        <meta name="description" content="Turn any audio recording into structured minutes, ready to sign. Speaker diarization, PDF and DOCX export." />
        <meta name="theme-color" content="#FAF8F3" />
        <link rel="canonical" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <meta property="og:title" content="Meetings.ro — Automatic minutes from any recording" />
        <meta property="og:description" content="Turn any audio recording into structured minutes, ready to sign." />
        <meta property="og:url" content={`${SITE_URL}/en`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
      </Helmet>
      <HeroSection content={content} lang="en" />
      <ProblemSection content={content} />
      <SmartFeaturesSection content={content} />
      <VerticalsSection content={content} />
      <FinalCta content={content} lang="en" />
    </PageLayout>
  );
};

export default HomePage;
