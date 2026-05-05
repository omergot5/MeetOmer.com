import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { type ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Omer Gottlieb | System & Data Engineering",
  description:
    "Personal portfolio of Omer Gottlieb. Showcasing experience in operational management, process automation, and system engineering.",
  applicationName: "Omer Gottlieb — Portfolio",
  authors: [{ name: "Omer Gottlieb" }],
  keywords: [
    "Omer Gottlieb",
    "Industrial Engineering",
    "Information Systems",
    "Automation",
    "GoHighLevel",
    "Supabase",
    "Portfolio",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    title: "Omer Gottlieb",
    description:
      "Industrial Engineering & Management Student | Information Systems Specialization",
    siteName: "Omer Gottlieb — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omer Gottlieb",
    description:
      "Industrial Engineering & Management Student | Information Systems Specialization",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f8fafc",
};

export default function RootLayout({
  children,
}: {
  readonly children: ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans text-ink">{children}</body>
    </html>
  );
}
