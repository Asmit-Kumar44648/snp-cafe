import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { getWhatsAppLink, prefilledMessages } from '../../lib/whatsapp';
import heroBg from '../../assets/images/snp_hero_exterior.jpg';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // Text entrance
    gsap.fromTo('.hero-word', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power4.out", delay: 0.3 }
    );

    gsap.fromTo('.hero-sub', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 0.8 }
    );
    
    gsap.fromTo('.hero-btn', 
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, delay: 1.0 }
    );
  }, { scope: container });

  return (
    <section id="home" ref={container} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E0000]" data-section="hero">
      {/* Real SNP Cafe Building Exterior Full Layout Backdrop */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-40 scale-105 transition-transform duration-1000"
        style={{ 
          backgroundImage: `url(${heroBg})`,
          filter: 'brightness(0.7) contrast(1.1)'
        }}
      />
      
      {/* Dark luxury gradient overlays for crisp text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/60 to-[#0E0000]/80" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(156,5,18,0.25)_0%,rgba(14,0,0,0.85)_80%)]" />

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 text-center mt-12 md:mt-20">
        <h1 className="font-heading italic font-extrabold text-5xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFEACD] via-[#F8D794] to-[#EFEACD] drop-shadow-[0_0_40px_rgba(248,215,148,0.3)] tracking-tight mb-4">
          <span className="hero-word inline-block">SIZZLE</span>{' '}
          <span className="hero-word inline-block text-[#9C0512]">.</span>{' '}
          <span className="hero-word inline-block">SLICE</span>{' '}
          <span className="hero-word inline-block text-[#9C0512]">.</span>{' '}
          <span className="hero-word inline-block">SMILE</span>
        </h1>
        
        <p className="hero-sub font-body text-[#EFEACD]/90 text-lg md:text-2xl max-w-2xl mx-auto font-light leading-relaxed mb-10 tracking-wide">
          Sizzler 'n' Pizza Cafe — Where authentic Italian pizzas, sizzling platters, and unforgettable moments come together.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <a
            href={getWhatsAppLink(prefilledMessages.orderNow)}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn w-full sm:w-auto bg-[#9C0512] hover:bg-[#B70615] text-[#EFEACD] font-bebas text-2xl tracking-[0.2em] px-10 py-4 rounded-full border border-[#F8D794]/30 shadow-[0_0_30px_rgba(156,5,18,0.6)] hover:shadow-[0_0_45px_rgba(248,215,148,0.5)] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            ORDER VIA WHATSAPP
          </a>
          <Link
            to="/menu"
            className="hero-btn w-full sm:w-auto bg-transparent hover:bg-[#F8D794]/10 text-[#F8D794] font-bebas text-2xl tracking-[0.2em] px-10 py-4 rounded-full border border-[#F8D794]/40 hover:border-[#F8D794] hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
          >
            VIEW MENU
          </Link>
        </div>
      </div>
    </section>
  );
}
