"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { TESTIMONIALS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = useCallback((next: number) => {
    setDirection(next > index ? 1 : -1);
    setIndex((next + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, [index]);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const testimonial = TESTIMONIALS[index];

  return (
    <section className="section-padding py-24 md:py-32 bg-charcoal/30">
      <SectionHeading
        eyebrow="Client Transformations"
        title="Real women. Real results."
        description="The proof isn't in the promise — it's in the transformation."
      />

      <div className="relative mt-16 max-w-3xl mx-auto">
        <div className="relative min-h-[280px] md:min-h-[240px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonial.name}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="glass-light rounded-sm p-10 md:p-14 text-center w-full"
            >
              <Quote className="mx-auto size-8 text-gold mb-6" />
              <p className="font-display text-xl md:text-2xl italic text-ivory leading-relaxed text-balance-pretty">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="mt-7">
                <div className="text-gold text-sm tracking-wide uppercase font-medium">
                  {testimonial.name}
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {testimonial.result} &middot; {testimonial.program}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-6 mt-8">
          <button
            aria-label="Previous testimonial"
            onClick={() => go(index - 1)}
            className="size-10 flex items-center justify-center rounded-full border border-white/15 text-ivory hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronLeft className="size-4" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                aria-label={`Go to testimonial ${i + 1}`}
                onClick={() => go(i)}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  i === index ? "w-6 bg-gold" : "w-1.5 bg-white/20"
                )}
              />
            ))}
          </div>

          <button
            aria-label="Next testimonial"
            onClick={() => go(index + 1)}
            className="size-10 flex items-center justify-center rounded-full border border-white/15 text-ivory hover:border-gold hover:text-gold transition-colors"
          >
            <ChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
