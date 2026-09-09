import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, businessConfig } from '@/data/business';

export default function FinalCTA() {
  return (
    <section
      className="py-20 lg:py-28 bg-green-700 relative overflow-hidden"
      aria-labelledby="final-cta-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='1.5'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        {/* Soft glow shapes */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-green-500 opacity-20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-green-900 opacity-30 blur-3xl" />

        {/* Subtle grain shapes */}
        <svg
          className="absolute right-10 bottom-10 opacity-10 w-32 h-32"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[...Array(5)].map((_, i) => (
            <ellipse
              key={i}
              cx={20 + i * 15}
              cy={50 + (i % 2) * 15 - 7}
              rx="8"
              ry="4"
              fill="white"
              transform={`rotate(${-20 + i * 10} ${20 + i * 15} ${50 + (i % 2) * 15 - 7})`}
            />
          ))}
        </svg>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-600/50 border border-green-500/50 text-green-100 text-xs font-semibold tracking-wide mb-6">
          <MessageCircle className="w-3.5 h-3.5" aria-hidden="true" />
          Siap Melayani Anda
        </div>

        <h2
          id="final-cta-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-5"
        >
          Butuh Dedak Padi untuk{' '}
          <span className="text-green-200">Kebutuhan Usaha Anda?</span>
        </h2>

        <p className="text-base sm:text-lg text-green-100 leading-relaxed mb-10 max-w-2xl mx-auto">
          Hubungi kami sekarang untuk mendapatkan informasi produk, harga, ketersediaan
          stok, dan kemudahan pemesanan langsung melalui WhatsApp.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl('default')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-white text-green-700 font-bold text-base hover:bg-green-50 transition-all duration-200 shadow-lg hover:shadow-xl group w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" aria-hidden="true" />
            Hubungi Kami Sekarang
            <ArrowRight
              className="w-4 h-4 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </a>
          <a
            href={getWhatsAppUrl('order')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl border-2 border-green-400/50 text-white font-semibold text-base hover:border-white hover:bg-green-600 transition-all duration-200 w-full sm:w-auto justify-center"
          >
            Pesan Sekarang
          </a>
        </div>

        {/* Contact shortcut */}
        <p className="mt-8 text-green-200 text-sm">
          {businessConfig.contact.operationalHours}
        </p>
      </div>
    </section>
  );
}
