import Image from "next/image";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Button } from "@/components/ui/button";

const BOOKING_URL =
  "https://kahunas.io/contact/person_info/9a363a9e-66ad-44a9-a2a9-c12a077d5592";

export function BookingForm() {
  return (
    <section className="section-padding py-24 md:py-32 bg-black">
      <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-5xl mx-auto">
        <Reveal className="lg:col-span-3">
          <div className="flex flex-col justify-center h-full gap-6 bg-charcoal/50 border border-white/10 rounded-sm p-8 md:p-10">
            <h3 className="font-display text-2xl md:text-3xl text-ivory">
              Ready to get started?
            </h3>
            <p className="text-ivory/70 leading-relaxed">
              Book your free consultation directly through our online
              booking system. Tell us a little about your goals and
              we&apos;ll be in touch within 24 hours to find the right
              programme for you.
            </p>

            <div className="flex items-center gap-3">
              <Image
                src="/kah-logo.png"
                alt="Kahunas"
                width={380}
                height={75}
                className="h-6 w-auto opacity-80"
              />
              <span className="text-xs uppercase tracking-wide text-ivory/40">
                Secure Online Booking
              </span>
            </div>

            <p className="text-ivory/70 leading-relaxed">
              Our booking system lets you pick a time that suits you,
              complete a quick intake form, and get instant confirmation —
              no back-and-forth emails required. Your details are kept
              secure and only used to prepare for your consultation.
            </p>

            <Button
              render={<a href={BOOKING_URL} target="_blank" rel="noreferrer" />}
              nativeButton={false}
              className="mt-2 w-fit rounded-none bg-gold text-black hover:bg-gold-light uppercase text-xs tracking-[0.15em] h-12 px-8"
            >
              Book Your Free Consultation <ArrowRight className="size-4" />
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-2">
          <div className="flex flex-col gap-6 h-full justify-center bg-gradient-to-b from-charcoal-light to-charcoal border border-gold/20 rounded-sm p-8 md:p-10">
            <h3 className="font-display text-2xl text-ivory">
              Prefer to reach out directly?
            </h3>
            <div className="flex flex-col gap-4 text-sm text-ivory/80">
              <a href="mailto:info@coachedbydebs.com" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Mail className="size-4 text-gold" />
                info@coachedbydebs.com
              </a>
              <a href="tel:+447624220294" className="flex items-center gap-3 hover:text-gold transition-colors">
                <Phone className="size-4 text-gold" />
                +44 76 2422 0294
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
