# VYRA — Premium Lifestyle Storefront

A modern, deploy‑ready **Next.js + Tailwind** storefront for the VYRA lifestyle brand. Includes a working cart, checkout flow, and optional Stripe Checkout integration.

## Features
- Premium editorial homepage with lookbook + collections
- Functional cart (drawer + full cart page)
- Checkout page with Stripe option + email fallback
- Login page (UI‑ready)
- Data‑driven content in a single file

## Tech Stack
- Next.js (App Router)
- Tailwind CSS
- TypeScript
- Stripe (optional)

## Local Development

```bash
npm install
npm run dev
```

Then open:
```
http://localhost:3000
```

## Production Build

```bash
npm run build
npm run start
```

## Environment Variables
Create a `.env` file from `.env.example`:

```bash
STRIPE_SECRET_KEY=
NEXT_PUBLIC_SITE_URL=
NEXT_PUBLIC_ORDER_EMAIL=orders@vyra.studio
```

If Stripe vars are missing, checkout still works using the email request button.

## Deploy to Vercel
1. Push this repo to GitHub.
2. Go to Vercel → **New Project** → import the repo.
3. Framework preset: **Next.js** (auto‑detected).
4. Add environment variables (optional for Stripe).
5. Deploy.

Build settings (default):
- Build command: `npm run build`
- Output: (auto)

## Editing Content
Update products, collections, and copy here:
- `data/site.ts`

## Images
Placeholders live in `public/images/`.
Prompt pack:
- `content/ai-image-prompts.md`

Image credits (current placeholders):
- `content/image-credits.md`

## Project Structure
- `app/` — Pages (home, cart, checkout, login) + API routes
- `components/` — Reusable UI components
- `data/` — Products, collections, content
- `public/` — Images and static assets
- `legacy/` — Original static HTML/CSS/JS version

---
© 2026 VYRA Studio. All rights reserved.
