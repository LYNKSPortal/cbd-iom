import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/countdown-timer";
import { ViewMoreLink } from "@/components/view-more-link";
import { UPCOMING_EVENTS } from "@/lib/site-data";

export function UpcomingEvents({
  limit,
  eyebrow = "Upcoming Events",
  title = "Join us in person or online",
  description = "Live masterclasses, challenges, and retreats designed to accelerate your progress and connect you with a community of people just like you.",
  footerCta,
  headingLevel = "h2",
}: {
  limit?: number;
  eyebrow?: string;
  title?: string;
  description?: string;
  footerCta?: { href: string; label: string };
  headingLevel?: "h1" | "h2";
}) {
  const events = limit ? UPCOMING_EVENTS.slice(0, limit) : UPCOMING_EVENTS;

  return (
    <section className="section-padding py-24 md:py-32 bg-black">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        headingLevel={headingLevel}
      />

      <div className="mt-16 flex flex-col gap-6 lg:gap-8 max-w-5xl mx-auto">
        {events.map((event, i) => (
          <Reveal key={event.title} delay={i * 0.12}>
            <div className="group relative flex flex-col md:flex-row h-full rounded-sm border border-white/10 bg-charcoal/50 hover:border-gold/40 transition-colors overflow-hidden">
              <div className="relative h-56 md:h-auto md:w-2/5 lg:w-1/3 shrink-0 overflow-hidden">
                <Image
                  src={event.image ?? "/image-of-debs.jpg"}
                  alt={event.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/60 via-black/10 to-transparent" />
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-[0.2em] bg-gold text-black px-3 py-1 rounded-full font-semibold">
                  {event.spots}
                </span>
              </div>

              <div className="flex flex-col flex-1 p-7 md:p-9">
                <h3 className="font-display text-2xl md:text-3xl text-ivory leading-snug">
                  {event.title}
                </h3>

                <div className="mt-3 flex flex-wrap gap-x-6 gap-y-1.5 text-xs text-muted-foreground uppercase tracking-wide">
                  <span className="flex items-center gap-2">
                    <Calendar className="size-3.5 text-gold" />
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="size-3.5 text-gold" />
                    {event.location}
                  </span>
                </div>

                <p className="mt-4 text-sm md:text-base text-ivory/70 leading-relaxed flex-1 max-w-2xl">
                  {event.description}
                </p>

                <div className="gold-divider my-5" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <CountdownTimer target={event.date} />

                  <Button
                    render={<Link href="/contact" />}
                    nativeButton={false}
                    className="rounded-none bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-black uppercase text-xs tracking-[0.15em] h-11 px-6 shrink-0"
                  >
                    Reserve My Spot
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {footerCta && <ViewMoreLink href={footerCta.href} label={footerCta.label} />}
    </section>
  );
}
