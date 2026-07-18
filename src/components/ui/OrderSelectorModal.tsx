import React, { useState, useEffect } from 'react';
import { X, Smartphone, ArrowRight, CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

export default function OrderSelectorModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-order-modal', handleOpen);
    return () => window.removeEventListener('open-order-modal', handleOpen);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div 
        className="absolute inset-0 bg-[#0E0000]/85 backdrop-blur-md transition-opacity duration-300"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Container */}
      <div className="relative w-full max-w-lg bg-pure-black border border-ceramic-yellow/30 rounded-3xl p-6 md:p-8 overflow-hidden z-10 shadow-[0_0_50px_rgba(156,5,18,0.25)] animate-fade-in">
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-red-carriage/10 blur-[50px] -z-10" />
        <div className="absolute bottom-0 left-0 w-32 h-32 rounded-full bg-ceramic-yellow/5 blur-[50px] -z-10" />

        {/* Close button */}
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-5 right-5 text-[#EFEACD]/60 hover:text-white transition-colors"
          id="close-order-modal-btn"
        >
          <X size={20} />
        </button>

        {/* Title */}
        <div className="text-center mb-6">
          <span className="font-bebas text-xs tracking-[0.2em] text-ceramic-yellow uppercase">
            Fresh & Sizzling
          </span>
          <h3 className="font-display font-bold text-2xl md:text-3xl text-pastel-beige mt-1">
            Order From Satkar Chowk
          </h3>
          <p className="font-body text-[#EFEACD]/60 text-xs md:text-sm mt-2">
            Select your preferred platform to order from our flagship Kahalgaon kitchen.
          </p>
        </div>

        {/* Platform Selection List */}
        <div className="space-y-4">
          {/* Zomato Option */}
          <a
            href="https://www.zomato.com/kahalgaon/snp-cafe-kahalgaon-locality-"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-[#E02222]/10 hover:bg-[#E02222]/20 border border-[#E02222]/30 rounded-xl transition-all duration-300 group hover:translate-x-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#E02222] flex items-center justify-center text-white shrink-0 shadow-lg">
                <span className="font-bebas text-lg font-black tracking-tighter">Z</span>
              </div>
              <div className="text-left">
                <span className="font-display font-bold text-lg text-pastel-beige block group-hover:text-white transition-colors">
                  Order via Zomato
                </span>
                <span className="font-body text-xs text-[#EFEACD]/50 block">
                  Satkar Chowk Outlets, Bhagalpur / Kahalgaon
                </span>
              </div>
            </div>
            <ArrowRight size={18} className="text-[#E02222] group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Swiggy Option */}
          <a
            href="https://www.swiggy.com/restaurants/snp-sizzler-n-pizza-town-area-kahalgaon-1014029"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-[#FC8019]/10 hover:bg-[#FC8019]/20 border border-[#FC8019]/30 rounded-xl transition-all duration-300 group hover:translate-x-1"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#FC8019] flex items-center justify-center text-white shrink-0 shadow-lg">
                <span className="font-bebas text-lg font-black tracking-tighter">S</span>
              </div>
              <div className="text-left">
                <span className="font-display font-bold text-lg text-pastel-beige block group-hover:text-white transition-colors">
                  Order via Swiggy
                </span>
                <span className="font-body text-xs text-[#EFEACD]/50 block">
                  Satkar Chowk Outlets, Bhagalpur / Kahalgaon
                </span>
              </div>
            </div>
            <ArrowRight size={18} className="text-[#FC8019] group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Direct Line / WhatsApp Option */}
          <div className="p-4 bg-pure-black/30 border border-ceramic-yellow/15 rounded-xl text-center">
            <span className="font-bebas text-xs tracking-wider text-ceramic-yellow/60 uppercase block mb-3">
              OR CONTACT DIRECTLY
            </span>
            <div className="grid grid-cols-2 gap-3">
              <a
                href={getWhatsAppLink("Hi SNP Owner! I would like to place a custom order for delivery/pickup at Satkar Chowk.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebd5d] text-white py-3 px-3 rounded-lg font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageSquare size={13} />
                WhatsApp
              </a>
              <a
                href="tel:7061885890"
                className="flex items-center justify-center gap-2 bg-transparent border border-pastel-beige/25 hover:border-ceramic-yellow text-pastel-beige hover:text-white py-3 px-3 rounded-lg font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone size={13} className="text-ceramic-yellow" />
                Phone Call
              </a>
            </div>
          </div>
        </div>

        {/* Footer info banner */}
        <div className="mt-5 text-center flex items-center justify-center gap-2 text-ceramic-yellow/80 bg-red-carriage/10 py-2.5 px-4 rounded-xl border border-red-carriage/20">
          <CheckCircle2 size={14} />
          <span className="font-body text-[10px] uppercase tracking-wider font-bold">
            Satkar Chowk Super-Fast Home Delivery Radius (5km)
          </span>
        </div>
      </div>
    </div>
  );
}
