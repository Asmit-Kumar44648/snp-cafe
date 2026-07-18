import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Instagram } from 'lucide-react';
import { seasons, Season } from '../../data/seasons';

gsap.registerPlugin(ScrollTrigger);

export default function CrewWall() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridContainerRef = useRef<HTMLDivElement>(null);

  // Filter seasons that actually have members populated
  const seasonsWithMembers = seasons.filter(s => s.members && s.members.length > 0);
  const showPlaceholder = seasonsWithMembers.length === 0;

  // Active tab state (only relevant if we have multiple seasons with members)
  const [activeSeasonId, setActiveSeasonId] = useState<string>(
    seasonsWithMembers.length > 0 ? seasonsWithMembers[0].id : ''
  );

  const activeSeason = seasonsWithMembers.find(s => s.id === activeSeasonId) || seasonsWithMembers[0];

  useGSAP(() => {
    if (showPlaceholder) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ScrollTrigger batch or stagger entrance
    const cards = gridContainerRef.current?.querySelectorAll('.member-card');
    if (cards && cards.length > 0) {
      if (prefersReducedMotion) {
        gsap.set(cards, { opacity: 1, scale: 1 });
      } else {
        ScrollTrigger.batch(cards, {
          onEnter: (batch) => {
            gsap.fromTo(batch,
              { opacity: 0, scale: 0.9, y: 15 },
              {
                opacity: 1,
                scale: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.08,
                ease: 'power2.out',
                overwrite: 'auto'
              }
            );
          },
          start: 'top 85%'
        });
      }
    }
  }, { scope: containerRef, dependencies: [activeSeasonId, showPlaceholder] });

  const handleTabChange = (seasonId: string) => {
    if (seasonId === activeSeasonId) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setActiveSeasonId(seasonId);
      return;
    }

    // Smooth GSAP crossfade: fade out 0.2s, swap, fade in 0.3s
    const grid = gridContainerRef.current;
    if (grid) {
      gsap.to(grid, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
          setActiveSeasonId(seasonId);
          gsap.to(grid, {
            opacity: 1,
            duration: 0.3,
            delay: 0.05
          });
        }
      });
    } else {
      setActiveSeasonId(seasonId);
    }
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-pure-black relative overflow-hidden border-t border-pastel-beige/5"
    >
      {/* Decorative glows */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-ceramic-yellow/5 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-red-carriage/10 blur-[130px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase block mb-3">
            HALL OF FAME
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-pastel-beige mb-4 tracking-tight leading-none">
            Meet The Crew
          </h2>
          <p className="font-heading text-lg text-pastel-beige/60 italic">
            "Every season adds new faces. Here's who's repped SNP so far."
          </p>
        </div>

        {/* CONDITION 1: Placeholder State (No members populated yet across any season) */}
        {showPlaceholder ? (
          <div className="max-w-xl mx-auto">
            <div className="glass-card rounded-2xl border-2 border-dashed border-ceramic-yellow/20 p-10 md:p-14 text-center shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-radial-gradient from-ceramic-yellow/5 to-transparent pointer-events-none" />
              
              <div className="w-16 h-16 rounded-full bg-ceramic-yellow/10 border border-ceramic-yellow/20 flex items-center justify-center text-ceramic-yellow mx-auto mb-6 shadow-md animate-pulse">
                <Sparkles size={24} />
              </div>

              <p className="font-body text-base md:text-lg text-pastel-beige/80 leading-relaxed">
                Season 01 is just getting started — this wall fills up as the Crew goes live. Check back soon, or be one of the first faces here.
              </p>
            </div>
          </div>
        ) : (
          /* CONDITION 2: Dynamic Season Tabs & Crew Member Grid */
          <div className="space-y-12">
            
            {/* Tabs (only shown if 2 or more seasons have members populated) */}
            {seasonsWithMembers.length >= 2 && (
              <div className="flex justify-center items-center gap-3 flex-wrap pb-4">
                {seasonsWithMembers.map((season) => {
                  const isActive = season.id === activeSeasonId;
                  return (
                    <button
                      key={season.id}
                      onClick={() => handleTabChange(season.id)}
                      className={`px-6 py-2.5 rounded-full font-body font-bold text-xs uppercase tracking-widest transition-all duration-300 ${
                        isActive
                          ? 'bg-ceramic-yellow text-bordeaux border border-ceramic-yellow shadow-[0_0_15px_rgba(248,215,148,0.25)]'
                          : 'bg-[#0E0000]/60 text-pastel-beige/60 hover:text-white border border-pastel-beige/10 hover:border-ceramic-yellow/30'
                      }`}
                    >
                      {season.label}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Grid of members */}
            <div 
              ref={gridContainerRef}
              className="grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {activeSeason?.members.map((member, index) => (
                <div 
                  key={index}
                  className="member-card glass-card rounded-2xl p-6 border border-pastel-beige/5 flex flex-col items-center text-center hover:border-ceramic-yellow/20 transition-all duration-300"
                >
                  {/* Circular photo (96px), border 2px ceramic-yellow */}
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-ceramic-yellow mb-5 shadow-lg shrink-0 relative">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  {/* Name (Cormorant Garamond 600, 18px) */}
                  <h3 className="font-heading font-semibold text-lg text-pastel-beige mb-1">
                    {member.name}
                  </h3>

                  {/* Instagram handle (Plus Jakarta Sans, 13px, opacity 0.6) */}
                  <a 
                    href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-body text-xs text-pastel-beige/60 hover:text-ceramic-yellow transition-colors flex items-center gap-1.5 mb-4"
                  >
                    <Instagram size={13} />
                    {member.instagram}
                  </a>

                  {/* Highlight badge if present (small pill, e.g. "Top Engagement — S01") */}
                  {member.highlight && (
                    <span className="inline-block bg-ceramic-yellow/10 text-ceramic-yellow border border-ceramic-yellow/20 font-body text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      {member.highlight}
                    </span>
                  )}
                </div>
              ))}
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
