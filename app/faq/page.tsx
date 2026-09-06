import { FAQ } from "@/components/faq";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
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
      <PageHero
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything you need to know before getting started."
        muxPlaybackId="0164QsBnRfhTFBzD5kAOjXWg3xAwr9FLeip3C5IpSyQw"
      />
      <FAQ />
      <FinalCTA />
    </>
  );
}
