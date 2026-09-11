import { CheckCircle2 } from 'lucide-react';

const productInfo = [
  {
    label: 'Jenis Produk',
    value: 'Dedak Halus (Bekatul) & Dedak Kasar',
  },
  {
    label: 'Bentuk',
    value: 'Serbuk halus dan serbuk kasar berserat',
  },
  {
    label: 'Kemasan',
    value: 'Karung 25 kg dan 50 kg',
  },
  {
    label: 'Kegunaan Utama',
    value: 'Pakan ternak, budidaya ikan, formulasi pakan',
  },
];

const highlights = [
  'Hasil penggilingan padi segar',
  'Bersih dari kotoran berlebih',
  'Kadar air terjaga',
  'Siap digunakan langsung',
  'Tersedia dalam jumlah besar',
];

export default function AboutProduct() {
  return (
    <section
      id="tentang"
      className="py-12 lg:py-16 bg-[#FAFAF8]"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section label */}
        <div className="flex justify-center mb-4">
          <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide uppercase">
            Tentang Produk
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Visual */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              {/* Main image placeholder */}
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 flex items-center justify-center shadow-lg">
                <div className="text-center p-8">
                  <svg
                    viewBox="0 0 200 150"
                    className="w-48 mx-auto mb-3 opacity-40"
                    aria-hidden="true"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Pile of grain */}
                    <ellipse cx="100" cy="130" rx="80" ry="18" fill="#92400e" opacity="0.2"/>
                    <ellipse cx="100" cy="120" rx="70" ry="25" fill="#a16207" opacity="0.4"/>
                    <ellipse cx="100" cy="110" rx="55" ry="28" fill="#b45309" opacity="0.5"/>
                    <ellipse cx="100" cy="95" rx="40" ry="28" fill="#ca8a04" opacity="0.5"/>
                    <ellipse cx="100" cy="80" rx="28" ry="22" fill="#d97706" opacity="0.5"/>
                    {/* Small grain details */}
                    {[...Array(12)].map((_, i) => (
                      <ellipse
                        key={i}
                        cx={60 + (i % 4) * 25 + (i > 7 ? 10 : 0)}
                        cy={95 + Math.floor(i / 4) * 12}
                        rx="4"
                        ry="2"
                        fill="#92400e"
                        opacity="0.3"
                        transform={`rotate(${-20 + i * 10} ${60 + (i % 4) * 25} ${95 + Math.floor(i / 4) * 12})`}
                      />
                    ))}
                  </svg>
                  <p className="text-stone-400 text-sm font-medium">
                    [Ganti dengan foto produk]
                  </p>
                </div>
              </div>

              {/* Floating info card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg border border-stone-100 p-4 max-w-[180px]">
                <p className="text-xs text-stone-500 font-medium mb-1">
                  Tersedia dalam
                </p>
                <p className="text-2xl font-bold text-green-700">2</p>
                <p className="text-sm text-stone-700 font-medium">
                  Jenis Produk
                </p>
                <p className="text-xs text-stone-400 mt-1">
                  Halus & Kasar
                </p>
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="order-1 lg:order-2">
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
            >
              Apa itu{' '}
              <span className="text-green-700">Dedak Padi?</span>
            </h2>

            <p className="text-base text-stone-600 leading-relaxed mb-6">
              Dedak padi merupakan hasil samping dari proses penggilingan padi menjadi beras.
              Terdiri dari lapisan luar biji padi yang kaya akan nutrisi, dedak padi telah lama
              dimanfaatkan sebagai bahan pakan ternak yang bernilai dan bahan baku industri
              pengolahan pakan.
            </p>

            <p className="text-base text-stone-600 leading-relaxed mb-8">
              Kami menyediakan dedak padi yang diproses dengan baik, bersih, dan siap
              digunakan untuk berbagai kebutuhan pakan ternak maupun industri pakan.
              Tersedia dalam dua jenis: dedak halus (bekatul) dan dedak kasar.
            </p>

            {/* Highlights */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-stone-700 uppercase tracking-wide mb-3">
                Karakteristik Produk
              </p>
              <ul className="space-y-2">
                {highlights.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-stone-600">
                    <CheckCircle2
                      className="w-4 h-4 text-green-600 flex-shrink-0"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Info table */}
            <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
              {productInfo.map((item, i) => (
                <div
                  key={i}
                  className={`flex items-start gap-4 px-4 py-3 ${
                    i < productInfo.length - 1 ? 'border-b border-stone-100' : ''
                  }`}
                >
                  <span className="text-xs font-semibold text-stone-500 w-28 flex-shrink-0 pt-0.5 uppercase tracking-wide">
                    {item.label}
                  </span>
                  <span className="text-sm text-stone-800 font-medium">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
