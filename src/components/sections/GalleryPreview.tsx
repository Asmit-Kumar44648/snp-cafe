import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../../data/gallery';

export default function GalleryPreview() {
  const item1 = galleryItems[0]; // dining wall (landscape)
  const item2 = galleryItems[1]; // neon sign (portrait)
  const item3 = galleryItems[2]; // pizza box (landscape)
  const item4 = galleryItems[3]; // pillar hallway (portrait)
  const item5 = galleryItems[4]; // main hall (landscape)

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
              OUR CAFE ATMOSPHERE
            </span>
            <span className="font-bebas text-[#F8D794] text-sm md:text-base tracking-[0.2em] uppercase">
              SIZZLE • SLICE • SMILE
            </span>
          </div>

          <h2 className="font-heading italic font-bold text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFEACD] via-[#F8D794] to-[#EFEACD] drop-shadow-[0_0_30px_rgba(248,215,148,0.2)] mb-4">
            SNP Gallery
          </h2>

          <p className="font-body text-[#EFEACD]/80 max-w-2xl text-base md:text-lg leading-relaxed">
            Step inside Sizzler 'n' Pizza Cafe. Experience our cozy dining areas, glowing neon vibes, and signature packaging.
          </p>
        </div>

        {/* 5 Real Photos Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-16">
          
          {/* Column 1: 2 Landscape Cards */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {/* Landscape 1 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[240px] md:h-[270px]">
              <img
                src={item1.src}
                alt={item1.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                  Dining Area
                </span>
                <h3 className="font-heading italic font-bold text-lg text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                  {item1.alt}
                </h3>
              </div>
            </div>

            {/* Landscape 2 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[240px] md:h-[270px]">
              <img
                src={item3.src}
                alt={item3.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                  Signature Packaging
                </span>
                <h3 className="font-heading italic font-bold text-lg text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                  {item3.alt}
                </h3>
              </div>
            </div>
          </div>

          {/* Column 2: 1 Portrait Center Piece (Neon Sign) */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/30 hover:border-[#F8D794]/70 transition-all duration-500 shadow-2xl shadow-[#9C0512]/10 h-[380px] md:h-[564px]">
            <img
              src={item2.src}
              alt={item2.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded bg-[#F8D794] text-[#0E0000] mb-2.5 inline-block font-bebas">
                Neon Vibe
              </span>
              <h3 className="font-heading italic font-bold text-2xl text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                {item2.alt}
              </h3>
            </div>
          </div>

          {/* Column 3: 2 Real Cafe Photos */}
          <div className="flex flex-col gap-5 lg:gap-6">
            {/* Main Hall */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[240px] md:h-[270px]">
              <img
                src={item5.src}
                alt={item5.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                  Main Hall
                </span>
                <h3 className="font-heading italic font-bold text-lg text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                  {item5.alt}
                </h3>
              </div>
            </div>

            {/* Pillar Hallway */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[240px] md:h-[270px]">
              <img
                src={item4.src}
                alt={item4.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                  Cafe Ambiance
                </span>
                <h3 className="font-heading italic font-bold text-lg text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                  {item4.alt}
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
