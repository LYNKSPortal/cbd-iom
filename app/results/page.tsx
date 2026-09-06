import type { Metadata } from "next";
import { Testimonials } from "@/components/testimonials";
import { TransformationGallery } from "@/components/transformation-gallery";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Client Results",
  description:
    "Real transformations from real clients — hear directly from the men and women who've trained with Coached by Debs.",
};

export default function ResultsPage() {
  return (
    <>
      <div className="pt-32" />
      <Testimonials headingLevel="h1" />
      <TransformationGallery />
      <FinalCTA />
    </>
  );
}
