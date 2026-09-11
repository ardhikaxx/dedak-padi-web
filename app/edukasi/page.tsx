import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { ArrowLeft, ArrowRight, CheckCircle2, BookOpen, Sparkles, HelpCircle } from 'lucide-react';
import { getWhatsAppUrl, businessConfig } from '@/data/business';

export const metadata: Metadata = {
  title: 'Panduan Dedak Padi & Bekatul: Perbedaan, Kegunaan, & Ciri Berkualitas | UD Purnama',
  description:
    'Pelajari apa itu dedak padi dan bekatul, perbedaan keduanya, kegunaan pakan untuk ayam, sapi, bebek, ikan, serta cara memilih dedak berkualitas dari UD Purnama Bondowoso.',
  keywords: [
    'apa itu dedak padi',
    'apa itu bekatul',
    'perbedaan dedak padi dan bekatul',
    'kegunaan dedak padi',
    'manfaat dedak padi untuk pakan',
    'dedak padi untuk pakan ayam',
    'dedak padi untuk pakan sapi',
    'cara memilih dedak padi berkualitas',
    'ciri dedak padi yang baik',
    'dedak padi Bondowoso',
  ],
  alternates: {
    canonical: `${businessConfig.seo.canonicalUrl}/edukasi`,
  },
  openGraph: {
    title: 'Panduan Dedak Padi & Bekatul untuk Pakan Ternak | UD Purnama',
    description:
      'Edukasi lengkap mengenai dedak padi, bekatul, formulasi pakan ternak unggas & ruminansia, serta cara memilih dedak padi berkualitas di Jawa Timur.',
    url: `${businessConfig.seo.canonicalUrl}/edukasi`,
    type: 'article',
    locale: 'id_ID',
    siteName: businessConfig.name,
    images: [
      {
        url: businessConfig.seo.ogImage,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Panduan Dedak Padi & Bekatul UD Purnama Bondowoso',
      },
      {
        url: businessConfig.seo.ogImageSvg,
        width: 1920,
        height: 1080,
        type: 'image/svg+xml',
        alt: 'Panduan Dedak Padi & Bekatul UD Purnama Bondowoso',
      },
    ],
  },
};

