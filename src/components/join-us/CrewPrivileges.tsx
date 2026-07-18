import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { seasons } from '../../data/seasons';

import crewKitImg from '../../assets/images/crew_kit_doodle_1781547843368.jpg';
import filmingSizzlerImg from '../../assets/images/filming_sizzler_doodle_1781547863499.jpg';
import wristbandImg from '../../assets/images/wristband_doodle_1781547881625.jpg';
import friendsCrewImg from '../../assets/images/friends_crew_doodle_1781547899483.jpg';

gsap.registerPlugin(ScrollTrigger);

const privileges = [
  {
    num: "01",
    title: "The Crew Kit",
    desc: "Your Day 1 welcome pack: a custom SNP wristband, member badge, and a personalized card with your Crew number. Yours to keep, no matter what."
  },
  {
    num: "02",
    title: "Weekly Food Credit",
    desc: "A free combo every week for the full 65 days — because the best content comes from actually being here."
  },
  {
    num: "03",
    title: "Crew Recognition",
    desc: "Your content featured on SNP's page and in our 'Life at SNP' gallery — tagged, credited, and seen."
  },
  {
    num: "04",
    title: "End-of-Season Reward",
    desc: "Strongest engagement at the end of 65 days gets a standout reward — revealed at kickoff."
  }
];

export default function CrewPrivileges() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemsContainerRef = useRef<HTMLDivElement>(null);
  const collageRef = useRef<HTMLDivElement>(null);

  const imgARef = useRef<HTMLDivElement>(null);
  const imgBRef = useRef<HTMLDivElement>(null);
  const imgCRRef = useRef<HTMLDivElement>(null);
  const imgDRef = useRef<HTMLDivElement>(null);

  const activeSeason = seasons.find(s => s.status === 'active') || seasons[0];
  const isFull = activeSeason.spotsFilled >= activeSeason.spotsTotal;

  const handleScrollToApply = () => {
    const applySec = document.getElementById('section-apply');
    if (applySec) {
      applySec.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useGSAP(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Entrance animation for the left column items
    const items = itemsContainerRef.current?.querySelectorAll('.privilege-item');
    if (items && items.length > 0) {
      if (prefersReducedMotion) {
        gsap.set(items, { opacity: 1, x: 0 });
      } else {
        gsap.fromTo(items,
          { opacity: 0, x: -30 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: itemsContainerRef.current,
              start: 'top 75%',
              once: true
            }
          }
        );
      }
    }

    // 2. Image Collage animations
    if (collageRef.current) {
      const collageImages = collageRef.current.querySelectorAll('.collage-img-wrap');
      
      // Entrance
      if (prefersReducedMotion) {
        gsap.set(collageImages, { opacity: 1, scale: 1 });
      } else {
        gsap.fromTo(collageImages,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: collageRef.current,
              start: 'top 80%',
              once: true
            }
          }
        );

        // Parallax Scrub
        gsap.to(imgARef.current, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: {
            trigger: collageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });

        gsap.to(imgBRef.current, {
          yPercent: 5,
          ease: 'none',
          scrollTrigger: {
            trigger: collageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });

        gsap.to(imgCRRef.current, {
          yPercent: -12,
          ease: 'none',
          scrollTrigger: {
            trigger: collageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });

        gsap.to(imgDRef.current, {
          yPercent: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: collageRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
          }
        });
      }
    }
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-pure-black relative overflow-hidden"
    >
      {/* Decorative accent shadows */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 rounded-full bg-mahogany/15 blur-[120px] -translate-x-1/2" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-ceramic-yellow/5 blur-[150px] translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* LEFT COLUMN: Text Content & Privileges List */}
          <div ref={itemsContainerRef} className="flex flex-col">
            <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase mb-3 block">
              SNP CREW · PRIVILEGES
            </span>
            <h2 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-pastel-beige mb-6 tracking-tight leading-none">
              What You Get
            </h2>
            <p className="font-heading italic text-xl md:text-2xl text-pastel-beige/80 mb-12 max-w-xl leading-relaxed">
              "This isn't just a shoutout — it's real access, real perks, and real recognition for being part of the crew."
            </p>

            {/* List with staggers */}
            <div className="space-y-8 mb-12">
              {privileges.map((item, index) => (
                <div key={index} className="privilege-item flex gap-6 items-start">
                  <span className="font-bebas text-2xl md:text-3xl text-ceramic-yellow tracking-wider pt-0.5 select-none shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-heading font-semibold text-xl md:text-2xl text-pastel-beige mb-2">
                      {item.title}
                    </h3>
                    <p className="font-body text-sm md:text-base text-pastel-beige/70 leading-relaxed max-w-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA button scroll to application section */}
            <div>
              <button 
                onClick={handleScrollToApply}
                className="inline-flex items-center justify-center bg-red-carriage hover:bg-[#b00615] text-white font-body font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(156,5,18,0.3)]"
              >
                {isFull ? 'Join the Waitlist' : 'Apply to Join'}
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN: Layered Image Collage */}
          <div 
            ref={collageRef} 
            className="relative w-full h-[450px] sm:h-[550px] lg:h-[600px] flex items-center justify-center pointer-events-none select-none"
          >
            {/* Image A (largest, back) -> top-right, rotate(-3deg) */}
            <div 
              ref={imgARef}
              className="collage-img-wrap absolute right-4 top-2 w-[55%] aspect-[4/3] rounded-2xl overflow-hidden border border-ceramic-yellow/15 shadow-[0_24px_60px_rgba(14,0,0,0.8)] rotate-[-3deg] z-10"
            >
              <img 
                src={crewKitImg} 
                alt="Crew Kit" 
                className="w-full h-full object-cover rounded-2xl filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Image B: phone filming a sizzler dish — center-left, overlaps A, rotate(2deg) */}
            <div 
              ref={imgBRef}
              className="collage-img-wrap absolute left-4 top-1/4 w-[50%] aspect-[3/4] rounded-2xl overflow-hidden border border-ceramic-yellow/15 shadow-[0_24px_60px_rgba(14,0,0,0.85)] rotate-[2deg] z-20"
            >
              <img 
                src={filmingSizzlerImg} 
                alt="Filming a Sizzler" 
                className="w-full h-full object-cover rounded-2xl filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Image C (small, front): close-up of wristband on wrist — bottom-left, rotate(-5deg) */}
            <div 
              ref={imgCRRef}
              className="collage-img-wrap absolute left-10 bottom-4 w-[40%] aspect-square rounded-2xl overflow-hidden border border-ceramic-yellow/15 shadow-[0_24px_60px_rgba(14,0,0,0.9)] rotate-[-5deg] z-30"
            >
              <img 
                src={wristbandImg} 
                alt="Crew wristband" 
                className="w-full h-full object-cover rounded-2xl filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Image D (small, front): group of 2-3 youth laughing at SNP table — bottom-right, rotate(4deg) */}
            <div 
              ref={imgDRef}
              className="collage-img-wrap absolute right-2 bottom-8 w-[45%] aspect-[4/3] rounded-2xl overflow-hidden border border-ceramic-yellow/15 shadow-[0_24px_60px_rgba(14,0,0,0.9)] rotate-[4deg] z-30"
            >
              <img 
                src={friendsCrewImg} 
                alt="Group laughing at SNP" 
                className="w-full h-full object-cover rounded-2xl filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
