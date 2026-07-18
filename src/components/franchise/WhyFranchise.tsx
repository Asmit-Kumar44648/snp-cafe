import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import benefitMenuImg from '../../assets/images/benefit_menu_doodle_1781548210903.jpg';
import benefitDemandImg from '../../assets/images/benefit_demand_doodle_1781548228344.jpg';
import benefitSetupImg from '../../assets/images/benefit_setup_doodle_1781548244263.jpg';
import benefitAloneImg from '../../assets/images/benefit_alone_doodle_1781548260941.jpg';

gsap.registerPlugin(ScrollTrigger);

interface BenefitCard {
  num: string;
  title: string;
  desc: string;
  image: string;
}

const benefits: BenefitCard[] = [
  {
    num: "01",
    title: "A Menu That Already Works",
    desc: "Over 50 items across pizzas, sizzlers, momos, burgers, and Korean ramen — every recipe tested, every price point proven across three live outlets. No R&D. No trial and error.",
    image: benefitMenuImg
  },
  {
    num: "02",
    title: "Built-In Demand",
    desc: "SNP already has traction on Swiggy, Zomato, and social media — a loyal youth following that travels with the name into any new market.",
    image: benefitDemandImg
  },
  {
    num: "03",
    title: "Low-Friction Setup",
    desc: "Compact format, efficient kitchen workflow, and a menu engineered for fast turnaround — built for cafe-sized spaces, not full-restaurant budgets.",
    image: benefitSetupImg
  },
  {
    num: "04",
    title: "You're Never Building Alone",
    desc: "Menu training, branding assets, and social media playbooks — everything that worked for us comes with the franchise.",
    image: benefitAloneImg
  }
];

export default function WhyFranchise() {
  const listRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const matchMedia = gsap.matchMedia();
    matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.batch(".why-card", {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.fromTo(batch,
            { opacity: 0, y: 50 },
            { 
              opacity: 1, 
              y: 0, 
              stagger: 0.1, 
              duration: 0.8, 
              ease: "power3.out",
              overwrite: "auto"
            }
          );
        }
      });
    });
  }, { scope: listRef });

  return (
    <section className="py-24 bg-pure-black relative overflow-hidden border-b border-red-carriage/20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase block mb-3">
            The Privileges
          </span>
          <h2 className="font-display font-medium text-4xl md:text-6xl text-pastel-beige mb-4">
            Built To Be Replicated
          </h2>
          <p className="font-heading text-lg md:text-xl text-pastel-beige/70 italic">
            Everything that made SNP work the first three times, ready to work again in your city.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div ref={listRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.num} 
              className="why-card opacity-100 lg:opacity-0 flex flex-col h-full rounded-2xl overflow-hidden glass-card border border-red-carriage/20 group hover:border-ceramic-yellow/40 transition-colors duration-500 relative"
            >
              {/* Card Image: top half */}
              <div className="w-full h-48 overflow-hidden relative">
                <img 
                  src={benefit.image} 
                  alt={benefit.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux/90 to-transparent" />
              </div>

              {/* Card Content: bottom half */}
              <div className="p-6 flex-1 flex flex-col justify-between relative min-h-[220px]">
                {/* Huge back number */}
                <span className="absolute bottom-2 right-4 font-bebas text-[140px] leading-none text-ceramic-yellow/5 select-none pointer-events-none group-hover:text-ceramic-yellow/10 transition-colors duration-500 z-0">
                  {benefit.num}
                </span>

                <div className="relative z-10 mt-[-10px]">
                  <h3 className="font-body font-bold text-xl text-ceramic-yellow mb-3 leading-tight tracking-wide group-hover:text-white transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="font-body text-pastel-beige/70 text-sm leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
