import Image from "next/image";
import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
  image = "/image-of-debs.jpg",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative flex items-end min-h-[42vh] md:min-h-[48vh] overflow-hidden bg-black pt-32 pb-16 md:pb-20">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-top scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/50" />
      </div>

      <div className="relative z-10 w-full section-padding">
        {eyebrow && (
          <Reveal>
            <span className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.3em] uppercase text-gold font-medium mb-4">
              <span className="h-px w-6 bg-gold" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={0.1}>
          <h1 className="font-display max-w-3xl text-4xl sm:text-5xl md:text-6xl font-medium leading-[1.05] text-ivory text-balance-pretty">
            {title}
          </h1>
        </Reveal>
        {description && (
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-xl text-base md:text-lg text-ivory/75 leading-relaxed">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
