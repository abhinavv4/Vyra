'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCart } from '@/lib/cart-context';
import { formatCurrency } from '@/lib/format';

export default function CheckoutPage() {
  const { items, total, clear } = useCart();
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();
  const checkoutStatus = searchParams.get('success')
    ? 'success'
    : searchParams.get('canceled')
      ? 'canceled'
      : null;
  const orderEmail = process.env.NEXT_PUBLIC_ORDER_EMAIL || 'orders@vyra.studio';

  const orderSummary = useMemo(() => {
    if (items.length === 0) return '';
    const lines = items.map(
      (item) => `${item.name} x${item.quantity} — ${formatCurrency(item.price * item.quantity)}`
    );
    lines.push(`Total: ${formatCurrency(total)}`);
    return lines.join('\n');
  }, [items, total]);

  const requestLink = useMemo(() => {
    const body = encodeURIComponent(`Hello VYRA,\n\nI'd like to place an order:\n${orderSummary}`);
    return `mailto:${orderEmail}?subject=Vyra Order Request&body=${body}`;
  }, [orderEmail, orderSummary]);

  const handleStripeCheckout = async () => {
    if (items.length === 0) return;
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: items.map((item) => ({ id: item.id, quantity: item.quantity })),
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setMessage(
          data?.error || 'Stripe checkout is not configured yet. Add your keys to enable.'
        );
        setStatus('error');
        return;
      }

      const data = await response.json();
      if (data?.url) {
        window.location.href = data.url as string;
      } else {
        setMessage('Unable to start checkout. Please try again.');
        setStatus('error');
      }
    } catch (error) {
      setMessage('Network error. Please try again.');
      setStatus('error');
    }
  };

  return (
    <main className="section section-block">
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="eyebrow">Checkout</p>
          <h1 className="text-3xl sm:text-4xl">Complete your VYRA order.</h1>
        </div>
        <Link
          href="/"
          className="rounded-full border border-ink/20 px-5 py-2 text-xs uppercase tracking-[0.3em] text-ink/70"
        >
          Back to shop
        </Link>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
        <section className="rounded-3xl border border-ink/10 bg-white/70 p-8">
          {checkoutStatus === 'success' && (
            <div className="mb-6 rounded-2xl border border-emerald-400/30 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              Payment received. Your VYRA order is confirmed.
            </div>
          )}
          {checkoutStatus === 'canceled' && (
            <div className="mb-6 rounded-2xl border border-amber-400/30 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              Checkout was canceled. You can retry whenever you're ready.
            </div>
          )}
          <h2 className="text-xl font-display">Shipping details</h2>
          <form className="mt-6 grid gap-4">
            <input
              type="text"
              placeholder="Full name"
              className="rounded-full border border-ink/15 bg-white px-5 py-3 text-sm"
            />
            <input
              type="email"
              placeholder="Email address"
              className="rounded-full border border-ink/15 bg-white px-5 py-3 text-sm"
            />
            <input
              type="text"
              placeholder="Shipping address"
              className="rounded-full border border-ink/15 bg-white px-5 py-3 text-sm"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <input
                type="text"
                placeholder="City"
                className="rounded-full border border-ink/15 bg-white px-5 py-3 text-sm"
              />
              <input
                type="text"
                placeholder="Postal code"
                className="rounded-full border border-ink/15 bg-white px-5 py-3 text-sm"
              />
            </div>
          </form>
        </section>

        <section className="rounded-3xl border border-ink/10 bg-white/70 p-8">
          <h2 className="text-xl font-display">Order summary</h2>
          <div className="mt-6 space-y-4 text-sm text-ink/70">
            {items.length === 0 ? (
              <p>Your cart is empty. Add essentials to continue.</p>
            ) : (
              items.map((item) => (
                <div key={item.id} className="flex items-center justify-between">
                  <span>
                    {item.name} × {item.quantity}
                  </span>
                  <span>{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))
            )}
          </div>
          <div className="mt-6 flex items-center justify-between border-t border-ink/10 pt-4 text-sm uppercase tracking-[0.2em]">
            <span>Total</span>
            <span className="font-semibold">{formatCurrency(total)}</span>
          </div>

          <div className="mt-6 space-y-3">
            <button
              type="button"
              onClick={handleStripeCheckout}
              disabled={items.length === 0 || status === 'loading'}
              className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === 'loading' ? 'Starting checkout...' : 'Pay with Stripe'}
            </button>
            <a href={requestLink} className="button-outline block text-center">
              Request order (email)
            </a>
            <button
              type="button"
              onClick={clear}
              className="w-full rounded-full border border-ink/20 px-6 py-3 text-xs uppercase tracking-[0.3em] text-ink/70"
            >
              Clear cart
            </button>
            {status === 'error' && (
              <p className="text-xs text-umber">{message}</p>
            )}
            <p className="text-xs text-ink/50">
              Stripe checkout requires API keys. Use the email request while you finalize
              your payment setup.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
