import type { Metadata } from "next";
import { Testimonials } from "@/components/testimonials";
import { TransformationGallery } from "@/components/transformation-gallery";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Client Results",
  description:
    "Real transformations from real women — hear directly from clients of Coached by Debs.",
};

export default function ResultsPage() {
  return (
    <>
      <div className="pt-32" />
      <Testimonials />
      <TransformationGallery />
      <FinalCTA />
    </>
  );
}
