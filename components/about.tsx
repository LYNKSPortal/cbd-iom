import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const CREDENTIALS = [
  "Level 3 Personal Trainer",
  "Pre & Post-Natal Specialist",
  "Nutrition Coach Certified",
  "5+ Years Coaching Experience",
];

export function About() {
  return (
    <section className="section-padding py-24 md:py-32 bg-black overflow-hidden">
      <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center max-w-6xl mx-auto">
        <Reveal className="relative order-2 lg:order-1">
          <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 rounded-sm overflow-hidden gold-border">
            <Image
              src="/image-of-debs.jpg"
              alt="Debs, founder of Coached by Debs"
              fill
              sizes="(min-width: 1024px) 28rem, 90vw"
              className="object-cover"
            />
          </div>
          <div className="hidden md:block absolute -bottom-6 -right-6 lg:right-auto lg:-left-6 glass px-7 py-5 rounded-sm">
            <div className="font-display text-3xl text-gold">250+</div>
            <div className="text-[11px] uppercase tracking-[0.15em] text-ivory/70 mt-1">
              Clients Transformed
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.3em] uppercase text-gold font-medium">
              <span className="h-px w-6 bg-gold" />
              About Debs
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display mt-4 text-4xl md:text-5xl font-medium leading-[1.05] text-ivory">
              Coaching built on honesty, science, and real life
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-ivory/70 leading-relaxed">
              I&apos;m Debs — a personal trainer and coach dedicated to
              helping men and women build strength and confidence without
              extreme diets or unsustainable routines. After a decade of
              coaching hundreds of clients through pregnancy, menopause,
              injury, and everything in between, I built Coached by Debs
              around one belief: your programme should fit your life, not
              the other way around.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-base md:text-lg text-ivory/70 leading-relaxed">
              Every plan I write is personal, evidence-based, and designed to
              be something you can actually stick to — for years, not weeks.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {CREDENTIALS.map((c) => (
                <div key={c} className="flex items-center gap-2.5 text-sm text-ivory/80">
                  <span className="size-1.5 rounded-full bg-gold shrink-0" />
                  {c}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              className="mt-9 rounded-none bg-gold text-black hover:bg-gold-light uppercase text-xs tracking-[0.15em] h-12 px-8"
            >
              Work With Me
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
