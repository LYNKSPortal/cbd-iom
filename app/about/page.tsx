import { About } from "@/components/about";
import { FinalCTA } from "@/components/final-cta";
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
      <div className="pt-32" />
      <About />
      <FinalCTA />
    </>
  );
}
