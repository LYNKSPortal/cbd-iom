import type { Metadata } from "next";
import { UpcomingEvents } from "@/components/upcoming-events";
import { FinalCTA } from "@/components/final-cta";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description:
    "Live masterclasses, challenges, and retreats from Coached by Debs — join in person or online.",
};

export default function EventsPage() {
  return (
    <>
      <div className="pt-32" />
      <UpcomingEvents headingLevel="h1" />
      <FinalCTA />
    </>
  );
}
