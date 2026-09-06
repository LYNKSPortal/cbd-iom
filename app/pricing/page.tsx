import { PersonalTraining } from "@/components/personal-training";
import { OnlineCoaching } from "@/components/online-coaching";
import { PricingComparison } from "@/components/pricing-comparison";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import {
  getBreadcrumbSchema,
  getOnlineCoachingServiceSchema,
  getPersonalTrainingServiceSchema,
} from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Pricing",
  description:
    "Explore every Coached by Debs package — 1-to-1 personal training and online coaching — side by side, with full pricing and feature comparisons.",
  path: "/pricing",
});

export default function PricingPage() {
  return (
    <>
      <JsonLd
        data={[
          getPersonalTrainingServiceSchema(),
          getOnlineCoachingServiceSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Pricing", path: "/pricing" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Pricing"
        title="Find the level of support that's right for you"
        description="Every Coached by Debs package — 1-to-1 personal training and online coaching — side by side, with full pricing and feature comparisons."
      />
      <PersonalTraining
        eyebrow="1-to-1 Personal Training"
        title="In-person coaching packages"
      />
      <OnlineCoaching
        eyebrow="Online Coaching"
        title="Remote coaching packages"
      />
      <PricingComparison />
      <FinalCTA />
    </>
  );
}
