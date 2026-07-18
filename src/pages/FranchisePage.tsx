import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FranchiseHero from '../components/franchise/FranchiseHero';
import WhyFranchise from '../components/franchise/WhyFranchise';
import TheProcess from '../components/franchise/TheProcess';
import Comparison from '../components/franchise/Comparison';
import FranchiseCTA from '../components/franchise/FranchiseCTA';
import Outlets from '../components/franchise/Outlets';
import Contact from '../components/franchise/Contact';

export default function FranchisePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#contact-section' || hash === '#contact' || hash === '#outlets-section' || hash === '#outlets') {
      const targetId = (hash === '#contact-section' || hash === '#contact') ? 'contact-section' : 'outlets-section';
      const timer = setTimeout(() => {
        const lenis = (window as any).lenis;
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          if (lenis) {
            lenis.scrollTo(`#${targetId}`, {
              duration: 2.8, // Elegant cinematic travel time down the page
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 500); // 500ms delay ensures page is fully rendered & assets are ready for measurement
      return () => clearTimeout(timer);
    }
  }, [hash]);

  return (
    <div className="bg-[#080808] min-h-screen">
      {/* SECTION 1 — HERO */}
      <FranchiseHero />

      {/* SECTION 2 — WHY SNP */}
      <WhyFranchise />

      {/* SECTION 3 — THE PROCESS */}
      <TheProcess />

      {/* SECTION 4 — COMPARISON */}
      <Comparison />

      {/* SECTION 5 — FRANCHISE FINAL CTA */}
      <FranchiseCTA />

      {/* SECTION 6 — OUTLETS */}
      <Outlets />

      {/* SECTION 7 — CONTACT */}
      <Contact />
    </div>
  );
}
