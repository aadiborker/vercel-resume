import type { Metadata } from "next";
import localFont from "next/font/local";
import { profile } from "@/data/resume";
import { getBaseUrl } from "@/lib/site";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadataBase = new URL(getBaseUrl());

export const metadata: Metadata = {
  metadataBase,
  title: `${profile.name} — ${profile.headline}`,
  description: profile.summary,
  openGraph: {
    title: `${profile.name} — ${profile.headline}`,
    description: profile.summary,
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/og.png",
        width: 1376,
        height: 768,
        alt: `${profile.name} — ${profile.headline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.headline}`,
    description: profile.summary,
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-neutral-950 font-[family-name:var(--font-geist-sans)] text-neutral-100 antialiased`}
      >
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
