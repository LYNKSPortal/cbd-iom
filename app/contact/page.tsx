import { BookingForm } from "@/components/booking-form";
import { SocialNewsletter } from "@/components/social-newsletter";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getContactPageSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact & Booking",
  description:
    "Book your free consultation with Coached by Debs, or subscribe to weekly training and nutrition tips.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          getContactPageSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact & Booking", path: "/contact" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Get In Touch"
        title="Book your free consultation"
        description="Tell us a little about your goals and we'll be in touch within 24 hours to find the right programme for you."
      />
      <BookingForm />
      <SocialNewsletter />
    </>
  );
}
