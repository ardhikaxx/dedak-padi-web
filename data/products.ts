// Product data configuration

export interface ProductPackaging {
  size: string;
  unit: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  type: "halus" | "kasar" | "campuran" | "lainnya";
  characteristics: string[];
  usageFor: string[];
  packaging: ProductPackaging[];
  minimumOrder?: string;
  image: string;
  badge?: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: "dedak-halus",
    name: "Dedak Halus (Bekatul)",
    slug: "dedak-halus",
    shortDescription:
      "Dedak halus hasil penggilingan padi berkualitas, bersih, dan siap digunakan sebagai bahan pakan.",
    longDescription:
      "Dedak halus atau bekatul merupakan lapisan luar beras yang dihasilkan dari proses penggilingan padi. Memiliki tekstur lembut dan kandungan nutrisi yang baik untuk kebutuhan pakan berbagai jenis ternak.",
    type: "halus",
    characteristics: [
      "Tekstur halus dan lembut",
      "Warna kuning kecoklatan alami",
      "Aroma segar khas dedak",
      "Bersih dari kontaminan",
      "Kadar air terjaga",
    ],
    usageFor: [
      "Pakan unggas (ayam, bebek, burung)",
      "Pakan ikan dan udang",
      "Pakan kambing dan domba",
      "Bahan campuran formulasi pakan",
      "Pakan kelinci",
    ],
    packaging: [
      { size: "25", unit: "kg", description: "Karung plastik" },
      { size: "50", unit: "kg", description: "Karung plastik" },
    ],
    minimumOrder: "1 karung",
    image: "/images/products/dedak-halus.jpg",
    badge: "Populer",
    featured: true,
  },
  {
    id: "dedak-kasar",
    name: "Dedak Kasar",
    slug: "dedak-kasar",
    shortDescription:
      "Dedak kasar dengan tekstur lebih besar, cocok untuk pakan sapi, kerbau, dan ternak besar lainnya.",
    longDescription:
      "Dedak kasar mengandung lebih banyak serat kasar dibandingkan dedak halus. Sangat cocok sebagai bahan pakan untuk ternak ruminansia seperti sapi, kerbau, kambing, dan domba.",
    type: "kasar",
    characteristics: [
      "Tekstur lebih kasar dan berserat",
      "Kandungan serat tinggi",
      "Warna coklat alami",
      "Bersih dari kotoran",
      "Cocok untuk ternak besar",
    ],
    usageFor: [
      "Pakan sapi dan kerbau",
      "Pakan kambing dan domba",
      "Bahan campuran pakan ternak besar",
      "Suplemen serat pakan",
    ],
    packaging: [
      { size: "25", unit: "kg", description: "Karung plastik" },
      { size: "50", unit: "kg", description: "Karung plastik" },
    ],
    minimumOrder: "1 karung",
    image: "/images/products/dedak-kasar.jpg",
    featured: true,
  },
];

// Usage categories for "Cocok untuk" section
export interface UsageCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

