import { PersonalTraining } from "@/components/personal-training";
import { FinalCTA } from "@/components/final-cta";
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
      <div className="pt-32" />
      <PersonalTraining headingLevel="h1" />
      <FinalCTA />
    </>
  );
}
