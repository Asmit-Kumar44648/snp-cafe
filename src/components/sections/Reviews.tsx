import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Star } from 'lucide-react';
import { reviews } from '../../data/content';

export default function Reviews() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  // Split reviews into two arrays for rows
  const row1Reviews = reviews.slice(0, 4);
  const row2Reviews = reviews.slice(4, 8);

  useGSAP(() => {
    // Row 1 scrolls left
    gsap.to(row1Ref.current, {
      xPercent: -50,
      duration: 35,
      ease: "none",
      repeat: -1,
    });

    // Row 2 scrolls right
    gsap.fromTo(row2Ref.current, 
      { xPercent: -50 },
      {
        xPercent: 0,
        duration: 35,
        ease: "none",
        repeat: -1,
      }
    );
  });

  const ReviewCard: React.FC<{ review: any }> = ({ review }) => (
    <div className="w-[350px] shrink-0 glass-card p-8 rounded-2xl border border-[#9C0512]/20 flex flex-col gap-4">
      <div className="flex text-[#F8D794]">
        {[...Array(review.rating)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
      </div>
      <p className="font-body text-[#EFEACD]/90 text-base leading-relaxed">"{review.text}"</p>
      <div className="mt-auto">
        <h5 className="font-body font-semibold text-[#F8D794] text-sm uppercase tracking-wider">{review.name}</h5>
      </div>
    </div>
  );

  return (
    <section className="py-32 bg-[#0E0000] overflow-hidden" data-section="reviews">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <span className="font-bebas text-[#9C0512] text-xl tracking-[0.3em] mb-4 block">WHAT THEY SAY</span>
        <h2 className="font-display font-bold text-5xl text-[#EFEACD]">Wall of Love.</h2>
      </div>

      <div className="flex flex-col gap-6 relative">
        {/* Gradient fades for edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0E0000] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#0E0000] to-transparent z-10 pointer-events-none" />
        
        {/* Row 1 - Scroll Left */}
        <div className="flex items-center w-[200%] gap-6 pl-6" ref={row1Ref}>
          {[...row1Reviews, ...row1Reviews, ...row1Reviews].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>

        {/* Row 2 - Scroll Right */}
        <div className="flex items-center w-[200%] gap-6 pl-6" ref={row2Ref}>
          {[...row2Reviews, ...row2Reviews, ...row2Reviews].map((r, i) => (
            <ReviewCard key={i} review={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
