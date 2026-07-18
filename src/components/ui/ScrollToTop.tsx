import React, { useRef } from 'react';
import { ArrowUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollToTop() {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useGSAP(() => {
    // Hide initially
    gsap.set(buttonRef.current, { scale: 0, opacity: 0, autoAlpha: 0 });

    ScrollTrigger.create({
      trigger: 'body',
      start: 'top -500', // When we scroll 500px down
      end: 'bottom bottom',
      onEnter: () => gsap.to(buttonRef.current, { scale: 1, opacity: 1, autoAlpha: 1, duration: 0.3, ease: 'back.out(1.5)' }),
      onLeaveBack: () => gsap.to(buttonRef.current, { scale: 0, opacity: 0, autoAlpha: 0, duration: 0.3, ease: 'power2.in' }),
    });
  });

  const scrollToTop = () => {
    const lenis = (window as any).lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.4 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      ref={buttonRef}
      onClick={scrollToTop}
      className="fixed bottom-8 left-8 z-50 bg-[#9C0512] text-[#EFEACD] p-3 rounded-full shadow-[0_8px_30px_rgba(156,5,18,0.4)] hover:bg-[#F8D794] hover:text-[#0E0000] transition-colors cursor-pointer"
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} />
    </button>
  );
}
