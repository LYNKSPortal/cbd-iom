import { OnlineCoaching } from "@/components/online-coaching";
import { PricingComparison } from "@/components/pricing-comparison";
import { FinalCTA } from "@/components/final-cta";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getOnlineCoachingServiceSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Online Coaching",
  description:
    "Bronze, Silver, and Gold online coaching packages with bespoke training plans, nutrition guidance, and weekly accountability — wherever you are.",
  path: "/online-coaching",
});

export default function OnlineCoachingPage() {
  return (
    <>
      <JsonLd
        data={[
          getOnlineCoachingServiceSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Online Coaching", path: "/online-coaching" },
          ]),
        ]}
      />
      <div className="pt-32" />
      <OnlineCoaching headingLevel="h1" />
      <PricingComparison />
      <FinalCTA />
    </>
  );
}
