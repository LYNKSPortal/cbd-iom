"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Package } from "@/lib/site-data";

export function PackageCard({ pkg, delay = 0 }: { pkg: Package; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -8 }}
      className={cn(
        "relative flex flex-col rounded-sm p-8 md:p-10 h-full",
        pkg.highlighted
          ? "bg-gradient-to-b from-charcoal-light to-charcoal border border-gold/60 shadow-[0_0_60px_-15px_rgba(203,168,97,0.35)]"
          : "bg-charcoal/60 border border-white/10 hover:border-gold/30 transition-colors"
      )}
    >
      {pkg.highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-black text-[10px] font-semibold uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
          Most Popular
        </span>
      )}

      <h3 className="font-display text-2xl md:text-3xl text-ivory">{pkg.name}</h3>
      <div className="mt-4 flex items-baseline gap-1.5">
        <span className="font-display text-4xl md:text-5xl text-gold">
          {pkg.price}
        </span>
        {pkg.cadence && (
          <span className="text-sm text-muted-foreground">{pkg.cadence}</span>
        )}
      </div>
      <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
        {pkg.description}
      </p>

      <div className="gold-divider my-7" />

      <ul className="flex flex-col gap-3 flex-1">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-ivory/85">
            <Check className="size-4 text-gold mt-0.5 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        render={<Link href="/contact" />}
        nativeButton={false}
        className={cn(
          "mt-8 rounded-none uppercase text-xs tracking-[0.15em] h-12",
          pkg.highlighted
            ? "bg-gold text-black hover:bg-gold-light"
            : "bg-transparent border border-ivory/30 text-ivory hover:bg-ivory hover:text-black"
        )}
      >
        {pkg.cta}
      </Button>
    </motion.div>
  );
}
