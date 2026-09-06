import type { Metadata } from "next";
import { PersonalTraining } from "@/components/personal-training";
import { OnlineCoaching } from "@/components/online-coaching";
import { PricingComparison } from "@/components/pricing-comparison";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Explore every Coached by Debs package — 1-to-1 personal training and online coaching — side by side, with full pricing and feature comparisons.",
};

export default function PricingPage() {
  return (
    <>
      <div className="pt-32" />
      <PersonalTraining
        eyebrow="1-to-1 Personal Training"
        title="In-person coaching packages"
        headingLevel="h1"
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
