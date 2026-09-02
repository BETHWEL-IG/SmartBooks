import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SmartBook Software | Custom Point of Sale (POS), ERP & Enterprise Software Creation",
  description:
    "We architect and build bespoke high-performance software for businesses: Custom Point of Sale (POS), ERP & Inventory systems, School & Hospital management, and tailored Web/Mobile SaaS applications.",
  keywords: [
    "POS Software Development",
    "Custom Software Company",
    "Point of Sale System",
    "Retail POS",
    "Restaurant POS",
    "Inventory ERP Software",
    "School Management System",
    "Hospital Clinic Software",
    "SmartBook Technologies",
    "Bespoke Software Engineering",
  ],
  authors: [{ name: "SmartBook Software Engineering" }],
  openGraph: {
    title: "SmartBook Software — Engineering Intelligent Business Systems",
    description: "Custom POS, ERP, Web & Mobile Software designed for speed, reliability, and growth.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060911",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#060911] text-slate-100 antialiased flex flex-col selection:bg-sky-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}
