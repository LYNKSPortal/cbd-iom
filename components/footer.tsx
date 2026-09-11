import Image from "next/image";
import Link from "next/link";
import { InstagramIcon, FacebookIcon, TikTokIcon } from "@/components/icons";
import { NAV_LINKS, SOCIAL_LINKS } from "@/lib/site-data";

const ICONS: Record<string, typeof InstagramIcon> = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  TikTok: TikTokIcon,
};

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="section-padding py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link href="/">
            <Image
              src="/white-logo.png"
              alt="Coached by Debs"
              width={168}
              height={58}
              className="h-8 w-auto"
            />
          </Link>
          <p className="mt-5 text-sm text-ivory/60 leading-relaxed max-w-sm">
            Luxury personal training and online coaching for anyone who wants
            to get fitter, healthier, and more confident — built entirely
            around your life.
          </p>
          <div className="flex items-center gap-4 mt-6">
            {SOCIAL_LINKS.map((social) => {
              const Icon = ICONS[social.label] ?? InstagramIcon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="size-9 flex items-center justify-center rounded-full border border-white/15 text-ivory/70 hover:border-gold hover:text-gold transition-colors"
                >
                  <Icon className="size-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">
            Navigate
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-ivory/70">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold mb-5">
            Contact
          </h4>
          <ul className="flex flex-col gap-3 text-sm text-ivory/70">
            <li>
              <a href="mailto:info@coachedbydebs.com" className="hover:text-gold transition-colors">
                info@coachedbydebs.com
              </a>
            </li>
            <li>
              <a href="tel:+447624372485" className="hover:text-gold transition-colors">
                +44 7624 372485
              </a>
            </li>
            <li>Isle of Man &amp; Worldwide</li>
            <li className="pt-2 text-xs text-ivory/40">IOM Registry: 031470B</li>
          </ul>
        </div>
      </div>

      <div className="gold-divider" />

      <div className="section-padding py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/40">
        <span>&copy; {new Date().getFullYear()} Coached by Debs. All rights reserved.</span>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
