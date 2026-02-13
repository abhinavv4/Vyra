'use client';

import Link from 'next/link';
import { useCart } from '@/lib/cart-context';
import { formatCurrency } from '@/lib/format';

const navItems = [
  { label: 'Collections', href: '#collections' },
  { label: 'Essentials', href: '#essentials' },
  { label: 'Lookbook', href: '#lookbook' },
  { label: 'Trending', href: '#trending' },
  { label: 'Story', href: '#story' },
];

export default function Header() {
  const { itemCount, total, open } = useCart();

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-sand/80 backdrop-blur-xl">
      <div className="border-b border-ink/10 bg-cream/80 text-[11px] uppercase tracking-[0.3em] text-ink/60">
        <div className="section flex flex-wrap items-center justify-between gap-4 py-3">
          <span>Complimentary shipping on orders over $150</span>
          <div className="flex items-center gap-4">
            <Link href="/login" className="transition hover:text-ink">
              Account
            </Link>
            <Link href="/cart" className="transition hover:text-ink">
              Cart
            </Link>
          </div>
        </div>
      </div>
      <div className="section flex items-center justify-between py-5">
        <Link
          href="/"
          className="text-xl font-display tracking-[0.35em] text-ink"
        >
          VYRA
        </Link>
        <nav className="hidden items-center gap-8 text-xs uppercase tracking-[0.3em] text-ink/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="hidden rounded-full border border-ink/20 px-5 py-2 text-xs uppercase tracking-[0.2em] text-ink/80 transition hover:border-ink/40 hover:text-ink md:inline-flex"
          >
            Sign in
          </Link>
          <Link
            href="/checkout"
            className="hidden rounded-full border border-ink/20 px-5 py-2 text-xs uppercase tracking-[0.2em] text-ink/80 transition hover:border-ink/40 hover:text-ink md:inline-flex"
          >
            Checkout
          </Link>
          <button
            type="button"
            onClick={open}
            className="flex items-center gap-3 rounded-full bg-ink px-5 py-2 text-xs uppercase tracking-[0.2em] text-sand transition hover:translate-y-[-1px]"
          >
            <span>Cart</span>
            <span className="rounded-full bg-sand px-2 py-0.5 text-[10px] font-semibold text-ink">
              {itemCount}
            </span>
          </button>
          <span className="hidden text-xs uppercase tracking-[0.2em] text-ink/70 xl:block">
            {formatCurrency(total)}
          </span>
        </div>
      </div>
      <div className="section flex flex-wrap gap-3 pb-4 text-[11px] uppercase tracking-[0.24em] text-ink/60 lg:hidden">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
