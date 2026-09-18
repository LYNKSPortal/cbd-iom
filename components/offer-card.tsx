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
}: {
  offer: SpecialOffer;
  showCountdown?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
}) {
  return (
    <section className="section-padding py-16 md:py-20 bg-black">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
        <Reveal className="relative">
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden gold-border">
            <Image
              src={offer.image}
              alt={offer.imageAlt}
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
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

            {showCountdown && offer.startDate && (
              <div className="mt-6">
                <CountdownTimer target={offer.startDate} />
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
