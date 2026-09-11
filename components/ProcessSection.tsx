import {
  Wheat,
  Settings,
  Filter,
  Package,
  Warehouse,
  Truck,
} from 'lucide-react';
import { processSteps } from '@/data/products';

// Icon map
const iconMap: Record<string, React.ElementType> = {
  Wheat,
  Settings,
  Filter,
  Package,
  Warehouse,
  Truck,
};

export default function ProcessSection() {
  return (
    <section
      className="py-12 lg:py-16 bg-[#FAFAF8]"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-semibold tracking-wide uppercase mb-4">
            Proses Kami
          </span>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight mb-4"
          >
            Proses{' '}
            <span className="text-green-700">Pengolahan</span>
          </h2>
          <p className="text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
            Setiap produk kami melewati proses yang teratur dan terjaga untuk memastikan
            kualitas dedak padi yang sampai ke tangan Anda.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div
            className="hidden lg:block absolute top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent"
            aria-hidden="true"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {processSteps.map((step) => {
              const Icon = iconMap[step.icon] || Wheat;
              return (
                <div key={step.step} className="relative">
                  <div className="bg-white rounded-2xl border border-stone-200 p-6 h-full hover:border-green-200 hover:shadow-md transition-all duration-300 group">
                    {/* Step number and icon */}
                    <div className="flex items-center gap-3 mb-4">
                      {/* Step number */}
                      <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center flex-shrink-0 shadow-sm">
                        <span className="text-xs font-bold text-white">
                          {step.step}
                        </span>
                      </div>
                      {/* Icon */}
                      <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors">
                        <Icon
                          className="w-5 h-5 text-green-700"
                          aria-hidden="true"
                          strokeWidth={1.75}
                        />
                      </div>
                    </div>

                    <h3 className="text-base font-bold text-stone-900 mb-2 group-hover:text-green-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-stone-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow connector — desktop between cards */}
                  {step.step < processSteps.length && step.step % 3 !== 0 && (
                    <div
                      className="hidden lg:block absolute top-10 -right-4 z-10 text-stone-300"
                      aria-hidden="true"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 3l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
