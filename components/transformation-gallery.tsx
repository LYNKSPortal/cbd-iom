import Image from "next/image";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { ViewMoreLink } from "@/components/view-more-link";
import { TRANSFORMATION_PHOTOS } from "@/lib/site-data";

export function TransformationGallery({
  limit,
  eyebrow = "Transformation Gallery",
  title = "Progress you can see",
  description = "A snapshot of the clients who've trained, transformed, and built lasting confidence with Coached by Debs.",
  footerCta,
}: {
  limit?: number;
  eyebrow?: string;
  title?: string;
  description?: string;
  footerCta?: { href: string; label: string };
}) {
  const photos = limit ? TRANSFORMATION_PHOTOS.slice(0, limit) : TRANSFORMATION_PHOTOS;

  return (
    <section className="section-padding py-24 md:py-32 bg-black">
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-14 columns-2 sm:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto">
        {photos.map((src, i) => (
          <Reveal key={src} delay={(i % 8) * 0.06} className="mb-4 break-inside-avoid">
            <div className="group relative overflow-hidden rounded-sm gold-border">
              <Image
                src={src}
                alt="Coached by Debs client transformation"
                width={600}
                height={750}
                sizes="(min-width: 1024px) 22vw, (min-width: 640px) 30vw, 45vw"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </Reveal>
        ))}
      </div>

      {footerCta && <ViewMoreLink href={footerCta.href} label={footerCta.label} />}
    </section>
  );
}
