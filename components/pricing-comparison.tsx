import Link from "next/link";
import { Check, Minus } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

type PlanKey = "bronze" | "silver" | "gold" | "platinum";

const ROWS: ({ label: string } & Record<PlanKey, boolean>)[] = [
  { label: "App access & progress logging", bronze: true, silver: true, gold: true, platinum: true },
  { label: "Whatsapp group chat", bronze: true, silver: true, gold: true, platinum: true },
  { label: "Generic training programme", bronze: true, silver: false, gold: false, platinum: false },
  { label: "Personalised training plan", bronze: false, silver: true, gold: true, platinum: true },
  { label: "Personalised nutrition plan", bronze: false, silver: true, gold: true, platinum: true },
  { label: "Weekly check-ins & adjustments", bronze: false, silver: true, gold: true, platinum: true },
  { label: "Direct messaging with Debs", bronze: false, silver: true, gold: true, platinum: true },
  { label: "Bi-weekly video calls", bronze: false, silver: false, gold: true, platinum: true },
  { label: "Priority same-day messaging", bronze: false, silver: false, gold: true, platinum: true },
  { label: "Quarterly progress shoot", bronze: false, silver: false, gold: true, platinum: true },
  { label: "Supplement & lab guidance", bronze: false, silver: false, gold: true, platinum: true },
  { label: "Weekly video calls", bronze: false, silver: false, gold: false, platinum: true },
  { label: "24/7 direct messaging access", bronze: false, silver: false, gold: false, platinum: true },
  { label: "Monthly in-person session", bronze: false, silver: false, gold: false, platinum: true },
  { label: "Fully custom meal plans", bronze: false, silver: false, gold: false, platinum: true },
];

const PLANS: { key: PlanKey; name: string; price: string; highlighted?: boolean }[] = [
  { key: "bronze", name: "Bronze", price: "£25" },
  { key: "silver", name: "Silver", price: "£179", highlighted: true },
  { key: "gold", name: "Gold", price: "£299" },
  { key: "platinum", name: "Platinum", price: "£449" },
];

export function PricingComparison() {
  return (
    <section className="section-padding py-24 md:py-32 bg-black">
      <SectionHeading
        eyebrow="Compare Plans"
        title="Find the level of support that's right for you"
        description="A transparent, side-by-side look at everything included in each online coaching tier."
      />

      <Reveal delay={0.15} className="mt-16 max-w-5xl mx-auto overflow-x-auto">
        <table className="w-full min-w-[680px] border-collapse">
          <thead>
            <tr>
              <th className="text-left pb-6 font-normal text-sm text-muted-foreground align-bottom" />
              {PLANS.map((plan) => (
                <th
                  key={plan.key}
                  className={`text-center pb-6 px-4 align-bottom ${
                    plan.highlighted ? "relative" : ""
                  }`}
                >
                  {plan.highlighted && (
                    <span className="block text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                      Most Popular
                    </span>
                  )}
                  <div className="font-display text-2xl text-ivory">{plan.name}</div>
                  <div className="font-display text-xl text-gold mt-1">
                    {plan.price}
                    <span className="text-xs text-muted-foreground font-sans"> /mo</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((row, i) => (
              <tr
                key={row.label}
                className={i % 2 === 0 ? "bg-charcoal/40" : "bg-transparent"}
              >
                <td className="py-4 px-4 text-sm text-ivory/80">{row.label}</td>
                {(["bronze", "silver", "gold", "platinum"] as const).map((key) => (
                  <td key={key} className="py-4 px-4 text-center">
                    {row[key] ? (
                      <Check className="inline size-4 text-gold" />
                    ) : (
                      <Minus className="inline size-4 text-white/20" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
            <tr>
              <td className="pt-8" />
              {PLANS.map((plan) => (
                <td key={plan.key} className="pt-8 px-4 text-center">
                  <Button
                    render={<Link href="/contact" />}
                    nativeButton={false}
                    size="sm"
                    className={`rounded-none uppercase text-[11px] tracking-[0.15em] w-full ${
                      plan.highlighted
                        ? "bg-gold text-black hover:bg-gold-light"
                        : "bg-transparent border border-ivory/30 text-ivory hover:bg-ivory hover:text-black"
                    }`}
                  >
                    Choose {plan.name}
                  </Button>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </Reveal>
    </section>
  );
}
