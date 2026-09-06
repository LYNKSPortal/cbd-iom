import { OnlineCoaching } from "@/components/online-coaching";
import { PricingComparison } from "@/components/pricing-comparison";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
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
      <PageHero
        eyebrow="Online Coaching"
        title="Bespoke coaching, wherever you are"
        description="Training plans, nutrition guidance, and weekly accountability, delivered straight to your phone."
      />
      <OnlineCoaching
        eyebrow="Packages"
        title="Choose your plan"
        description="Bronze, Silver, Gold, and Platinum — pick the level of support that fits your life."
      />
      <PricingComparison />
      <FinalCTA />
    </>
  );
}
