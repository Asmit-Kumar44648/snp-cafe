import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { getWhatsAppLink, prefilledMessages } from '../../lib/whatsapp';
import pizzaHeroBg from '../../assets/images/pizza_hero_backdrop.png';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useGSAP(() => {
    // Floating food animation
    gsap.utils.toArray('.floating-item').forEach((item: any, i) => {
      gsap.to(item, {
        y: -30,
        rotation: i % 2 === 0 ? 5 : -5,
        duration: 3 + i,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });
    });

    // Text entrance
    gsap.fromTo('.hero-word', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power4.out", delay: 0.5 }
    );

    gsap.fromTo('.hero-sub', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.2 }
    );
    
    gsap.fromTo('.hero-btn', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, delay: 1.4 }
    );
  }, { scope: container });

  return (
    <section id="home" ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E0000]" data-section="hero">
      {/* Background */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-65 transition-all duration-700"
        style={{ 
          backgroundImage: `url(${pizzaHeroBg})`,
          filter: 'blur(3px) sepia(20%) brightness(0.65) contrast(1.05)'
        }}
      />
      
      {/* Radial Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(156,5,18,0.2)_0%,rgba(14,0,0,1)_80%)]" />

      {/* Floating Elements (abstract div representation for PNGs if missing) */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <div className="floating-item absolute top-1/4 left-[10%] w-32 h-32 bg-[url('https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=200')] bg-cover rounded-full shadow-[0_24px_80px_rgba(156,5,18,0.4)] opacity-80 mix-blend-luminosity border border-[#EFEACD]/10" />
        <div className="floating-item absolute bottom-1/3 right-[15%] w-40 h-40 bg-[url('https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=200')] bg-cover rounded-full shadow-[0_24px_80px_rgba(156,5,18,0.4)] opacity-80 mix-blend-luminosity border border-[#EFEACD]/10" />
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-16">
        <div className="mb-4 hero-sub select-none">
          <span 
            className="font-bebas text-[#F8D794] text-sm md:text-base tracking-[0.4em] uppercase opacity-90 transition-all duration-500 hover:tracking-[0.6em]"
            style={{ 
              textShadow: 'rgba(0, 0, 0, 0.4) -1px -1px 1px, rgba(255, 255, 255, 0.1) 1px 1px 1px' 
            }}
          >
            SIZZLE <span className="text-[#9C0512]">•</span> SLICE <span className="text-[#9C0512]">•</span> SMILE
          </span>
        </div>

        <div className="mb-8 inline-flex hero-sub items-center gap-2 px-4 py-1.5 rounded-full border border-[#F8D794]/20 bg-[#64090C]/30 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#F8D794] animate-pulse" />
          <span className="font-bebas text-[#F8D794] tracking-wider text-sm mt-0.5">3 Outlets • Swiggy • Zomato</span>
        </div>
        
        <h1 ref={textRef} className="font-display font-black italic text-[#EFEACD] text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-tight mb-6 uppercase flex flex-wrap justify-center gap-x-4">
          <span className="hero-word">Where</span>
          <span className="hero-word">Every</span>
          <span className="hero-word text-[#9C0512]">—</span>
          <br className="hidden md:block"/>
          <span className="hero-word text-[#9C0512]">Bite</span>
          <span className="hero-word">Hits</span>
        </h1>
        
        <p className="hero-sub font-heading italic font-medium text-2xl md:text-4xl text-[#EFEACD]/70 mb-10">
          Kahalgaon's First Youth Catering Cafe'
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/franchise#contact-section" className="hero-btn w-full sm:w-[200px] bg-[#9C0512] hover:bg-[#64090C] text-[#EFEACD] font-body px-8 py-4 rounded-sm text-sm uppercase tracking-wider font-semibold shadow-[0_10px_40px_rgba(156,5,18,0.3)] hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(156,5,18,0.4)] transition-all duration-300 ease-out text-center">
            BOOK US
          </Link>

          <div className="hidden sm:block hero-btn w-[1px] h-8 bg-gradient-to-b from-[#EFEACD]/0 via-[#EFEACD]/30 to-[#EFEACD]/0" />

          <Link to="/franchise" className="hero-btn w-full sm:w-[200px] bg-gradient-to-r from-[#F8D794] via-[#FFEAAA] to-[#D4AF37] text-[#0E0000] font-body px-8 py-4 rounded-sm text-sm uppercase tracking-wider font-bold shadow-[0_0_30px_rgba(248,215,148,0.5)] hover:scale-105 active:scale-95 hover:shadow-[0_0_50px_rgba(248,215,148,0.8)] hover:brightness-110 transition-all duration-300 ease-out text-center flex items-center justify-center border border-[#FFEAAA]/50">
            GET FRANCHISE
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#EFEACD]/0 via-[#EFEACD]/50 to-[#EFEACD]/0 animate-[pulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
