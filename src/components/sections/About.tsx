import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRefs = useRef<any>([]);

  useGSAP(() => {
    // Animate images
    imgRefs.current.forEach((img: HTMLImageElement, i: number) => {
      if (!img) return;
      gsap.from(img, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse"
        },
        clipPath: "inset(100% 0 0 0)",
        ease: "power4.out",
        duration: 1.2,
        delay: i * 0.2
      });
    });
    
    // Animate stats
    gsap.from('.stat-item', {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8
    });
  }, { scope: sectionRef });

  return (
    <section id="about" ref={sectionRef} className="min-h-screen bg-[#0E0000] py-20 px-6 sm:px-12 flex items-center z-10 relative bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMEUwMDAwIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PC9yZWN0Pgo8L3N2Zz4=')]" data-section="about">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center">
          <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4 select-none">
            <span className="font-bebas text-[#F8D794] text-lg sm:text-xl md:text-2xl tracking-[0.25em]">SIZZLE • SLICE • SMILE</span>
            <span className="text-[#9C0512] hidden sm:inline text-lg font-bebas">•</span>
            <span className="font-bebas text-[#EFEACD]/40 text-sm sm:text-base tracking-[0.2em] uppercase">EST. KAHALGAON</span>
          </div>
          <h2 className="font-display font-bold text-5xl md:text-7xl text-[#EFEACD] leading-tight mb-8">
            Not Just Food.<br/>
            <span className="italic text-[#9C0512]">An Experience.</span>
          </h2>
          
          <p className="font-body text-[#EFEACD]/80 text-lg md:text-xl leading-relaxed mb-12 max-w-xl">
            Born in Kahalgaon, SNP changed the way the city hangs out. We bring dark street street-food luxury to Bihar with our signature sizzlers, loaded pizzas, and an aesthetic that rivals premium cafes. <span className="font-semibold text-[#EFEACD]">Bihar ki apni vibe.</span> We are more than delicious food—we are a place where youth, families, and friends create memories.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {[
              { stat: "3", label: "Outlets" },
              { stat: "10K+", label: "Happy Customers" },
              { stat: "50+", label: "Menu Items" },
              { stat: "100%", label: "Franchise Ready" }
            ].map((s, i) => (
              <div key={i} className="stat-item">
                <div className="font-bebas text-5xl md:text-6xl text-[#F8D794] leading-none mb-1">{s.stat}</div>
                <div className="font-heading italic text-xl text-[#EFEACD]/70">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Images */}
        <div className="h-[400px] lg:h-full min-h-[500px] w-full rounded-xl overflow-hidden border border-[#9C0512]/20 shadow-[0_0_40px_rgba(156,5,18,0.15)] relative">
          <img 
            ref={(el: HTMLImageElement | null) => { imgRefs.current[0] = el; }}
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000" 
            alt="Restaurant interior" 
            className="absolute inset-0 w-full h-full object-cover scale-105"
          />
        </div>
      </div>
    </section>
  );
}