export default function EdukasiPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-16 bg-[#FAFAF8] min-h-screen">
        {/* Breadcrumbs */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs sm:text-sm text-stone-500">
            <Link href="/" className="hover:text-green-700 transition-colors">
              Beranda
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-stone-800 font-medium" aria-current="page">
              Edukasi Dedak Padi &amp; Bekatul
            </span>
          </nav>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide uppercase mb-4">
              <BookOpen className="w-3.5 h-3.5" aria-hidden="true" />
              Pusat Informasi &amp; Edukasi Pakan
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight leading-[1.2] mb-5">
              Panduan Lengkap Dedak Padi &amp; Bekatul: Perbedaan, Kegunaan, dan Ciri Kualitas Baik
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Memahami karakteristik dedak padi dan bekatul sangat penting bagi peternak untuk menyusun formulasi pakan ternak yang bernutrisi tinggi, efisien, dan ekonomis. Berikut ulasan lengkap langsung dari praktisi penggilingan padi UD Purnama di Bondowoso, Jawa Timur.
            </p>
          </header>

          {/* Table of Contents Box */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 mb-12 shadow-xs">
            <p className="font-bold text-stone-900 text-sm sm:text-base mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-green-600" />
              Daftar Isi Pembahasan
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-600">
              <li>
                <a href="#apa-itu-dedak" className="hover:text-green-700 hover:underline">
                  1. Apa Itu Dedak Padi &amp; Bekatul?
                </a>
              </li>
              <li>
                <a href="#perbedaan-dedak-bekatul" className="hover:text-green-700 hover:underline">
                  2. Perbedaan Dedak Halus dan Campuran Menir
                </a>
              </li>
              <li>
                <a href="#kegunaan-pakan" className="hover:text-green-700 hover:underline">
                  3. Kegunaan untuk Ayam, Sapi, Bebek, &amp; Ikan
                </a>
              </li>
              <li>
                <a href="#ciri-kualitas" className="hover:text-green-700 hover:underline">
                  4. Cara Memilih Ciri Dedak Berkualitas
                </a>
              </li>
            </ul>
          </div>

          {/* Content Body */}
          <div className="space-y-12 text-stone-700 leading-relaxed">
            {/* Section 1 */}
            <section id="apa-itu-dedak" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
                1. Apa Itu Dedak Padi dan Bekatul?
              </h2>
              <p className="mb-4">
                Dedak padi adalah hasil sampingan alami dari proses penggilingan padi (gabah) saat diolah menjadi beras siap konsumsi. Saat gabah digiling, terdapat beberapa lapisan yang terpisah:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/70">
                  <p className="font-bold text-amber-900 text-sm mb-1">1. Sekam Padi (Kulit Luar)</p>
                  <p className="text-xs text-stone-600">
                    Lapisan pelindung luar yang keras dan berserat tinggi. Biasanya dimanfaatkan untuk bahan bakar atau abu sekam.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-green-50/60 border border-green-200/70">
                  <p className="font-bold text-green-900 text-sm mb-1">2. Dedak Halus / Bekatul</p>
                  <p className="text-xs text-stone-600">
                    Lapisan kulit ari tipis (aleuron) dan mata beras yang kaya akan vitamin B kompleks, protein nabati, dan lemak sehat.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-stone-100/70 border border-stone-200">
                  <p className="font-bold text-stone-900 text-sm mb-1">3. Butir Beras &amp; Menir</p>
                  <p className="text-xs text-stone-600">
                    Endosperma utama beras putih. Pecahan butir beras yang berukuran sangat kecil dikenal dengan sebutan menir.
                  </p>
                </div>
              </div>
              <p>
                Bekatul atau dedak padi halus merupakan bagian yang memiliki nilai gizi paling tinggi dibanding sekam. Oleh karena itu, peternak di seluruh Indonesia mengandalkannya sebagai sumber energi dan protein nabati yang sangat ekonomis.
              </p>
            </section>

            {/* Section 2 */}
            <section id="perbedaan-dedak-bekatul" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
                2. Perbedaan Dedak Padi Halus (Bekatul) dan Dedak Campuran Menir
              </h2>
              <p className="mb-4">
                Seringkali peternak pemula bingung membedakan jenis dedak yang beredar di pasaran. Di UD Purnama Bondowoso, kami menyediakan dua varian utama yang memiliki karakteristik berbeda sesuai peruntukan pakan:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left text-sm border border-stone-200 rounded-xl overflow-hidden">
                  <thead className="bg-stone-100 text-stone-900 font-bold">
                    <tr>
                      <th className="p-3.5 border-b border-stone-200">Parameter</th>
                      <th className="p-3.5 border-b border-stone-200">Dedak Halus (Bekatul Murni)</th>
                      <th className="p-3.5 border-b border-stone-200">Dedak Campuran Menir</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 bg-white">
                    <tr>
                      <td className="p-3.5 font-semibold text-stone-800">Tekstur Fisik</td>
                      <td className="p-3.5 text-stone-600">Sangat lembut, halus, seperti tepung halus</td>
                      <td className="p-3.5 text-stone-600">Kombinasi halus dengan butiran pecahan beras (menir)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-stone-800">Warna</td>
                      <td className="p-3.5 text-stone-600">Kuning kecokelatan cerah alami</td>
                      <td className="p-3.5 text-stone-600">Cokelat dengan bintik-bintik butir beras putih</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-stone-800">Kelebihan Utama</td>
                      <td className="p-3.5 text-stone-600">Tinggi protein &amp; mudah dicerna usus ternak kecil</td>
                      <td className="p-3.5 text-stone-600">Tinggi karbohidrat energi &amp; harga lebih hemat</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-semibold text-stone-800">Rekomendasi Ternak</td>
                      <td className="p-3.5 text-stone-600">Ayam petelur/pedaging, puyuh, kelinci, bibit ikan</td>
                      <td className="p-3.5 text-stone-600">Ayam kampung, bebek, itik, lele, nila, sapi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Section 3 */}
            <section id="kegunaan-pakan" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
                3. Kegunaan Dedak Padi untuk Pakan Ternak
              </h2>
              <p className="mb-6">
                Dedak padi merupakan salah satu bahan pakan yang paling fleksibel. Berikut peran dedak padi untuk berbagai komoditas peternakan:
              </p>

              <div className="space-y-4">
                <div className="p-5 rounded-2xl bg-white border border-stone-200">
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Dedak Padi untuk Pakan Ayam &amp; Unggas
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Pada peternakan ayam pedaging (broiler) dan petelur (layer), bekatul halus dicampur dengan jagung giling dan konsentrat untuk menyeimbangkan kebutuhan energi metabolis dan protein. Bekatul juga menjaga kesehatan saluran pencernaan unggas karena kaya vitamin B1.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200">
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Dedak Padi untuk Pakan Bebek &amp; Itik
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Bebek dan itik sangat menyukai dedak padi basah atau semi-basah (pasta). Kandungan menir pada dedak menir memberikan tambahan kalori yang dibutuhkan bebek petelur untuk menjaga produktivitas telur setiap hari.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200">
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Dedak Padi untuk Pakan Sapi, Kambing, &amp; Domba
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Sebagai pakan penguat (konsentrat) ternak ruminansia, dedak padi dicampur bersama hijauan rumput, ampas tahu, atau tetes tebu. Dedak membantu meningkatkan bobot harian (ADG) sapi potong dan meningkatkan produksi susu pada sapi perah.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-stone-200">
                  <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                    Dedak Padi untuk Budidaya Ikan &amp; Udang
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">
                    Pada budidaya ikan lele, nila, dan udang kolam, bekatul halus sering difermentasi bersama probiotik untuk menumbuhkan pakan alami (plankton) atau dicampurkan ke dalam pelet buatan sendiri untuk menekan biaya pakan komersial.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="ciri-kualitas" className="scroll-mt-28">
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-900 mb-4 pb-2 border-b border-stone-200">
                4. Ciri-Ciri Dedak Padi Berkualitas Baik &amp; Cara Memilihnya
              </h2>
              <p className="mb-4">
                Kualitas dedak padi sangat memengaruhi kesehatan ternak. Dedak yang sudah rusak atau tercampur sekam kasar berlebih dapat menurunkan nafsu makan ternak atau bahkan menyebabkan masalah pencernaan. Perhatikan 4 ciri utama berikut:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="p-5 rounded-xl bg-white border border-stone-200">
                  <p className="font-bold text-stone-900 text-sm mb-1">1. Aroma Segar Khas Beras</p>
                  <p className="text-xs text-stone-600">
                    Dedak baru memiliki wangi gurih khas padi segar. Hindari dedak yang berbau apek, asam, atau tengik karena menandakan lemak dedak sudah teroksidasi atau berjamur.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-stone-200">
                  <p className="font-bold text-stone-900 text-sm mb-1">2. Tekstur Halus Tanpa Sekam Kasar</p>
                  <p className="text-xs text-stone-600">
                    Genggam sedikit dedak: dedak berkualitas terasa lembut dan mudah memadat saat dikepal, tidak terasa menusuk atau kasar akibat gilingan sekam (kulit gabah) berlebih.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-stone-200">
                  <p className="font-bold text-stone-900 text-sm mb-1">3. Warna Alami Cokelat Kekuningan</p>
                  <p className="text-xs text-stone-600">
                    Warna bekatul yang baik adalah kuning kecokelatan cerah merata. Warna yang terlalu pucat abu-abu sering mengindikasikan tingginya campuran sekam giling.
                  </p>
                </div>
                <div className="p-5 rounded-xl bg-white border border-stone-200">
                  <p className="font-bold text-stone-900 text-sm mb-1">4. Kadar Air Rendah &amp; Kering</p>
                  <p className="text-xs text-stone-600">
                    Dedak harus dalam kondisi kering agar tahan disimpan berminggu-minggu tanpa menggumpal atau diserang kutu pakan.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-green-800 to-green-950 rounded-3xl p-8 sm:p-10 text-white shadow-xl mt-12">
              <span className="inline-block px-3 py-1 rounded-full bg-green-700/60 border border-green-500/50 text-green-200 text-xs font-semibold tracking-wide uppercase mb-4">
                Pasokan Terpercaya UD Purnama
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Butuh Dedak Padi Berkualitas untuk Peternakan Anda?
              </h2>
              <p className="text-green-100 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                UD Purnama menyediakan dedak padi halus (bekatul) dan dedak campuran menir langsung dari penggilingan di Bondowoso, Jawa Timur. Tersedia kemasan 1 kg, 5 kg, hingga karung 25 kg &amp; 50 kg untuk pembelian partai besar.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl('order')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-green-800 font-bold text-sm hover:bg-green-50 transition-all shadow-md"
                >
                  Pesan via WhatsApp Sekarang
                  <ArrowRight className="w-4 h-4" />
                </a>
                <Link
                  href="/"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/40 text-white font-semibold text-sm hover:bg-white/10 transition-all"
                >
                  Lihat Katalog Produk
                </Link>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
