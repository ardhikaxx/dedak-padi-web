import { MapPin, Truck, ShieldCheck, CheckCircle, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '@/data/business';

const serviceAreas = [
  {
    name: 'Bondowoso',
    desc: 'Basis produksi & penjualan langsung untuk peternak lokal',
    highlight: true,
  },
  {
    name: 'Jember',
    desc: 'Pengiriman rutin kebutuhan pakan unggas & peternakan',
    highlight: false,
  },
  {
    name: 'Situbondo',
    desc: 'Pasokan dedak pakan ternak & budidaya perikanan pesisir',
    highlight: false,
  },
  {
    name: 'Banyuwangi',
    desc: 'Layanan pengiriman pakan ternak & industri agribisnis',
    highlight: false,
  },
  {
    name: 'Probolinggo & Lumajang',
    desc: 'Pengiriman partai besar & pasokan peternakan ruminansia',
    highlight: false,
  },
  {
    name: 'Wilayah Jawa Timur Lainnya',
    desc: 'Koordinasi ekspedisi & armada fleksibel sesuai volume',
    highlight: false,
  },
];

export default function LocalPresenceSection() {
  return (
    <section
      id="layanan-wilayah"
      className="py-12 lg:py-16 bg-white border-t border-stone-100"
      aria-labelledby="local-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Jangkauan Layanan &amp; Distribusi
          </span>
          <h2
            id="local-heading"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
          >
            Penyedia &amp; Supplier Dedak Padi di{' '}
            <span className="text-green-700">Bondowoso dan Jawa Timur</span>
          </h2>
          <p className="text-base text-stone-600 max-w-3xl mx-auto leading-relaxed">
            UD Purnama beroperasi langsung dari Bondowoso, salah satu sentra lumbung padi terkemuka di Jawa Timur. Kami melayani penjualan dedak padi, bekatul murni, dan pakan ternak berkualitas untuk peternak lokal maupun pengiriman ke berbagai kabupaten di Jawa Timur.
          </p>
        </div>

        {/* Narrative Context Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-[#FAFAF8] rounded-2xl border border-stone-200 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-5">
                <MapPin className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Segar dari Penggilingan Bondowoso
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Lokasi usaha kami yang dekat dengan sentra penggilingan padi di Bondowoso memungkinkan kami memperoleh dedak padi segar dengan kadar air terkontrol, aroma khas alami, dan bebas dari bau apek atau tengik.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500 font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>Kualitas terjamin untuk pakan ternak</span>
            </div>
          </div>

          <div className="bg-[#FAFAF8] rounded-2xl border border-stone-200 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-5">
                <Truck className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Pasokan Grosir &amp; Pengiriman Jawa Timur
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Selain melayani pembelian langsung di tempat, kami mendukung pengiriman ke peternakan dan agen pakan di wilayah Tapal Kuda seperti Jember, Situbondo, Banyuwangi, Probolinggo, hingga seluruh Jawa Timur dengan opsi armada yang efisien.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500 font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>Opsi karung eceran 1-5 kg hingga partai 25-50 kg</span>
            </div>
          </div>

          <div className="bg-[#FAFAF8] rounded-2xl border border-stone-200 p-6 lg:p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-5">
                <ShieldCheck className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold text-stone-900 mb-2">
                Mitra Terpercaya Peternak Mandiri &amp; Industri
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Kami memahami pentingnya kesinambungan pasokan pakan. Baik Anda membutuhkan dedak halus untuk pakan ayam dan bebek, maupun campuran dedak menir untuk penggemukan sapi, ketersediaan stok kami kelola secara profesional.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-200 text-xs text-stone-500 font-medium flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
              <span>Konsultasi kebutuhan pakan mudah via WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Coverage Cards */}
        <div className="bg-stone-50 rounded-2xl border border-stone-200/80 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-base font-bold text-stone-900">
                Fokus Wilayah Layanan UD Purnama
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Ketersediaan pengiriman disesuaikan dengan volume pemesanan dan jadwal rute armada.
              </p>
            </div>
            <a
              href={getWhatsAppUrl('order')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-green-700 hover:text-green-800 transition-colors whitespace-nowrap"
            >
              Cek Ongkir &amp; Jadwal Kirim
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {serviceAreas.map((area) => (
              <div
                key={area.name}
                className={`p-4 rounded-xl border transition-all ${
                  area.highlight
                    ? 'bg-green-50/80 border-green-200 shadow-xs'
                    : 'bg-white border-stone-200 hover:border-green-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      area.highlight ? 'bg-green-600' : 'bg-stone-400'
                    }`}
                  />
                  <p className="text-sm font-semibold text-stone-900">{area.name}</p>
                </div>
                <p className="text-xs text-stone-500 pl-4">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
