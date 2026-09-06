import type { Metadata } from "next";
import { About } from "@/components/about";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "About Debs",
  description:
    "Meet Debs — certified personal trainer and coach with 10+ years of experience helping men and women build strength and confidence.",
};

export default function AboutPage() {
  return (
    <>
      <div className="pt-32" />
      <About />
      <FinalCTA />
    </>
  );
}