export const usageCategories: UsageCategory[] = [
  {
    id: "unggas",
    title: "Peternak Unggas",
    description:
      "Cocok sebagai pakan atau campuran pakan untuk ayam, bebek, puyuh, dan berbagai jenis unggas lainnya.",
    icon: "Bird",
    examples: ["Ayam pedaging", "Ayam petelur", "Bebek", "Puyuh"],
  },
  {
    id: "ikan",
    title: "Budidaya Ikan",
    description:
      "Dapat digunakan sebagai bahan campuran pakan dalam usaha budidaya ikan dan udang.",
    icon: "Fish",
    examples: ["Ikan lele", "Ikan nila", "Ikan mas", "Udang"],
  },
  {
    id: "ruminansia",
    title: "Ternak Besar",
    description:
      "Dedak kasar sangat baik sebagai suplemen pakan untuk sapi, kerbau, kambing, dan domba.",
    icon: "Beef",
    examples: ["Sapi", "Kerbau", "Kambing", "Domba"],
  },
  {
    id: "formulasi",
    title: "Formulasi Pakan",
    description:
      "Digunakan oleh produsen pakan sebagai bahan baku utama atau campuran dalam formulasi pakan jadi.",
    icon: "FlaskConical",
    examples: [
      "Pabrik pakan",
      "Home industry pakan",
      "Distributor pakan",
      "Reseller",
    ],
  },
  {
    id: "distributor",
    title: "Distributor & Reseller",
    description:
      "Tersedia dalam jumlah besar untuk kebutuhan distributor dan reseller bahan pakan ternak.",
    icon: "Truck",
    examples: [
      "Distributor pakan",
      "Toko peternakan",
      "Koperasi peternak",
      "Supplier pakan",
    ],
  },
  {
    id: "industri",
    title: "Industri Pengolahan",
    description:
      "Memenuhi kebutuhan industri yang memanfaatkan dedak padi sebagai bahan baku proses produksi.",
    icon: "Factory",
    examples: [
      "Industri minyak dedak",
      "Industri pakan olahan",
      "Pengolahan hasil pertanian",
    ],
  },
];

// Process steps
export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Penerimaan Bahan Baku",
    description:
      "Padi segar diterima dari petani mitra dengan seleksi awal untuk memastikan bahan baku berkualitas.",
    icon: "Wheat",
  },
  {
    step: 2,
    title: "Proses Penggilingan",
    description:
      "Padi digiling menggunakan mesin penggilingan modern untuk memisahkan beras dari kulit dan dedak.",
    icon: "Settings",
  },
  {
    step: 3,
    title: "Pemisahan & Seleksi",
    description:
      "Dedak dipisahkan menjadi dedak halus dan kasar, kemudian diseleksi untuk menjaga kebersihan produk.",
    icon: "Filter",
  },
  {
    step: 4,
    title: "Pengemasan",
    description:
      "Produk dikemas dalam karung bersih dengan berat yang tepat dan tertutup rapat untuk menjaga kualitas.",
    icon: "Package",
  },
  {
    step: 5,
    title: "Penyimpanan",
    description:
      "Produk disimpan di gudang yang bersih, kering, dan terhindar dari hama untuk menjaga kesegaran.",
    icon: "Warehouse",
  },
  {
    step: 6,
    title: "Siap Dikirim",
    description:
      "Produk siap dikirim ke pelanggan dengan penanganan yang tepat untuk memastikan kondisi terjaga.",
    icon: "Truck",
  },
];

// Benefits/Why choose us
export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const benefits: Benefit[] = [
  {
    id: "kualitas",
    title: "Kualitas Terjaga",
    description:
      "Setiap produk diproduksi dari bahan baku pilihan dengan proses pengolahan yang bersih dan terjaga.",
    icon: "ShieldCheck",
  },
  {
    id: "bersih",
    title: "Produk Bersih",
    description:
      "Dedak padi kami bebas dari kotoran berlebih, kadar air terjaga, dan dikemas secara higienis.",
    icon: "Sparkles",
  },
  {
    id: "stok",
    title: "Stok Tersedia",
    description:
      "Kami menjaga ketersediaan stok secara konsisten untuk memastikan kebutuhan Anda selalu terpenuhi.",
    icon: "PackageCheck",
  },
  {
    id: "jumlah-besar",
    title: "Melayani Partai Besar",
    description:
      "Siap memenuhi kebutuhan dalam jumlah besar untuk distributor, peternak skala besar, dan industri.",
    icon: "Layers",
  },
  {
    id: "pengiriman",
    title: "Pengiriman Fleksibel",
    description:
      "Mendukung berbagai opsi pengiriman untuk memenuhi kebutuhan pelanggan dari berbagai lokasi.",
    icon: "Truck",
  },
  {
    id: "pelayanan",
    title: "Pelayanan Responsif",
    description:
      "Tim kami siap membantu konsultasi, informasi produk, dan proses pemesanan dengan cepat dan ramah.",
    icon: "HeadphonesIcon",
  },
];

