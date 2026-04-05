import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { FaqSection } from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const IntrebariPage = () => {
  const content = useMemo(() => landingContent.ro, []);

  return (
    <PageLayout lang="ro">
      <Helmet>
        <html lang="ro" />
        <title>Întrebări frecvente — Meetings.ro</title>
        <meta name="description" content="Răspunsuri scurte despre Meetings.ro. Fără jargon, fără explicații complicate." />
        <link rel="canonical" href={`${SITE_URL}/ro/intrebari`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro/intrebari`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en/faq`} />
        <meta property="og:title" content="Întrebări frecvente — Meetings.ro" />
        <meta property="og:description" content="Răspunsuri scurte despre Meetings.ro." />
        <meta property="og:url" content={`${SITE_URL}/ro/intrebari`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
      </Helmet>
      <FaqSection content={content} />
    </PageLayout>
  );
};

export default IntrebariPage;
