'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart-context';
import { formatCurrency } from '@/lib/format';

export default function CartDrawer() {
  const { items, total, isOpen, close, removeItem, updateQuantity, clear } = useCart();

  return (
    <div
      className={`fixed inset-0 z-50 transition ${isOpen ? 'visible' : 'invisible'}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        aria-label="Close cart"
        onClick={close}
        className={`absolute inset-0 bg-ink/40 backdrop-blur-sm transition ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-sand px-6 py-8 shadow-xl transition ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-display tracking-[0.2em]">Cart</h3>
          <button
            type="button"
            onClick={close}
            className="text-xs uppercase tracking-[0.3em] text-ink/60"
          >
            Close
          </button>
        </div>

        <div className="mt-6 flex flex-col gap-5">
          {items.length === 0 ? (
            <div className="rounded-2xl border border-ink/10 bg-white/60 p-6 text-sm text-ink/70">
              Your cart is empty. Add a few VYRA essentials to start building your kit.
            </div>
          ) : (
            items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 rounded-2xl border border-ink/10 bg-white/70 p-4"
              >
                <div className="relative h-20 w-16 overflow-hidden rounded-xl">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-ink">{item.name}</p>
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/60">
                    {item.collection}
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="h-7 w-7 rounded-full border border-ink/20 text-sm"
                    >
                      -
                    </button>
                    <span className="text-sm">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="h-7 w-7 rounded-full border border-ink/20 text-sm"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <span className="text-sm font-semibold">
                    {formatCurrency(item.price * item.quantity)}
                  </span>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-[11px] uppercase tracking-[0.2em] text-ink/50"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="mt-6 space-y-4 border-t border-ink/10 pt-6">
          <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em]">
            <span>Total</span>
            <span className="font-semibold">{formatCurrency(total)}</span>
          </div>
          <Link
            href="/checkout"
            onClick={close}
            className="block rounded-full bg-ink px-6 py-3 text-center text-xs uppercase tracking-[0.3em] text-sand"
          >
            Continue to checkout
          </Link>
          <Link
            href="/cart"
            onClick={close}
            className="block rounded-full border border-ink/20 px-6 py-3 text-center text-xs uppercase tracking-[0.3em] text-ink/70"
          >
            View full cart
          </Link>
          <button
            type="button"
            onClick={clear}
            className="w-full rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-ink/70"
          >
            Clear cart
          </button>
        </div>
      </aside>
    </div>
  );
}
