import { About } from "@/components/about";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getPersonSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Debs",
  description:
    "Meet Debs — certified personal trainer and coach with 5+ years of experience helping men and women build strength and confidence.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          getPersonSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About Debs", path: "/about" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="About Debs"
        title="Coaching built on honesty, science, and real life"
        description="Meet Debs — certified personal trainer and coach dedicated to helping men and women build strength and confidence."
        muxPlaybackId="T3WPFqw2iVckDSktLPmFmrN2ncEB01fTMDVs5SzpexwI"
      />
      <About />
      <FinalCTA />
    </>
  );
}
