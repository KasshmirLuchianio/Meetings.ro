import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { FaqSection } from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const FaqPage = () => {
  const content = useMemo(() => landingContent.en, []);

  return (
    <PageLayout lang="en">
      <Helmet>
        <html lang="en" />
        <title>FAQ — Meetings.ro</title>
        <meta name="description" content="Short answers about Meetings.ro. No jargon, no complicated explanations." />
        <link rel="canonical" href={`${SITE_URL}/en/faq`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro/intrebari`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en/faq`} />
        <meta property="og:title" content="FAQ — Meetings.ro" />
        <meta property="og:description" content="Short answers about Meetings.ro." />
        <meta property="og:url" content={`${SITE_URL}/en/faq`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
      </Helmet>
      <FaqSection content={content} />
    </PageLayout>
  );
};

export default FaqPage;
