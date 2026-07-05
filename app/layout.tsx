import type { Metadata } from "next";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import SmoothScrollProvider from "@/components/ui/SmoothScrollProvider";

// NOTE: "Clash Display" is a paid/foundry font (Fontshare, free for commercial
// use with a license file) and isn't distributable via next/font/google.
// Bricolage Grotesque is used here as a structurally similar, freely-licensed
// editorial display font. To use the real Clash Display, drop the .woff2 files
// into /public/fonts and swap this for next/font/local.
const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-clash",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zeyadkhaled.dev"),
  title: {
    default: "Zeyad Khaled | Full Stack Developer",
    template: "%s — Zeyad Khaled",
    icon: {
      icon: "/icon.png",
    }
  },
  description:
    "I design and build fast, modern, visually refined digital products for startups, businesses and brands — improving trust, user experience and conversions.",
  keywords: [
    "Zeyad Khaled",
    "Frontend Developer",
    "Next.js Developer",
    "Full Stack Developer",
    "Luxury Web Design",
  ],
  authors: [{ name: "Zeyad Khaled" }],
  openGraph: {
    title: "Zeyad Khaled — Premium Digital Experiences",
    description:
      "I design and build fast, modern, visually refined digital products for startups, businesses and brands.",
    url: "https://zeyadkhaled.dev",
    siteName: "Zeyad Khaled",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Zeyad Khaled — Premium Digital Experiences",
    description:
      "I design and build fast, modern, visually refined digital products for startups, businesses and brands.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Zeyad Khaled",
    url: "https://zeyadkhaled.dev",
    jobTitle: "Frontend & Full Stack Developer",
    sameAs: [
      "https://github.com/omzeinf-blip",
      "https://www.fiverr.com/runwayinf",
      "https://contra.com/zeyadkhaled",
    ],
    knowsAbout: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Web Design",
      "Full Stack Development",
    ],
  };

  return (
    <html lang="en" className={`${bricolage.variable} ${inter.variable}`}>
      <body>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SmoothScrollProvider>
          <CustomCursor />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
