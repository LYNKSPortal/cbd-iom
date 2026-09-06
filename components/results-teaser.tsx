import { Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ViewMoreLink } from "@/components/view-more-link";
import { TESTIMONIALS } from "@/lib/site-data";

export function ResultsTeaser() {
  const featured = TESTIMONIALS[0];

  return (
    <section className="section-padding py-24 md:py-32 bg-charcoal/30">
      <SectionHeading
        eyebrow="Client Transformations"
        title="Real women. Real results."
        description="The proof isn't in the promise — it's in the transformation."
      />

      <Reveal delay={0.15} className="mt-16 max-w-3xl mx-auto">
        <div className="glass-light rounded-sm p-10 md:p-14 text-center">
          <Quote className="mx-auto size-8 text-gold mb-6" />
          <p className="font-display text-xl md:text-2xl italic text-ivory leading-relaxed text-balance-pretty">
            &ldquo;{featured.quote}&rdquo;
          </p>
          <div className="mt-7">
            <div className="text-gold text-sm tracking-wide uppercase font-medium">
              {featured.name}
            </div>
            <div className="text-xs text-muted-foreground mt-1">
              {featured.result} &middot; {featured.program}
            </div>
          </div>
        </div>

        <ViewMoreLink href="/results" label="Read More Stories" />
      </Reveal>
    </section>
  );
}
