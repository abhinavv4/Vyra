import './globals.css';
import type { Metadata } from 'next';
import { Bodoni_Moda, Sora } from 'next/font/google';
import Header from '@/components/Header';
import CartDrawer from '@/components/CartDrawer';
import Footer from '@/components/Footer';
import { CartProvider } from '@/lib/cart-context';

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'VYRA — Premium Lifestyle, Elevated Essentials',
  description:
    'VYRA is a premium lifestyle brand for elevated essentials, luxe accessories, and trend-forward drops curated for modern living.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${bodoni.variable} bg-sand text-ink antialiased`}>
        <CartProvider>
          <Header />
          <CartDrawer />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
