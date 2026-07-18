import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, MapPin } from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';

gsap.registerPlugin(ScrollTrigger);

export default function FranchiseCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const matchMedia = gsap.matchMedia();
    matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(headlineRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, { scope: containerRef });

  const handleWhatsappEnquiry = () => {
    const message = "Hi SNP! I'm interested in franchise opportunities. My city: __ | Investment range: __";
    window.open(getWhatsAppLink(message), '_blank');
  };

  const handleScrollToOutlets = () => {
    const outletsSec = document.getElementById('outlets-section');
    if (outletsSec) {
      outletsSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 bg-bordeaux relative overflow-hidden border-b border-red-carriage/20 text-center flex flex-col justify-center items-center"
    >
      {/* Decorative backdrop glow */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-mahogany/40 blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Eyebrow */}
        <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase block mb-4">
          The Opportunity Awaits
        </span>

        {/* Headline */}
        <h2 
          ref={headlineRef}
          className="font-display font-black italic text-4xl md:text-7xl text-pastel-beige leading-tight mb-12 drop-shadow-[0_4px_20px_rgba(156,5,18,0.3)]"
        >
          Stop Wondering. <br className="md:hidden" />
          <span className="text-ceramic-yellow block md:inline">Start Owning.</span>
        </h2>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4 max-w-3xl mx-auto py-8 px-6 rounded-2xl glass-card border border-red-carriage/10 mb-12 items-center justify-center">
          {[
            { num: "3", label: "Outlets Live" },
            { num: "2", label: "Cities" },
            { num: "50+", label: "Menu Items" },
            { num: "Fast", label: "Growing Brand" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center relative md:after:content-[''] md:after:absolute md:after:right-0 md:after:w-[1px] md:after:h-10 md:after:bg-pastel-beige/10 md:last:after:hidden">
              <span className="font-bebas text-3xl md:text-4xl text-ceramic-yellow mb-1 tracking-wider leading-none">
                {stat.num}
              </span>
              <span className="font-heading text-sm md:text-base text-pastel-beige/80 italic leading-none pt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={handleWhatsappEnquiry}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-red-carriage hover:bg-mahogany text-pastel-beige font-body font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(156,5,18,0.4)]"
          >
            <MessageSquare size={16} />
            Enquire on WhatsApp
          </button>
          
          <button 
            onClick={handleScrollToOutlets}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-transparent hover:bg-white/5 text-pastel-beige border border-pastel-beige/20 font-body font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all hover:scale-105 active:scale-95"
          >
            <MapPin size={16} />
            View Our Outlets
          </button>
        </div>

      </div>
    </section>
  );
}
