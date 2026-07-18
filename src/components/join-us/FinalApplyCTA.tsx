import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { ArrowRight } from 'lucide-react';
import { seasons } from '../../data/seasons';

export default function FinalApplyCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const activeSeason = seasons.find(s => s.status === 'active') || seasons[0];
  const isFull = activeSeason.spotsFilled >= activeSeason.spotsTotal;

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    // Direct elegant continuous pulse animation
    gsap.to(buttonRef.current, {
      scale: 1.04,
      duration: 1.2,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut"
    });
  }, { scope: containerRef });

  const handleApplyNow = () => {
    const message = isFull
      ? "Hi SNP! I'd like to join the waitlist for SNP Crew Season 02."
      : "Hi SNP! I'd like to apply for SNP Crew.\nName: __\nInstagram: __\nNearest Outlet: __";
    window.open(getWhatsAppLink(message), '_blank');
  };

  return (
    <section 
      id="section-apply" 
      ref={containerRef}
      className="py-28 bg-[#0a0000] border-t border-[#9C0512]/10 relative flex flex-col justify-center items-center overflow-hidden min-h-[60vh] text-center"
    >
      {/* Background soft glow */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-red-carriage/20 blur-[130px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 flex flex-col items-center">
        
        {/* Label */}
        <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase mb-6 block">
          {isFull ? 'WAITLIST' : 'READY?'}
        </span>

        {/* Headline */}
        <h2 
          className="font-display font-black italic tracking-tight uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-[#EFEACD] mb-6 leading-tight max-w-3xl"
          style={{ fontSize: 'clamp(36px, 8vw, 86px)' }}
        >
          {isFull ? 'Join the Waitlist — Season 02' : 'Join SNP Crew — Season 01'}
        </h2>

        {/* Supporting description */}
        <p className="font-heading italic text-lg md:text-2xl text-pastel-beige/80 max-w-xl leading-relaxed mb-10">
          {isFull 
            ? "Season 01 is currently full. Secure your place for our upcoming Season 02."
            : '"Spots are limited to keep this real. Send us your name, Instagram handle, and which outlet you visit most."'
          }
        </p>

        {/* Pulsing Action Button */}
        <button 
          ref={buttonRef}
          onClick={handleApplyNow}
          className="group relative inline-flex items-center justify-center gap-3 bg-ceramic-yellow hover:bg-[#ebd097] text-bordeaux font-body font-extrabold text-sm md:text-base uppercase tracking-widest px-10 py-5 rounded-full transition-transform duration-300 shadow-[0_10px_35px_rgba(248,215,148,0.3)] hover:shadow-[0_15px_45px_rgba(248,215,148,0.45)]"
        >
          {isFull ? 'Join the Waitlist' : 'Apply on WhatsApp'}
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </section>
  );
}
