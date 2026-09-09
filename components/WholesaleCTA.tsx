import { ArrowRight, Phone, MessageCircle, Package2 } from 'lucide-react';
import { getWhatsAppUrl, businessConfig } from '@/data/business';

export default function WholesaleCTA() {
  return (
    <section
      className="py-20 lg:py-28 bg-[#FAFAF8]"
      aria-labelledby="wholesale-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-stone-800 via-stone-900 to-stone-950 rounded-3xl overflow-hidden relative">
          {/* Background pattern */}
          <div
            className="absolute inset-0 opacity-5"
            aria-hidden="true"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />

          {/* Green accent bar */}
          <div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-600 via-green-500 to-green-600"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center p-8 sm:p-12 lg:p-16">
            {/* Left content */}
            <div>
              <span className="inline-block px-3 py-1.5 rounded-full bg-green-900/50 border border-green-700/50 text-green-400 text-xs font-semibold tracking-wide uppercase mb-6">
                Pembelian Grosir / Partai
              </span>

              <h2
                id="wholesale-heading"
                className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4"
              >
                Butuh Dedak Padi dalam{' '}
                <span className="text-green-400">Jumlah Besar?</span>
              </h2>

              <p className="text-stone-300 text-base leading-relaxed mb-8">
                Kami siap melayani kebutuhan pembelian grosir untuk distributor,
                peternak skala besar, pabrik pakan, dan berbagai usaha yang memerlukan
                pasokan dedak padi secara reguler dan dalam volume yang signifikan.
              </p>

              {/* Info points */}
              <div className="space-y-3 mb-8">
                {[
                  { icon: Package2, text: 'Informasi ketersediaan stok dan volume' },
                  { icon: Phone, text: 'Harga berdasarkan volume pembelian' },
                  { icon: MessageCircle, text: 'Kemasan dan ketentuan pengiriman khusus' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.text} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-900/50 flex items-center justify-center flex-shrink-0">
                        <Icon
                          className="w-4 h-4 text-green-400"
                          aria-hidden="true"
                          strokeWidth={1.75}
                        />
                      </div>
                      <span className="text-stone-300 text-sm">{item.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={getWhatsAppUrl('wholesale')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-green-600 text-white font-semibold text-sm hover:bg-green-500 transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  Konsultasikan Kebutuhan Anda
                  <ArrowRight
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>

            {/* Right — Visual info box */}
            <div className="space-y-4">
              {[
                {
                  title: 'Pemesanan Fleksibel',
                  desc: 'Sesuaikan volume dan jadwal pemesanan dengan kebutuhan usaha Anda.',
                  color: 'border-green-700/40 bg-green-900/20',
                  textColor: 'text-green-400',
                },
                {
                  title: 'Stok Terjamin',
                  desc: 'Kami menjaga ketersediaan stok agar Anda dapat melakukan pembelian secara rutin.',
                  color: 'border-stone-700 bg-stone-800/50',
                  textColor: 'text-stone-300',
                },
                {
                  title: 'Layanan Konsultasi',
                  desc: 'Tim kami siap membantu Anda memilih jenis produk yang paling sesuai.',
                  color: 'border-stone-700 bg-stone-800/50',
                  textColor: 'text-stone-300',
                },
                {
                  title: 'Pengiriman Dapat Diatur',
                  desc: 'Koordinasi pengiriman ke gudang atau lokasi Anda sesuai kebutuhan.',
                  color: 'border-stone-700 bg-stone-800/50',
                  textColor: 'text-stone-300',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className={`rounded-xl border p-4 ${item.color}`}
                >
                  <p className={`text-sm font-semibold mb-1 ${item.textColor}`}>
                    {item.title}
                  </p>
                  <p className="text-xs text-stone-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
