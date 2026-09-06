"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { Send } from "lucide-react";
import { InstagramIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TRANSFORMATION_PHOTOS } from "@/lib/site-data";

const INSTAGRAM_TILES = TRANSFORMATION_PHOTOS.slice(0, 6);

export function SocialNewsletter() {
  const [subscribed, setSubscribed] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <section className="section-padding py-24 md:py-28 bg-charcoal/30">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.3em] uppercase text-gold font-medium">
            <InstagramIcon className="size-4" />
            @coachedbydebs
          </span>
          <h3 className="font-display mt-4 text-3xl md:text-4xl text-ivory">
            Follow the journey
          </h3>
          <div className="mt-6 grid grid-cols-3 gap-2">
            {INSTAGRAM_TILES.map((src) => (
              <a
                key={src}
                href="https://instagram.com/coachedbydebs"
                target="_blank"
                rel="noreferrer"
                className="relative aspect-square overflow-hidden group"
              >
                <Image
                  src={src}
                  alt="Coached by Debs client transformation on Instagram"
                  fill
                  sizes="(min-width: 1024px) 16rem, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <InstagramIcon className="size-5 text-ivory" />
                </div>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="glass rounded-sm p-8 md:p-12">
            <h3 className="font-display text-3xl md:text-4xl text-ivory">
              Weekly wisdom, straight to your inbox
            </h3>
            <p className="mt-4 text-sm md:text-base text-ivory/70 leading-relaxed">
              Training tips, nutrition insights, and exclusive offers from
              Coached by Debs. No spam, ever — unsubscribe anytime.
            </p>

            {subscribed ? (
              <p className="mt-6 text-gold text-sm uppercase tracking-wide">
                You&apos;re on the list. Welcome!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  required
                  placeholder="Your email address"
                  className="h-12 rounded-none border-white/20 bg-transparent"
                />
                <Button
                  type="submit"
                  className="h-12 px-6 rounded-none bg-gold text-black hover:bg-gold-light uppercase text-xs tracking-[0.15em] shrink-0 flex items-center gap-2"
                >
                  Subscribe <Send className="size-3.5" />
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
