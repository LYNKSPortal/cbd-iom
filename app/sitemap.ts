import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/structured-data";

const ROUTES: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/personal-training", priority: 0.9, changeFrequency: "monthly" },
  { path: "/online-coaching", priority: 0.9, changeFrequency: "monthly" },
  { path: "/pricing", priority: 0.9, changeFrequency: "monthly" },
  { path: "/events", priority: 0.8, changeFrequency: "weekly" },
  { path: "/results", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
