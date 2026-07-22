import React from 'react';
import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PreviewItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  category: string;
  aspect: 'landscape' | 'portrait';
}

const previewImages: PreviewItem[] = [
  {
    id: '1',
    src: 'https://images.unsplash.com/photo-1544025162-81111420d4d4?auto=format&fit=crop&q=80&w=1080',
    alt: 'Hot Sizzler',
    caption: 'Signature Hot Sizzlers',
    category: 'Sizzlers',
    aspect: 'landscape',
  },
  {
    id: '2',
    src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=1080',
    alt: 'Cozy Ambience',
    caption: 'Warm & Cozy Ambience',
    category: 'Vibe',
    aspect: 'landscape',
  },
  {
    id: '3',
    src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1080',
    alt: 'Loaded Cheese Pizza',
    caption: 'Handcrafted Cheese Loaded Pizza',
    category: 'Pizzas',
    aspect: 'portrait', // The 1 portrait image
  },
  {
    id: '4',
    src: 'https://images.unsplash.com/photo-1588675646184-a5a41bc78788?auto=format&fit=crop&q=80&w=1080',
    alt: 'Café Interior',
    caption: 'Aesthetic Interior Design',
    category: 'Café',
    aspect: 'landscape',
  },
  {
    id: '5',
    src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=1080',
    alt: 'Outdoor Gathering',
    caption: 'Unforgettable Moments with Friends',
    category: 'Celebrations',
    aspect: 'landscape',
  },
];

export default function GalleryPreview() {
  const landscapes = previewImages.filter((img) => img.aspect === 'landscape');
  const portrait = previewImages.find((img) => img.aspect === 'portrait')!;

  return (
    <section id="events" className="py-20 lg:py-28 bg-[#0E0000] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#9C0512]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#F8D794]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-14 lg:mb-18 flex flex-col items-center text-center">
          <div className="flex items-center gap-3 mb-4 select-none">
            <span className="font-body bg-[#9C0512] text-[#EFEACD] font-bold tracking-[0.25em] uppercase text-xs md:text-sm px-4 py-1.5 rounded-full shadow-[0_0_20px_rgba(156,5,18,0.5)] flex items-center gap-2">
              <ImageIcon className="w-3.5 h-3.5" />
              VISUAL MOMENTS
            </span>
            <span className="font-bebas text-[#F8D794] text-sm md:text-base tracking-[0.2em] uppercase">
              SIZZLE • SLICE • SMILE
            </span>
          </div>

          <h2 className="font-heading italic font-bold text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFEACD] via-[#F8D794] to-[#EFEACD] drop-shadow-[0_0_30px_rgba(248,215,148,0.2)] mb-4">
            SNP Gallery
          </h2>

          <p className="font-body text-[#EFEACD]/80 max-w-2xl text-base md:text-lg leading-relaxed">
            Take a glimpse into the vibrant flavors, sizzling dishes, and cheerful celebrations captured at Sizzler 'n' Pizza Cafe.
          </p>
        </div>

        {/* 5-Image Asymmetric Bento Grid Layout (4 Landscapes + 1 Portrait) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16">
          {/* Column 1: 2 Landscape Images */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {/* Landscape 1 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[240px] md:h-[270px]">
              <img
                src={landscapes[0].src}
                alt={landscapes[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                  {landscapes[0].category}
                </span>
                <h3 className="font-heading italic font-bold text-xl text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                  {landscapes[0].caption}
                </h3>
              </div>
            </div>

            {/* Landscape 2 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[240px] md:h-[270px]">
              <img
                src={landscapes[1].src}
                alt={landscapes[1].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                  {landscapes[1].category}
                </span>
                <h3 className="font-heading italic font-bold text-xl text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                  {landscapes[1].caption}
                </h3>
              </div>
            </div>
          </div>

          {/* Column 2: 1 Portrait Image (Spans Full Height on Desktop) */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/30 hover:border-[#F8D794]/70 transition-all duration-500 shadow-2xl shadow-[#9C0512]/10 h-[380px] md:h-[564px]">
            <img
              src={portrait.src}
              alt={portrait.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded bg-[#F8D794] text-[#0E0000] mb-2.5 inline-block font-bebas">
                {portrait.category}
              </span>
              <h3 className="font-heading italic font-bold text-2xl text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                {portrait.caption}
              </h3>
            </div>
          </div>

          {/* Column 3: 2 Landscape Images */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {/* Landscape 3 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[240px] md:h-[270px]">
              <img
                src={landscapes[2].src}
                alt={landscapes[2].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                  {landscapes[2].category}
                </span>
                <h3 className="font-heading italic font-bold text-xl text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                  {landscapes[2].caption}
                </h3>
              </div>
            </div>

            {/* Landscape 4 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[240px] md:h-[270px]">
              <img
                src={landscapes[3].src}
                alt={landscapes[3].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                  {landscapes[3].category}
                </span>
                <h3 className="font-heading italic font-bold text-xl text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                  {landscapes[3].caption}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* End CTA Button: "Get In Snp" */}
        <div className="flex justify-center items-center">
          <Link
            to="/gallery"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#9C0512] via-[#C00A1A] to-[#9C0512] text-[#EFEACD] font-bebas tracking-[0.2em] text-xl md:text-2xl px-10 py-4 rounded-full shadow-[0_0_30px_rgba(156,5,18,0.5)] border border-[#F8D794]/40 hover:border-[#F8D794] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_45px_rgba(248,215,148,0.6)]"
          >
            <span>Get In Snp</span>
            <ArrowRight className="w-6 h-6 text-[#F8D794] group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
