// Business configuration - Update all values here without touching components

export const businessConfig = {
  name: "UD Purnama",
  location: "Bondowoso, Jawa Timur",
  tagline: "Dedak Padi Berkualitas",
  shortDescription:
    "Penyedia dedak padi / bekatul berkualitas untuk kebutuhan pakan ternak, budidaya, dan industri pengolahan pakan.",
  longDescription:
    "Kami adalah penyedia dedak padi yang berkomitmen menghadirkan produk bersih, terjaga kualitasnya, dan siap memenuhi kebutuhan peternak, pembudidaya, maupun pelaku industri pakan secara profesional.",

  whatsapp: {
    // Admin — untuk pemesanan (order & wholesale)
    adminNumber: "6285139140188",
    // Owner — untuk informasi umum
    ownerNumber: "6281325182157",
    defaultMessage:
      "Halo, saya ingin mendapatkan informasi mengenai produk dedak padi. Mohon informasi harga dan ketersediaannya.",
    orderMessage:
      "Halo, saya ingin memesan produk dedak padi. Bisa bantu informasikan harga dan cara pemesanannya?",
    wholesaleMessage:
      "Halo, saya tertarik dengan pembelian dedak padi dalam jumlah besar (partai). Mohon informasi stok, harga, dan ketentuan pembelian.",
  },

  contact: {
    phone: "085139140188", // Admin
    phoneOwner: "0813-2518-2157", // Owner
    email: "[EMAIL BISNIS]", // Ganti dengan email bisnis
    address: "[ALAMAT LENGKAP]", // Ganti dengan alamat bisnis
    operationalHours: "Senin – Sabtu, 08.00 – 17.00 WIB",
  },

  social: {
    instagram: "", // Kosongkan jika belum ada
    facebook: "", // Kosongkan jika belum ada
    tokopedia: "", // Kosongkan jika belum ada
  },

  seo: {
    title: "Dedak Padi & Bekatul Berkualitas di Bondowoso | UD Purnama",
    description:
      "Penyedia dedak padi & bekatul berkualitas di Bondowoso, Jawa Timur. Melayani eceran 1kg, 5kg hingga partai besar grosir pakan ternak & ikan.",
    keywords:
      "dedak padi, bekatul, dedak padi Bondowoso, bekatul Bondowoso, jual dedak padi, supplier dedak padi, distributor dedak padi, dedak padi Jawa Timur, harga dedak padi, pakan ternak, dedak padi pakan ayam, dedak padi pakan sapi, UD Purnama",
    ogImage: "/images/og-image.jpg",
    ogImagePng: "/images/og-image.png",
    ogImageSvg: "/images/slides/1.svg",
    canonicalUrl: "https://dedak-padi.vercel.app",
  },

  // Trust indicators di hero section
  trustIndicators: [
    "Kualitas Terjaga",
    "Siap Jumlah Besar",
    "Layanan Profesional",
  ],

  // Statistics - kosongkan nilai jika belum tersedia
  stats: [
    { label: "Kapasitas Produksi", value: "[KAPASITAS]", unit: "/bulan", show: false },
    { label: "Tahun Pengalaman", value: "[TAHUN]", unit: "tahun", show: false },
    { label: "Pelanggan Aktif", value: "[JUMLAH]", unit: "+", show: false },
    { label: "Wilayah Pengiriman", value: "Multi", unit: "Kota", show: true },
  ],
};

export type BusinessConfig = typeof businessConfig;

// Helper function untuk membuat URL WhatsApp
// - type "default" → owner (info umum)
// - type "order" | "wholesale" → admin (pemesanan)
export function getWhatsAppUrl(
  type: "default" | "order" | "wholesale" = "default"
): string {
  const { adminNumber, ownerNumber } = businessConfig.whatsapp;
  let message = businessConfig.whatsapp.defaultMessage;
  let number = ownerNumber; // default → owner

  if (type === "order") {
    message = businessConfig.whatsapp.orderMessage;
    number = adminNumber; // pemesanan → admin
  }
  if (type === "wholesale") {
    message = businessConfig.whatsapp.wholesaleMessage;
    number = adminNumber; // partai → admin
  }

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