// FAQ data
export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: "apa-dedak-padi",
    question: "Apa itu dedak padi?",
    answer:
      "Dedak padi adalah hasil samping dari proses penggilingan padi menjadi beras. Dedak merupakan lapisan luar dari biji padi yang terpisah saat proses pengolahan. Terdiri dari dedak halus (bekatul) dan dedak kasar, keduanya memiliki nilai nutrisi yang baik dan banyak dimanfaatkan sebagai bahan pakan ternak.",
  },
  {
    id: "kegunaan-dedak",
    question: "Dedak padi digunakan untuk apa saja?",
    answer:
      "Dedak padi banyak dimanfaatkan sebagai bahan pakan ternak seperti ayam, bebek, ikan, sapi, kambing, dan berbagai jenis ternak lainnya. Selain itu, dedak juga digunakan sebagai bahan campuran dalam formulasi pakan jadi oleh produsen pakan dan industri pengolahan.",
  },
  {
    id: "pembelian-besar",
    question: "Apakah bisa membeli dalam jumlah besar (partai)?",
    answer:
      "Ya, kami melayani pembelian dalam jumlah besar untuk distributor, peternak skala besar, dan industri pakan. Silakan hubungi kami melalui WhatsApp untuk mendapatkan informasi harga, ketersediaan stok, dan ketentuan pembelian partai.",
  },
  {
    id: "pilihan-kemasan",
    question: "Apakah tersedia beberapa pilihan kemasan?",
    answer:
      "Tersedia dalam kemasan 25 kg dan 50 kg per karung. Untuk kebutuhan kemasan khusus atau jumlah yang sangat besar, silakan diskusikan langsung dengan kami agar kami dapat menyesuaikan dengan kebutuhan Anda.",
  },
  {
    id: "cara-pesan",
    question: "Bagaimana cara melakukan pemesanan?",
    answer:
      "Pemesanan dapat dilakukan dengan mudah melalui WhatsApp. Cukup klik tombol 'Pesan Sekarang' atau 'Hubungi Kami' di website ini, dan tim kami akan segera membantu Anda dengan informasi produk, harga, dan proses pemesanan.",
  },
  {
    id: "pengiriman-luar-kota",
    question: "Apakah bisa dikirim ke luar kota?",
    answer:
      "Ya, kami mendukung pengiriman ke berbagai wilayah. Untuk informasi lebih lanjut mengenai jangkauan pengiriman, ongkos kirim, dan estimasi waktu pengiriman ke lokasi Anda, silakan hubungi kami melalui WhatsApp.",
  },
  {
    id: "perbedaan-dedak",
    question: "Apa perbedaan dedak halus dan dedak kasar?",
    answer:
      "Dedak halus (bekatul) memiliki tekstur lebih lembut dan cocok untuk pakan unggas seperti ayam dan bebek, serta pakan ikan. Sedangkan dedak kasar memiliki kandungan serat yang lebih tinggi dan lebih cocok untuk ternak besar seperti sapi, kerbau, dan kambing.",
  },
  {
    id: "minimum-order",
    question: "Berapa minimum pembelian?",
    answer:
      "Minimum pembelian dimulai dari 1 karung (25 kg atau 50 kg). Namun untuk informasi lebih detail mengenai ketentuan minimum order dan harga berdasarkan volume, silakan hubungi kami langsung.",
  },
];

// Testimonials - kosongkan array jika belum ada data
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location?: string;
  rating: number;
  content: string;
  show: boolean;
}

export const testimonials: Testimonial[] = [
  // Kosongkan atau isi dengan testimonial asli
  // {
  //   id: "1",
  //   name: "[Nama Pelanggan]",
  //   role: "Peternak Ayam",
  //   location: "[Kota]",
  //   rating: 5,
  //   content: "[Isi testimonial...]",
  //   show: false,
  // },
];
