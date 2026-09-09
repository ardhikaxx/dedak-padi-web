import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { businessConfig } from "@/data/business";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: businessConfig.seo.title,
  description: businessConfig.seo.description,
  keywords: businessConfig.seo.keywords,
  authors: [{ name: businessConfig.name }],
  openGraph: {
    title: businessConfig.seo.title,
    description: businessConfig.seo.description,
    type: "website",
    locale: "id_ID",
    siteName: businessConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: businessConfig.seo.title,
    description: businessConfig.seo.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id" className={`${inter.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-stone-900 antialiased">
        {children}
      </body>
    </html>
  );
}
