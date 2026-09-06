import { UpcomingEvents } from "@/components/upcoming-events";
import { FinalCTA } from "@/components/final-cta";
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
      <div className="pt-32" />
      <UpcomingEvents headingLevel="h1" />
      <FinalCTA />
    </>
  );
}
