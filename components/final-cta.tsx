import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative section-padding py-28 md:py-36 overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-25">
        <Image
          src="/image-of-debs.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />

      <Reveal className="relative z-10 max-w-2xl mx-auto text-center">
        <span className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.3em] uppercase text-gold font-medium">
          <span className="h-px w-6 bg-gold" />
          Ready when you are
          <span className="h-px w-6 bg-gold" />
        </span>
        <h2 className="font-display mt-5 text-4xl md:text-6xl text-ivory leading-[1.05]">
          Your transformation starts with one decision
        </h2>
        <p className="mt-5 text-ivory/70 text-base md:text-lg">
          Book a free consultation today and let&apos;s build a plan that
          finally works for you.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            size="lg"
            className="rounded-none h-13 px-8 bg-gold text-black hover:bg-gold-light uppercase tracking-[0.15em] text-xs font-semibold"
          >
            Book Your Coaching
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
        </div>
      </Reveal>
    </section>
  );
}
