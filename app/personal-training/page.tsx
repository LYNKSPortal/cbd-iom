import type { Metadata } from "next";
import { PersonalTraining } from "@/components/personal-training";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "1-to-1 Personal Training",
  description:
    "Bespoke in-studio and outdoor personal training packages — single sessions, the 8-Session Transformation, and 12-Week Premium Coaching.",
};

export default function PersonalTrainingPage() {
  return (
    <>
      <div className="pt-32" />
      <PersonalTraining />
      <FinalCTA />
    </>
  );
}
