import {
  ShieldCheck,
  Sparkles,
  PackageCheck,
  Layers,
  Truck,
  Headphones,
} from 'lucide-react';
import { benefits } from '@/data/products';

// Map icon string to Lucide component
const iconMap: Record<string, React.ElementType> = {
  ShieldCheck,
  Sparkles,
  PackageCheck,
  Layers,
  Truck,
  HeadphonesIcon: Headphones,
};

export default function BenefitsSection() {
  return (
    <section
      id="keunggulan"
      className="py-12 lg:py-16 bg-[#FAFAF8]"
      aria-labelledby="benefits-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Keunggulan Layanan
          </span>
          <h2
            id="benefits-heading"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
          >
            Mengapa Memilih{' '}
            <span className="text-green-700">Dedak Padi UD Purnama?</span>
          </h2>
          <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Kami berkomitmen menghadirkan produk dedak padi dan bekatul yang bersih, kering, bebas kotoran berlebih, dan siap memenuhi kebutuhan pakan ternak Anda secara konsisten.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon] || ShieldCheck;
            return (
              <div
                key={benefit.id}
                className="group bg-white rounded-2xl border border-stone-200 p-6 hover:border-green-200 hover:shadow-md transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-4 group-hover:bg-green-100 transition-colors duration-200">
                  <Icon
                    className="w-6 h-6 text-green-700"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                </div>

                {/* Index number — subtle */}
                <span className="text-xs font-bold text-stone-300 mb-2 block">
                  {String(index + 1).padStart(2, '0')}
                </span>

                <h3 className="text-base font-bold text-stone-900 mb-2 group-hover:text-green-700 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-sm text-stone-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
