import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ArrowRight, Play, ArrowUpRight } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { weeklyLineupData } from '../../data/weeklyLineup';

export default function WeeklyLineup() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);
  const [activeMedia, setActiveMedia] = useState(weeklyLineupData[0].media);
  const [prevMedia, setPrevMedia] = useState<string | null>(null);
  
  const timerRef = useRef<number | null>(null);
  const isTransitioningRef = useRef(false);

  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>, link: string) => {
    if (link.startsWith('http') || link.includes('wa.me')) {
      return; // Standard behavior for external/WhatsApp links
    }

    e.preventDefault();

    if (link.startsWith('#')) {
      const targetId = link.substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(targetElement, { duration: 1.5 });
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    } else {
      navigate(link);
      if (!link.includes('#')) {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(0, { duration: 1 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };
  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => {
      handleSelect((prevIndex) => (prevIndex + 1) % weeklyLineupData.length);
    }, 6000);
  }, []);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  useEffect(() => {
    startTimer();
    
    const handleVisibilityChange = () => {
      if (document.hidden) {
        clearTimer();
      } else {
        startTimer();
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      clearTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [startTimer, clearTimer]);

  const handleSelect = (indexOrFn: number | ((prev: number) => number)) => {
    if (isTransitioningRef.current) return;
    
    setActiveIndex(prev => {
      const nextIndex = typeof indexOrFn === 'function' ? indexOrFn(prev) : indexOrFn;
      if (nextIndex === prev) return prev;
      
      setPrevMedia(weeklyLineupData[prev].media);
      return nextIndex;
    });
  };

  // Drag to scroll logic
  const isDragging = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const scrollPos = useRef({ left: 0, top: 0 });
  const isDragScrolling = useRef(false);

  const handlePointerDown = (e: React.PointerEvent) => {
    if (!listRef.current) return;
    isDragging.current = true;
    isDragScrolling.current = false;
    startPos.current = { x: e.pageX, y: e.pageY };
    scrollPos.current = { 
      left: listRef.current.scrollLeft, 
      top: listRef.current.scrollTop 
    };
    listRef.current.style.scrollBehavior = 'auto'; // Disable smooth scroll while dragging
    listRef.current.style.cursor = 'grabbing';
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current || !listRef.current) return;
    e.preventDefault(); // Prevent text selection/native dragging behavior
    const dx = e.pageX - startPos.current.x;
    const dy = e.pageY - startPos.current.y;
    
    if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
      isDragScrolling.current = true;
    }
    
    listRef.current.scrollLeft = scrollPos.current.left - dx;
    listRef.current.scrollTop = scrollPos.current.top - dy;
  };

  const handlePointerUpOrLeave = () => {
    isDragging.current = false;
    if (listRef.current) {
      listRef.current.style.scrollBehavior = 'smooth';
      listRef.current.style.cursor = 'grab';
    }
    // slight delay to reset isDragScrolling to prevent click events immediately after drag
    setTimeout(() => {
      isDragScrolling.current = false;
    }, 50);
  };

  const handleManualSelect = (index: number) => {
    if (isDragScrolling.current) return;
    handleSelect(index);
    startTimer(); // Restart timer on manual interaction
  };

  // Scroll active item into view
  useEffect(() => {
    if (isDragging.current) return;
    
    if (window.innerWidth < 1024 && listRef.current) {
      const activeEl = listRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        const listCenter = listRef.current.clientWidth / 2;
        const elLeft = activeEl.offsetLeft;
        const elCenter = elLeft + activeEl.clientWidth / 2;
        listRef.current.scrollTo({ left: elCenter - listCenter, behavior: 'smooth' });
      }
    } else if (window.innerWidth >= 1024 && listRef.current) {
      const activeEl = listRef.current.children[activeIndex] as HTMLElement;
      if (activeEl) {
        const listCenter = listRef.current.clientHeight / 2;
        const elTop = activeEl.offsetTop;
        const elCenter = elTop + (activeEl.clientHeight / 2);
        listRef.current.scrollTo({ top: elCenter - listCenter, behavior: 'smooth' });
      }
    }
  }, [activeIndex]);

  const activeData = weeklyLineupData[activeIndex];

  // GSAP Animations
  useGSAP(() => {
    isTransitioningRef.current = true;
    const tl = gsap.timeline({
      onComplete: () => {
        isTransitioningRef.current = false;
        setActiveMedia(activeData.media);
        setPrevMedia(null);
      }
    });

    if (textContentRef.current) {
      const elements = textContentRef.current.querySelectorAll('.animate-item');
      
      // Animate out
      tl.to(elements, {
        y: -10,
        opacity: 0,
        duration: 0.2,
        stagger: 0.02,
        ease: 'power2.in'
      });

      // Animate in
      tl.fromTo(elements, 
        { y: 15, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.4, 
          stagger: 0.05, 
          ease: 'power3.out' 
        }
      );
    }
  }, { dependencies: [activeData.id], scope: containerRef });

  const isVideo = (url: string) => url.match(/\.(mp4|webm)$/i);

  return (
    <section id="events" ref={containerRef} className="py-16 lg:py-24 bg-[#0E0000] relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        
        <div className="mb-12 lg:mb-16 flex flex-col items-start relative z-10 w-full text-left">
          <div className="flex flex-wrap items-center gap-3.5 mb-4 select-none">
            <span className="font-body bg-[#9C0512] text-[#EFEACD] font-bold tracking-[0.25em] uppercase text-sm px-4 py-1.5 rounded-sm inline-block shadow-[0_0_20px_rgba(156,5,18,0.5)]">
              YEAR ROUND
            </span>
            <span className="font-bebas text-[#F8D794] text-sm md:text-base tracking-[0.2em] uppercase">
              SIZZLE • SLICE • SMILE
            </span>
          </div>
          <h2 className="font-heading italic font-bold text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFEACD] via-[#F8D794] to-[#EFEACD] drop-shadow-[0_0_30px_rgba(248,215,148,0.2)] mb-4 lg:mb-5">
            Our Celebrations
          </h2>
          <p className="font-body text-[#EFEACD]/80 max-w-2xl text-sm md:text-lg leading-relaxed">
            Discover what's happening at SNP every month of the year. From specialized menus to live events, there's always something to look forward to.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 h-auto lg:h-[640px]">
          
          {/* LEFT COLUMN - Day List */}
          <div 
            className="order-2 lg:order-1 w-full lg:w-[35%] flex lg:flex-col overflow-x-auto lg:overflow-y-auto gap-3 pb-8 lg:pb-0 hide-scrollbar pr-0 lg:pr-4 snap-x snap-mandatory lg:snap-none cursor-grab relative"
            ref={listRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUpOrLeave}
            onPointerLeave={handlePointerUpOrLeave}
          >
            {weeklyLineupData.map((day, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={day.id}
                  onClick={() => handleManualSelect(idx)}
                  className={`flex items-center gap-4 text-left p-2.5 rounded-xl transition-all duration-300 w-[240px] lg:w-full flex-none snap-center lg:snap-align-none
                    ${isActive 
                      ? 'bg-[#F8D794]/10 border border-[#F8D794] shadow-[0_0_24px_rgba(248,215,148,0.15)] scale-[1.02] opacity-100' 
                      : 'bg-[#EFEACD]/5 border border-transparent opacity-60 hover:opacity-80 hover:bg-[#EFEACD]/10'}`
                  }
                >
                  {/* Thumb - hidden on mobile unless we have space, but specs suggest hidden on mobile horizontally */}
                  <div className="hidden sm:block w-14 h-14 rounded-lg overflow-hidden flex-shrink-0 relative bg-black/20">
                    <img 
                      src={day.thumb} 
                      alt={day.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    {isVideo(day.media) && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play size={16} className="text-white fill-current opacity-80" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-heading font-bold text-[#F8D794] text-sm tracking-wider">
                        {day.dayShort}
                      </span>
                      <span className="font-body text-[#EFEACD]/50 text-xs">
                        {day.date}
                      </span>
                    </div>
                    <h3 className="font-body font-semibold text-[#EFEACD] text-base truncate">
                      {day.title}
                    </h3>
                  </div>

                  <div className="hidden lg:flex w-8 h-8 rounded-full border border-[#EFEACD]/20 items-center justify-center flex-shrink-0 text-[#EFEACD]">
                    <ArrowRight size={14} className={`transition-transform duration-300 ${isActive ? 'translate-x-0.5 text-[#F8D794]' : ''}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT COLUMN - Media Stage */}
          <div className="order-1 lg:order-2 w-full lg:w-[65%] h-[400px] sm:h-[450px] lg:h-full relative rounded-3xl overflow-hidden bg-black/20 border border-[#EFEACD]/10 group">
            
            {/* Background Media Crossfade */}
            <div className="absolute inset-0 w-full h-full">
              {/* Previous Media (fading out) */}
              {prevMedia && (
                <div className="absolute inset-0 z-0 transition-opacity duration-500 opacity-0 pointer-events-none">
                  {isVideo(prevMedia) ? (
                    <video src={prevMedia} muted playsInline className="w-full h-full object-cover" />
                  ) : (
                    <img src={prevMedia} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  )}
                </div>
              )}
              
              {/* Active Media */}
              <div key={activeData.media} className="absolute inset-0 z-10 animate-fade-in">
                {isVideo(activeData.media) ? (
                  <video 
                    src={activeData.media} 
                    autoPlay 
                    muted 
                    loop 
                    playsInline 
                    preload="auto"
                    className="w-full h-full object-cover transform transition-transform duration-[10s] ease-linear scale-105 group-hover:scale-110" 
                  />
                ) : (
                  <img 
                    src={activeData.media} 
                    alt={activeData.title} 
                    className="w-full h-full object-cover transform transition-transform duration-[10s] ease-linear scale-105 group-hover:scale-110" 
                    referrerPolicy="no-referrer"
                  />
                )}
              </div>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t from-[#0E0000]/95 via-[#0E0000]/40 to-transparent pointer-events-none" />

            {/* Content Stage */}
            <div className="absolute inset-0 z-30 p-6 lg:p-10 flex flex-col justify-between" ref={textContentRef}>
              {/* Top Pills */}
              <div className="flex flex-wrap gap-3 animate-item">
                <span className="bg-[#F8D794] text-[#0E0000] font-heading font-bold text-xs uppercase tracking-[0.1em] px-3 py-1.5 rounded-full">
                  {activeData.tag}
                </span>
                {activeData.status === 'LIVE' && (
                  <span className="bg-red-500/20 text-red-500 border border-red-500/50 font-body font-bold text-xs uppercase tracking-wider px-3 py-1.5 rounded-full flex items-center gap-1.5 backdrop-blur-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" /> LIVE
                  </span>
                )}
              </div>

              {/* Bottom Content */}
              <div className="max-w-xl">
                <h3 className="font-heading italic font-bold text-4xl lg:text-5xl text-[#EFEACD] mb-3 animate-item drop-shadow-lg">
                  {activeData.title}
                </h3>
                <p className="font-body text-[#EFEACD]/80 text-sm lg:text-base mb-6 lg:mb-8 animate-item leading-relaxed drop-shadow-md">
                  {activeData.description}
                </p>
                
                <div className="flex flex-wrap gap-4 animate-item">
                  {(() => {
                    const isExternalPrimary = activeData.ctaPrimary.link.startsWith('http') || activeData.ctaPrimary.link.includes('wa.me');
                    const isExternalSecondary = activeData.ctaSecondary.link.startsWith('http') || activeData.ctaSecondary.link.includes('wa.me');
                    
                    return (
                      <>
                        <a 
                          href={activeData.ctaPrimary.link}
                          onClick={(e) => handleCtaClick(e, activeData.ctaPrimary.link)}
                          target={isExternalPrimary ? "_blank" : undefined}
                          rel={isExternalPrimary ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-center gap-2 bg-[#F8D794] text-[#0E0000] font-body font-bold text-sm uppercase tracking-wider px-6 py-3.5 rounded-sm hover:scale-105 transition-transform duration-300 cursor-pointer"
                        >
                          {activeData.ctaPrimary.label}
                          <ArrowUpRight size={16} strokeWidth={2.5} />
                        </a>
                        <a 
                          href={activeData.ctaSecondary.link}
                          onClick={(e) => handleCtaClick(e, activeData.ctaSecondary.link)}
                          target={isExternalSecondary ? "_blank" : undefined}
                          rel={isExternalSecondary ? "noopener noreferrer" : undefined}
                          className="flex items-center justify-center gap-2 bg-transparent text-[#EFEACD] border border-[#EFEACD]/30 hover:border-[#EFEACD] font-body font-semibold text-sm uppercase tracking-wider px-6 py-3.5 rounded-sm hover:bg-[#EFEACD]/10 transition-all duration-300 cursor-pointer"
                        >
                          {activeData.ctaSecondary.label}
                        </a>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out forwards;
        }
      `}</style>
    </section>
  );
}
