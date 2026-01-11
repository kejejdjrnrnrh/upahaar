import { Product } from './types';

export const CONTACT_INFO = {
  whatsapp: '9814969231', // Raw number for display
  whatsappFull: '9779814969231', // With country code for link (Nepal)
  instagram: '___upahaar___', // Updated ID with 3 underscores
  email: 'hello@upahaar.com', // Placeholder
};

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Statement Handcrafted Necklace',
    price: 1850,
    description: 'A bold, handcrafted necklace designed to elevate everyday and festive looks. Made with vibrant elements and detailed craftsmanship, this piece speaks confidence and individuality.',
    highlights: [
      '100% handmade',
      'Lightweight & comfortable',
      'Unique statement design',
      'Perfect for ethnic & fusion wear'
    ],
    // Image of a bold ethnic necklace
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800' 
  },
  {
    id: '2',
    name: 'Boho Pendant Necklace',
    price: 1200,
    description: 'Inspired by free-spirited artistry, this pendant necklace blends earthy tones with traditional detailing. A timeless piece for those who love subtle elegance.',
    highlights: [
      'Handcrafted pendant',
      'Bohemian-inspired design',
      'Adjustable length',
      'Everyday wearable'
    ],
    // Image of a silver/boho pendant
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Handcrafted Fabric Bangles',
    price: 650,
    description: 'These fabric bangles are carefully handcrafted to add color and charm to your outfit. Wear them solo or stack them for a bold look.',
    highlights: [
      'Soft fabric finish',
      'Comfortable fit',
      'Vibrant handcrafted patterns',
      'Perfect gifting option'
    ],
    // Image of colorful bangles/bracelets
    image: 'https://images.unsplash.com/photo-1617038224558-283096c96888?auto=format&fit=crop&q=80&w=800'
  }
];