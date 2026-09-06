import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getFAQPageSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "FAQ",
  description:
    "Answers to common questions about 1-to-1 personal training and online coaching with Coached by Debs.",
  path: "/faq",
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          getFAQPageSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
      <div className="pt-32" />
      <FAQ headingLevel="h1" />
      <FinalCTA />
    </>
  );
}
