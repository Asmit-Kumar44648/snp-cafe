import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { seasons } from '../../data/seasons';

gsap.registerPlugin(ScrollTrigger);

export default function JoinUsHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const scrollLineRef = useRef<HTMLDivElement>(null);

  const activeSeason = seasons.find(s => s.status === 'active') || seasons[0];
  const isFull = activeSeason.spotsFilled >= activeSeason.spotsTotal;

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Instant entry for accessibility
      gsap.set([labelRef.current, headlineRef.current, subtextRef.current, ctaRef.current], { 
        opacity: 1, 
        y: 0 
      });
      return;
    }

    // GSAP entrance master timeline
    const tl = gsap.timeline();

    // 1. Label fades in first (0.2s delay)
    tl.fromTo(labelRef.current,
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    );

    // 2. Headline lines stagger-rise from y:40 opacity:0
    const lines = headlineRef.current?.querySelectorAll('.headline-line');
    if (lines && lines.length > 0) {
      tl.fromTo(lines,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power4.out' },
        '-=0.4'
      );
    }

    // 3. Subtext + CTA follow at 0.3s offset
    tl.fromTo([subtextRef.current, ctaRef.current],
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
      '-=0.5'
    );

    // 4. Scroll indicator: thin vertical line growing on scroll
    gsap.fromTo(scrollLineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      }
    );

  }, { scope: containerRef });

  const handleScrollToApply = () => {
    const applySec = document.getElementById('section-apply');
    if (applySec) {
      applySec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative w-full min-h-[90vh] lg:min-h-screen flex flex-col justify-center items-center overflow-hidden bg-bordeaux pt-32 pb-24 px-4 sm:px-6 md:px-8"
    >
      {/* Background Media */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {/* 
          AI-Gen Asset Description:
          "dark moody shot of phone filming food/sizzler on table, warm lighting, shallow depth of field"
        */}
        <img 
          src="https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?auto=format&fit=crop&q=80&w=1920" 
          alt="Phone filming food on table" 
          className="w-full h-full object-cover opacity-25 filter brightness-[0.35] contrast-125"
        />
        {/* Dark gradient overlay bottom-to-top */}
        <div className="absolute inset-0 bg-gradient-to-t from-bordeaux via-bordeaux/60 to-transparent" />
      </div>

      {/* Foreground Content - Wrapped in a gorgeous, highly responsive, centered card container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center justify-center w-full px-5 py-10 md:py-16 md:px-12 rounded-3xl bg-pure-black/30 border border-pastel-beige/5 backdrop-blur-md shadow-2xl my-auto">
        
        {/* Small label */}
        <div 
          ref={labelRef}
          className="flex flex-col items-center gap-1.5 mb-4 md:mb-6 select-none"
        >
          <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase block">
            SNP CREW · SEASON 01
          </span>
          <span className="font-bebas text-[10px] md:text-xs tracking-[0.25em] text-pastel-beige/45 uppercase font-medium">
            SIZZLE • SLICE • SMILE
          </span>
        </div>

        {/* Headline */}
        <h1 
          ref={headlineRef}
          className="font-display font-black italic tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-[#EFEACD] uppercase select-none mb-4 md:mb-6 shrink-0 w-full"
          style={{ fontSize: 'clamp(32px, 7.5vw, 92px)', lineHeight: '1.05' }}
        >
          <div className="overflow-hidden inline-block w-full leading-[0.95] pb-1">
            <span className="headline-line inline-block">Don't Just Eat Here.</span>
          </div>
          <br />
          <div className="overflow-hidden inline-block w-full leading-[0.95]">
            <span className="headline-line inline-block text-ceramic-yellow">Be Part Of It.</span>
          </div>
        </h1>

        {/* Subtext */}
        <p 
          ref={subtextRef}
          className="font-heading text-base md:text-xl lg:text-2xl text-pastel-beige/80 max-w-[580px] leading-relaxed mb-8 md:mb-10 italic px-2 md:px-4 select-none"
        >
          "We're looking for a small group of local creators across
          Kahalgaon and Maharajganj — to become the faces of what
          happens here next."
        </p>

        {/* CTA Button */}
        <button 
          ref={ctaRef}
          onClick={handleScrollToApply}
          className="group relative inline-flex items-center justify-center bg-red-carriage hover:bg-[#b00615] text-white border border-ceramic-yellow/10 font-body font-bold text-xs md:text-sm uppercase tracking-widest px-8 py-3.5 md:py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(156,5,18,0.4)]"
        >
          {isFull ? 'Join the Waitlist' : 'Apply to Join'}
        </button>

      </div>

      {/* Progress / Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10 select-none">
        <span className="font-bebas text-xs tracking-[0.2em] text-pastel-beige/40">SCROLL DOWN</span>
        <div className="w-[1.5px] h-12 bg-pastel-beige/15 relative overflow-hidden rounded-full">
          <div 
            ref={scrollLineRef}
            className="absolute top-0 left-0 w-full h-full bg-ceramic-yellow scale-y-0 origin-top"
          />
        </div>
      </div>

    </section>
  );
}
