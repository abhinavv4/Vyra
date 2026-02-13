export type Collection = {
  id: string;
  title: string;
  description: string;
  cta: string;
  image: string;
  tone: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  tag: string;
  collection: string;
  image: string;
};

export type LookbookItem = {
  id: string;
  title: string;
  note: string;
  image: string;
};

export type TrendEdit = {
  id: string;
  title: string;
  note: string;
};

export type ValuePoint = {
  id: string;
  title: string;
  description: string;
};

export const collections: Collection[] = [
  {
    id: 'exclusive',
    title: 'Vyra Exclusive',
    description: 'Limited-run pieces with collector-grade packaging and atelier finishes.',
    cta: 'View exclusives',
    image: '/images/collection-exclusive.svg',
    tone: 'Deep, minimal, and impeccably crafted.',
  },
  {
    id: 'luxe',
    title: 'Vyra Luxe',
    description: 'Signature accessories designed to elevate everyday rituals.',
    cta: 'Shop luxe',
    image: '/images/collection-luxe.svg',
    tone: 'Warm neutrals, soft structure, polished silhouettes.',
  },
  {
    id: 'genz',
    title: 'Vyra Gen-Z',
    description: 'Trend-forward drops for bold, playful, and social-first styling.',
    cta: 'See the edit',
    image: '/images/collection-genz.svg',
    tone: 'High-energy color with tactile, share-ready finishes.',
  },
];

export const products: Product[] = [
  {
    id: 'obsidian-card-case',
    name: 'Obsidian Card Case',
    description: 'Matte leather with mirrored edge detailing.',
    price: 64,
    tag: 'Accessory',
    collection: 'Vyra Luxe',
    image: '/images/product-obsidian.svg',
  },
  {
    id: 'moonstone-travel-set',
    name: 'Moonstone Travel Set',
    description: 'Travel-ready kit with protective lining.',
    price: 128,
    tag: 'Travel',
    collection: 'Vyra Exclusive',
    image: '/images/product-moonstone.svg',
  },
  {
    id: 'sage-aroma-set',
    name: 'Sage Aroma Set',
    description: 'Ceramic diffuser with clean, layered notes.',
    price: 92,
    tag: 'Wellness',
    collection: 'Vyra Luxe',
    image: '/images/product-sage.svg',
  },
  {
    id: 'onyx-essentials-cap',
    name: 'Onyx Essentials Cap',
    description: 'Structured cap with tonal embroidery.',
    price: 42,
    tag: 'Wear',
    collection: 'Vyra Gen-Z',
    image: '/images/product-onyx.svg',
  },
  {
    id: 'velvet-weekend-duffle',
    name: 'Velvet Weekend Duffle',
    description: 'Soft-touch duffle with sculpted handles.',
    price: 148,
    tag: 'Travel',
    collection: 'Vyra Exclusive',
    image: '/images/product-velvet.svg',
  },
  {
    id: 'slate-desk-tray',
    name: 'Slate Desk Tray',
    description: 'Minimal organizer for daily essentials.',
    price: 58,
    tag: 'Home',
    collection: 'Vyra Luxe',
    image: '/images/product-slate.svg',
  },
];

export const lookbook: LookbookItem[] = [
  {
    id: 'look-01',
    title: 'Morning Atelier',
    note: 'Soft neutrals layered with sculpted accents.',
    image: '/images/lookbook-01.jpg',
  },
  {
    id: 'look-02',
    title: 'Nightfall Edit',
    note: 'Deep tones with brushed metal highlights.',
    image: '/images/lookbook-02.jpg',
  },
  {
    id: 'look-03',
    title: 'Coastal Studio',
    note: 'Light textures inspired by sun-washed travel.',
    image: '/images/flatlay-accessories.jpg',
  },
];

export const trendEdits: TrendEdit[] = [
  {
    id: 'studio-ready',
    title: 'Studio Ready',
    note: 'Creator essentials with reflective details and modular storage.',
  },
  {
    id: 'weekend-luxe',
    title: 'Weekend Luxe',
    note: 'Plush travel pieces for effortless long-weekend styling.',
  },
  {
    id: 'desk-aesthetic',
    title: 'Desk Aesthetic',
    note: 'Organizers, tech dock, and mood-lit wellness objects.',
  },
];

export const valuePoints: ValuePoint[] = [
  {
    id: 'materials',
    title: 'Material Integrity',
    description: 'Premium finishes selected for longevity and tactile appeal.',
  },
  {
    id: 'design',
    title: 'Intentional Design',
    description: 'Every silhouette is refined for everyday sophistication.',
  },
  {
    id: 'trend',
    title: 'Trend Intelligence',
    description: 'Curated drops keep you ahead without losing timelessness.',
  },
  {
    id: 'packaging',
    title: 'Gift-Ready Packaging',
    description: 'Arrives in collector boxes and reusable fabric wraps.',
  },
];
