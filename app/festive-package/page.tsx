import { PageHero } from "@/components/page-hero";
import { FestiveOffer } from "@/components/festive-offer";
import { FestiveForm } from "@/components/festive-form";
import { SectionHeading } from "@/components/section-heading";
import { FESTIVE_PACKAGE } from "@/lib/site-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Festive Transformation Package",
  description: FESTIVE_PACKAGE.description,
  path: "/festive-package",
});

export default function FestivePackagePage() {
  return (
    <>
      <PageHero
        eyebrow={FESTIVE_PACKAGE.eyebrow}
        title={FESTIVE_PACKAGE.title}
        description={FESTIVE_PACKAGE.description}
        image="/festive-package-img.jpg"
      />
      <FestiveOffer />
      <section className="section-padding py-8 md:py-12 pb-24 md:pb-32 bg-black">
        <SectionHeading
          eyebrow="Claim Your Spot"
          title="Reserve your festive package"
          description="Fill in your details below and we'll be in touch to get you booked in."
        />
        <div className="mt-14">
          <FestiveForm />
        </div>
      </section>
    </>
  );
}
