import { ArrowRight, CheckCircle2, ChevronRight } from 'lucide-react';
import { businessConfig, getWhatsAppUrl } from '@/data/business';

export default function HeroSection() {
  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#FAFAF8]"
      aria-labelledby="hero-heading"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Large grain texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a7c4e' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Soft gradient blobs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              Tersedia Stok Sekarang
            </div>

            {/* Headline */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold text-stone-900 leading-[1.1] tracking-tight mb-6"
            >
              Dedak Padi
              <span className="block text-green-700">Berkualitas</span>
              <span className="block text-3xl sm:text-4xl lg:text-4xl xl:text-5xl font-semibold text-stone-600 mt-1">
                untuk Agroindustri
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg text-stone-600 leading-relaxed mb-8 max-w-lg">
              Penyedia dedak padi / bekatul bersih dan berkualitas untuk kebutuhan pakan
              ternak, budidaya, dan industri pakan. Siap memenuhi kebutuhan Anda dalam
              berbagai volume.
            </p>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-3 mb-10">
              {businessConfig.trustIndicators.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-1.5 text-sm text-stone-600"
                >
                  <CheckCircle2
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppUrl('order')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-green-700 text-white font-semibold text-base hover:bg-green-800 transition-all duration-200 shadow-md hover:shadow-lg group"
              >
                Pesan Sekarang
                <ArrowRight
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#produk"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl border-2 border-stone-300 text-stone-700 font-semibold text-base hover:border-green-600 hover:text-green-700 hover:bg-green-50 transition-all duration-200"
              >
                Lihat Produk
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right — Product Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Main image container */}
              <div className="relative aspect-[4/3] lg:aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-stone-100">
                {/* Placeholder image - styled to represent dedak padi */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-100 via-amber-50 to-stone-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    {/* SVG Illustration of sacks/grain */}
                    <svg
                      viewBox="0 0 200 200"
                      className="w-48 h-48 mx-auto mb-4 opacity-40"
                      aria-hidden="true"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      {/* Sack shape */}
                      <ellipse cx="100" cy="160" rx="65" ry="20" fill="#92400e" opacity="0.3"/>
                      <path d="M50 100 Q40 160 35 170 Q100 190 165 170 Q160 160 150 100 Q130 75 100 70 Q70 75 50 100Z" fill="#a16207" opacity="0.7"/>
                      <path d="M75 70 Q100 55 125 70 Q130 90 125 100 Q100 95 75 100 Q70 90 75 70Z" fill="#854d0e" opacity="0.8"/>
                      {/* Rope tie */}
                      <ellipse cx="100" cy="82" rx="18" ry="8" fill="#78350f" opacity="0.9"/>
                      {/* Grain particles */}
                      <circle cx="80" cy="130" r="4" fill="#d97706" opacity="0.4"/>
                      <circle cx="100" cy="140" r="5" fill="#b45309" opacity="0.4"/>
                      <circle cx="120" cy="128" r="4" fill="#d97706" opacity="0.4"/>
                      <circle cx="90" cy="150" r="3" fill="#92400e" opacity="0.3"/>
                      <circle cx="110" cy="155" r="3.5" fill="#b45309" opacity="0.3"/>
                      {/* Small floating grains */}
                      <ellipse cx="60" cy="110" rx="6" ry="3" fill="#d97706" opacity="0.3" transform="rotate(-30 60 110)"/>
                      <ellipse cx="140" cy="115" rx="6" ry="3" fill="#d97706" opacity="0.3" transform="rotate(20 140 115)"/>
                      <ellipse cx="70" cy="90" rx="5" ry="2.5" fill="#b45309" opacity="0.25" transform="rotate(15 70 90)"/>
                    </svg>
                    <p className="text-stone-400 text-sm font-medium">
                      [Ganti dengan foto produk]
                    </p>
                    <p className="text-stone-300 text-xs mt-1">
                      Simpan di /public/images/products/
                    </p>
                  </div>
                </div>

                {/* Overlay gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating badge card */}
              <div className="absolute -bottom-4 -left-4 sm:-left-8 bg-white rounded-xl shadow-lg border border-stone-100 px-4 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-amber-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-stone-500">Produk Unggulan</p>
                  <p className="text-sm font-semibold text-stone-800">
                    Dedak Padi Segar
                  </p>
                </div>
              </div>

              {/* Top right badge */}
              <div className="absolute -top-4 -right-4 sm:-right-8 bg-green-700 rounded-xl shadow-lg px-4 py-3">
                <p className="text-xs text-green-200 font-medium">Tersedia</p>
                <p className="text-sm font-bold text-white">Partai Besar</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2 opacity-40">
          <div className="w-0.5 h-10 bg-stone-400 rounded-full animate-pulse" />
          <p className="text-xs text-stone-500 tracking-widest uppercase">Scroll</p>
        </div>
      </div>
    </section>
  );
}
