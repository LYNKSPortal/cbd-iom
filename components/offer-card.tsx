import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/countdown-timer";
import type { SpecialOffer } from "@/lib/site-data";

export function OfferCard({
  offer,
  showCountdown = false,
  ctaHref,
  ctaLabel = "Enquire Now",
  variant = "black",
}: {
  offer: SpecialOffer;
  showCountdown?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  variant?: "black" | "charcoal";
}) {
  return (
    <section
      className={`section-padding py-16 md:py-20 ${
        variant === "charcoal" ? "bg-charcoal" : "bg-black"
      }`}
    >
      <div className="grid lg:grid-cols-[1.15fr_1fr] gap-14 lg:gap-16 items-center max-w-7xl mx-auto">
        <Reveal className="relative">
          <div className="relative aspect-square w-full rounded-sm overflow-hidden gold-border">
            <Image
              src={offer.image}
              alt={offer.imageAlt}
              fill
              sizes="(min-width: 1024px) 50vw, 90vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-base md:text-lg text-ivory/70 leading-relaxed mb-8">
            {offer.longDescription}
          </p>

          <div className="rounded-sm border border-gold/40 bg-gradient-to-b from-charcoal-light to-charcoal p-8 md:p-10">
            <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
              {offer.availability}
            </span>

            <div className="mt-4 flex items-baseline gap-1.5">
              <span className="font-display text-4xl md:text-5xl text-gold">
                {offer.price}
              </span>
              <span className="text-sm text-muted-foreground">{offer.cadence}</span>
            </div>

            {showCountdown && (offer.endDate ?? offer.startDate) && (
              <div className="mt-6">
                <span className="block text-[10px] uppercase tracking-[0.15em] text-ivory/50 mb-2">
                  {offer.endDate ? "Offer Ends In" : "Starts In"}
                </span>
                <CountdownTimer target={(offer.endDate ?? offer.startDate) as string} />
              </div>
            )}

            <div className="gold-divider my-6" />

            <ul className="flex flex-col gap-3">
              {offer.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-ivory/85">
                  <Check className="size-4 text-gold mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {ctaHref && (
              <Button
                render={<Link href={ctaHref} />}
                nativeButton={false}
                className="mt-8 w-full rounded-none bg-gold text-black hover:bg-gold-light uppercase text-xs tracking-[0.15em] h-12"
              >
                {ctaLabel}
              </Button>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
