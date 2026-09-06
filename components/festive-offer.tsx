import { Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { FESTIVE_PACKAGE } from "@/lib/site-data";

export function FestiveOffer() {
  return (
    <section className="section-padding py-16 md:py-20 bg-black">
      <Reveal>
        <p className="max-w-2xl mx-auto text-center text-base md:text-lg text-ivory/70 leading-relaxed mb-14">
          {FESTIVE_PACKAGE.longDescription}
        </p>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="max-w-xl mx-auto rounded-sm border border-gold/40 bg-gradient-to-b from-charcoal-light to-charcoal p-8 md:p-10">
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gold font-semibold">
            {FESTIVE_PACKAGE.availability}
          </span>

          <div className="mt-4 flex items-baseline gap-1.5">
            <span className="font-display text-4xl md:text-5xl text-gold">
              {FESTIVE_PACKAGE.price}
            </span>
            <span className="text-sm text-muted-foreground">
              {FESTIVE_PACKAGE.cadence}
            </span>
          </div>

          <div className="gold-divider my-6" />

          <ul className="flex flex-col gap-3">
            {FESTIVE_PACKAGE.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-sm text-ivory/85">
                <Check className="size-4 text-gold mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}
