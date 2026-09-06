import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { FAQS } from "@/lib/site-data";

export function FAQ({ headingLevel = "h2" }: { headingLevel?: "h1" | "h2" }) {
  return (
    <section className="section-padding py-24 md:py-32 bg-charcoal/30">
      <SectionHeading
        eyebrow="FAQ"
        title="Questions, answered"
        description="Everything you need to know before getting started."
        headingLevel={headingLevel}
      />

      <Reveal delay={0.15} className="mt-14 max-w-2xl mx-auto">
        <Accordion>
          {FAQS.map((faq, i) => (
            <AccordionItem
              key={faq.question}
              value={`faq-${i}`}
              className="border-b border-white/10"
            >
              <AccordionTrigger className="py-6 text-base md:text-lg font-display text-ivory hover:no-underline [&_svg]:text-gold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm md:text-base text-muted-foreground leading-relaxed pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Reveal>
    </section>
  );
}
