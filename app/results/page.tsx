import { Testimonials } from "@/components/testimonials";
import { TransformationGallery } from "@/components/transformation-gallery";
import { FinalCTA } from "@/components/final-cta";
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
      <div className="pt-32" />
      <Testimonials headingLevel="h1" />
      <TransformationGallery />
      <FinalCTA />
    </>
  );
}
