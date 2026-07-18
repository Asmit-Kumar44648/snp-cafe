import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const requirements = [
  "You're based in or around Kahalgaon / Bhagalpur",
  "You already post on Instagram — 300 followers or 3,000, doesn't matter",
  "You actually like coming to SNP — this matters more than reach",
  "You can commit to showing up consistently for 65 days",
  "You've got your own style — we're not looking for copies"
];

export default function WhoIsThisFor() {
  const containerRef = useRef<HTMLDivElement>(null);
  const checklistRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const listItems = checklistRef.current?.querySelectorAll('.check-item');
    if (listItems && listItems.length > 0) {
      if (prefersReducedMotion) {
        gsap.set(listItems, { opacity: 1, y: 0 });
      } else {
        gsap.fromTo(listItems,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.08,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: checklistRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );
      }
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-40 bg-pure-black relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-transparent to-pure-black pointer-events-none select-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        {/* Label */}
        <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase mb-3 block">
          THE FIT
        </span>

        {/* Headline */}
        <h2 className="font-display font-bold text-4xl md:text-5xl text-pastel-beige mb-12 tracking-tight">
          This Is For You If...
        </h2>

        {/* Checklist centered layout */}
        <div 
          ref={checklistRef}
          className="max-w-[580px] mx-auto bg-bordeaux/40 border border-pastel-beige/5 rounded-2xl p-8 md:p-12 text-left mb-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] backdrop-blur-md"
        >
          <div className="space-y-6">
            {requirements.map((req, idx) => (
              <div key={idx} className="check-item flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-ceramic-yellow/10 border border-ceramic-yellow/20 flex items-center justify-center text-ceramic-yellow shrink-0 mt-0.5">
                  <Check size={14} className="stroke-[3]" />
                </div>
                <p className="font-body text-base md:text-lg text-pastel-beige/85">
                  {req}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Closing Line */}
        <p className="font-heading italic text-xl md:text-2xl text-ceramic-yellow max-w-lg mx-auto leading-relaxed">
          "If that sounds like you, the next step takes two minutes."
        </p>

      </div>
    </section>
  );
}
