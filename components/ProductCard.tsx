import { ShoppingCart, ExternalLink } from 'lucide-react';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(price);
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-stone-200 overflow-hidden hover:border-green-200 hover:shadow-lg transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-[4/3] bg-gradient-to-br from-amber-50 via-amber-25 to-stone-50 overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center p-6">
            <svg
              viewBox="0 0 120 100"
              className="w-28 h-24 mx-auto mb-2 opacity-30"
              aria-hidden="true"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {product.type === 'halus' ? (
                <>
                  <ellipse cx="60" cy="85" rx="45" ry="12" fill="#92400e" opacity="0.3"/>
                  <ellipse cx="60" cy="75" rx="38" ry="18" fill="#b45309" opacity="0.5"/>
                  <ellipse cx="60" cy="62" rx="28" ry="20" fill="#d97706" opacity="0.6"/>
                  {[...Array(8)].map((_, i) => (
                    <circle
                      key={i}
                      cx={35 + (i % 4) * 15}
                      cy={65 + Math.floor(i / 4) * 10}
                      r="2"
                      fill="#92400e"
                      opacity="0.25"
                    />
                  ))}
                </>
              ) : (
                <>
                  <ellipse cx="60" cy="85" rx="45" ry="12" fill="#78350f" opacity="0.25"/>
                  <path d="M25 60 Q60 35 95 60 Q90 85 60 90 Q30 85 25 60Z" fill="#92400e" opacity="0.5"/>
                  {[...Array(6)].map((_, i) => (
                    <ellipse
                      key={i}
                      cx={35 + (i % 3) * 18}
                      cy={58 + Math.floor(i / 3) * 14}
                      rx="5"
                      ry="2.5"
                      fill="#78350f"
                      opacity="0.3"
                      transform={`rotate(${-15 + i * 12} ${35 + (i % 3) * 18} ${58 + Math.floor(i / 3) * 14})`}
                    />
                  ))}
                </>
              )}
            </svg>
            <p className="text-stone-400 text-xs">[Foto Produk]</p>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 rounded-full bg-green-700 text-white text-xs font-semibold shadow-sm">
              {product.badge}
            </span>
          </div>
        )}

        {/* Type badge */}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 rounded-full bg-white/90 border border-stone-200 text-stone-600 text-xs font-medium capitalize">
            Dedak {product.type}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Price */}
        <div className="mb-3">
          <span className="text-2xl font-bold text-green-700">
            {formatPrice(product.price)}
          </span>
          <span className="text-sm text-stone-400 ml-1">
            / {product.packaging[0]?.size} {product.packaging[0]?.unit}
          </span>
        </div>

        <h3 className="text-lg font-bold text-stone-900 mb-1.5 group-hover:text-green-700 transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-stone-600 leading-relaxed mb-4">
          {product.shortDescription}
        </p>

        {/* Usage tags */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {product.usageFor.slice(0, 3).map((use) => (
            <span
              key={use}
              className="px-2 py-0.5 rounded-md bg-stone-50 border border-stone-200 text-stone-600 text-xs"
            >
              {use}
            </span>
          ))}
          {product.usageFor.length > 3 && (
            <span className="px-2 py-0.5 rounded-md bg-stone-50 border border-stone-200 text-stone-500 text-xs">
              +{product.usageFor.length - 3} lainnya
            </span>
          )}
        </div>

        {/* CTA - Shopee */}
        <a
          href={product.shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-all duration-200 group/btn"
          aria-label={`Beli ${product.name} di Shopee`}
        >
          <ShoppingCart className="w-4 h-4" aria-hidden="true" />
          Beli di Shopee
          <ExternalLink className="w-3 h-3 opacity-60" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}
