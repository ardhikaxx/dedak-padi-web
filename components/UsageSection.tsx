import {
  Bird,
  Fish,
  Beef,
  FlaskConical,
  Truck,
  Factory,
} from 'lucide-react';
import { usageCategories } from '@/data/products';

// Map icon string names to Lucide components
const iconMap: Record<string, React.ElementType> = {
  Bird,
  Fish,
  Beef,
  FlaskConical,
  Truck,
  Factory,
};

export default function UsageSection() {
  return (
    <section
      className="py-12 lg:py-16 bg-white"
      aria-labelledby="usage-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Pengguna Produk
          </span>
          <h2
            id="usage-heading"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
          >
            Cocok untuk{' '}
            <span className="text-green-700">Berbagai Kebutuhan</span>
          </h2>
          <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Dedak padi kami tersedia untuk memenuhi kebutuhan berbagai jenis usaha
            peternakan, budidaya, dan industri pakan.
          </p>
        </div>

        {/* Usage categories grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {usageCategories.map((category) => {
            const Icon = iconMap[category.icon] || Bird;
            return (
              <div
                key={category.id}
                className="group relative bg-[#FAFAF8] rounded-2xl border border-stone-200 p-6 hover:bg-white hover:border-green-200 hover:shadow-md transition-all duration-300 overflow-hidden"
              >
                {/* Subtle background accent */}
                <div
                  className="absolute top-0 right-0 w-24 h-24 rounded-full bg-green-50 opacity-0 group-hover:opacity-100 -translate-y-8 translate-x-8 transition-all duration-300"
                  aria-hidden="true"
                />

                {/* Icon */}
                <div className="relative w-11 h-11 rounded-xl bg-white border border-stone-200 flex items-center justify-center mb-4 group-hover:border-green-200 group-hover:bg-green-50 transition-all duration-200 shadow-sm">
                  <Icon
                    className="w-5 h-5 text-green-700"
                    aria-hidden="true"
                    strokeWidth={1.75}
                  />
                </div>

                <h3 className="relative text-base font-bold text-stone-900 mb-2 group-hover:text-green-700 transition-colors">
                  {category.title}
                </h3>
                <p className="relative text-sm text-stone-600 leading-relaxed mb-4">
                  {category.description}
                </p>

                {/* Examples */}
                <div className="relative flex flex-wrap gap-1.5">
                  {category.examples.map((example) => (
                    <span
                      key={example}
                      className="px-2 py-0.5 rounded-md bg-stone-100 text-stone-500 text-xs font-medium group-hover:bg-green-50 group-hover:text-green-700 transition-colors"
                    >
                      {example}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
