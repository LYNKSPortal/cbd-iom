import { Sparkles } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function MaintenanceScreen() {
  return (
    <section className="flex-1 flex items-center justify-center section-padding py-24 bg-black">
      <div className="max-w-xl mx-auto text-center">
        <Reveal>
          <span className="inline-flex items-center justify-center size-14 rounded-full border border-gold/40 bg-charcoal mb-8">
            <Sparkles className="size-6 text-gold" />
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.3em] uppercase text-gold font-medium">
            <span className="h-px w-6 bg-gold" />
            Coached by Debs
            <span className="h-px w-6 bg-gold" />
          </span>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="font-display mt-6 text-4xl md:text-6xl font-medium leading-[1.05] text-ivory">
            We&apos;ll be right back
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-6 text-base md:text-lg text-ivory/70 leading-relaxed">
            Our site is currently in maintenance mode while we make some updates and changes behind the scenes. Everything will be back online soon — thanks for your patience.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
