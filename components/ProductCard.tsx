import React from 'react';
import { Product } from '../types';
import { Button } from './Button';
import { Check } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onBuy: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onBuy }) => {
  return (
    <div className="group bg-white rounded-sm shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col h-full border border-stone-100">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-terracotta-900 font-serif font-bold rounded-sm shadow-sm">
          Rs. {product.price}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-serif text-2xl text-stone-900 mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow font-sans">
          {product.description}
        </p>

        <div className="mb-6 space-y-2">
          {product.highlights.map((highlight, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-stone-500 uppercase tracking-wider">
              <Check size={12} className="text-terracotta-500" />
              <span>{highlight}</span>
            </div>
          ))}
        </div>

        <Button onClick={() => onBuy(product)} fullWidth>
          Buy Now
        </Button>
      </div>
    </div>
  );
};