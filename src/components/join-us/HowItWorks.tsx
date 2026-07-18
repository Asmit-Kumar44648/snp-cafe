import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import step1Img from '../../assets/images/step1_apply_doodle_1781547651344.jpg';
import step2Img from '../../assets/images/step2_chat_doodle_1781547667810.jpg';
import step3Img from '../../assets/images/step3_kit_doodle_1781547681983.jpg';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    num: "01",
    label: "Apply",
    desc: "Send us your Instagram handle and a quick line about yourself over WhatsApp.",
    image: step1Img,
    comment: "AI-gen prompt: Close-up of a modern smartphone model indicating an open active WhatsApp chat dialogue with warm colorful restaurant bokeh background"
  },
  {
    num: "02",
    label: "Quick Chat",
    desc: "A short conversation to see if it's a good fit — both ways.",
    image: step2Img,
    comment: "AI-gen prompt: Beautiful warm moody photo of two friends chatting comfortably over coffees and cold desserts at a vibrant modern food bistro"
  },
  {
    num: "03",
    label: "Kit Day & Go Live",
    desc: "Get your welcome kit, quick walkthrough, and start posting your way.",
    image: step3Img,
    comment: "AI-gen prompt: First-person viewpoint of a customer's hands unwrapping an elegant premium brand welcome folder pack of heavy black linen paper with golden fonts"
  }
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const cards = gridRef.current?.querySelectorAll('.step-card');
    if (cards && cards.length > 0) {
      if (prefersReducedMotion) {
        gsap.set(cards, { opacity: 1, y: 0 });
        gsap.set(gridRef.current?.querySelectorAll('.badge-el'), { scale: 1 });
      } else {
        // Animation timeline for cards and internal badge overshoots
        cards.forEach((card, index) => {
          const badge = card.querySelector('.badge-el');
          const content = card.querySelector('.step-content');
          const imgEl = card.querySelector('.step-img-wrap');

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              once: true
            }
          });

          tl.fromTo(imgEl,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }
          );

          tl.fromTo(badge,
            { scale: 0 },
            { scale: 1, duration: 0.6, ease: 'back.out(1.7)' },
            '-=0.4'
          );

          tl.fromTo(content,
            { opacity: 0, y: 15 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
            '-=0.3'
          );
        });
      }
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-pure-black border-t border-pastel-beige/5 relative"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase block mb-3">
            THE PROCESS
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-pastel-beige mb-4 tracking-tight leading-none">
            From Application to Crew Member
          </h2>
          <p className="font-heading text-lg md:text-xl text-pastel-beige/60 italic">
            "Three simple steps stand between you and your kit."
          </p>
        </div>

        {/* 3-Column Grid */}
        <div 
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 lg:gap-12"
        >
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="step-card flex flex-col group"
            >
              {/* Image & Badge Wrapper */}
              <div className="relative mb-6">
                
                {/* Visual Image container with nice aspect and zoom hover */}
                <div className="step-img-wrap overflow-hidden rounded-2xl aspect-[4/3] border border-pastel-beige/10 bg-bordeaux/50 shadow-lg">
                  {/* {step.comment} */}
                  <img 
                    src={step.image} 
                    alt={step.label} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-pure-black/30 via-transparent to-transparent" />
                </div>

                {/* Number Badge overlapping top-left, negative axes offset (-16px wait let's use -translate-x-4 -translate-y-4) */}
                <div className="badge-el absolute top-3 left-3 -translate-x-1/2 -translate-y-1/2 bg-ceramic-yellow text-bordeaux font-bebas text-lg md:text-xl font-bold w-10 h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center shadow-[0_4px_15px_rgba(248,215,148,0.4)] z-10 select-none">
                  {step.num}
                </div>

              </div>

              {/* Title & Description under layout */}
              <div className="step-content">
                <h3 className="font-heading font-semibold text-2xl text-pastel-beige mb-3 tracking-wide">
                  Step {step.num} — "{step.label}"
                </h3>
                <p className="font-body text-sm md:text-base text-pastel-beige/75 leading-relaxed max-w-sm">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
