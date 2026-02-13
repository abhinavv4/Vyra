'use client';

import Image from 'next/image';
import { Product } from '@/data/site';
import { useCart } from '@/lib/cart-context';
import { formatCurrency } from '@/lib/format';

export default function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group rounded-3xl border border-ink/10 bg-white/70 p-5 shadow-[0_20px_40px_rgba(15,12,10,0.08)] transition hover:-translate-y-1">
      <div className="relative h-56 overflow-hidden rounded-2xl">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-sand/90 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-ink/70">
          {product.tag}
        </span>
      </div>
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-display text-ink">{product.name}</h3>
        <p className="text-sm text-ink/65">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">{formatCurrency(product.price)}</span>
          <button
            type="button"
            onClick={() => addItem(product)}
            className="rounded-full border border-ink/20 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-ink/70 transition hover:border-ink/40 hover:text-ink"
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  );
}
