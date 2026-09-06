"use client";

import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const INTERESTS = [
  "1-to-1 Personal Training",
  "Online Coaching",
  "Upcoming Events",
  "Not Sure Yet",
];

export function BookingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [interest, setInterest] = useState(INTERESTS[0]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="section-padding py-24 md:py-32 bg-black">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Book your free consultation"
        description="Tell us a little about your goals and we'll be in touch within 24 hours to find the right programme for you."
      />

      <div className="mt-16 grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
        <Reveal className="lg:col-span-3">
          {submitted ? (
            <div className="glass rounded-sm p-10 text-center h-full flex flex-col items-center justify-center">
              <span className="font-display text-3xl text-gold mb-3">
                Thank you
              </span>
              <p className="text-ivory/70 max-w-sm">
                Your enquiry has been received. Debs will personally reach out
                within 24 hours to schedule your free consultation.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 bg-charcoal/50 border border-white/10 rounded-sm p-8 md:p-10"
            >
              <div className="grid sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-wide text-ivory/70">
                    Full Name
                  </Label>
                  <Input id="name" name="name" required placeholder="Jane Doe" className="h-11 rounded-none border-white/15" />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-wide text-ivory/70">
                    Email
                  </Label>
                  <Input id="email" name="email" type="email" required placeholder="jane@email.com" className="h-11 rounded-none border-white/15" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="phone" className="text-xs uppercase tracking-wide text-ivory/70">
                  Phone (optional)
                </Label>
                <Input id="phone" name="phone" type="tel" placeholder="+44 7700 900000" className="h-11 rounded-none border-white/15" />
              </div>

              <div className="flex flex-col gap-2">
                <Label className="text-xs uppercase tracking-wide text-ivory/70">
                  I&apos;m interested in
                </Label>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => setInterest(item)}
                      className={`px-4 py-2 text-xs uppercase tracking-wide border transition-colors ${
                        interest === item
                          ? "bg-gold text-black border-gold"
                          : "border-white/20 text-ivory/70 hover:border-gold/50"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Label htmlFor="message" className="text-xs uppercase tracking-wide text-ivory/70">
                  Tell us about your goals
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="I'd like to..."
                  className="rounded-none border-white/15 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="mt-2 rounded-none bg-gold text-black hover:bg-gold-light uppercase text-xs tracking-[0.15em] h-12"
              >
                Send Enquiry
              </Button>
            </form>
          )}
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="flex flex-col gap-6 h-full justify-center bg-gradient-to-b from-charcoal-light to-charcoal border border-gold/20 rounded-sm p-8 md:p-10">
            <h3 className="font-display text-2xl text-ivory">
              Prefer to reach out directly?
            </h3>
            <div className="flex flex-col gap-4 text-sm text-ivory/80">
              <a href="mailto:hello@coachedbydebs.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="size-4 text-gold" />
                hello@coachedbydebs.com
              </a>
              <a href="tel:+441624000000" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone className="size-4 text-gold" />
                +44 1624 000 000
              </a>
              <span className="flex items-center gap-3">
                <MapPin className="size-4 text-gold" />
                Isle of Man &amp; Worldwide (Online)
              </span>
            </div>
            <div className="gold-divider" />
            <p className="text-xs text-muted-foreground leading-relaxed">
              Response time is typically under 24 hours. All consultations
              are free, with zero obligation to book.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
