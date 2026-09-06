import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";
import { ResultsTeaser } from "@/components/results-teaser";
import { TransformationGallery } from "@/components/transformation-gallery";
import { AboutTeaser } from "@/components/about-teaser";
import { FinalCTA } from "@/components/final-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <ResultsTeaser />
      <TransformationGallery
        limit={8}
        footerCta={{ href: "/results", label: "View The Full Gallery" }}
      />
      <AboutTeaser />
      <FinalCTA />
    </>
  );
}
