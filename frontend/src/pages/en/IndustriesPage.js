import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { VerticalsSection } from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const IndustriesPage = () => {
  const content = useMemo(() => landingContent.en, []);

  return (
    <PageLayout lang="en">
      <Helmet>
        <html lang="en" />
        <title>Industries — Meetings.ro</title>
        <meta name="description" content="Local councils, corporate meetings, legal hearings, medical consultations, interviews and personal recordings. Minutes adapted to every context." />
        <link rel="canonical" href={`${SITE_URL}/en/industries`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro/domenii`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en/industries`} />
        <meta property="og:title" content="Industries — Meetings.ro" />
        <meta property="og:description" content="Councils, corporate, legal, medical, interviews and personal. Minutes for every context." />
        <meta property="og:url" content={`${SITE_URL}/en/industries`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
      </Helmet>
      <VerticalsSection content={content} />
    </PageLayout>
  );
};

export default IndustriesPage;
