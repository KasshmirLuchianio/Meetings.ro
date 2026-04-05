import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { StructureSection, SmartFeaturesSection, SecuritySection } from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const FunctionalitatiPage = () => {
  const content = useMemo(() => landingContent.ro, []);

  return (
    <PageLayout lang="ro">
      <Helmet>
        <html lang="ro" />
        <title>Funcționalități — Meetings.ro</title>
        <meta name="description" content="9 câmpuri automate, export PDF și Word, arhivare pe localități, căutare rapidă. Tot ce ai nevoie pentru rapoarte oficiale." />
        <link rel="canonical" href={`${SITE_URL}/ro/functionalitati`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro/functionalitati`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en/features`} />
        <meta property="og:title" content="Funcționalități — Meetings.ro" />
        <meta property="og:description" content="9 câmpuri automate, export PDF și Word, arhivare pe localități." />
        <meta property="og:url" content={`${SITE_URL}/ro/functionalitati`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
      </Helmet>
      <StructureSection content={content} />
      <SmartFeaturesSection content={content} />
      <SecuritySection content={content} />
    </PageLayout>
  );
};

export default FunctionalitatiPage;
