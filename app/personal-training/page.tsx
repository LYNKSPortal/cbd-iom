import { PersonalTraining } from "@/components/personal-training";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getPersonalTrainingServiceSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "1-to-1 Personal Training",
  description:
    "Bespoke in-studio and outdoor personal training packages — single sessions, the 8-Session Transformation, and 12-Week Premium Coaching on the Isle of Man.",
  path: "/personal-training",
});

export default function PersonalTrainingPage() {
  return (
    <>
      <JsonLd
        data={[
          getPersonalTrainingServiceSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "1-to-1 Personal Training", path: "/personal-training" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="1-to-1 Personal Training"
        title="Hands-on coaching, built entirely around you"
        description="In-studio or outdoor personal training on the Isle of Man, tailored to your goals, your body, and your schedule."
      />
      <PersonalTraining
        eyebrow="Packages"
        title="Choose your package"
        description="From a single trial session to full 12-week transformation coaching."
      />
      <FinalCTA />
    </>
  );
}
