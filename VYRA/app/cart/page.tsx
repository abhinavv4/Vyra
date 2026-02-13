'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { formatCurrency } from '@/lib/format';

export default function CartPage() {
  const { items, total, updateQuantity, removeItem } = useCart();

  return (
    <main className="section section-block">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Cart</p>
          <h1 className="text-3xl sm:text-4xl">Your VYRA selection.</h1>
        </div>
        <Link
          href="/"
          className="rounded-full border border-ink/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-ink/70"
        >
          Continue shopping
        </Link>
      </div>

      {items.length === 0 ? (
        <div className="rounded-[32px] border border-ink/10 bg-white/70 p-10 text-center">
          <p className="text-sm text-ink/70">Your cart is empty. Curate your essentials.</p>
          <Link href="#essentials" className="button-primary mt-6 inline-flex">
            Explore essentials
          </Link>
        </div>
      ) : (
        <div className="grid gap-10 lg:grid-cols-[1fr_0.6fr]">
          <section className="space-y-5">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-wrap items-center gap-5 rounded-[32px] border border-ink/10 bg-white/70 p-6"
              >
                <div className="relative h-28 w-24 overflow-hidden rounded-2xl">
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                </div>
                <div className="min-w-[200px] flex-1">
                  <h2 className="text-lg font-display">{item.name}</h2>
                  <p className="text-xs uppercase tracking-[0.3em] text-ink/60">
                    {item.collection}
                  </p>
                  <p className="mt-2 text-sm text-ink/65">{item.description}</p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="h-8 w-8 rounded-full border border-ink/20"
                  >
                    -
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="h-8 w-8 rounded-full border border-ink/20"
                  >
                    +
                  </button>
                </div>
                <div className="ml-auto flex flex-col items-end gap-2">
                  <span className="text-sm font-semibold">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-[11px] uppercase tracking-[0.3em] text-ink/50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </section>

          <aside className="h-fit rounded-[32px] border border-ink/10 bg-white/70 p-8 shadow-[0_20px_45px_rgba(15,12,10,0.12)]">
            <h3 className="text-lg font-display">Order summary</h3>
            <div className="mt-4 space-y-3 text-sm text-ink/70">
              {items.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-sm uppercase tracking-[0.3em]">
              <span>Total</span>
              <span className="font-semibold">{formatCurrency(total)}</span>
            </div>
            <Link href="/checkout" className="button-primary mt-6 block text-center">
              Proceed to checkout
            </Link>
            <p className="mt-4 text-xs text-ink/50">
              Complimentary shipping on orders over $150.
            </p>
          </aside>
        </div>
      )}
    </main>
  );
}
