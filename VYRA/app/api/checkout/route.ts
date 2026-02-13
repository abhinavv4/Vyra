import { NextResponse } from 'next/server';
import Stripe from 'stripe';
import { products } from '@/data/site';

export const runtime = 'nodejs';

const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export async function POST(request: Request) {
  if (!stripeSecretKey || !siteUrl) {
    return NextResponse.json(
      { error: 'Stripe is not configured. Add STRIPE_SECRET_KEY and NEXT_PUBLIC_SITE_URL.' },
      { status: 400 }
    );
  }

  const stripe = new Stripe(stripeSecretKey, {
    apiVersion: '2024-06-20',
  });

  const body = await request.json();
  const items = Array.isArray(body?.items) ? body.items : [];

  const lineItems = items
    .map((item: { id: string; quantity: number }) => {
      const product = products.find((entry) => entry.id === item.id);
      if (!product) return null;
      return {
        price_data: {
          currency: 'usd',
          product_data: {
            name: product.name,
            description: product.description,
          },
          unit_amount: Math.round(product.price * 100),
        },
        quantity: Math.max(1, item.quantity ?? 1),
      };
    })
    .filter(Boolean) as Stripe.Checkout.SessionCreateParams.LineItem[];

  if (lineItems.length === 0) {
    return NextResponse.json({ error: 'Cart is empty.' }, { status: 400 });
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    line_items: lineItems,
    success_url: `${siteUrl}/checkout?success=true`,
    cancel_url: `${siteUrl}/checkout?canceled=true`,
  });

  return NextResponse.json({ url: session.url });
}
