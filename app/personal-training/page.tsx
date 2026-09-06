import type { Metadata } from "next";
import { PersonalTraining } from "@/components/personal-training";
import { FinalCTA } from "@/components/final-cta";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getPersonalTrainingServiceSchema } from "@/lib/structured-data";

const TITLE = "1-to-1 Personal Training";
const DESCRIPTION =
  "Bespoke in-studio and outdoor personal training packages — single sessions, the 8-Session Transformation, and 12-Week Premium Coaching on the Isle of Man.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/personal-training" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/personal-training",
  },
  twitter: {
    title: TITLE,
    description: DESCRIPTION,
  },
};

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
