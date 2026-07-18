import React, { useState, useRef, useMemo } from 'react';
import { ArrowRight, X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { galleryItems, ctaCards, GalleryItem, CtaCard } from '../data/gallery';

gsap.registerPlugin(ScrollTrigger);

export default function GalleryPage() {
  const containerRef = useRef<HTMLElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Combine items & CTAs
  const mixedGrid = useMemo(() => {
    const result: (GalleryItem | CtaCard)[] = [];
    galleryItems.forEach((item, index) => {
      result.push(item);
      const matchedCta = ctaCards.find(cta => cta.afterIndex === index);
      if (matchedCta) {
        result.push(matchedCta);
      }
    });
    return result;
  }, []);

  // GSAP Animations
  useGSAP(() => {
    // Hero Text Entrance
    if (heroTextRef.current) {
      const chars = heroTextRef.current.querySelectorAll('.char');
      gsap.from(chars, {
        y: 50,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: 'power3.out',
        delay: 0.2
      });
    }

    // Grid Items Batched Entrance
    const matchMedia = gsap.matchMedia();
    matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.batch(".grid-item", {
        start: "top 90%",
        onEnter: (batch) => {
          gsap.fromTo(batch, 
            { opacity: 0, scale: 0.95 },
            { 
              opacity: 1, 
              scale: 1, 
              stagger: 0.08, 
              duration: 0.6, 
              ease: "power3.out",
              overwrite: "auto"
            }
          );
        }
      });
    });

  }, { scope: containerRef });

  const openLightbox = (item: GalleryItem) => {
    const pureIndex = galleryItems.findIndex(i => i.id === item.id);
    if (pureIndex !== -1) setLightboxIndex(pureIndex);
  };

  const closeLightbox = () => setLightboxIndex(null);

  const prevItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === 0 ? galleryItems.length - 1 : lightboxIndex - 1);
    }
  };

  const nextItem = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex(lightboxIndex === galleryItems.length - 1 ? 0 : lightboxIndex + 1);
    }
  };

  const handleVideoHover = (e: React.MouseEvent<HTMLDivElement>, isHover: boolean) => {
    const video = e.currentTarget.querySelector('video');
    if (!video) return;
    
    if (isHover) {
      video.play().catch(() => {}); // catch autoplay restrictions gracefully
    } else {
      video.pause();
    }
  };

  return (
    <main ref={containerRef} className="bg-[#080808] min-h-screen">
      {/* HERO BAND */}
      <section className="relative w-full h-[60vh] min-h-[450px] md:h-[65vh] flex flex-col items-center justify-center pt-32 pb-16 overflow-hidden bg-[#0E0000]">
        <video 
          src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoy.mp4" 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/60 to-transparent" />
        
        <div className="relative z-10 text-center px-6 w-full flex flex-col items-center justify-center mt-6" ref={heroTextRef}>
          <div className="flex flex-col items-center gap-3.5 mb-6 md:mb-8 select-none">
            <p className="font-heading tracking-[0.3em] md:tracking-[0.4em] text-[#EFEACD] bg-[#9C0512] px-5 py-2 rounded-sm shadow-[0_0_25px_rgba(156,5,18,0.7)] font-bold uppercase text-[11px] md:text-sm animate-pulse m-0">
               Food • Sizzlers • Late Nights
            </p>
            <span className="font-bebas text-xs md:text-sm tracking-[0.25em] text-[#F8D794]">
              SIZZLE • SLICE • SMILE
            </span>
          </div>
          <h1 className="font-heading italic font-black text-center flex flex-col items-center justify-center w-full leading-[1.0]"
              style={{ fontSize: 'clamp(40px, 7vw, 110px)' }}>
            <div className="flex items-center justify-center gap-[0.2em] md:gap-[0.25em] text-[#EFEACD] pt-2 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              <span className="char inline-block">L</span>
              <span className="char inline-block">I</span>
              <span className="char inline-block">F</span>
              <span className="char inline-block">E</span>
              <span className="char inline-block ml-3 md:ml-4">A</span>
              <span className="char inline-block">T</span>
            </div>
            <div className="flex text-[#F8D794] drop-shadow-[0_0_20px_rgba(248,215,148,0.8)] filter drop-shadow-[0_4px_25px_rgba(156,5,18,0.95)] mt-2 md:mt-3 pb-4">
              <span className="char inline-block hover:scale-110 transition-transform duration-300">S</span>
              <span className="char inline-block hover:scale-110 transition-transform duration-300">N</span>
              <span className="char inline-block hover:scale-110 transition-transform duration-300">P</span>
            </div>
          </h1>
        </div>
      </section>

      {/* MASONRY GRID */}
      <section className="py-24 px-4 md:px-6 lg:px-8 max-w-[1600px] mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
          
          {mixedGrid.map((item, index) => {
            
            // Render CTA Card
            if ('eyebrow' in item) {
              const cta = item as CtaCard;
              return (
                <div key={`cta-${index}`} className="grid-item break-inside-avoid mb-4 rounded-2xl overflow-hidden relative w-full aspect-[4/5] sm:aspect-square flex flex-col justify-end p-6 md:p-8 bg-black/40 border border-[#F8D794]/20 group">
                  <div className="absolute inset-0 z-0 overflow-hidden isolate">
                    <img src={cta.bgImage} className="w-full h-full object-cover blur-[20px] scale-110 brightness-50 mix-blend-overlay transition-transform duration-700 group-hover:scale-125" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] to-transparent z-10" />
                  </div>
                  
                  <div className="relative z-20 text-center flex flex-col items-center">
                    <span className="font-heading font-bold text-[#F8D794] text-xs md:text-sm tracking-[0.2em] uppercase mb-4 py-1 px-3 bg-[#F8D794]/10 rounded-full backdrop-blur-md">
                      {cta.eyebrow}
                    </span>
                    <h3 className="font-heading italic font-bold text-3xl md:text-4xl text-[#EFEACD] mb-3">
                      {cta.heading}
                    </h3>
                    <p className="font-body text-[#EFEACD]/70 text-sm md:text-base mb-8 max-w-xs mx-auto">
                      {cta.description}
                    </p>
                    {cta.ctaLink === "#" ? (
                      <button 
                        onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
                        className="inline-flex items-center gap-2 bg-[#F8D794] text-[#0E0000] font-body font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:bg-white transition-colors duration-300 cursor-pointer"
                      >
                        {cta.ctaLabel} <ArrowRight size={16} />
                      </button>
                    ) : (
                      <Link to={cta.ctaLink} className="inline-flex items-center gap-2 bg-[#F8D794] text-[#0E0000] font-body font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-full hover:bg-white transition-colors duration-300">
                        {cta.ctaLabel} <ArrowRight size={16} />
                      </Link>
                    )}
                  </div>
                </div>
              );
            }

            // Render Gallery Item
            const mediaItem = item as GalleryItem;
            
            // Define Aspect Ratio Class
            let aspectClass = "aspect-square";
            if (mediaItem.aspect === 'portrait') aspectClass = "aspect-[4/5]";
            if (mediaItem.aspect === 'landscape') aspectClass = "aspect-[16/10]";

            return (
              <div 
                key={mediaItem.id} 
                className={`grid-item break-inside-avoid mb-4 rounded-2xl overflow-hidden relative w-full cursor-pointer group ${aspectClass}`}
                onClick={() => openLightbox(mediaItem)}
                onMouseEnter={(e) => handleVideoHover(e, true)}
                onMouseLeave={(e) => handleVideoHover(e, false)}
              >
                {mediaItem.type === 'video' ? (
                  <>
                    <video 
                      src={mediaItem.src} 
                      poster={mediaItem.poster}
                      muted 
                      loop 
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center">
                      <Play size={14} className="text-white fill-current ml-0.5" />
                    </div>
                  </>
                ) : (
                  <img 
                    src={mediaItem.src} 
                    alt={mediaItem.alt} 
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col justify-end p-6">
                  <p className="text-[#EFEACD] font-heading font-medium text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300 ease-out">
                    {mediaItem.alt}
                  </p>
                </div>
              </div>
            );
          })}
          
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0E0000]/95 backdrop-blur-md">
          {/* Close Backdrop */}
          <div className="absolute inset-0 cursor-pointer" onClick={closeLightbox} />
          
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 text-[#EFEACD] hover:text-white bg-black/20 p-2 rounded-full backdrop-blur-md transition-colors"
          >
            <X size={24} />
          </button>

          <button 
            onClick={prevItem}
            className="absolute left-4 md:left-12 z-50 text-[#EFEACD]/50 hover:text-white bg-black/20 p-3 md:p-4 rounded-full backdrop-blur-md transition-colors hover:scale-110 active:scale-95"
          >
            <ChevronLeft size={32} />
          </button>

          <button 
            onClick={nextItem}
            className="absolute right-4 md:right-12 z-50 text-[#EFEACD]/50 hover:text-white bg-black/20 p-3 md:p-4 rounded-full backdrop-blur-md transition-colors hover:scale-110 active:scale-95"
          >
            <ChevronRight size={32} />
          </button>

          {/* Active Item Container */}
          <div className="relative z-40 max-w-5xl w-full px-16 h-[85vh] flex items-center justify-center animate-in fade-in zoom-in-95 duration-300 pointer-events-none">
            {galleryItems[lightboxIndex].type === 'video' ? (
              <video 
                src={galleryItems[lightboxIndex].src} 
                poster={galleryItems[lightboxIndex].poster}
                controls
                autoPlay
                className="max-h-full max-w-full rounded-md shadow-2xl pointer-events-auto"
              />
            ) : (
              <img 
                src={galleryItems[lightboxIndex].src} 
                alt={galleryItems[lightboxIndex].alt} 
                className="max-h-full max-w-full object-contain rounded-md shadow-2xl pointer-events-auto"
              />
            )}
            
            <p className="absolute bottom-[-40px] left-1/2 -translate-x-1/2 font-heading text-[#EFEACD] text-lg tracking-wide hidden md:block">
              {galleryItems[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
