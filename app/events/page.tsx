import { UpcomingEvents } from "@/components/upcoming-events";
import { FinalCTA } from "@/components/final-cta";
import { PageHero } from "@/components/page-hero";
import { JsonLd } from "@/components/json-ld";
import { getBreadcrumbSchema, getEventsSchema } from "@/lib/structured-data";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Upcoming Events",
  description: "Join our next challenge with Coached by Debs — spaces are limited.",
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
        description="Spaces are limited — reserve your spot today."
        muxPlaybackId="00IRw7bFkAFNkCvIOg9Z02Jf0200Ez7K5DwLT77ZYUjioRI"
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
