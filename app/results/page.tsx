import { Testimonials } from "@/components/testimonials";
import { TransformationGallery } from "@/components/transformation-gallery";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getReviewsSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Client Results",
  description:
    "Real transformations from real clients — hear directly from the men and women who've trained with Coached by Debs.",
  path: "/results",
});

export default function ResultsPage() {
  return (
    <>
      <JsonLd
        data={[
          getReviewsSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Client Results", path: "/results" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Client Transformations"
        title="Real people. Real results."
        description="The proof isn't in the promise — it's in the transformation."
        muxPlaybackId="CDzchdr1TJh3yYNhTXxLgo2VX8QDNJIiviDkNWii01bo"
      />
      <Testimonials />
      <TransformationGallery />
      <FinalCTA />
    </>
  );
}
