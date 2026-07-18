import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FranchiseHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Elegant stagger entry for the headline lines
    if (headlineRef.current) {
      const lines = headlineRef.current.querySelectorAll('.headline-line');
      gsap.fromTo(lines,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power4.out',
          delay: 0.3
        }
      );
    }

    // Interactive growing line on scroll helper
    gsap.to(scrollLineRef.current, {
      scaleY: 1,
      transformOrigin: 'top center',
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    });
  }, { scope: containerRef });

  const handleEnquire = () => {
    const msg = "Hi SNP! I'm interested in franchise opportunities.";
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-screen flex flex-col justify-between items-center overflow-hidden bg-bordeaux pt-28 pb-12 px-6"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920" 
          alt="Kitchen action" 
          className="w-full h-full object-cover opacity-35 filter brightness-[0.4] contrast-125"
        />
        {/* bordeaux edges gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-bordeaux via-transparent to-bordeaux/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-bordeaux/92 via-transparent to-bordeaux/92" />
      </div>

      {/* Spacer to push content down beautifully */}
      <div className="h-2 w-full z-10" />

      {/* Foreground Content */}
      <div 
        className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center my-auto py-6"
      >
        <div ref={headlineRef} className="flex flex-col items-center">
          
          <span className="font-bebas text-sm md:text-base tracking-[0.3em] text-[#FEB109]/80 uppercase mb-4 block animate-fade-in">
            SIZZLE • SLICE • SMILE
          </span>
          
          {/* First Line */}
          <h1 
            className="font-display font-black italic tracking-tight"
            style={{ fontSize: 'clamp(36px, 7vw, 96px)', lineHeight: '1.05' }}
          >
            <div className="overflow-hidden inline-block w-full pb-1">
              <span className="headline-line inline-block text-transparent bg-clip-text bg-gradient-to-b from-white to-[#EFEACD] select-none">
                Own The Vibe.
              </span>
            </div>
          </h1>
            
          {/* Sleek, sophisticated gold-trimmed badge (moved just above Scale the Sizzle as requested, no big black box) */}
          <div className="my-5 md:my-7 select-none z-20">
            <div className="inline-block rounded-full border border-ceramic-yellow/30 bg-mahogany/45 px-5 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(248,154,163,0.1)]">
              <span className="font-bebas text-xs md:text-sm tracking-[0.25em] text-ceramic-yellow uppercase">
                FRANCHISE OPPORTUNITIES
              </span>
            </div>
          </div>

          {/* Second Line */}
          <h1 
            className="font-display font-black italic tracking-tight mb-8"
            style={{ fontSize: 'clamp(36px, 7vw, 96px)', lineHeight: '1.05' }}
          >
            <div className="overflow-hidden inline-block w-full pb-1">
              <span className="headline-line inline-block text-transparent bg-clip-text bg-gradient-to-b from-[#FFF2D4] to-ceramic-yellow select-none">
                Scale The Sizzle.
              </span>
            </div>
          </h1>

        </div>

        {/* Subtext */}
        <p className="font-heading text-base md:text-xl text-pastel-beige/85 max-w-2xl leading-relaxed mb-10 italic px-4">
          "SNP didn't start as a brand — it started as the place everyone
          wanted to be on a Friday night. Three outlets later, that hasn't
          changed. Now we're looking for partners ready to bring that
          energy to their city."
        </p>

        {/* Action Button */}
        <button 
          onClick={handleEnquire}
          className="group relative inline-flex items-center gap-3 bg-red-carriage hover:bg-[#b50717] text-white hover:text-[#FFF2D4] border border-ceramic-yellow/10 font-body font-bold text-xs md:text-sm uppercase tracking-widest px-8 py-4 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-[0_0_30px_rgba(156,5,18,0.45)] hover:shadow-[0_0_40px_rgba(156,5,18,0.7)]"
        >
          Enquire Now
          <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform duration-300" />
        </button>
      </div>

      {/* Progress / Scroll Indicator (Structured inside flex to prevent overlapping on standard/smaller screens) */}
      <div className="relative w-full flex flex-col items-center gap-2 mt-6 z-10 shrink-0 select-none">
        <span className="font-bebas text-xs tracking-[0.2em] text-pastel-beige/40">SCROLL DOWN</span>
        <div className="w-[1.5px] h-10 bg-pastel-beige/15 relative overflow-hidden rounded-full">
          <div 
            ref={scrollLineRef}
            className="absolute top-0 left-0 w-full h-full bg-ceramic-yellow scale-y-0 origin-top"
          />
        </div>
      </div>
    </section>
  );
}
