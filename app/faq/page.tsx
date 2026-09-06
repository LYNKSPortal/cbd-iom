import type { Metadata } from "next";
import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about 1-to-1 personal training and online coaching with Coached by Debs.",
};

export default function FAQPage() {
  return (
    <>
      <div className="pt-32" />
      <FAQ headingLevel="h1" />
      <FinalCTA />
    </>
  );
}
