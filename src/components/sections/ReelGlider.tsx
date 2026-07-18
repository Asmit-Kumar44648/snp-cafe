import React, { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { X, Play } from 'lucide-react';

interface Reel {
  id: string;
  videoSrc: string;
  poster: string;
  title: string;
  tag: string;
  ctaLink: string;
}

interface ReelGliderProps {
  reels: Reel[];
  title?: string;
  subtitle?: string;
}

export default function ReelGlider({ reels, title = "Guest Memories", subtitle = "Experience the vibe" }: ReelGliderProps) {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeReelUrl, setActiveReelUrl] = useState<string | null>(null);
  const isHoveredRef = useRef(false);
  const setWidthRef = useRef(0);
  const isDraggingRef = useRef(false);

  // We need a stable reference to prevent autoScroll from using stale state
  const lightboxRef = useRef(lightboxOpen);
  useEffect(() => {
    lightboxRef.current = lightboxOpen;
  }, [lightboxOpen]);

  // Determine the visually centered card
  const updateCenterCard = useCallback(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    if (track.children.length === 0) return;

    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + trackRect.width / 2;
    
    let closestIndex = -1;
    let minDistance = Infinity;

    const cards = track.querySelectorAll('.reel-card');
    cards.forEach((child, index) => {
      const childRect = child.getBoundingClientRect();
      const childCenter = childRect.left + childRect.width / 2;
      const distance = Math.abs(trackCenter - childCenter);
      
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setActiveVideoIndex(prevActive => {
      if (prevActive !== closestIndex) {
        videoRefs.current.forEach((video, i) => {
          if (!video) return;
          if (i === closestIndex && !lightboxRef.current) {
            video.preload = "auto";
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
        return closestIndex;
      }
      return prevActive;
    });
  }, []);

  // Calculate width of one set of cards for infinite loop
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const calculateWidth = () => {
      if (track.children.length > reels.length) {
        const first = track.children[0] as HTMLElement;
        const next = track.children[reels.length] as HTMLElement;
        setWidthRef.current = next.offsetLeft - first.offsetLeft;
        
        // Initial scroll to middle set so we don't see empty space
        if (track.scrollLeft < setWidthRef.current && setWidthRef.current > 0) {
          track.scrollLeft = setWidthRef.current;
        }
      }
    };
    
    calculateWidth();
    setTimeout(calculateWidth, 100); // Re-calculate after potential layout shifts

    const handleResize = () => calculateWidth();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [reels.length]);

  // Update progress bar and handle infinite bounds checking on scroll
  const handleScroll = () => {
    if (!trackRef.current || !progressRef.current) return;
    const track = trackRef.current;
    const setWidth = setWidthRef.current;

    // Infinite loop bound constraints
    if (setWidth > 0 && !isDraggingRef.current) {
      if (track.scrollLeft >= setWidth * 2) {
        track.scrollLeft -= setWidth;
      } else if (track.scrollLeft <= setWidth * 0.5) {
        // Only jump if we still have room on the right
        track.scrollLeft += setWidth;
      }
    }

    // Animation progress purely visual
    let progress = 0;
    if (setWidth > 0) {
      let loopPos = (track.scrollLeft - setWidth * 0.5) % setWidth;
      if (loopPos < 0) loopPos += setWidth;
      progress = (loopPos / setWidth) * 100;
    }
    gsap.to(progressRef.current, { width: `${progress}%`, duration: 0.1, ease: 'power1.out' });
  };

  // Mouse Drag to Scroll
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    
    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      isDraggingRef.current = false; // reset drag flag
      track.style.cursor = 'grabbing';
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    };
    const onMouseLeave = () => {
      isDown = false;
      track.style.cursor = 'grab';
    };
    const onMouseUp = () => {
      isDown = false;
      track.style.cursor = 'grab';
      
      // Perform bound check after drag ends to prevent jumping mid-drag
      const setWidth = setWidthRef.current;
      if (setWidth > 0) {
        if (track.scrollLeft >= setWidth * 2) {
          track.scrollLeft -= setWidth;
        } else if (track.scrollLeft <= setWidth * 0.5) {
          track.scrollLeft += setWidth;
        }
      }
      setTimeout(() => { isDraggingRef.current = false; }, 50);
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2;
      if (Math.abs(walk) > 5) {
        isDraggingRef.current = true;
      }
      track.scrollLeft = scrollLeft - walk;
    };

    track.addEventListener('mousedown', onMouseDown);
    track.addEventListener('mouseleave', onMouseLeave);
    track.addEventListener('mouseup', onMouseUp);
    track.addEventListener('mousemove', onMouseMove);

    return () => {
      track.removeEventListener('mousedown', onMouseDown);
      track.removeEventListener('mouseleave', onMouseLeave);
      track.removeEventListener('mouseup', onMouseUp);
      track.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let frameCount = 0;

    const autoScroll = () => {
      const setWidth = setWidthRef.current;
      if (!isHoveredRef.current && !lightboxRef.current && !isDraggingRef.current && setWidth > 0) {
        track.scrollLeft += 1.5; // Auto-scroll speed
      }
      
      frameCount++;
      if (frameCount % 6 === 0) {
        updateCenterCard();
      }

      animationId = window.requestAnimationFrame(autoScroll);
    };

    animationId = window.requestAnimationFrame(autoScroll);
    updateCenterCard();

    return () => window.cancelAnimationFrame(animationId);
  }, [updateCenterCard]);

  const openLightbox = (e: React.MouseEvent, url: string) => {
    if (isDraggingRef.current) {
      e.preventDefault();
      return;
    }
    setActiveReelUrl(url);
    setLightboxOpen(true);
    videoRefs.current.forEach(video => {
      if (video) video.pause();
    });
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setActiveReelUrl(null);
    setActiveVideoIndex(prevActive => {
      if (prevActive !== null && videoRefs.current[prevActive]) {
        videoRefs.current[prevActive]?.play().catch(() => {});
      }
      return prevActive;
    });
  };

  // Clone reels for infinite scrolling
  const allReels = [...reels, ...reels, ...reels];

  return (
    <section ref={containerRef} className="py-16 bg-[#0E0000] relative overflow-hidden flex flex-col pt-20">
      <div className="max-w-7xl mx-auto px-6 mb-10 w-full text-center relative z-10 flex flex-col items-center">
        <span className="font-body bg-[#9C0512] text-[#EFEACD] font-bold tracking-[0.25em] uppercase text-sm px-4 py-1.5 rounded-sm mb-4 inline-block shadow-[0_0_25px_rgba(156,5,18,0.6)]">
          {subtitle}
        </span>
        <h2 className="font-heading italic font-bold text-5xl md:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFEACD] via-[#F8D794] to-[#EFEACD] drop-shadow-[0_0_30px_rgba(248,215,148,0.2)] mb-4">
          {title}
        </h2>
        <p className="font-body text-[#EFEACD]/80 max-w-sm mx-auto text-sm md:text-base leading-relaxed">
          Tag us at our any social handle<br />and get a chance to be featured over here
        </p>
      </div>

      {/* Track */}
      <div 
        ref={trackRef}
        onScroll={handleScroll}
        onMouseEnter={() => { isHoveredRef.current = true; }}
        onMouseLeave={() => { isHoveredRef.current = false; }}
        onTouchStart={() => { isHoveredRef.current = true; }}
        onTouchEnd={() => { isHoveredRef.current = false; }}
        className="reel-track flex overflow-x-auto gap-6 sm:gap-8 md:gap-12 px-[50vw] py-12 hide-scrollbar items-center cursor-grab"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {allReels.map((reel, index) => {
          const uniqueId = `${reel.id}-${index}`;
          const isActive = activeVideoIndex === index;
          return (
            <div 
              key={uniqueId}
              className={`reel-card flex-none w-[60vw] sm:w-[35vw] lg:w-[18vw] max-w-[220px] aspect-[9/16] rounded-2xl overflow-hidden relative cursor-pointer group transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] transform-gpu
                ${isActive 
                  ? 'scale-[1.05] opacity-100 z-20 shadow-[0_0_60px_rgba(156,5,18,0.7)] border-2 border-[#9C0512]' 
                  : 'scale-[0.80] opacity-30 z-0 border border-transparent'} 
                hover:scale-[1.12] hover:opacity-100 hover:z-50 hover:shadow-[0_0_100px_rgba(255,10,20,0.9)] hover:border-2 hover:border-[#EFEACD]/70`}
              onClick={(e) => openLightbox(e, reel.videoSrc)}
            >
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                data-index={index}
                src={reel.videoSrc}
                poster={reel.poster}
                preload="none"
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                aria-label={reel.title}
              />
              
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-[#0E0000]/95 via-[#0E0000]/30 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-90' : 'opacity-100'}`} />
              
              {/* Content */}
              <div className={`absolute inset-x-0 bottom-0 p-6 flex flex-col items-center text-center transform transition-all duration-500 ease-out ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <span className="bg-[#9C0512] text-[#EFEACD] text-[10px] md:text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-sm mb-3 shadow-[0_0_15px_rgba(156,5,18,0.5)]">
                  {reel.tag}
                </span>
                <h3 className="font-heading italic text-xl md:text-2xl text-[#EFEACD] mb-2">{reel.title}</h3>
                <div className="flex items-center justify-center gap-2 text-[#EFEACD]/80 text-sm font-body mt-2">
                  <Play size={16} className="fill-current text-[#9C0512]" /> Tap to view
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-sm px-6">
        <div className="w-full h-[2px] bg-[#EFEACD]/10 rounded-full overflow-hidden">
          <div 
            ref={progressRef}
            className="h-full bg-[#9C0512] w-0 rounded-full shadow-[0_0_10px_rgba(156,5,18,1)]"
          />
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && activeReelUrl && (
        <div className="fixed inset-0 z-[100] bg-[#0E0000]/95 backdrop-blur-md flex items-center justify-center p-4" onClick={closeLightbox}>
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 p-3 text-[#EFEACD]/70 hover:text-[#EFEACD] transition-colors bg-black/50 hover:bg-black/80 hover:scale-110 rounded-full border border-[#EFEACD]/20"
            aria-label="Close modal"
          >
            <X size={28} />
          </button>
          <div className="relative w-full max-w-[450px] max-h-[90vh] aspect-[9/16] rounded-3xl overflow-hidden bg-black shadow-[0_0_80px_rgba(156,5,18,0.3)] border border-[#EFEACD]/10 transform translate-y-0" onClick={e => e.stopPropagation()}>
            <video
              src={activeReelUrl}
              controls
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      )}

      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
