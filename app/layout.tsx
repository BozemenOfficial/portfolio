import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

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
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body></html>;
}