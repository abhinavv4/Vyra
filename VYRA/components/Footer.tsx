export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-sand/80">
      <div className="section grid gap-8 py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div className="space-y-3">
          <div className="text-xl font-display tracking-[0.35em] text-ink">VYRA</div>
          <p className="text-sm text-ink/70">
            Premium lifestyle essentials curated for modern taste and effortless
            sophistication.
          </p>
        </div>
        <div className="space-y-3 text-xs uppercase tracking-[0.3em] text-ink/60">
          <p>Shipping</p>
          <p>Returns</p>
          <p>Style guide</p>
          <p>Contact</p>
        </div>
        <div className="space-y-2 text-sm text-ink/70">
          <p>Inner Circle: hello@vyra.studio</p>
          <p>Private appointments available.</p>
          <p className="text-xs uppercase tracking-[0.3em] text-ink/50">
            © 2026 VYRA Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
