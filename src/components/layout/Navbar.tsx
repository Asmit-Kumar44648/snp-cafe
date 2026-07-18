import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SNPLogo from '../ui/SNPLogo';
import gsap from 'gsap';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/#events' },
  { name: 'Join Us', href: '/join-us' },
  { name: 'Contact', href: '/franchise#contact-section' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Sync cart count from localStorage and listen for add-to-cart events
  useEffect(() => {
    const syncCart = () => {
      try {
        const saved = localStorage.getItem('snp_cart');
        if (saved) {
          const items = JSON.parse(saved);
          setCartCount(items.reduce((sum: number, i: any) => sum + (i.quantity || 0), 0));
        } else {
          setCartCount(0);
        }
      } catch { setCartCount(0); }
    };

    syncCart();

    const onAddToCart = () => {
      // Small delay to let CartDrawer update localStorage first
      setTimeout(syncCart, 50);
    };

    window.addEventListener('add-to-cart', onAddToCart);
    window.addEventListener('storage', syncCart);
    // Also poll occasionally in case of remove/quantity changes inside CartDrawer
    const interval = setInterval(syncCart, 1000);

    return () => {
      window.removeEventListener('add-to-cart', onAddToCart);
      window.removeEventListener('storage', syncCart);
      clearInterval(interval);
    };
  }, []);

  const openCartDrawer = () => {
    // Dispatch a custom event that CartDrawer can listen to
    window.dispatchEvent(new CustomEvent('open-cart-drawer'));
  };

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.5 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleEventsClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setIsOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      const targetElement = document.getElementById('events');
      if (targetElement) {
        const lenis = (window as any).lenis;
        if (lenis) {
          lenis.scrollTo(targetElement, { duration: 1.5 });
        } else {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useGSAP(() => {
    // Fade in animation for navigation items
    gsap.fromTo('.nav-item',
      { opacity: 0, y: -15 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.08, ease: 'power3.out', delay: 0.2 }
    );

    // Navbar background on scroll
    gsap.to(navRef.current, {
      scrollTrigger: {
        trigger: 'body',
        start: 'top -100',
        end: 'top -101',
        toggleActions: 'play none none reverse',
      },
      backgroundColor: 'rgba(100, 9, 12, 0.8)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(239, 234, 205, 0.1)',
      duration: 0.3,
    });
  });

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 transition-colors duration-300">
        <div className="relative max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">
          {/* Left side links */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10 flex-1 justify-start">
            <Link to="/menu" className="nav-item font-body font-medium text-sm lg:text-base text-[#EFEACD]/80 hover:text-[#EFEACD] uppercase tracking-wider transition-colors whitespace-nowrap px-2 py-1">Menu</Link>
            <Link to="/gallery" className="nav-item font-body font-medium text-sm lg:text-base text-[#EFEACD]/80 hover:text-[#EFEACD] uppercase tracking-wider transition-colors whitespace-nowrap px-2 py-1">Gallery</Link>
            <Link to="/#events" onClick={handleEventsClick} className="nav-item font-body font-medium text-sm lg:text-base text-[#EFEACD]/80 hover:text-[#EFEACD] uppercase tracking-wider transition-colors whitespace-nowrap px-2 py-1">Events</Link>
          </div>

          {/* Left Spacer for Mobile */}
          <div className="md:hidden"></div>

          {/* Center Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60]">
            <Link to="/" onClick={handleHomeClick} className="nav-item flex flex-col items-center justify-center">
              <SNPLogo className="w-12 h-12 md:w-15 md:h-15" />
            </Link>
          </div>

          {/* Right side links and button */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8 flex-1 justify-end">
            <Link to="/join-us" className="nav-item font-body font-medium text-sm lg:text-base text-[#EFEACD]/80 hover:text-[#EFEACD] uppercase tracking-wider transition-colors whitespace-nowrap px-2 py-1">Join Us</Link>
            <Link to="/franchise#contact-section" className="nav-item font-body font-medium text-sm lg:text-base text-[#EFEACD]/80 hover:text-[#EFEACD] uppercase tracking-wider transition-colors whitespace-nowrap px-2 py-1">Contact</Link>
            
            {/* Cart Icon */}
            <button
              onClick={openCartDrawer}
              className="nav-item relative text-[#EFEACD]/80 hover:text-[#EFEACD] p-2 rounded-lg hover:bg-[#EFEACD]/5 transition-all duration-200 cursor-pointer"
              aria-label="View Cart"
            >
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#9C0512] text-[#EFEACD] text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#0E0000] animate-pulse">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>

            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-order-modal'))}
              className="nav-item bg-[#9C0512] hover:bg-[#64090C] text-[#EFEACD] font-body px-8 py-3 rounded-sm text-sm lg:text-base uppercase tracking-wider font-semibold hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(156,5,18,0.4)] transition-all duration-300 ease-out whitespace-nowrap ml-2 cursor-pointer"
            >
              Order Now
            </button>
          </div>

          {/* Mobile Cart + Toggle */}
          <div className="md:hidden flex items-center gap-2 z-[60]">
            <button
              onClick={() => { setIsOpen(false); openCartDrawer(); }}
              className="relative text-[#EFEACD] p-2 mix-blend-difference"
              aria-label="View Cart"
            >
              <ShoppingCart size={24} />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-[#9C0512] text-[#EFEACD] text-[9px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center border border-[#0E0000]">
                  {cartCount > 99 ? '99+' : cartCount}
                </span>
              )}
            </button>
            <button
              className="text-[#EFEACD] relative p-1 mix-blend-difference"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-[#0E0000]/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center gap-8 transition-transform duration-500 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {navLinks.map((link) => {
          let clickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => setIsOpen(false);
          if (link.href === '/') {
            clickHandler = handleHomeClick;
          } else if (link.href === '/#events') {
            clickHandler = handleEventsClick;
          }
          return (
            <Link
              key={link.name}
              to={link.href}
              onClick={clickHandler}
              className="mobile-link text-4xl font-display font-bold text-[#EFEACD] hover:text-[#9C0512] transition-colors"
            >
              {link.name}
            </Link>
          );
        })}
        <button 
          onClick={() => { setIsOpen(false); window.dispatchEvent(new CustomEvent('open-order-modal')); }}
          className="mobile-link mt-8 bg-[#9C0512] text-[#EFEACD] font-body px-8 py-3 rounded-sm text-lg uppercase tracking-wider font-semibold hover:bg-[#64090C] hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(156,5,18,0.4)] transition-all duration-300 ease-out cursor-pointer"
        >
          Order Now
        </button>
        
        {/* SIZZLE • SLICE • SMILE signature footer in mobile menu */}
        <div className="absolute bottom-6 left-0 w-full flex flex-col items-center gap-1 opacity-75 pointer-events-none select-none">
          <p className="font-bebas text-[#F8D794] text-lg tracking-[0.25em]">SIZZLE • SLICE • SMILE</p>
          <p className="font-mono text-[9px] text-[#EFEACD]/30 tracking-widest uppercase">BIHAR KI APNI VIBE • CAFE</p>
        </div>
      </div>
    </>
  );
}
