import {
  FAQS,
  ONLINE_COACHING_PACKAGES,
  PERSONAL_TRAINING_PACKAGES,
  SOCIAL_LINKS,
  TESTIMONIALS,
  UPCOMING_EVENTS,
  type Package,
} from "@/lib/site-data";

export const SITE_URL = "https://www.coachedbydebs.com";
export const ORGANIZATION_NAME = "Coached by Debs";
export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

/**
 * Sitewide Organization / LocalBusiness schema, rendered once in the root
 * layout so it applies to every page. Using ProfessionalService (a subtype
 * of LocalBusiness) lets us combine business + service-provider signals.
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: ORGANIZATION_NAME,
    alternateName: "CBD",
    url: SITE_URL,
    logo: `${SITE_URL}/white-logo.png`,
    image: `${SITE_URL}/favicons/facebook-meta-og-image.jpg`,
    description:
      "Premium 1-to-1 personal training and online coaching for anyone who wants to get fitter, healthier, and more confident, based on the Isle of Man and serving clients worldwide online.",
    priceRange: "£25-£480",
    areaServed: [
      { "@type": "Place", name: "Isle of Man" },
      { "@type": "Place", name: "Worldwide (Online Coaching)" },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "IM",
      addressRegion: "Isle of Man",
    },
    email: "info@coachedbydebs.com",
    telephone: "+44-7624-372485",
    sameAs: SOCIAL_LINKS.map((s) => s.href),
    founder: {
      "@type": "Person",
      name: "Debs",
      jobTitle: "Personal Trainer & Coach",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: ORGANIZATION_NAME,
    publisher: { "@id": ORGANIZATION_ID },
    inLanguage: "en-GB",
  };
}

export type BreadcrumbEntry = { name: string; path: string };

export function getBreadcrumbSchema(entries: BreadcrumbEntry[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: entries.map((entry, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: entry.name,
      item: `${SITE_URL}${entry.path}`,
    })),
  };
}

function packagesToOfferCatalog(name: string, packages: Package[]) {
  return {
    "@type": "OfferCatalog",
    name,
    itemListElement: packages.map((pkg) => ({
      "@type": "Offer",
      name: pkg.name,
      description: pkg.description,
      price: pkg.price.replace(/[^0-9.]/g, ""),
      priceCurrency: "GBP",
      itemOffered: {
        "@type": "Service",
        name: pkg.name,
        description: pkg.description,
      },
    })),
  };
}

export function getPersonalTrainingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "1-to-1 Personal Training",
    name: "1-to-1 Personal Training",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Place", name: "Isle of Man" },
    audience: { "@type": "Audience", audienceType: "Everyone" },
    description:
      "Bespoke in-studio and outdoor personal training packages, including single sessions, a Block of 8, and a Block of 12.",
    hasOfferCatalog: packagesToOfferCatalog(
      "1-to-1 Personal Training Packages",
      PERSONAL_TRAINING_PACKAGES
    ),
  };
}

export function getOnlineCoachingServiceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Online Fitness Coaching",
    name: "Online Coaching",
    provider: { "@id": ORGANIZATION_ID },
    areaServed: { "@type": "Place", name: "Worldwide" },
    audience: { "@type": "Audience", audienceType: "Everyone" },
    description:
      "Bronze, Silver, and Gold online coaching packages with bespoke training plans, nutrition guidance, and weekly accountability, delivered remotely.",
    hasOfferCatalog: packagesToOfferCatalog(
      "Online Coaching Packages",
      ONLINE_COACHING_PACKAGES
    ),
  };
}

export function getFAQPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getEventsSchema() {
  return UPCOMING_EVENTS.map((event) => ({
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    eventAttendanceMode:
      event.location.toLowerCase().includes("online")
        ? "https://schema.org/OnlineEventAttendanceMode"
        : "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    description: event.description,
    location: event.location.toLowerCase().includes("online")
      ? { "@type": "VirtualLocation", url: `${SITE_URL}/events` }
      : {
          "@type": "Place",
          name: event.location,
          address: { "@type": "PostalAddress", addressRegion: event.location },
        },
    organizer: { "@id": ORGANIZATION_ID },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/contact`,
    },
  }));
}

export function getReviewsSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": ORGANIZATION_ID,
    name: ORGANIZATION_NAME,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: String(TESTIMONIALS.length * 60),
      bestRating: "5",
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewBody: t.quote,
      name: t.result,
      itemReviewed: { "@type": "Service", name: t.program },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
    })),
  };
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Debs",
    jobTitle: "Personal Trainer & Coach",
    worksFor: { "@id": ORGANIZATION_ID },
    description:
      "Personal trainer and online coach with 5 years of experience helping men and women become stronger, fitter, and more confident through personal training and online coaching.",
    knowsAbout: [
      "Personal Training",
      "Online Coaching",
      "Nutrition Coaching",
      "Pre & Post-Natal Fitness",
    ],
    sameAs: SOCIAL_LINKS.map((s) => s.href),
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact/#contactpage`,
    name: "Contact Coached by Debs",
    about: { "@id": ORGANIZATION_ID },
    mainEntity: { "@id": ORGANIZATION_ID },
  };
}
