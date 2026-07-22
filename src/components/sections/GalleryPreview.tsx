import { ArrowRight, Image as ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { galleryItems } from '../../data/gallery';

export default function GalleryPreview() {
  // Use real gallery photos from dataset
  const item1 = galleryItems[0]; // dining wall (landscape)
  const item2 = galleryItems[1]; // building exterior (landscape - 2nd image)
  const item3 = galleryItems[2]; // neon sign (portrait)
  const item4 = galleryItems[3]; // blue mocktail (portrait)
  const item5 = galleryItems[4]; // cake celebration (portrait)
  const item6 = galleryItems[5]; // pizza combo (portrait)
  const item7 = galleryItems[6]; // fried chicken platter (portrait)
  const item8 = galleryItems[7]; // pizza box (landscape)

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
              REAL CAFE ATMOSPHERE
            </span>
            <span className="font-bebas text-[#F8D794] text-sm md:text-base tracking-[0.2em] uppercase">
              SIZZLE • SLICE • SMILE
            </span>
          </div>

          <h2 className="font-heading italic font-bold text-4xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#EFEACD] via-[#F8D794] to-[#EFEACD] drop-shadow-[0_0_30px_rgba(248,215,148,0.2)] mb-4">
            SNP Gallery
          </h2>

          <p className="font-body text-[#EFEACD]/80 max-w-2xl text-base md:text-lg leading-relaxed">
            Step inside Sizzler 'n' Pizza Cafe. Experience our vibrant dining spaces, delicious food platters, and cheerful celebration moments.
          </p>
        </div>

        {/* Real SNP Cafe Gallery Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-16">
          
          {/* Card 1: Dining Wall (Landscape) */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[260px] md:h-[280px]">
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
              <h3 className="font-heading italic font-bold text-base text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                {item1.alt}
              </h3>
            </div>
          </div>

          {/* Card 2: Building Exterior (2nd Image as Requested) */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/30 hover:border-[#F8D794]/70 transition-all duration-500 shadow-xl h-[260px] md:h-[280px]">
            <img
              src={item2.src}
              alt={item2.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#F8D794] text-[#0E0000] mb-2 inline-block font-bebas">
                Building Front
              </span>
              <h3 className="font-heading italic font-bold text-base text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                {item2.alt}
              </h3>
            </div>
          </div>

          {/* Card 3: Chilled Blue Mocktail */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[260px] md:h-[280px]">
            <img
              src={item4.src}
              alt={item4.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                Refreshments
              </span>
              <h3 className="font-heading italic font-bold text-base text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                {item4.alt}
              </h3>
            </div>
          </div>

          {/* Card 4: Birthday Cake Celebration */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[260px] md:h-[280px]">
            <img
              src={item5.src}
              alt={item5.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                Celebrations
              </span>
              <h3 className="font-heading italic font-bold text-base text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                {item5.alt}
              </h3>
            </div>
          </div>

          {/* Card 5: Fresh Pizza & Chicken Meal */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[260px] md:h-[280px]">
            <img
              src={item6.src}
              alt={item6.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                Delicious Meals
              </span>
              <h3 className="font-heading italic font-bold text-base text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                {item6.alt}
              </h3>
            </div>
          </div>

          {/* Card 6: Crispy Fried Chicken Platter */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[260px] md:h-[280px]">
            <img
              src={item7.src}
              alt={item7.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                Fried Chicken
              </span>
              <h3 className="font-heading italic font-bold text-base text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                {item7.alt}
              </h3>
            </div>
          </div>

          {/* Card 7: Neon SNP Sign */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[260px] md:h-[280px]">
            <img
              src={item3.src}
              alt={item3.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                Neon Vibe
              </span>
              <h3 className="font-heading italic font-bold text-base text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                {item3.alt}
              </h3>
            </div>
          </div>

          {/* Card 8: Signature Packaging Box */}
          <div className="group relative rounded-2xl overflow-hidden bg-[#1A0909] border border-[#F8D794]/15 hover:border-[#F8D794]/50 transition-all duration-500 shadow-xl h-[260px] md:h-[280px]">
            <img
              src={item8.src}
              alt={item8.alt}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-[#0E0000]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <span className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#9C0512] text-[#EFEACD] mb-2 inline-block">
                Branded Packaging
              </span>
              <h3 className="font-heading italic font-bold text-base text-[#EFEACD] group-hover:text-[#F8D794] transition-colors">
                {item8.alt}
              </h3>
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
