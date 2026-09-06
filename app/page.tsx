import { Hero } from "@/components/hero";
import { ServicesOverview } from "@/components/services-overview";
import { ResultsTeaser } from "@/components/results-teaser";
import { TransformationGallery } from "@/components/transformation-gallery";
import { AboutTeaser } from "@/components/about-teaser";
import { FinalCTA } from "@/components/final-cta";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Coached by Debs | Luxury Personal Training & Online Coaching",
  description:
    "Premium 1-to-1 personal training and online coaching for anyone who wants to get fitter, healthier, and more confident. Bespoke programmes, weekly accountability, real transformations.",
  path: "/",
  isHome: true,
});

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
