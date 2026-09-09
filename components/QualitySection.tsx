import { businessConfig } from '@/data/business';
import { MapPin } from 'lucide-react';

export default function QualitySection() {
  const visibleStats = businessConfig.stats.filter((s) => s.show);

  return (
    <section
      className="py-20 lg:py-28 bg-white"
      aria-labelledby="quality-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Content */}
          <div>
            <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide uppercase mb-4">
              Kualitas & Ketersediaan
            </span>
            <h2
              id="quality-heading"
              className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
            >
              Kualitas yang Dapat{' '}
              <span className="text-green-700">Diandalkan</span>
            </h2>
            <p className="text-base text-stone-600 leading-relaxed mb-6">
              Kami berkomitmen untuk menjaga standar kualitas produk secara konsisten.
              Setiap batch produksi kami pastikan memenuhi kondisi yang bersih, kering,
              dan terjaga sebelum dikemas dan dikirim ke pelanggan.
            </p>
            <p className="text-base text-stone-600 leading-relaxed mb-8">
              Dengan ketersediaan stok yang stabil, kami siap memenuhi kebutuhan Anda
              secara teratur — baik untuk pembelian sekali maupun berulang dalam skala besar.
            </p>

            {/* Quality points */}
            <div className="space-y-4">
              {[
                {
                  title: 'Pengolahan Bersih',
                  desc: 'Proses pemisahan dedak dilakukan secara bersih menggunakan mesin penggilingan.',
                },
                {
                  title: 'Kadar Air Terjaga',
                  desc: 'Produk disimpan di tempat yang kering agar kadar air tetap dalam kondisi baik.',
                },
                {
                  title: 'Stok Konsisten',
                  desc: 'Ketersediaan produk dijaga agar pelanggan dapat memenuhi kebutuhan secara rutin.',
                },
                {
                  title: 'Pengiriman Terpercaya',
                  desc: 'Produk dikirim dengan penanganan yang tepat untuk memastikan kondisi terjaga.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 p-4 rounded-xl bg-stone-50 border border-stone-100"
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0 mt-1.5" aria-hidden="true" />
                  <div>
                    <p className="text-sm font-semibold text-stone-800 mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-sm text-stone-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Stats or visual */}
          <div>
            {visibleStats.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {visibleStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-[#FAFAF8] rounded-2xl border border-stone-200 p-6 text-center"
                  >
                    <p className="text-4xl font-bold text-green-700 mb-1">
                      {stat.value}
                      <span className="text-xl ml-1 text-stone-500">{stat.unit}</span>
                    </p>
                    <p className="text-sm text-stone-600 font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            ) : (
              /* Visual card when no stats */
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-2xl p-8 text-white relative overflow-hidden">
                {/* Background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  aria-hidden="true"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                  }}
                />
                <div className="relative">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-6">
                    <MapPin className="w-6 h-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">
                    Pengiriman ke Berbagai Wilayah
                  </h3>
                  <p className="text-green-100 text-sm leading-relaxed mb-6">
                    Kami mendukung pengiriman ke berbagai kota dan wilayah. Hubungi
                    kami untuk informasi detail mengenai jangkauan dan ongkir ke
                    lokasi Anda.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Pengiriman Lokal',
                      'Pengiriman Antar Kota',
                      'Ekspedisi Terpercaya',
                      'Penanganan Khusus',
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 text-sm text-green-100"
                      >
                        <div
                          className="w-1.5 h-1.5 rounded-full bg-green-300 flex-shrink-0"
                          aria-hidden="true"
                        />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
