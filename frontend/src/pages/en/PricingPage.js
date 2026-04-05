import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { PageLayout } from "@/components/PageLayout";
import { PricingSection, createPricingSchema } from "@/components/Sections";
import { landingContent, SITE_URL, OG_IMAGE_URL } from "@/content/landingContent";

const PricingPage = () => {
  const content = useMemo(() => landingContent.en, []);
  const [billingMode, setBillingMode] = useState("monthly");
  const schemaMarkup = useMemo(
    () => JSON.stringify(createPricingSchema("en", content, billingMode)),
    [billingMode, content],
  );

  return (
    <PageLayout lang="en">
      <Helmet>
        <html lang="en" />
        <title>Pricing — Meetings.ro</title>
        <meta name="description" content="Simple plans, no surprises. Starter free, Pro €19/month, Enterprise €99/month. Cancel anytime." />
        <link rel="canonical" href={`${SITE_URL}/en/pricing`} />
        <link rel="alternate" hrefLang="ro" href={`${SITE_URL}/ro/preturi`} />
        <link rel="alternate" hrefLang="en" href={`${SITE_URL}/en/pricing`} />
        <meta property="og:title" content="Pricing — Meetings.ro" />
        <meta property="og:description" content="Simple plans, no surprises. Starter free, Pro €19/month, Enterprise €99/month." />
        <meta property="og:url" content={`${SITE_URL}/en/pricing`} />
        <meta property="og:image" content={OG_IMAGE_URL} />
        <script type="application/ld+json">{schemaMarkup}</script>
      </Helmet>
      <PricingSection content={content} lang="en" billingMode={billingMode} setBillingMode={setBillingMode} />
    </PageLayout>
  );
};

export default PricingPage;
