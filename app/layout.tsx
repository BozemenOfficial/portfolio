import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin", "cyrillic"] });
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL || "http://localhost:3000"),
  title: "BozemenOfficial — Full-Stack Developer",
  description: "Full-Stack Developer building clean, reliable websites and web applications — frontend, backend, APIs and databases.",
  openGraph: {
    title: "BozemenOfficial — Full-Stack Developer",
    description: "Web products that work — frontend, backend, APIs and databases.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "BozemenOfficial — Full-Stack Developer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BozemenOfficial — Full-Stack Developer",
    description: "Web products that work — frontend, backend, APIs and databases.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${plexMono.variable}`}>{children}</body></html>;
}