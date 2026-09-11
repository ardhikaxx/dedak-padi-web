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
  price: number;
  shopeeUrl: string;
}

export const products: Product[] = [
  {
    id: "dedak-menir-1kg",
    name: "Dedak Padi dengan Menir 1kg",
    slug: "dedak-padi-dengan-menir-1kg",
    shortDescription:
      "Campuran dedak padi dan menir pakan ternak, kemasan praktis 1kg. Cocok untuk pakan unggas dan ikan skala kecil.",
    longDescription:
      "Dedak padi dengan campuran menir merupakan pilihan ekonomis untuk peternak skala kecil. Perpaduan dedak dan menir memberikan nutrisi seimbang dengan harga terjangkau. Cocok untuk pakan ayam kampung, bebek, ikan lele, dan ikan nila.",
    type: "campuran",
    characteristics: [
      "Campuran dedak dan menir",
      "Tekstur campuran halus-kasar",
      "Warna kecoklatan alami",
      "Aroma segar",
      "Kemasan praktis 1kg",
    ],
    usageFor: [
      "Pakan ayam kampung",
      "Pakan bebek",
      "Pakan ikan lele & nila",
      "Pakan puyuh",
    ],
    packaging: [{ size: "1", unit: "kg", description: "Plastik press" }],
    minimumOrder: "1 kemasan",
    image: "/images/product/dedak-padi-menir-1kg.svg",
    badge: undefined,
    featured: true,
    price: 5000,
    shopeeUrl: "#",
  },
  {
    id: "dedak-halus-1kg",
    name: "Dedak Padi Halus 1kg",
    slug: "dedak-padi-halus-1kg",
    shortDescription:
      "Dedak padi halus (bekatul) kemasan 1kg. Tekstur lembut, cocok untuk pakan unggas dan ikan.",
    longDescription:
      "Dedak halus atau bekatul murni dengan tekstur sangat lembut. Mengandung tinggi protein dan vitamin B cocok untuk pakan ayam petelur, ayam pedaging, ikan, dan udang. Kemasan 1kg praktis untuk kebutuhan skala kecil.",
    type: "halus",
    characteristics: [
      "Tekstur halus dan lembut",
      "Warna kuning kecoklatan",
      "Kandungan protein tinggi",
      "Bersih dari kontaminan",
      "Kemasan praktis 1kg",
    ],
    usageFor: [
      "Pakan ayam petelur",
      "Pakan ayam pedaging",
      "Pakan ikan & udang",
      "Pakan kelinci",
    ],
    packaging: [{ size: "1", unit: "kg", description: "Plastik press" }],
    minimumOrder: "1 kemasan",
    image: "/images/product/dedak-padi-halus-1kg.svg",
    featured: true,
    price: 4000,
    shopeeUrl: "#",
  },
  {
    id: "dedak-menir-5kg",
    name: "Dedak Padi dengan Menir 5kg",
    slug: "dedak-padi-dengan-menir-5kg",
    shortDescription:
      "Campuran dedak padi dan menir pakan ternak, kemasan 5kg. Hemat untuk kebutuhan rutin peternakan.",
    longDescription:
      "Pilihan hemat untuk peternak yang membutuhkan stok rutin. Kemasan 5kg cocok untuk peternak unggas dan ikan skala menengah. Campuran dedak dan menir memberikan nutrisi seimbang dengan harga lebih ekonomis.",
    type: "campuran",
    characteristics: [
      "Campuran dedak dan menir",
      "Kemasan 5kg hemat",
      "Tekstur campuran",
      "Warna kecoklatan alami",
      "Cocok stok rutin",
    ],
    usageFor: [
      "Pakan ayam kampung",
      "Pakan bebek",
      "Pakan ikan lele & nila",
      "Pakan puyuh",
    ],
    packaging: [{ size: "5", unit: "kg", description: "Karung plastik" }],
    minimumOrder: "1 kemasan",
    image: "/images/product/dedak-padi-menir-5kg.svg",
    badge: undefined,
    featured: true,
    price: 20000,
    shopeeUrl: "#",
  },
  {
    id: "dedak-halus-5kg",
    name: "Dedak Padi Halus 5kg",
    slug: "dedak-padi-halus-5kg",
    shortDescription:
      "Dedak padi halus (bekatul) kemasan 5kg. Pilihan tepat untuk peternak yang membutuhkan stok rutin.",
    longDescription:
      "Bekatul pilihan dengan kualitas terbaik dalam kemasan 5kg. Cocok untuk peternak unggas dan ikan skala menengah yang membutuhkan pasokan rutin. Kandungan nutrisi tinggi untuk pertumbuhan ternak yang optimal.",
    type: "halus",
    characteristics: [
      "Tekstur halus premium",
      "Kemasan 5kg praktis",
      "Kandungan protein tinggi",
      "Bersih dan higienis",
      "Cocok stok rutin",
    ],
    usageFor: [
      "Pakan ayam petelur",
      "Pakan ayam pedaging",
      "Pakan ikan & udang",
      "Pakan kelinci",
    ],
    packaging: [{ size: "5", unit: "kg", description: "Karung plastik" }],
    minimumOrder: "1 kemasan",
    image: "/images/product/dedak-padi-halus-5kg.svg",
    badge: undefined,
    featured: true,
    price: 15000,
    shopeeUrl: "#",
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
    question: "Apa itu dedak padi dan bekatul?",
    answer:
      "Dedak padi adalah hasil samping dari proses penggilingan padi saat bulir padi dipisahkan dari kulitnya menjadi beras. Lapisan kulit ari bagian dalam yang bertekstur sangat halus dan kaya nutrisi biasa disebut bekatul (dedak halus). Dedak padi dan bekatul sangat kaya akan energi, protein nabati, dan vitamin B kompleks sehingga menjadi salah satu bahan baku utama pakan ternak dan campuran konsentrat pakan.",
  },
  {
    id: "perbedaan-dedak-bekatul",
    question: "Apa perbedaan dedak padi halus (bekatul) dan dedak dengan menir?",
    answer:
      "Dedak padi halus (bekatul) memiliki tekstur lembut, warna kuning kecokelatan cerah, dan kaya protein sehingga sangat cocok untuk pakan ayam petelur, ayam pedaging, bebek, kelinci, hingga pakan ikan dan udang. Sedangkan dedak padi campuran menir mengombinasikan dedak dengan butiran menir (pecahan beras kecil) yang memberikan tambahan sumber energi karbohidrat dengan harga lebih ekonomis, ideal untuk pakan unggas kampung, bebek, dan ikan kolam.",
  },
  {
    id: "kegunaan-dedak",
    question: "Dedak padi UD Purnama cocok digunakan untuk pakan ternak apa saja?",
    answer:
      "Produk dedak padi dan bekatul kami dapat digunakan untuk berbagai jenis ternak: unggas (ayam pedaging, ayam petelur, ayam kampung, bebek, itik, puyuh), budidaya ikan & udang (lele, nila, mas, udang vaname), ternak ruminansia (sapi potong, sapi perah, kambing, domba, kerbau), serta sebagai bahan baku campuran formulasi pakan konsentrat oleh peternak mandiri maupun pabrik pakan.",
  },
  {
    id: "lokasi-beli-bondowoso",
    question: "Di mana lokasi UD Purnama dan apakah bisa membeli langsung di Bondowoso?",
    answer:
      "UD Purnama berlokasi di Bondowoso, Jawa Timur. Calon pembeli dan peternak dapat melakukan pemesanan dan pembelian langsung di Bondowoso maupun melalui kontak WhatsApp resmi kami. Kami siap melayani pembelian retail skala kecil, kebutuhan peternakan rumahan, hingga pasokan rutin untuk peternakan komersial.",
  },
  {
    id: "pengiriman-jawa-timur",
    question: "Apakah UD Purnama melayani pengiriman ke luar kota di Jawa Timur?",
    answer:
      "Ya, UD Purnama melayani pengiriman dedak padi ke berbagai wilayah di Jawa Timur, terutama kawasan Tapal Kuda dan sekitarnya seperti Jember, Situbondo, Banyuwangi, Probolinggo, Lumajang, dan kota-kota lain di Jawa Timur. Hubungi kami melalui WhatsApp untuk informasi ketersediaan armada, estimasi ongkos kirim, dan opsi pengiriman terbaik ke lokasi Anda.",
  },
  {
    id: "pembelian-grosir",
    question: "Apakah tersedia pembelian dedak padi dalam jumlah besar (partai / grosir)?",
    answer:
      "Ya, kami melayani pembelian grosir dan partai besar untuk distributor, toko pakan ternak, koperasi peternak, peternakan skala besar, serta industri pengolahan pakan. Tersedia harga khusus volume besar dan jadwal pasokan berkala untuk menjaga kontinuitas pakan di peternakan Anda.",
  },
  {
    id: "pilihan-kemasan",
    question: "Apa saja pilihan kemasan dedak padi yang tersedia?",
    answer:
      "Kami menyediakan kemasan retail praktis 1 kg (plastik press) dan 5 kg (karung plastik hemat) yang juga bisa dipesan melalui Shopee atau WhatsApp. Untuk kebutuhan partai besar dan industri, tersedia kemasan karung 25 kg dan 50 kg dengan penutupan rapi dan aman.",
  },
  {
    id: "harga-dedak-padi",
    question: "Berapa harga dedak padi dan bekatul di UD Purnama?",
    answer:
      "Untuk kemasan eceran, harga tercantum mulai dari Rp 4.000 (Dedak Halus 1kg), Rp 5.000 (Dedak Menir 1kg), Rp 15.000 (Dedak Halus 5kg), dan Rp 20.000 (Dedak Menir 5kg). Untuk pembelian karung 25kg, 50kg, atau pesanan partai besar/tonase, harga fleksibel mengikuti volume pembelian dan fluktuasi musim panen padi. Silakan hubungi WhatsApp kami untuk mendapatkan penawaran harga grosir terbaik.",
  },
  {
    id: "cara-pesan",
    question: "Bagaimana cara melakukan pemesanan dedak padi di UD Purnama?",
    answer:
      "Pemesanan sangat mudah: cukup hubungi WhatsApp Admin di nomor 0851-3914-0188 untuk pemesanan rutin & grosir, atau hubungi 0813-2518-2157 untuk konsultasi informasi produk. Untuk kemasan 1kg dan 5kg, Anda juga dapat memesan langsung melalui Shopee yang tertera pada katalog produk kami.",
  },
  {
    id: "ciri-dedak-berkualitas",
    question: "Bagaimana ciri-ciri dedak padi yang berkualitas baik?",
    answer:
      "Dedak padi berkualitas baik memiliki ciri: aroma segar khas padi (tidak apek, tidak tengik, dan tidak asam), warna alami kuning kecokelatan seragam, tekstur bersih bebas dari sekam kasar berlebihan, kotoran, atau batu, serta kadar air rendah sehingga tidak menggumpal dan tidak mudah berjamur saat disimpan.",
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
