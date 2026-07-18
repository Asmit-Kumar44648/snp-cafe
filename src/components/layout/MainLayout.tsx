import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../ui/ScrollToTop';
import CartDrawer from '../ui/CartDrawer';

export default function MainLayout() {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top immediately on page routing unless an anchor hash is provided
    if (!location.hash) {
      const lenis = (window as any).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      const hashId = location.hash.substring(1);
      const timer = setTimeout(() => {
        const targetElement = document.getElementById(hashId);
        if (targetElement) {
          const lenis = (window as any).lenis;
          if (lenis) {
            lenis.scrollTo(targetElement, { duration: 1.5 });
          } else {
            targetElement.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, 500); // Wait for page transitions to complete
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  useEffect(() => {
    // Dynamic page title mapping based on current pathname
    const titleMap: Record<string, string> = {
      '/': "SNP Sizzler 'n Pizza | Cafe & Pizzeria in Kahalgaon, Bhagalpur",
      '/menu': "Delicious Menu | SNP Sizzler 'n Pizza",
      '/gallery': "Vibe Gallery & Reels | SNP Sizzler 'n Pizza",
      '/franchise': "Franchise Partnership Opportunities | SNP Sizzler 'n Pizza",
      '/join-us': "Join the Crew | Careers at SNP Sizzler 'n Pizza"
    };

    const targetTitle = titleMap[location.pathname] || "SNP Sizzler 'n Pizza";
    document.title = targetTitle;
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
      <ScrollToTop />
      <CartDrawer />
    </>
  );
}
