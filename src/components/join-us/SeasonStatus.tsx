import React, { useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { seasons } from '../../data/seasons';

export default function SeasonStatus() {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillBarRef = useRef<HTMLDivElement>(null);

  const activeSeason = seasons.find(s => s.status === 'active') || seasons[0];
  const { spotsTotal, spotsFilled, endDate, label, status } = activeSeason;

  const isFull = spotsFilled >= spotsTotal;
  const isCompleted = status === 'completed';

  // Calculate days remaining
  const calculateDaysRemaining = () => {
    const today = new Date();
    const end = new Date(endDate);
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const daysRemaining = calculateDaysRemaining();

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      if (fillBarRef.current) {
        fillBarRef.current.style.width = `${(spotsFilled / spotsTotal) * 100}%`;
      }
      return;
    }

    // Fade and rise entrance
    gsap.fromTo(containerRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Progress bar fill animation with 0.3s delay
    if (fillBarRef.current) {
      gsap.fromTo(fillBarRef.current,
        { width: '0%' },
        { 
          width: `${(spotsFilled / spotsTotal) * 100}%`,
          duration: 1.2,
          ease: 'power3.out',
          delay: 0.3
        }
      );
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="w-full bg-mahogany border-y border-[#9C0512]/15 py-12 md:py-16 px-6 relative overflow-hidden"
    >
      {/* Decorative ambient background */}
      <div className="absolute inset-0 bg-radial-gradient from-red-carriage/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">
        
        {/* LEFT: Status Pill */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left shrink-0">
          <span className="font-bebas text-xs tracking-[0.2em] text-pastel-beige/40 uppercase mb-2">
            Membership Status
          </span>
          <div 
            className={`font-body font-bold text-xs uppercase tracking-wider px-4 py-2 rounded-full border shadow-md transition-all duration-300 ${
              isFull 
                ? 'bg-neutral-800 text-neutral-400 border-neutral-700' 
                : 'bg-ceramic-yellow text-bordeaux border-ceramic-yellow/30'
            }`}
          >
            {label} · {isFull ? 'Crew Full' : 'Applications Open'}
          </div>
        </div>

        {/* CENTER: Progress Indicator */}
        <div className="flex-1 w-full max-w-md flex flex-col items-center">
          <div className="w-full flex justify-between items-center mb-3 text-sm font-heading font-medium tracking-wide">
            <span className="text-pastel-beige/90">Crew Assembly Progress</span>
            <span className="text-ceramic-yellow font-bold">{spotsFilled} / {spotsTotal} Spots Filled</span>
          </div>
          
          {/* Progress Bar Track */}
          <div className="w-full h-3 bg-pure-black/60 rounded-full overflow-hidden border border-pastel-beige/10 p-[1.5px]">
            <div 
              ref={fillBarRef}
              className="h-full bg-ceramic-yellow rounded-full shadow-[0_0_10px_rgba(248,215,148,0.5)]"
              style={{ width: '0%' }}
            />
          </div>
        </div>

        {/* RIGHT: Countdown */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right shrink-0">
          <span className="font-bebas text-xs tracking-[0.2em] text-pastel-beige/40 uppercase mb-2">
            Timeline
          </span>
          <p className="font-heading font-semibold text-lg md:text-xl text-pastel-beige tracking-wide">
            {isCompleted ? (
              <span className="text-ceramic-yellow italic">
                {label} Complete — Season 02 Coming Soon
              </span>
            ) : (
              <span>
                <strong className="text-ceramic-yellow text-xl md:text-2xl font-bold font-display leading-none mr-1">
                  {daysRemaining}
                </strong> 
                Days Left in {label}
              </span>
            )}
          </p>
        </div>

      </div>
    </section>
  );
}
