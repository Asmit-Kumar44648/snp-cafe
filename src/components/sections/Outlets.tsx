import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import { outlets } from '../../data/content';

export default function Outlets() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.fromTo('.outlet-card', 
      { x: (i) => i % 2 === 0 ? -50 : 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%"
        }
      }
    );
  }, { scope: sectionRef });

  return (
    <section id="outlets" ref={sectionRef} className="py-24 bg-[#080808] relative border-t border-[#1a1a1a]" data-section="outlets">
      {/* Map Texture Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/cartographer.png')]" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="font-display font-bold text-6xl text-[#EFEACD] mb-2">Find Us</h2>
            <p className="font-heading italic text-2xl text-[#EFEACD]/70">Your nearest happiness hotspot.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outlets.map((outlet, idx) => (
            <div key={outlet.id} className="outlet-card glass-card rounded-2xl p-8 border hover:border-[#9C0512]/50 transition-colors">
              <h3 className="font-display font-bold text-3xl text-[#F8D794] mb-6">{outlet.name}</h3>
              
              <div className="flex flex-col gap-5 mb-8">
                <div className="flex items-start gap-4 text-[#EFEACD]/80">
                  <MapPin className="text-[#9C0512] shrink-0 mt-1" size={20} />
                  <p className="font-body text-base">{outlet.address}</p>
                </div>
                <div className="flex items-center gap-4 text-[#EFEACD]/80">
                  <Clock className="text-[#9C0512] shrink-0" size={20} />
                  <p className="font-body text-base">{outlet.hours}</p>
                </div>
                <div className="flex items-center gap-4 text-[#EFEACD]/80">
                  <Phone className="text-[#9C0512] shrink-0" size={20} />
                  <p className="font-body text-base">{outlet.phone}</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <a 
                  href={outlet.mapsLink} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#EFEACD] text-[#0E0000] font-body font-semibold py-3 rounded-sm hover:bg-[#F8D794] hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(248,215,148,0.3)] transition-all duration-300 ease-out"
                >
                  Get Directions <ExternalLink size={16} />
                </a>
                <div className="grid grid-cols-2 gap-3">
                  <a 
                    href={`tel:${outlet.phone.replace(/\s+/g, '')}`}
                    className="w-full flex items-center justify-center bg-transparent border border-[#EFEACD]/20 text-[#EFEACD] font-body font-medium py-3 rounded-sm hover:border-[#9C0512] hover:text-[#9C0512] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 ease-out"
                  >
                    Call Now
                  </a>
                  <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
                    className="w-full flex items-center justify-center bg-[#9C0512]/10 border border-[#9C0512]/50 text-[#9C0512] font-body font-medium py-3 rounded-sm hover:bg-[#9C0512] hover:text-[#EFEACD] hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(156,5,18,0.3)] transition-all duration-300 ease-out cursor-pointer"
                  >
                    Order Online
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
