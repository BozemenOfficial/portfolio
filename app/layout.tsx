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
  title: "Bozemen — Web Developer · Full Stack",
  description: "Personal portfolio: React and TypeScript interfaces, NovaShop and practical web development.",
  openGraph: {
    title: "Bozemen — Web Developer · Full Stack",
    description: "Explore NovaShop, my tools and the work behind the interface.",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bozemen — Web Developer · Full Stack" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bozemen — Web Developer · Full Stack",
    description: "Explore NovaShop, my tools and the work behind the interface.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${manrope.variable} ${plexMono.variable}`}>{children}</body></html>;
}