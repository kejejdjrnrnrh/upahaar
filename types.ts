export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  highlights: string[];
  image: string;
}

export type SocialPlatform = 'whatsapp' | 'instagram';