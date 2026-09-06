import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { NavBar } from "@/components/nav-bar";
import { Footer } from "@/components/footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.coachedbydebs.com"),
  title: {
    default: "Coached by Debs | Luxury Personal Training & Online Coaching",
    template: "%s | Coached by Debs",
  },
  description:
    "Premium 1-to-1 personal training and online coaching for women who want strength, confidence, and sustainable results. Bespoke programs, weekly accountability, real transformations.",
  keywords: [
    "personal trainer",
    "online coaching",
    "women's fitness coaching",
    "luxury personal training",
    "transformation coaching",
    "Coached by Debs",
  ],
  openGraph: {
    title: "Coached by Debs | Luxury Personal Training & Online Coaching",
    description:
      "Premium 1-to-1 personal training and online coaching for women who want strength, confidence, and sustainable results.",
    url: "https://www.coachedbydebs.com",
    siteName: "Coached by Debs",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/favicons/facebook-meta-og-image.jpg",
        width: 1000,
        height: 654,
        alt: "Coached by Debs | Luxury Personal Training & Online Coaching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coached by Debs | Luxury Personal Training & Online Coaching",
    description:
      "Premium 1-to-1 personal training and online coaching for women who want strength, confidence, and sustainable results.",
    images: ["/favicons/facebook-meta-og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicons/favicon.svg", type: "image/svg+xml" },
      { url: "/favicons/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicons/favicon.ico" },
    ],
    apple: [{ url: "/favicons/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/favicons/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <NavBar />
        <main className="flex-1 bg-black">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
