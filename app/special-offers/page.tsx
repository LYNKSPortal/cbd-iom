import { PageHero } from "@/components/page-hero";
import { OfferCard } from "@/components/offer-card";
import { SectionHeading } from "@/components/section-heading";
import { FinalCTA } from "@/components/final-cta";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getSpecialOfferSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";
import { COUPLES_PACKAGE, FESTIVE_PACKAGE } from "@/lib/site-data";

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
          getSpecialOfferSchema(FESTIVE_PACKAGE),
          getSpecialOfferSchema(COUPLES_PACKAGE),
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
      <OfferCard offer={FESTIVE_PACKAGE} showCountdown ctaHref="/contact" ctaLabel="Enquire Now" />

      <section className="section-padding pt-8 md:pt-12 bg-charcoal">
        <SectionHeading
          eyebrow="Special Offer"
          title="Couple Training Package"
          description="Two for the price of one — train together and reach your goals side by side."
        />
      </section>
      <OfferCard
        offer={COUPLES_PACKAGE}
        ctaHref="/contact"
        ctaLabel="Sign Up With Us Now!"
        variant="charcoal"
      />

      <FinalCTA />
    </>
  );
}
