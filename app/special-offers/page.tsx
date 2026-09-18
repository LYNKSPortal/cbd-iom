import { PageHero } from "@/components/page-hero";
import { FestiveOffer } from "@/components/festive-offer";
import { SectionHeading } from "@/components/section-heading";
import { FinalCTA } from "@/components/final-cta";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getSpecialOfferSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Special Offers",
  description: "Limited-time offers from Coached by Debs — here's what's on right now.",
  path: "/special-offers",
});

export default function SpecialOffersPage() {
  return (
    <>
      <JsonLd
        data={[
          getSpecialOfferSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Special Offers", path: "/special-offers" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Special Offers"
        title="Limited-time offers, just for you"
        description="New offers added throughout the year — here's what's on right now."
        muxPlaybackId="00IRw7bFkAFNkCvIOg9Z02Jf0200Ez7K5DwLT77ZYUjioRI"
      />
      <section className="section-padding pt-24 md:pt-32 bg-black">
        <SectionHeading
          eyebrow="Currently Live"
          title="The 8-Week Festive Shred"
          description="Starts 1st October — here's everything you need to know."
        />
      </section>
      <FestiveOffer showCountdown ctaHref="/contact" ctaLabel="Enquire Now" />
      <FinalCTA />
    </>
  );
}
