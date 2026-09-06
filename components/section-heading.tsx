import { cn } from "@/lib/utils";
import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
  light,
  headingLevel = "h2",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
  headingLevel?: "h1" | "h2";
}) {
  const HeadingTag = headingLevel;

  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.3em] uppercase text-gold font-medium">
            <span className="h-px w-6 bg-gold" />
            {eyebrow}
            <span className="h-px w-6 bg-gold" />
          </span>
        </Reveal>
      )}
      <Reveal delay={0.1}>
        <HeadingTag
          className={cn(
            "font-display mt-4 text-4xl md:text-5xl lg:text-6xl font-medium leading-[1.05] text-balance-pretty",
            light ? "text-ivory" : "text-foreground"
          )}
        >
          {title}
        </HeadingTag>
      </Reveal>
      {description && (
        <Reveal delay={0.2}>
          <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed text-balance-pretty">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
