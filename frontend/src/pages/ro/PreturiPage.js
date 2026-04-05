import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection, createPricingSchema } from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const PreturiPage = () => {
  const content = useMemo(() => landingContent.ro, []);
  const [billingMode, setBillingMode] = useState("monthly");
  const schemaMarkup = useMemo(
    () => JSON.stringify(createPricingSchema("ro", content, billingMode)),
    [billingMode, content],
  );

  return (
    <PageLayout lang="ro">
      <Helmet>
        <html lang="ro" />
        <title>Prețuri — Meetings.ro</title>
        <meta name="description" content="Planuri simple fără surprize. Starter gratuit, Pro €19/lună, Enterprise €99/lună. Anulezi oricând." />
        <link rel="canonical" href={`${SITE_URL}/ro/preturi`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro/preturi`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en/pricing`} />
        <meta property="og:title" content="Prețuri — Meetings.ro" />
        <meta property="og:description" content="Planuri simple fără surprize. Starter gratuit, Pro €19/lună, Enterprise €99/lună." />
        <meta property="og:url" content={`${SITE_URL}/ro/preturi`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <script type="application/ld+json">{schemaMarkup}</script>
      </Helmet>
      <PricingSection content={content} lang="ro" billingMode={billingMode} setBillingMode={setBillingMode} />
    </PageLayout>
  );
};

export default PreturiPage;
