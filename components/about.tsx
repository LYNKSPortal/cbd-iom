import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

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
              My Story
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display mt-4 text-4xl md:text-5xl font-medium leading-[1.05] text-ivory">
              My approach to coaching
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-base md:text-lg text-ivory/70 leading-relaxed">
              I&apos;m Debs — a personal trainer and online coach passionate
              about helping men and women become stronger, fitter and more
              confident, without extreme diets or routines that take over
              your life.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-4 text-base md:text-lg text-ivory/70 leading-relaxed">
              With 5 years of coaching experience, I&apos;ve worked with
              people at all different stages — from complete beginners to
              experienced gym-goers, through pregnancy, injuries and
              everything life throws at us.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-base md:text-lg text-ivory/70 leading-relaxed">
              I built Coached by Debs around one simple belief:
            </p>
          </Reveal>
          <Reveal delay={0.35}>
            <p className="mt-4 font-display italic text-xl md:text-2xl text-gold leading-relaxed">
              Your programme should fit your life, not the other way around.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <p className="mt-4 text-base md:text-lg text-ivory/70 leading-relaxed">
              There&apos;s no one-size-fits-all approach here. Your training
              and nutrition are built around you, your goals and your
              lifestyle, with a focus on creating results you can actually
              maintain.
            </p>
          </Reveal>
          <Reveal delay={0.45}>
            <p className="mt-4 text-base md:text-lg text-ivory/70 leading-relaxed">
              No extremes. No quick fixes. Just a realistic approach,
              consistency and support to help you become the strongest and
              most confident version of yourself.
            </p>
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
