import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const items = [
  "SIZZLE • SLICE • SMILE", "PIZZA", "SIZZLERS", "MOMOS", "BURGERS", "KOREAN RAMEN", "SANDWICHES", 
  "PASTA", "WRAPS", "FREE WIFI", "3 OUTLETS", "FRANCHISE AVAILABLE"
];

export default function Marquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    gsap.to(scrollRef.current, {
      xPercent: -50,
      duration: 20,
      ease: "none",
      repeat: -1,
    });
  });

  return (
    <div className="w-full bg-[#0E0000] border-y border-[#9C0512]/40 overflow-hidden flex items-center h-14" data-section="marquee">
      <div ref={scrollRef} className="flex whitespace-nowrap w-[200%]">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center">
            <span className={`font-bebas text-2xl tracking-widest px-4 ${i % 2 === 0 ? 'text-[#F8D794]' : 'text-[#EFEACD]'}`}>
              {item}
            </span>
            <span className="text-[#9C0512] text-xl px-2">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
