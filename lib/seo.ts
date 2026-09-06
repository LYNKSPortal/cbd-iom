import type { Metadata } from "next";
import { SITE_URL } from "@/lib/structured-data";

const BRAND = "Coached by Debs";

const DEFAULT_OG_IMAGE = {
  url: `${SITE_URL}/favicons/facebook-meta-og-image.jpg`,
  width: 1000,
  height: 654,
  alt: `${BRAND} | Luxury Personal Training & Online Coaching`,
};

/**
 * Builds a full, consistent Metadata object for a page: canonical URL,
 * OpenGraph, and Twitter card — all pointing at the same title/description
 * and sharing the same OG image, so link previews stay complete and never
 * regress when a page overrides root layout metadata (Next.js does not
 * deep-merge object fields like `openGraph`/`twitter` between layout and
 * page — the page's object fully replaces the parent's).
 *
 * @param title - Short, page-specific title (e.g. "1-to-1 Personal Training").
 *   The `<title>` tag uses the root layout's "%s | Coached by Debs" template;
 *   OpenGraph/Twitter titles get the brand suffix appended explicitly here
 *   since those fields aren't templated by Next.js.
 * @param path - Page path starting with "/", e.g. "/personal-training".
 * @param isHome - Set true for the homepage, where `title` is already the
 *   full brand string and should not be templated or suffixed again.
 */
export function pageMetadata({
  title,
  description,
  path,
  isHome = false,
}: {
  title: string;
  description: string;
  path: string;
  isHome?: boolean;
}): Metadata {
  const fullTitle = isHome ? title : `${title} | ${BRAND}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      images: [DEFAULT_OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [DEFAULT_OG_IMAGE.url],
    },
  };
}
