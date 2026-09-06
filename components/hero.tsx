"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { TRUST_INDICATORS } from "@/lib/site-data";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-start md:items-end overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Image
          src="/image-of-debs.jpg"
          alt="Debs, luxury personal trainer, posing confidently"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top md:object-top scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40" />
      </div>

      <div className="relative z-10 w-full section-padding pb-20 pt-[26rem] sm:pt-[30rem] md:pt-40 md:pb-28">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.35em] uppercase text-gold font-medium mb-6"
        >
          <span className="h-px w-8 bg-gold" />
          Luxury Personal Training &amp; Online Coaching
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display max-w-4xl text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-medium leading-[0.98] text-ivory text-balance-pretty"
        >
          Strength.
          <br />
          <span className="text-gradient-gold italic">Confidence.</span>
          <br />
          Results that last.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-6 max-w-xl text-base md:text-lg text-ivory/75 leading-relaxed"
        >
          Bespoke 1-to-1 personal training and online coaching, crafted for
          women who want a sustainable transformation — not a quick fix.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-9 flex flex-col sm:flex-row gap-4"
        >
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="rounded-none h-13 px-8 bg-gold text-black hover:bg-gold-light uppercase tracking-[0.15em] text-xs font-semibold"
          >
            Book Your Coaching <ArrowRight className="size-4" />
          </Button>
          <Button
            render={<Link href="/pricing" />}
            nativeButton={false}
            size="lg"
            variant="outline"
            className="rounded-none h-13 px-8 border-ivory/40 text-ivory hover:bg-ivory hover:text-black bg-transparent uppercase tracking-[0.15em] text-xs font-semibold"
          >
            Explore Packages
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl border-t border-white/10 pt-8"
        >
          {TRUST_INDICATORS.map((item) => (
            <div key={item.label}>
              <div className="font-display text-2xl md:text-3xl text-gold">
                {item.value}
              </div>
              <div className="text-[11px] md:text-xs uppercase tracking-[0.1em] text-ivory/60 mt-1">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
