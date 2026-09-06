import type { Metadata } from "next";
import { BookingForm } from "@/components/booking-form";
import { SocialNewsletter } from "@/components/social-newsletter";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book your free consultation with Coached by Debs, or subscribe to weekly training and nutrition tips.",
};

export default function ContactPage() {
  return (
    <>
      <div className="pt-32" />
      <BookingForm headingLevel="h1" />
      <SocialNewsletter />
    </>
  );
}
