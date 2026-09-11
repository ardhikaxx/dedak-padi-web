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

const baseUrl = businessConfig.seo.canonicalUrl || "https://dedakpadi.com";

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
        alt: "Pabrik Dedak Padi UD Purnama Bondowoso Jawa Timur",
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
      { url: "/images/logo-katul.svg", type: "image/svg+xml" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/images/logo-katul.svg",
    apple: [
      { url: "/images/logo-katul.svg", type: "image/svg+xml" },
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
        <link rel="icon" href="/images/logo-katul.svg" type="image/svg+xml" />
        <link rel="shortcut icon" href="/images/logo-katul.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/images/logo-katul.svg" />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-stone-900 antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
