import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { VerticalsSection } from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const DomeniiPage = () => {
  const content = useMemo(() => landingContent.ro, []);

  return (
    <PageLayout lang="ro">
      <Helmet>
        <html lang="ro" />
        <title>Domenii — Meetings.ro</title>
        <meta name="description" content="Consilii locale, ședințe corporative, audiențe juridice, consultații medicale, interviuri și înregistrări personale. Proces verbal adaptat fiecărui context." />
        <link rel="canonical" href={`${SITE_URL}/ro/domenii`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro/domenii`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en/industries`} />
        <meta property="og:title" content="Domenii — Meetings.ro" />
        <meta property="og:description" content="Consilii locale, corporate, juridic, medical, interviuri și personal. Proces verbal pentru fiecare context." />
        <meta property="og:url" content={`${SITE_URL}/ro/domenii`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
      </Helmet>
      <VerticalsSection content={content} />
    </PageLayout>
  );
};

export default DomeniiPage;
