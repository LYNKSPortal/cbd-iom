"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { NAV_LINKS } from "@/lib/site-data";

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass py-3 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="section-padding flex items-center justify-between">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/white-logo.png"
            alt="Coached by Debs"
            width={168}
            height={58}
            priority
            className="h-11 md:h-14 w-auto"
          />
        </Link>

        <ul className="hidden lg:flex items-center gap-8 text-sm tracking-wide">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-ivory/80 hover:text-gold transition-colors duration-300 uppercase text-[13px] tracking-[0.12em]"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="outline"
            className="border-gold/50 text-ivory hover:bg-gold hover:text-black bg-transparent rounded-none px-5 uppercase text-xs tracking-[0.15em]"
          >
            Book Your Coaching
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                className="lg:hidden text-ivory hover:bg-white/10 gap-2 px-3"
              />
            }
          >
            <span className="text-xs uppercase tracking-[0.15em]">Menu</span>
            <Menu className="size-6" />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="bg-black border-l border-gold/20 w-full sm:max-w-sm"
          >
            <SheetHeader>
              <SheetTitle className="font-display text-2xl text-ivory">
                Menu
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 px-4">
              {NAV_LINKS.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link
                      href={link.href}
                      className="py-3 text-lg text-ivory/85 hover:text-gold border-b border-white/5 uppercase tracking-wide text-sm"
                    />
                  }
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </SheetClose>
              ))}
              <Button
                render={<Link href="/contact" onClick={() => setOpen(false)} />}
                nativeButton={false}
                className="mt-6 rounded-none bg-gold text-black hover:bg-gold-light uppercase text-xs tracking-[0.15em] py-6"
              >
                Book Your Coaching
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </motion.header>
  );
}
