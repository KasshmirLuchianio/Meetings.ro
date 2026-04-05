import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { HeroSection, ProblemSection, FinalCta } from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const HomePage = () => {
  const content = useMemo(() => landingContent.en, []);

  return (
    <PageLayout lang="en">
      <Helmet>
        <html lang="en" />
        <title>Meetings.ro — Structured reports from any meeting</title>
        <meta name="description" content="Record the meeting. Get the report in 2 minutes. For Banking, Legal, Journalism and administration." />
        <meta name="theme-color" content="#FAF8F3" />
        <link rel="canonical" href={`${SITE_URL}/en`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en`} />
        <meta property="og:title" content="Meetings.ro — Structured reports from any meeting" />
        <meta property="og:description" content="Record the meeting. Get the report in 2 minutes." />
        <meta property="og:url" content={`${SITE_URL}/en`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
      </Helmet>
      <HeroSection content={content} lang="en" />
      <ProblemSection content={content} />
      <FinalCta content={content} lang="en" />
    </PageLayout>
  );
};

export default HomePage;
