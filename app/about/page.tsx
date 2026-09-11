import { About } from "@/components/about";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getPersonSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About Debs",
  description:
    "Meet Debs — a personal trainer and online coach with 5 years of experience helping men and women become stronger, fitter, and more confident.",
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
        description="A personal trainer and online coach passionate about helping men and women become stronger, fitter, and more confident."
        muxPlaybackId="T3WPFqw2iVckDSktLPmFmrN2ncEB01fTMDVs5SzpexwI"
      />
      <About />
      <FinalCTA />
    </>
  );
}
