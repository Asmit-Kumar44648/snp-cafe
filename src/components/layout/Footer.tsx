import { useState } from 'react';
import { Phone, MapPin, Instagram, Facebook, UtensilsCrossed, X } from 'lucide-react';
import { getWhatsAppLink, prefilledMessages } from '../../lib/whatsapp';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import SNPLogo from '../ui/SNPLogo';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showAaravModal, setShowAaravModal] = useState(false);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, path: string, targetId?: string) => {
    if (location.pathname === path) {
      e.preventDefault();
      const lenis = (window as any).lenis;
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          if (lenis) {
            lenis.scrollTo(targetElement, { 
              duration: targetId === 'outlets-section' ? 2.5 : 1.5,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
            });
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      } else {
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.5 });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <footer className="bg-[#080808] pt-24 pb-8 border-t border-[#9C0512]/20 relative overflow-hidden">
      
      {/* Floating WhatsApp Button */}
      <a 
        href={getWhatsAppLink(prefilledMessages.general)}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_8px_30px_rgba(37,211,102,0.4)] animate-bounce hover:scale-110 transition-transform flex items-center justify-center cursor-pointer"
        aria-label="WhatsApp Us"
      >
        <Phone size={28} className="fill-current" />
      </a>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20 relative z-10">
        
        {/* Col 1 */}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <SNPLogo className="w-24 h-24 md:w-28 md:h-28" />
            <div className="text-[#F8D794] font-bebas tracking-[0.2em] text-sm uppercase -mt-2">
              SIZZLE <span className="text-[#9C0512]">•</span> SLICE <span className="text-[#9C0512]">•</span> SMILE
            </div>
          </div>
          <p className="font-body text-[#EFEACD]/60 text-sm leading-relaxed mt-2">
            Dark luxury street food. Kahalgaon's most loved youth hang out and dining experience.
          </p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-body font-bold tracking-wider uppercase text-[#EFEACD] mb-6">Quick Links</h4>
          <ul className="flex flex-col gap-4 font-body text-sm text-[#EFEACD]/60">
            <li>
              <Link to="/" onClick={(e) => handleLinkClick(e, '/')} className="hover:text-[#F8D794] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" onClick={(e) => handleLinkClick(e, '/menu')} className="hover:text-[#F8D794] transition-colors">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/franchise#outlets-section" onClick={(e) => handleLinkClick(e, '/franchise', 'outlets-section')} className="hover:text-[#F8D794] transition-colors">
                Outlets
              </Link>
            </li>
            <li>
              <Link to="/franchise" onClick={(e) => handleLinkClick(e, '/franchise')} className="hover:text-[#9C0512] transition-colors">
                Franchise
              </Link>
            </li>
            <li>
              <a href={getWhatsAppLink(prefilledMessages.party)} target="_blank" rel="noreferrer" className="hover:text-[#F8D794] transition-colors">
                Party Booking
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-body font-bold tracking-wider uppercase text-[#EFEACD] mb-6">Contact</h4>
          <ul className="flex flex-col gap-5 font-body text-sm text-[#EFEACD]/60">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#9C0512] shrink-0 mt-0.5" />
              <span>Satkar Chowk, Kahalgaon, Bhagalpur, Bihar 813203</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#9C0512] shrink-0" />
              <span>+91 7061885890</span>
            </li>
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-body font-bold tracking-wider uppercase text-[#EFEACD] mb-6">Connect</h4>
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/snp_cafe_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#EFEACD]/5 p-3 rounded-full hover:bg-[#9C0512] hover:text-[#EFEACD] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(156,5,18,0.4)] active:scale-95 transition-all duration-300 ease-out text-[#EFEACD]/80"
            >
              <Instagram size={20} />
            </a>
            <a 
              href="https://www.facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#EFEACD]/5 p-3 rounded-full hover:bg-[#9C0512] hover:text-[#EFEACD] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(156,5,18,0.4)] active:scale-95 transition-all duration-300 ease-out text-[#EFEACD]/80"
            >
              <Facebook size={20} />
            </a>
            <a 
              href="https://www.zomato.com/kahalgaon/snp-cafe-kahalgaon-locality-" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#EFEACD]/5 p-3 rounded-full hover:bg-[#EFEACD] hover:text-[#0E0000] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(239,234,205,0.3)] active:scale-95 transition-all duration-300 ease-out text-[#EFEACD]/80"
            >
              <span className="font-bold font-body text-sm">Z</span>
            </a>
            <a 
              href="https://www.swiggy.com/restaurants/snp-sizzler-n-pizza-town-area-kahalgaon-1014029" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#EFEACD]/5 p-3 rounded-full hover:bg-[#fc8019] hover:text-[#fff] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(252,128,25,0.4)] active:scale-95 transition-all duration-300 ease-out text-[#EFEACD]/80"
            >
              <span className="font-bold font-body text-sm">S</span>
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-[#EFEACD]/10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs tracking-wider text-[#EFEACD]/40 uppercase">
          © 2025 Sizzler 'n Pizza Cafe. All Rights Reserved.
        </p>
        <button 
          onClick={() => setShowAaravModal(true)}
          className="font-heading italic text-[#EFEACD]/30 hover:text-[#F8D794] text-sm flex items-center gap-2 transition-all duration-300 cursor-pointer bg-transparent border-none outline-none hover:scale-105 active:scale-95"
          id="aarav-group-btn"
        >
          Created By AARAV GROUP
        </button>
      </div>

      {showAaravModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setShowAaravModal(false)}
          id="aarav-modal-backdrop"
        >
          <div 
            className="bg-[#0e0000] border-2 border-[#9C0512]/40 rounded-lg p-6 max-w-sm w-full relative overflow-hidden shadow-[0_10px_50px_rgba(156,5,18,0.3)] animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
            id="aarav-modal-content"
          >
            {/* Ambient background glow */}
            <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#9C0512]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-[#F8D794]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-[#EFEACD]/10 relative z-10">
              <h3 className="font-heading italic text-lg text-[#F8D794] tracking-wider">AARAV GROUP</h3>
              <button 
                onClick={() => setShowAaravModal(false)}
                className="text-[#EFEACD]/50 hover:text-[#9C0512] transition-colors p-1 rounded-sm cursor-pointer hover:scale-110 active:scale-90"
                id="aarav-modal-close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Body */}
            <div className="flex flex-col gap-4 relative z-10">
              <div className="bg-[#121212] border border-[#EFEACD]/10 p-4 rounded-md hover:border-[#F8D794]/20 transition-colors">
                <p className="text-xs font-mono text-[#EFEACD]/40 uppercase tracking-widest mb-1">Developer</p>
                <p className="font-heading text-base text-[#EFEACD] font-medium mb-1">ASMIT KUMAR</p>
                <a 
                  href="tel:7091653582"
                  className="font-mono text-xs text-[#F8D794] hover:text-[#ffffff] transition-colors flex items-center gap-1.5 w-fit"
                >
                  <Phone size={12} /> 7091653582
                </a>
              </div>

              <div className="bg-[#121212] border border-[#EFEACD]/10 p-4 rounded-md hover:border-[#F8D794]/20 transition-colors">
                <p className="text-xs font-mono text-[#EFEACD]/40 uppercase tracking-widest mb-1">Developer</p>
                <p className="font-heading text-base text-[#EFEACD] font-medium mb-1">SUMIT KUMAR SINGH</p>
                <a 
                  href="tel:6209003092"
                  className="font-mono text-xs text-[#F8D794] hover:text-[#ffffff] transition-colors flex items-center gap-1.5 w-fit"
                >
                  <Phone size={12} /> 6209003092
                </a>
              </div>

              <div className="bg-[#121212] border border-[#EFEACD]/10 p-4 rounded-md hover:border-[#F8D794]/20 transition-colors text-center">
                <a 
                  href="https://www.aaravworld.tech/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-body text-xs text-[#F8D794] hover:text-[#ffffff] transition-colors inline-block hover:underline"
                >
                  check our website to - https://www.aaravworld.tech/
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
