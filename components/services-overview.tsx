import Link from "next/link";
import { Dumbbell, Smartphone, CalendarHeart, Sparkles, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";

const SERVICES = [
  {
    icon: Dumbbell,
    label: "1-to-1 Personal Training",
    blurb: "Hands-on, in-studio or outdoor coaching, tailored session by session.",
    meta: "From £65 / session",
    href: "/personal-training",
  },
  {
    icon: Smartphone,
    label: "Online Coaching",
    blurb: "Bespoke training and nutrition plans with weekly accountability, anywhere.",
    meta: "From £99 / month",
    href: "/online-coaching",
  },
  {
    icon: CalendarHeart,
    label: "Upcoming Events",
    blurb: "Live masterclasses, challenges, and retreats to accelerate your progress.",
    meta: "New dates added monthly",
    href: "/events",
  },
  {
    icon: Sparkles,
    label: "Client Results",
    blurb: "Real transformations from real women, in their own words.",
    meta: "250+ women coached",
    href: "/results",
  },
];

export function ServicesOverview() {
  return (
    <section className="section-padding py-24 md:py-28 bg-black">
      <SectionHeading
        eyebrow="What I Offer"
        title="Coaching, your way"
        description="Whether you want hands-on support or a plan you can follow from anywhere, there's a path built for you."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {SERVICES.map((service, i) => (
          <Reveal key={service.label} delay={i * 0.1}>
            <Link
              href={service.href}
              className="group flex flex-col h-full rounded-sm border border-white/10 bg-charcoal/50 hover:border-gold/40 transition-colors p-7"
            >
              <service.icon className="size-6 text-gold" />
              <h3 className="font-display text-xl text-ivory mt-5 leading-snug">
                {service.label}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {service.blurb}
              </p>
              <div className="gold-divider my-5" />
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-wide text-ivory/50">
                  {service.meta}
                </span>
                <ArrowRight className="size-4 text-gold group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
