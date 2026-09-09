// Business configuration - Update all values here without touching components

export const businessConfig = {
  name: "Berkah Dedak",
  tagline: "Dedak Padi Berkualitas untuk Agroindustri",
  shortDescription:
    "Penyedia dedak padi / bekatul berkualitas untuk kebutuhan pakan ternak, budidaya, dan industri pengolahan pakan.",
  longDescription:
    "Kami adalah penyedia dedak padi yang berkomitmen menghadirkan produk bersih, terjaga kualitasnya, dan siap memenuhi kebutuhan peternak, pembudidaya, maupun pelaku industri pakan secara profesional.",

  whatsapp: {
    number: "6281234567890", // Format: 62xxxxxxxxxx (tanpa +)
    defaultMessage:
      "Halo, saya ingin mendapatkan informasi mengenai produk dedak padi. Mohon informasi harga dan ketersediaannya.",
    orderMessage:
      "Halo, saya ingin memesan produk dedak padi. Bisa bantu informasikan harga dan cara pemesanannya?",
    wholesaleMessage:
      "Halo, saya tertarik dengan pembelian dedak padi dalam jumlah besar (partai). Mohon informasi stok, harga, dan ketentuan pembelian.",
  },

  contact: {
    phone: "[NOMOR TELEPON]", // Ganti dengan nomor telepon
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
    title: "Berkah Dedak – Dedak Padi Berkualitas untuk Pakan & Agroindustri",
    description:
      "Penyedia dedak padi / bekatul berkualitas untuk kebutuhan pakan ternak, unggas, ikan, dan industri pakan. Tersedia dalam berbagai kemasan. Hubungi kami untuk informasi harga dan pemesanan.",
    keywords:
      "dedak padi, bekatul, pakan ternak, pakan unggas, bahan pakan, agroindustri, dedak halus, dedak kasar",
    ogImage: "/images/og-image.jpg",
    canonicalUrl: "", // Ganti dengan domain setelah deploy
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
export function getWhatsAppUrl(
  type: "default" | "order" | "wholesale" = "default"
): string {
  const { number } = businessConfig.whatsapp;
  let message = businessConfig.whatsapp.defaultMessage;

  if (type === "order") message = businessConfig.whatsapp.orderMessage;
  if (type === "wholesale") message = businessConfig.whatsapp.wholesaleMessage;

  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
