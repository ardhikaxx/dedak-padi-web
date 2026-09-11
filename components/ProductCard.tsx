import { ShoppingCart } from 'lucide-react';
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
      <div className="relative aspect-[4/5] bg-gradient-to-br from-amber-50 via-amber-25 to-stone-50 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />

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
      <div className="p-4">
        {/* Price */}
        <div className="mb-2">
          <span className="text-xl font-bold text-green-700">
            {formatPrice(product.price)}
          </span>
          <span className="text-xs text-stone-400 ml-1">
            / {product.packaging[0]?.size} {product.packaging[0]?.unit}
          </span>
        </div>

        <h3 className="text-sm font-bold text-stone-900 mb-1 group-hover:text-green-700 transition-colors leading-tight">
          {product.name}
        </h3>
        <p className="text-xs text-stone-600 leading-relaxed mb-3 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Usage tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {product.usageFor.slice(0, 2).map((use) => (
            <span
              key={use}
              className="px-1.5 py-0.5 rounded bg-stone-50 border border-stone-200 text-stone-600 text-[10px]"
            >
              {use}
            </span>
          ))}
          {product.usageFor.length > 2 && (
            <span className="px-1.5 py-0.5 rounded bg-stone-50 border border-stone-200 text-stone-500 text-[10px]">
              +{product.usageFor.length - 2}
            </span>
          )}
        </div>

        {/* CTA - Shopee */}
        <a
          href={product.shopeeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-1.5 w-full py-2 px-3 rounded-lg bg-orange-500 text-white text-xs font-semibold hover:bg-orange-600 transition-all duration-200 group/btn"
          aria-label={`Beli ${product.name} di Shopee`}
        >
          <ShoppingCart className="w-3.5 h-3.5" aria-hidden="true" />
          Beli di Shopee
        </a>
      </div>
    </article>
  );
}
