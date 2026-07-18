import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Comparison() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftCardRef = useRef<HTMLDivElement>(null);
  const rightCardRef = useRef<HTMLDivElement>(null);
  const vsBadgeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const matchMedia = gsap.matchMedia();
    
    matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
      // Left card slide in from left side
      gsap.fromTo(leftCardRef.current,
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // Right card slide in from right side
      gsap.fromTo(rightCardRef.current,
        { x: 80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );

      // VS Badge scale entrance
      gsap.fromTo(vsBadgeRef.current,
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        }
      );
    });
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="py-24 bg-pure-black relative overflow-hidden border-b border-red-carriage/20">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase block mb-3">
            The Smart Move
          </span>
          <h2 className="font-display font-medium text-4xl md:text-6xl text-pastel-beige leading-tight">
            Why Build Alone When You Can Build With Us
          </h2>
        </div>

        {/* VS Two-Column Grid container */}
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
          
          {/* Centered VS Badge */}
          <div 
            ref={vsBadgeRef}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-ceramic-yellow text-bordeaux font-bebas text-2xl flex items-center justify-center shadow-[0_0_30px_rgba(248,215,148,0.4)] border-4 border-pure-black z-30 hidden lg:flex"
          >
            VS
          </div>

          {/* Left card: Going Solo */}
          <div 
            ref={leftCardRef}
            className="glass-card rounded-3xl p-8 md:p-12 border border-[#9C0512]/10 relative overflow-hidden flex flex-col justify-between"
          >
            <div>
              <span className="font-bebas text-xs md:text-sm tracking-[0.15em] text-pastel-beige/40 uppercase block mb-2">
                The Hard Way
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-pastel-beige/80 mb-8 border-b border-pastel-beige/10 pb-4">
                Going Solo
              </h3>

              <ul className="space-y-6">
                {[
                  "Untested menu, unknown demand",
                  "Building brand recognition from zero",
                  "No operational playbook",
                  "Slower path to breakeven",
                  "All R&D and mistakes are yours"
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 items-start text-pastel-beige/50">
                    <span className="p-1 rounded-sm bg-pastel-beige/5 text-pastel-beige/30 mt-0.5">
                      <X size={16} />
                    </span>
                    <span className="font-body text-base md:text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right card: Franchise With SNP */}
          <div 
            ref={rightCardRef}
            className="glass-card rounded-3xl p-8 md:p-12 border border-ceramic-yellow/30 relative overflow-hidden flex flex-col justify-between shadow-[0_0_40px_rgba(248,215,148,0.04)]"
          >
            <div className="absolute top-0 right-0 bg-ceramic-yellow text-bordeaux font-bebas text-xs tracking-widest px-4 py-1.5 rounded-bl-xl uppercase font-bold">
              Recommended
            </div>

            <div>
              <span className="font-bebas text-xs md:text-sm tracking-[0.15em] text-ceramic-yellow uppercase block mb-2">
                The SNP Way
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl text-ceramic-yellow mb-8 border-b border-ceramic-yellow/20 pb-4">
                Franchise With SNP
              </h3>

              <ul className="space-y-6 mx-auto">
                {[
                  "Proven 50+ item menu, real pricing data",
                  "Existing Swiggy/Zomato presence",
                  "Brand recognition from day one",
                  "Full training & branding support",
                  "Faster setup, ongoing support"
                ].map((item, index) => (
                  <li key={index} className="flex gap-4 items-start text-pastel-beige group">
                    <span className="p-1 rounded-sm bg-ceramic-yellow/10 text-ceramic-yellow mt-0.5 group-hover:bg-ceramic-yellow group-hover:text-bordeaux transition-all duration-300">
                      <Check size={16} />
                    </span>
                    <span className="font-body text-base md:text-lg font-medium leading-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
