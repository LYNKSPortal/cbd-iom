import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function ViewMoreLink({ href, label }: { href: string; label: string }) {
  return (
    <div className="mt-12 text-center">
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-gold hover:text-gold-light transition-colors"
      >
        {label}
        <ArrowRight className="size-3.5" />
      </Link>
    </div>
  );
}
