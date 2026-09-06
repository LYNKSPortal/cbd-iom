import { SectionHeading } from "@/components/section-heading";
import { PackageCard } from "@/components/package-card";
import { ViewMoreLink } from "@/components/view-more-link";
import { PERSONAL_TRAINING_PACKAGES } from "@/lib/site-data";

export function PersonalTraining({
  limit,
  eyebrow = "1-to-1 Personal Training",
  title = "Hands-on coaching, built entirely around you",
  description = "Every session is designed around your goals, your body, and your schedule.",
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
  const packages = limit
    ? PERSONAL_TRAINING_PACKAGES.slice(0, limit)
    : PERSONAL_TRAINING_PACKAGES;

  return (
    <section className="section-padding py-24 md:py-32 bg-black">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        description={description}
        headingLevel={headingLevel}
      />

      <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.name} pkg={pkg} delay={i * 0.12} />
        ))}
      </div>

      {footerCta && <ViewMoreLink href={footerCta.href} label={footerCta.label} />}
    </section>
  );
}
