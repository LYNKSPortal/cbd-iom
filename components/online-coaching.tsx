import { SectionHeading } from "@/components/section-heading";
import { PackageCard } from "@/components/package-card";
import { ViewMoreLink } from "@/components/view-more-link";
import { ONLINE_COACHING_PACKAGES } from "@/lib/site-data";

export function OnlineCoaching({
  limit,
  eyebrow = "Online Coaching",
  title = "Bespoke coaching, wherever you are",
  description = "Training plans, nutrition guidance, and weekly accountability — delivered straight to your phone. Choose the level of support that fits your life.",
  footerCta,
}: {
  limit?: number;
  eyebrow?: string;
  title?: string;
  description?: string;
  footerCta?: { href: string; label: string };
}) {
  const packages = limit
    ? ONLINE_COACHING_PACKAGES.slice(0, limit)
    : ONLINE_COACHING_PACKAGES;

  return (
    <section className="section-padding py-24 md:py-32 bg-gradient-to-b from-black via-charcoal/40 to-black">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {packages.map((pkg, i) => (
          <PackageCard key={pkg.name} pkg={pkg} delay={i * 0.12} />
        ))}
      </div>

      {footerCta && <ViewMoreLink href={footerCta.href} label={footerCta.label} />}
    </section>
  );
}
