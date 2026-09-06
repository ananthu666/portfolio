import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import CustomCursor from "@/components/CustomCursor";
import EasterEgg from "@/components/EasterEgg";
import CommandPalette from "@/components/CommandPalette";

const siteUrl = "https://ananthu-jayakumar.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: profile.seo.title,
  description: profile.seo.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: profile.seo.title,
    description: profile.seo.description,
    url: siteUrl,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: profile.seo.title,
    description: profile.seo.description,
  },
  robots: { index: true, follow: true },
  verification: {
    google: "6MJixqPBti24OFbTjTLsNTfK7zP-WD879zOjpU6lxXk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: profile.title,
    url: siteUrl,
    sameAs: [socials.github, socials.linkedin],
  };
  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: profile.name,
    url: siteUrl,
  };

  return (
    <html lang="en" className="scroll-smooth">
      {/* eslint-disable-next-line @next/next/no-page-custom-font -- intentional: loaded once in the root layout, applies site-wide */}
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-ink-900 text-ink-100 antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-signal.ai focus:px-4 focus:py-2 focus:text-ink-950 focus:rounded"
        >
          Skip to content
        </a>
        <CustomCursor />
        {children}
        <CommandPalette />
        <EasterEgg />
      </body>
    </html>
  );
}
