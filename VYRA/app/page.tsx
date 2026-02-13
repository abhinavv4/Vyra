import Image from 'next/image';
import ProductCard from '@/components/ProductCard';
import { collections, lookbook, products, trendEdits, valuePoints } from '@/data/site';

export default function HomePage() {
  return (
    <main>
      <section className="section section-block relative overflow-hidden" id="top">
        <div className="absolute left-0 top-0 h-72 w-72 -translate-x-1/3 rounded-full bg-amber/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 translate-x-1/3 rounded-full bg-umber/20 blur-3xl" />
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="eyebrow">Premium lifestyle, curated daily</p>
            <h1 className="text-4xl leading-tight sm:text-5xl lg:text-6xl">
              VYRA elevates the essentials you live with.
            </h1>
            <p className="max-w-xl text-base text-ink/70">
              Shop a polished edit of accessories, home pieces, and trend-forward
              lifestyle products. Styled on our Vyra Luxe muse for a refined, modern edge.
            </p>
            <div className="flex flex-wrap gap-4">
              <a className="button-primary" href="#essentials">
                Explore the drop
              </a>
              <a className="button-outline" href="#collections">
                Build your set
              </a>
            </div>
            <div className="grid gap-4 pt-6 sm:grid-cols-3">
              {[
                { label: 'Limited drops', value: '48h' },
                { label: 'Premium essentials', value: '120+' },
                { label: 'Luxe client rating', value: '4.9' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass flex flex-col gap-2 px-4 py-5 text-center"
                >
                  <span className="text-2xl font-semibold">{stat.value}</span>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-ink/60">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="grid gap-6">
            <div className="relative h-72 overflow-hidden rounded-[32px] shadow-[0_30px_70px_rgba(18,14,11,0.2)] sm:h-[26rem]">
              <Image
                src="/images/hero-model.jpg"
                alt="Model wearing Vyra Luxe essentials"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute bottom-4 left-4 rounded-full bg-sand/90 px-4 py-2 text-xs uppercase tracking-[0.3em] text-ink/70">
                Vyra Luxe
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass overflow-hidden">
                <div className="relative h-28">
                  <Image
                    src="/images/flatlay-accessories.jpg"
                    alt="Luxe essentials flat lay"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs uppercase tracking-[0.3em] text-ink/60">Luxe essentials</p>
                  <h3 className="mt-2 text-lg">Accessory Edit</h3>
                  <p className="text-sm text-ink/70">Warm metals, matte leathers, sculpted lines.</p>
                </div>
              </div>
              <div className="glass p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-ink/60">New arrival</p>
                <h3 className="mt-3 text-lg">Moonstone Travel Set</h3>
                <p className="text-sm text-ink/70">Accessory kit with polished hardware.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-block" id="collections">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">Collections</p>
          <h2 className="text-3xl sm:text-4xl">Three curated worlds of VYRA.</h2>
          <p className="text-sm text-ink/65">
            From limited-run design to elevated basics, choose the edit that fits your life.
          </p>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {collections.map((collection) => (
            <article
              key={collection.id}
              className="group overflow-hidden rounded-3xl border border-ink/10 bg-white/70 shadow-[0_20px_50px_rgba(15,12,10,0.08)]"
            >
              <div className="relative h-52">
                <Image
                  src={collection.image}
                  alt={collection.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-2xl">{collection.title}</h3>
                <p className="text-sm text-ink/65">{collection.description}</p>
                <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
                  {collection.tone}
                </p>
                <a className="text-xs uppercase tracking-[0.3em] text-umber" href="#essentials">
                  {collection.cta}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-block" id="essentials">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <p className="eyebrow">Essentials</p>
            <h2 className="text-3xl sm:text-4xl">Premium pieces for modern living.</h2>
            <p className="text-sm text-ink/65">
              Accessories, travel, and home objects curated for a cohesive lifestyle.
            </p>
          </div>
          <a className="button-outline" href="#trending">
            View trending edit
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="section section-block" id="lookbook">
        <div className="grid gap-10 lg:grid-cols-[0.5fr_1fr]">
          <div className="space-y-4">
            <p className="eyebrow">Lookbook</p>
            <h2 className="text-3xl sm:text-4xl">Editorial styling for every mood.</h2>
            <p className="text-sm text-ink/65">
              Mix and match VYRA essentials with a modern, editorial eye inspired by runway
              palettes and street-ready finishes.
            </p>
            <a className="button-primary" href="#story">
              Discover the VYRA code
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {lookbook.map((item) => (
              <article key={item.id} className="space-y-4">
                <div className="relative h-64 overflow-hidden rounded-3xl">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
                <div>
                  <h3 className="text-lg">{item.title}</h3>
                  <p className="text-sm text-ink/65">{item.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-block" id="trending">
        <div className="rounded-[40px] bg-ink px-8 py-12 text-sand shadow-[0_35px_70px_rgba(18,14,11,0.35)] sm:px-12">
          <div className="grid gap-10 lg:grid-cols-[0.6fr_1fr]">
            <div className="space-y-4">
              <p className="eyebrow text-sand/60">Trending</p>
              <h2 className="text-3xl sm:text-4xl">Live now: Vyra Gen-Z edits.</h2>
              <p className="text-sm text-sand/70">
                Built for the social-first generation with bold color stories, tactile
                finishes, and share-ready packaging.
              </p>
              <div className="flex flex-wrap gap-3 text-[11px] uppercase tracking-[0.3em]">
                {['Glaze chrome', 'Peach suede', 'Digital glass'].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-sand/30 px-4 py-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {trendEdits.map((trend) => (
                <div
                  key={trend.id}
                  className="rounded-3xl border border-sand/20 bg-white/10 p-5"
                >
                  <h3 className="text-lg">{trend.title}</h3>
                  <p className="text-sm text-sand/70">{trend.note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-block" id="story">
        <div className="max-w-2xl space-y-4">
          <p className="eyebrow">The VYRA Code</p>
          <h2 className="text-3xl sm:text-4xl">Premium craftsmanship meets culture-forward design.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {valuePoints.map((value) => (
            <div
              key={value.id}
              className="rounded-3xl border border-ink/10 bg-white/70 p-6 shadow-[0_20px_40px_rgba(15,12,10,0.08)]"
            >
              <h3 className="text-lg">{value.title}</h3>
              <p className="text-sm text-ink/65">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-block" id="contact">
        <div className="rounded-[40px] border border-ink/10 bg-white/70 p-10 shadow-[0_30px_70px_rgba(15,12,10,0.12)]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr]">
            <div className="space-y-4">
              <p className="eyebrow">Stay in the loop</p>
              <h2 className="text-3xl sm:text-4xl">Join the VYRA inner circle.</h2>
              <p className="text-sm text-ink/65">
                Early access, private drops, and curated lifestyle edits delivered monthly.
              </p>
            </div>
            <form className="grid gap-4">
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
              <button className="button-primary" type="submit">
                Request invite
              </button>
              <p className="text-xs text-ink/60">
                By submitting, you agree to receive updates from VYRA.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
