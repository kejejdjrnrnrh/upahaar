import React from 'react';
import { X, MessageCircle, Instagram } from 'lucide-react';
import { Product } from '../types';
import { CONTACT_INFO } from '../constants';

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
}

export const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose, product }) => {
  if (!isOpen || !product) return null;

  const handleWhatsApp = () => {
    const message = `Namaste UpaHAAR! I am interested in buying the *${product.name}* priced at Rs. ${product.price}. Is it available?`;
    const url = `https://wa.me/${CONTACT_INFO.whatsappFull}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleInstagram = () => {
    // Redirect to profile. We can't pre-fill messages reliably on web instagram, but we can copy to clipboard or just guide them.
    const url = `https://instagram.com/${CONTACT_INFO.instagram}`;
    window.open(url, '_blank');
    // Optional: Alert user to DM
    alert(`Redirecting to Instagram. Please DM us: "I want to buy ${product.name}"`);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white w-full max-w-md rounded-lg shadow-2xl p-6 relative animate-in zoom-in-95 duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="font-serif text-2xl text-terracotta-900 mb-2">Complete your Order</h3>
        <p className="text-gray-600 mb-6 font-sans">
          You are interested in: <span className="font-semibold text-terracotta-800">{product.name}</span>
        </p>
        <p className="text-sm text-gray-500 mb-8 italic">
          Since each piece is unique, please confirm availability via chat.
        </p>

        <div className="space-y-4">
          <button 
            onClick={handleWhatsApp}
            className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-lg hover:bg-[#20bd5a] transition-colors font-medium text-lg shadow-sm"
          >
            <MessageCircle size={24} />
            Order via WhatsApp
          </button>
          
          <button 
            onClick={handleInstagram}
            className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white py-4 rounded-lg hover:opacity-90 transition-opacity font-medium text-lg shadow-sm"
          >
            <Instagram size={24} />
            Order via Instagram
          </button>
        </div>
      </div>
    </div>
  );
};