import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Step {
  num: string;
  title: string;
  desc: string;
}

const steps: Step[] = [
  {
    num: "01",
    title: "Reach Out",
    desc: "Send us your city and investment range over WhatsApp. No forms, no waiting."
  },
  {
    num: "02",
    title: "Discussion & Fit Check",
    desc: "A direct call to align on location, format, and what makes sense for your market."
  },
  {
    num: "03",
    title: "Setup & Training",
    desc: "Kitchen setup guidance, full menu training, and branding handover — everything mapped out."
  },
  {
    num: "04",
    title: "Launch",
    desc: "Go live with the complete SNP identity — menu, branding, and marketing playbook in hand."
  }
];

export default function TheProcess() {
  const containerRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const isMobile = window.innerWidth < 1024;

    if (!isMobile) {
      // Horizontal path line scale on scroll scrub (scroll-linked)
      gsap.fromTo(progressLineRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: true
          }
        }
      );
    } else {
      // Vertical path line scale on scroll scrub
      gsap.fromTo(progressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: 'top center',
          ease: 'none',
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'top 75%',
            end: 'bottom 45%',
            scrub: true
          }
        }
      );
    }

    // Parallax background numbers
    const stepItems = containerRef.current?.querySelectorAll('.step-item');
    if (stepItems) {
      stepItems.forEach((item, index) => {
        const bgNum = item.querySelector('.bg-number');
        if (bgNum) {
          gsap.fromTo(bgNum,
            { y: 30 },
            {
              y: -30,
              ease: 'none',
              scrollTrigger: {
                trigger: item,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            }
          );
        }
      });
    }

  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 bg-bordeaux relative overflow-hidden border-b border-red-carriage/20">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase block mb-3">
            The Process
          </span>
          <h2 className="font-display font-medium text-4xl md:text-6xl text-pastel-beige mb-4">
            From Enquiry To Opening Day
          </h2>
        </div>

        {/* Timeline Container */}
        <div ref={triggerRef} className="relative z-10 mt-12 pb-12 lg:pb-0">
          
          {/* Central connecting line: Desktop runs horizontal and Mobile runs vertical */}
          <div className="absolute top-[8px] lg:top-[30px] bottom-12 lg:bottom-auto left-[15px] lg:left-0 lg:right-0 h-auto lg:h-[2px] w-[2px] lg:w-auto bg-pastel-beige/10 z-0">
            <div 
              ref={progressLineRef}
              className="absolute inset-0 bg-ceramic-yellow"
            />
          </div>

          {/* Grid Layout: Desktop Horizontal (4 cols), Mobile Vertical */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10 pl-10 lg:pl-0">
            {steps.map((step) => (
              <div 
                key={step.num}
                className="step-item relative flex flex-col items-start text-left bg-pure-black/25 backdrop-blur-sm p-6 lg:p-0 rounded-xl lg:rounded-none border border-white/5 lg:border-none last:border-none"
              >
                {/* Timeline node - dot bullet inside the grid item */}
                <div className="absolute top-6 left-[-35px] lg:top-[22px] lg:left-0 w-4 h-4 rounded-full border-[3px] border-bordeaux bg-ceramic-yellow shadow-[0_0_12px_rgba(248,215,148,0.7)] z-20" />
                
                {/* Step contents */}
                <div className="relative pt-0 lg:pt-12 w-full">
                  {/* Oversized background number with parallax */}
                  <span className="bg-number absolute top-[-5px] right-2 md:right-8 font-bebas text-[110px] md:text-[130px] leading-none text-ceramic-yellow/5 select-none pointer-events-none z-0">
                    {step.num}
                  </span>

                  <div className="relative z-10">
                    <span className="font-bebas text-sm md:text-base text-ceramic-yellow tracking-widest block mb-1">
                      Step {step.num}
                    </span>
                    <h3 className="font-body font-bold text-xl text-white mb-3">
                      {step.title}
                    </h3>
                    <p className="font-heading text-base text-pastel-beige/70 leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
