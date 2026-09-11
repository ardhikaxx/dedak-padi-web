import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/data/business";
import JsonLd from "@/components/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const baseUrl = businessConfig.seo.canonicalUrl || "https://dedak-padi.vercel.app";

export const viewport: Viewport = {
  themeColor: "#15803d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: businessConfig.seo.title,
    template: `%s | ${businessConfig.name}`,
  },
  description: businessConfig.seo.description,
  keywords: businessConfig.seo.keywords,
  authors: [{ name: businessConfig.name, url: baseUrl }],
  creator: businessConfig.name,
  publisher: businessConfig.name,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: businessConfig.seo.title,
    description: businessConfig.seo.description,
    url: baseUrl,
    siteName: `${businessConfig.name} - Dedak Padi Bondowoso`,
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: businessConfig.seo.ogImage,
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "UD Purnama - Dedak Padi & Bekatul Berkualitas di Bondowoso Jawa Timur",
      },
      {
        url: businessConfig.seo.ogImagePng,
        width: 1200,
        height: 630,
        type: "image/png",
        alt: "UD Purnama - Dedak Padi & Bekatul Berkualitas di Bondowoso Jawa Timur",
      },
      {
        url: businessConfig.seo.ogImageSvg,
        width: 1920,
        height: 1080,
        type: "image/svg+xml",
        alt: "UD Purnama - Dedak Padi & Bekatul Berkualitas di Bondowoso Jawa Timur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: businessConfig.seo.title,
    description: businessConfig.seo.description,
    images: [businessConfig.seo.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico?v=2", sizes: "any" },
      { url: "/images/logo-katul.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: "/favicon.ico?v=2",
    apple: [
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    "geo.region": "ID-JI",
    "geo.placename": "Bondowoso",
    "geo.position": "-7.9135;113.8214",
    ICBM: "-7.9135, 113.8214",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} h-full scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.ico?v=2" sizes="any" />
        <link rel="icon" href="/icon.png?v=2" type="image/png" sizes="32x32" />
        <link rel="icon" href="/images/logo-katul.svg?v=2" type="image/svg+xml" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=2" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-stone-900 antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
