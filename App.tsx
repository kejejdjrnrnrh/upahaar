import React, { useState } from 'react';
import { Menu, X, ShoppingBag, Instagram, Phone, Mail, ChevronRight, Heart, Leaf, Star } from 'lucide-react';
import { PRODUCTS, CONTACT_INFO } from './constants';
import { Product } from './types';
import { Button } from './components/Button';
import { ProductCard } from './components/ProductCard';
import { OrderModal } from './components/OrderModal';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans text-stone-800 bg-ivory selection:bg-terracotta-200">
      
      {/* Navigation */}
      <nav className="fixed w-full z-40 bg-white/90 backdrop-blur-md border-b border-stone-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => scrollToSection('hero')}>
              <span className="font-serif text-3xl font-bold text-terracotta-900 tracking-tight">UpaHAAR</span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              {['Home', 'About', 'Collection', 'Contact'].map((item) => (
                <button 
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="text-stone-600 hover:text-terracotta-800 font-medium tracking-wide transition-colors uppercase text-xs"
                >
                  {item}
                </button>
              ))}
              <Button onClick={() => scrollToSection('collection')} className="!py-2 !px-6 text-sm">
                Shop Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-stone-800 hover:text-terracotta-700 p-2">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg">
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col items-center">
              {['Home', 'About', 'Collection', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase() === 'home' ? 'hero' : item.toLowerCase())}
                  className="block w-full text-center px-3 py-4 text-stone-600 hover:text-terracotta-800 hover:bg-orange-50 font-serif text-lg"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 relative h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?auto=format&fit=crop&q=80&w=1920" 
            alt="Handmade Jewelry Background" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900/60" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <div className="mb-4 inline-block animate-[fadeInDown_1s_ease-out]">
             <span className="px-4 py-1 border border-white/30 rounded-full text-xs uppercase tracking-[0.2em] backdrop-blur-sm bg-white/10">
               Est. 2026
             </span>
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight tracking-tight drop-shadow-sm animate-[fadeInUp_1s_ease-out_0.2s_both]">
            ✨ UpaHAAR <br/> <span className="text-3xl md:text-5xl font-normal italic">A Gift of Handcrafted Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-100 mb-10 font-light max-w-2xl mx-auto animate-[fadeInUp_1s_ease-out_0.4s_both]">
            Handmade fashion accessories crafted with love, tradition, and a modern soul.
          </p>
          <div className="animate-[fadeInUp_1s_ease-out_0.6s_both]">
            <Button onClick={() => scrollToSection('collection')}>
              <ShoppingBag size={20} /> Shop the Collection
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-ivory">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Leaf className="mx-auto text-terracotta-600 mb-6" size={32} />
          <h2 className="font-serif text-4xl text-stone-900 mb-6">About the Brand</h2>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-stone-600 leading-loose font-light">
            <span className="font-serif text-xl font-semibold text-terracotta-800">UpaHAAR</span> is a celebration of handmade beauty. Each piece is thoughtfully crafted using traditional techniques, blending heritage with contemporary fashion. Every creation is more than an accessory—it’s a gift of art.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section id="collection" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">The Collection</h2>
            <p className="text-stone-500 max-w-lg mx-auto">Discover our exclusive range of handcrafted treasures.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PRODUCTS.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onBuy={handleBuyClick} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why UpaHAAR */}
      <section className="py-20 bg-stone-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-4xl text-center text-stone-900 mb-16">Why UpaHAAR?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Heart, title: "Handmade with Love", desc: "Every knot and bead placed with care." },
              { icon: Star, title: "Unique Pieces", desc: "Limited edition designs that stand out." },
              { icon: Leaf, title: "Sustainable", desc: "Eco-friendly approach to artisan fashion." },
              { icon: ShoppingBag, title: "Perfect Gifting", desc: "Wrapped in thoughtfulness." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-sm shadow-sm text-center hover:transform hover:-translate-y-1 transition-transform duration-300">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-terracotta-50 rounded-full text-terracotta-700 mb-6">
                  <feature.icon size={24} />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-stone-500 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Ready */}
      <section className="py-24 bg-terracotta-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pattern-dots"></div> {/* Abstract pattern overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">✨ More handcrafted designs coming soon.</h2>
          <p className="text-terracotta-100 mb-10 text-lg">Stay connected as we grow our collection.</p>
          <a 
            href={`https://instagram.com/${CONTACT_INFO.instagram}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-terracotta-900 px-8 py-4 rounded-full font-semibold hover:bg-terracotta-50 transition-colors"
          >
            <Instagram size={20} /> Follow Us for Updates
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-stone-900 mb-8">Get in Touch</h2>
          <p className="text-stone-600 mb-12 text-lg">
            Have a question or looking for custom orders? <br/> We’d love to hear from you.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-3 text-stone-600 hover:text-terracotta-700 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-terracotta-50 transition-colors">
                <Mail size={20} />
              </div>
              <span className="font-medium">Email Us</span>
            </a>

            <a href={`https://instagram.com/${CONTACT_INFO.instagram}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-600 hover:text-pink-700 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-pink-50 transition-colors">
                <Instagram size={20} />
              </div>
              <span className="font-medium">@{CONTACT_INFO.instagram}</span>
            </a>

            <a href={`https://wa.me/${CONTACT_INFO.whatsappFull}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-stone-600 hover:text-green-600 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center group-hover:bg-green-50 transition-colors">
                <Phone size={20} />
              </div>
              <span className="font-medium">WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 border-t border-stone-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl text-stone-200 mb-4 tracking-wider">UpaHAAR</h3>
          <div className="flex justify-center gap-6 mb-8">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Shipping</a>
          </div>
          <p className="text-sm">
            &copy; 2026 UpaHAAR. Handmade with love | <span className="text-stone-300">Crafted in Nepal</span>
          </p>
        </div>
      </footer>

      {/* Order Modal */}
      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        product={selectedProduct} 
      />
    </div>
  );
};

export default App;