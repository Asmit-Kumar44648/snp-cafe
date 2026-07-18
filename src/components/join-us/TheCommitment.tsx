import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Video, Image as ImageIcon, Camera } from 'lucide-react';

import reelDoodle from '../../assets/images/commitment_reel_doodle_1781548760508.jpg';
import postsDoodle from '../../assets/images/commitment_posts_doodle_1781548777566.jpg';
import storiesDoodle from '../../assets/images/commitment_stories_doodle_1781548793014.jpg';

gsap.registerPlugin(ScrollTrigger);

const requirements = [
  {
    icon: Video,
    num: "1 Reel",
    desc: "a moment, a dish, a vibe — your edit",
    image: reelDoodle
  },
  {
    icon: ImageIcon,
    num: "2 Posts",
    desc: "photos from your visits, your way",
    image: postsDoodle
  },
  {
    icon: Camera,
    num: "2-3 Stories",
    desc: "quick, casual, in-the-moment",
    image: storiesDoodle
  }
];

export default function TheCommitment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const items = itemsContainerRef.current?.querySelectorAll('.stat-item');
    if (items && items.length > 0) {
      if (prefersReducedMotion) {
        gsap.set(items, { opacity: 1, scale: 1, y: 0 });
      } else {
        gsap.fromTo(items,
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: itemsContainerRef.current,
              start: 'top 85%',
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
      className="py-24 bg-mahogany relative overflow-hidden"
    >
      {/* Background grain or lights */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-red-carriage/20 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        
        {/* Label */}
        <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase mb-3 block">
          THE COMMITMENT
        </span>

        {/* Headline */}
        <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-pastel-beige mb-4 tracking-tight">
          Simple, Sustainable, Yours to Own
        </h2>

        {/* Subline */}
        <p className="font-heading text-lg md:text-xl text-[#F8F1E5]/70 max-w-2xl mx-auto italic mb-16 leading-relaxed">
          "No daily grind, no impossible quotas. Each week, for 65 days:"
        </p>

        {/* 3-Column Stat Row */}
        <div 
          ref={itemsContainerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-16 max-w-5xl mx-auto"
        >
          {requirements.map((req, idx) => {
            const IconComponent = req.icon;
            return (
              <div 
                key={idx}
                className="stat-item group relative flex flex-col items-center justify-between min-h-[350px] p-8 rounded-2xl overflow-hidden border border-red-carriage/20 bg-pure-black shadow-[0_20px_50px_rgba(14,0,0,0.9)] transition-all duration-500 hover:border-ceramic-yellow/40 hover:shadow-[0_25px_60px_rgba(254,177,9,0.15)]"
              >
                {/* Full Background Image */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img 
                    src={req.image} 
                    alt={req.num} 
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter brightness-[0.35] contrast-[1.10] saturate-[1.15]"
                    referrerPolicy="no-referrer"
                  />
                  {/* Outer gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-pure-black via-pure-black/60 to-pure-black/20" />
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 w-full h-full flex flex-col items-center justify-between flex-1">
                  {/* Micro Animated Icon Wrap */}
                  <div className="w-14 h-14 rounded-full bg-ceramic-yellow/10 border border-ceramic-yellow/20 flex items-center justify-center text-ceramic-yellow mb-8 shadow-[0_0_20px_rgba(254,177,9,0.2)] group-hover:bg-ceramic-yellow/20 group-hover:border-ceramic-yellow/40 transition-all duration-500">
                    <IconComponent size={24} className="stroke-[1.5]" />
                  </div>

                  <div className="text-center mt-auto">
                    <span className="font-display font-black text-3xl md:text-4xl text-ceramic-yellow mb-3 block tracking-tight">
                      {req.num}
                    </span>

                    <span className="font-body text-sm md:text-base text-pastel-beige/90 font-medium block leading-relaxed max-w-[200px] mx-auto">
                      {req.desc}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Line */}
        <p className="font-heading italic text-xl md:text-2xl text-ceramic-yellow max-w-xl mx-auto leading-relaxed">
          "Tag @snp_cafe_ (or @snp._.cafe for Maharajganj) and you're covered."
        </p>

      </div>
    </section>
  );
}
