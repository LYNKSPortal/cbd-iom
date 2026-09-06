import type { Metadata } from "next";
import { OnlineCoaching } from "@/components/online-coaching";
import { PricingComparison } from "@/components/pricing-comparison";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Online Coaching",
  description:
    "Bronze, Silver, and Gold online coaching packages with bespoke training plans, nutrition guidance, and weekly accountability — wherever you are.",
};

export default function OnlineCoachingPage() {
  return (
    <>
      <div className="pt-32" />
      <OnlineCoaching headingLevel="h1" />
      <PricingComparison />
      <FinalCTA />
    </>
  );
}
