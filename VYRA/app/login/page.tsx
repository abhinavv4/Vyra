'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="section section-block">
      <div className="mb-10">
        <p className="eyebrow">Member access</p>
        <h1 className="text-3xl sm:text-4xl">Welcome back to VYRA.</h1>
        <p className="mt-3 max-w-xl text-sm text-ink/65">
          Sign in to manage orders, save your style edits, and unlock early access to
          Vyra Luxe drops.
        </p>
      </div>

      <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <section className="rounded-[32px] border border-ink/10 bg-white/70 p-8 shadow-[0_25px_60px_rgba(18,14,11,0.12)]">
          <h2 className="text-xl font-display">Sign in</h2>
          <form className="mt-6 grid gap-4">
            <input
              type="email"
              placeholder="Email address"
              className="rounded-full border border-ink/15 bg-white px-5 py-3 text-sm"
            />
            <input
              type="password"
              placeholder="Password"
              className="rounded-full border border-ink/15 bg-white px-5 py-3 text-sm"
            />
            <button className="button-primary" type="submit">
              Continue
            </button>
          </form>
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs uppercase tracking-[0.3em] text-ink/60">
            <Link href="#">Forgot password</Link>
            <Link href="#">Create account</Link>
          </div>
          <div className="mt-8 rounded-2xl border border-ink/10 bg-cream/70 p-5 text-sm text-ink/70">
            <p className="text-xs uppercase tracking-[0.3em] text-ink/60">Luxe perks</p>
            <p className="mt-2">
              Members receive private styling notes, gift packaging upgrades, and early
              access notifications.
            </p>
          </div>
        </section>

        <aside className="relative min-h-[420px] overflow-hidden rounded-[32px]">
          <Image
            src="/images/lookbook-01.jpg"
            alt="Model styling with Vyra Luxe essentials"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 space-y-2 text-sand">
            <p className="text-xs uppercase tracking-[0.3em] text-sand/70">Member lounge</p>
            <h3 className="text-2xl font-display">Your curated edit awaits.</h3>
            <p className="text-sm text-sand/70">
              Save collections, build wishlists, and track your Vyra Luxe lineup.
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
