import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MapPin, Clock, Phone, Smartphone, ExternalLink } from 'lucide-react';

import flagshipImg from '../../assets/images/flagship_outlet_1781547336967.jpg';
import branchImg from '../../assets/images/branch_outlet_1781547353088.jpg';
import maharajganjImg from '../../assets/images/maharajganj_outlet_1781547367736.jpg';

gsap.registerPlugin(ScrollTrigger);

interface OutletConfig {
  id: string;
  tag: string;
  name: string;
  address: string;
  description: string;
  hours: string; // // TODO: confirm with client
  instagram: string;
  phone: string;
  mapsLink: string;
  orderLink: string;
  image: string;
}

const outlets: OutletConfig[] = [
  {
    id: "flagship",
    tag: "Flagship Outlet",
    name: "SNP Cafe — Kahalgaon (Satkar Chowk)",
    address: "Satkar Chowk, Kahalgaon, Bhagalpur, Bihar",
    description: "The original. Where it all started — sizzlers, pizzas, and the energy that put SNP on the map.",
    hours: "11:00 AM – 11:00 PM, Daily", // // TODO: confirm with client
    instagram: "@snp_cafe_",
    phone: "7061885890",
    mapsLink: "https://maps.google.com/?q=Satkar+Chowk,+Kahalgaon,+Bhagalpur,+Bihar",
    orderLink: "https://www.zomato.com/kahalgaon/snp-cafe-kahalgaon-locality-",
    image: flagshipImg
  },
  {
    id: "branch1",
    tag: "Branch Outlet",
    name: "SNP Cafe - Mahagama,Gooda",
    address: "Mahagama, Godda, Jharkhand",
    description: "Bringing the SNP experience to Mahagama — our signature sizzlers and vibes now in Godda district.",
    hours: "11:00 AM – 10:00 PM, Daily", // // TODO: confirm
    instagram: "@snp_cafe_",
    phone: "7061885890",
    mapsLink: "https://maps.google.com/?q=Kahalgaon,+Bhagalpur,+Bihar",
    orderLink: "https://www.zomato.com/kahalgaon/snp-cafe-kahalgaon-locality-",
    image: branchImg
  },
  {
    id: "branch2",
    tag: "Branch Outlet",
    name: "SNP Cafe — Maharajganj",
    address: "Maharajganj, Bhagalpur, Bihar", // // TODO: confirm exact address
    description: "Bringing the SNP experience to Maharajganj — full menu, full energy, zero compromise.",
    hours: "11:00 AM – 11:00 PM, Daily", // // TODO: confirm
    instagram: "@snp._.cafe",
    phone: "8083484559",
    mapsLink: "https://maps.google.com/?q=Maharajganj,+Bhagalpur,+Bihar",
    orderLink: "https://www.zomato.com/kahalgaon/snp-cafe-kahalgaon-locality-",
    image: maharajganjImg
  }
];

export default function Outlets() {
  const containerRef = useRef<HTMLElement>(null);
  const flexGridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const matchMedia = gsap.matchMedia();
    matchMedia.add("(prefers-reduced-motion: no-preference)", () => {
      ScrollTrigger.batch(".outlet-card", {
        start: "top 85%",
        onEnter: (batch) => {
          gsap.fromTo(batch,
            { opacity: 0, y: 40 },
            { 
              opacity: 1, 
              y: 0, 
              stagger: 0.12, 
              duration: 0.7, 
              ease: "power3.out",
              overwrite: "auto"
            }
          );
        }
      });
    });
  }, { scope: containerRef });

  return (
    <section id="outlets-section" ref={containerRef} className="py-24 bg-pure-black relative overflow-hidden border-b border-red-carriage/20 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase block mb-3">
            Three Spots, One Sizzle
          </span>
          <h2 className="font-display font-medium text-4xl md:text-6xl text-pastel-beige mb-4">
            Find Your Nearest SNP
          </h2>
          <p className="font-heading text-lg md:text-xl text-pastel-beige/70 italic leading-relaxed">
            From late-night cravings to weekend hangouts — wherever you are in Bhagalpur, an SNP outlet is closer than you think.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div ref={flexGridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {outlets.map((outlet) => (
            <div 
              key={outlet.id}
              className="outlet-card opacity-100 lg:opacity-0 flex flex-col h-full rounded-3xl overflow-hidden glass-card border border-red-carriage/20 group hover:border-ceramic-yellow/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-[0_15px_40px_rgba(248,215,148,0.06)] relative"
            >
              {/* Image Block with Tag Badge Overlay */}
              <div className="w-full h-56 overflow-hidden relative">
                <img 
                  src={outlet.image} 
                  alt={outlet.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Tag Badge overlay */}
                <div className="absolute top-4 left-4 z-20 bg-ceramic-yellow text-bordeaux font-bebas text-xs tracking-wider font-bold h-7 inline-flex items-center justify-center px-4 rounded-full shadow-lg">
                  {outlet.tag}
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-bordeaux via-transparent to-transparent z-10" />
              </div>

              {/* Description Block */}
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-2xl text-pastel-beige mb-3 group-hover:text-ceramic-yellow transition-colors leading-tight">
                    {outlet.name}
                  </h3>
                  <p className="font-body text-pastel-beige/60 text-sm leading-relaxed mb-6">
                    {outlet.description}
                  </p>

                  {/* Metadata Row List */}
                  <div className="space-y-4 pt-4 border-t border-pastel-beige/10 mb-8">
                    <div className="flex gap-3 text-pastel-beige/80 text-sm items-start">
                      <MapPin size={16} className="text-ceramic-yellow mt-0.5 shrink-0" />
                      <span className="font-body">{outlet.address}</span>
                    </div>

                    <div className="flex gap-3 text-pastel-beige/80 text-sm items-start">
                      <Clock size={16} className="text-ceramic-yellow mt-0.5 shrink-0" />
                      <span className="font-body">{outlet.hours}</span>
                    </div>

                    <div className="flex gap-3 text-pastel-beige/80 text-sm items-start">
                      <Smartphone size={16} className="text-ceramic-yellow mt-0.5 shrink-0" />
                      <span className="font-body">Instagram: <a href={`https://instagram.com/${outlet.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:underline text-ceramic-yellow">{outlet.instagram}</a></span>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons bottom half */}
                <div className="grid grid-cols-1 gap-2.5">
                  <a 
                    href={outlet.mapsLink} 
                    target="_blank" 
                    rel="no-referrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 bg-ceramic-yellow hover:bg-[#ffe3aa] text-bordeaux font-body font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                  >
                    Get Directions
                    <ExternalLink size={12} />
                  </a>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <button 
                      onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
                      className="inline-flex items-center justify-center gap-1 py-2.5 bg-pure-black/60 hover:bg-pure-black/90 text-pastel-beige border border-pastel-beige/20 font-body font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Order Online
                    </button>
                    <a 
                      href={`tel:${outlet.phone}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 bg-pure-black/60 hover:bg-pure-black/90 text-pastel-beige border border-pastel-beige/20 font-body font-bold text-xs uppercase tracking-wider rounded-lg transition-colors"
                    >
                      <Phone size={11} className="text-ceramic-yellow" />
                      Call Us
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
