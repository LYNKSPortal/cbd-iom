import { UpcomingEvents } from "@/components/upcoming-events";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getEventsSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Upcoming Events",
  description:
    "Live masterclasses, challenges, and retreats from Coached by Debs — join in person or online.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <JsonLd
        data={[
          ...getEventsSchema(),
          getBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Upcoming Events", path: "/events" },
          ]),
        ]}
      />
      <PageHero
        eyebrow="Upcoming Events"
        title="Join us in person or online"
        description="Live masterclasses, challenges, and retreats designed to accelerate your progress and connect you with a community of people just like you."
      />
      <UpcomingEvents
        eyebrow="What's On"
        title="Reserve your spot"
        description="New dates are added throughout the year — book early, spaces are limited."
      />
      <FinalCTA />
    </>
  );
}
