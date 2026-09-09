import { ShieldCheck, Package, Truck, MessageSquare, Clock } from 'lucide-react';

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Produk Berkualitas',
    desc: 'Bersih, terjaga, dan terproses dengan baik',
  },
  {
    icon: Package,
    title: 'Kemasan Rapi',
    desc: 'Dikemas tertutup untuk menjaga kualitas',
  },
  {
    icon: Truck,
    title: 'Pengiriman Fleksibel',
    desc: 'Siap kirim ke berbagai wilayah',
  },
  {
    icon: MessageSquare,
    title: 'Pemesanan Mudah',
    desc: 'Langsung via WhatsApp, cepat & responsif',
  },
  {
    icon: Clock,
    title: 'Stok Konsisten',
    desc: 'Ketersediaan produk yang dapat diandalkan',
  },
];

export default function TrustBar() {
  return (
    <section
      className="bg-white border-y border-stone-100 py-8 sm:py-10"
      aria-label="Keunggulan layanan kami"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-4">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center gap-2 group"
              >
                <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors duration-200">
                  <Icon
                    className="w-5 h-5 text-green-700"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-stone-800 leading-tight">
                    {item.title}
                  </p>
                  <p className="text-xs text-stone-500 mt-0.5 leading-snug">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
