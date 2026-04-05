import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { StructureSection, SmartFeaturesSection, SecuritySection } from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const FeaturesPage = () => {
  const content = useMemo(() => landingContent.en, []);

  return (
    <PageLayout lang="en">
      <Helmet>
        <html lang="en" />
        <title>Features — Meetings.ro</title>
        <meta name="description" content="9 automatic fields, PDF and Word export, archive by locality, fast search. Everything you need for official reports." />
        <link rel="canonical" href={`${SITE_URL}/en/features`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro/functionalitati`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en/features`} />
        <meta property="og:title" content="Features — Meetings.ro" />
        <meta property="og:description" content="9 automatic fields, PDF and Word export, archive by locality." />
        <meta property="og:url" content={`${SITE_URL}/en/features`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
      </Helmet>
      <StructureSection content={content} />
      <SmartFeaturesSection content={content} />
      <SecuritySection content={content} />
    </PageLayout>
  );
};

export default FeaturesPage;
