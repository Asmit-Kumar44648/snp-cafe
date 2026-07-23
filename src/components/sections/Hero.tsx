import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { getWhatsAppLink, prefilledMessages } from '../../lib/whatsapp';
import pizzaHeroBg from '../../assets/images/pizza_hero_backdrop.png';

import imgVolcanoBurger  from '../../assets/images/hero_food_chicken_volcano_burger.jpg';
import imgPremiumChicken from '../../assets/images/hero_food_premium_fried_chicken.jpg';
import imgSpicyPaneer    from '../../assets/images/hero_food_spicy_paneer_pizza.jpg';
import imgPaneerTikka    from '../../assets/images/hero_food_paneer_tikka_burger.jpg';
import imgCrispyChicken  from '../../assets/images/hero_food_crispy_chicken_burger.jpg';

const TOP_ITEMS = [
  { img: imgVolcanoBurger,  label: 'Chicken Volcano Burger', badge: '🔥 HOT',   price: '₹179', isVeg: false },
  { img: imgSpicyPaneer,    label: 'Spicy Paneer Pizza',     badge: '⭐ BEST',  price: '₹129', isVeg: true  },
  { img: imgPremiumChicken, label: 'Premium Fried Chicken',  badge: '👑 PRIME', price: '₹169', isVeg: false },
  { img: imgPaneerTikka,    label: 'Paneer Tikka Burger',    badge: '💚 VEG',   price: '₹159', isVeg: true  },
  { img: imgCrispyChicken,  label: 'Crispy Chicken Burger',  badge: '🍗 CRISP', price: '₹119', isVeg: false },
];

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const textRef   = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    // Floating food card animation — gentle bob
    gsap.utils.toArray('.food-card').forEach((card: any, i) => {
      gsap.to(card, {
        y: i % 2 === 0 ? -18 : -10,
        duration: 2.8 + i * 0.4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
        delay: i * 0.3,
      });
    });

    // Text entrance
    gsap.fromTo('.hero-word',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: 'power4.out', delay: 0.5 }
    );
    gsap.fromTo('.hero-sub',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1, delay: 1.2 }
    );
    gsap.fromTo('.hero-btn',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, delay: 1.4 }
    );
    gsap.fromTo('.food-card',
      { opacity: 0, scale: 0.7, y: 40 },
      { opacity: 1, scale: 1, y: 0, stagger: 0.12, duration: 0.7, ease: 'back.out(1.4)', delay: 1.6 }
    );
  }, { scope: container });

  return (
    <section
      id="home"
      ref={container}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0E0000]"
      data-section="hero"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-65 transition-all duration-700"
        style={{
          backgroundImage: `url(${pizzaHeroBg})`,
          filter: 'blur(3px) sepia(20%) brightness(0.65) contrast(1.05)',
        }}
      />
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(156,5,18,0.2)_0%,rgba(14,0,0,1)_80%)]" />

      {/* ── FOOD CARDS ROW ── top half of viewport */}
      <div className="absolute top-0 inset-x-0 z-10 flex items-start justify-center pointer-events-none overflow-hidden">
        <div className="flex items-end gap-3 md:gap-5 px-4 pt-20 md:pt-24 pb-4 flex-wrap justify-center">
          {TOP_ITEMS.map((item, i) => (
            <div
              key={i}
              className="food-card group relative flex flex-col items-center w-[100px] md:w-[130px] lg:w-[148px] shrink-0"
              style={{ opacity: 0 }} // GSAP will animate in
            >
              {/* Image circle */}
              <div className="relative w-[88px] h-[88px] md:w-[110px] md:h-[110px] lg:w-[128px] lg:h-[128px] rounded-full overflow-hidden border-2 border-[#F8D794]/50 shadow-[0_8px_32px_rgba(0,0,0,0.7)] group-hover:border-[#F8D794] transition-all duration-300">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                />
                {/* vignette */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#0E0000]/50 via-transparent to-transparent" />
              </div>

              {/* Badge */}
              <span
                className={`absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] font-bold tracking-widest px-2 py-0.5 rounded-full whitespace-nowrap shadow-lg
                  ${item.isVeg
                    ? 'bg-emerald-500 text-white'
                    : 'bg-[#9C0512] text-[#EFEACD]'
                  }`}
              >
                {item.badge}
              </span>

              {/* Label & Price */}
              <div className="mt-2 text-center">
                <p className="text-[10px] md:text-[11px] font-bold text-[#EFEACD] leading-tight line-clamp-2 px-1">
                  {item.label}
                </p>
                <p className="text-[11px] md:text-sm font-bebas text-[#F8D794] tracking-wider mt-0.5">
                  {item.price}
                </p>
              </div>

              {/* Veg/Non-Veg dot */}
              <div className={`w-3 h-3 rounded-full border mt-1 ${item.isVeg ? 'bg-emerald-500 border-emerald-700' : 'bg-[#9C0512] border-red-900'}`} />
            </div>
          ))}
        </div>
      </div>

      {/* ── HERO CONTENT ── centred, below the food cards */}
      <div className="relative z-20 text-center px-4 max-w-5xl mx-auto mt-52 md:mt-60 lg:mt-64">
        <div className="mb-4 hero-sub select-none">
          <span
            className="font-bebas text-[#F8D794] text-sm md:text-base tracking-[0.4em] uppercase opacity-90 transition-all duration-500 hover:tracking-[0.6em]"
            style={{ textShadow: 'rgba(0,0,0,0.4) -1px -1px 1px, rgba(255,255,255,0.1) 1px 1px 1px' }}
          >
            SIZZLE <span className="text-[#9C0512]">•</span> SLICE <span className="text-[#9C0512]">•</span> SMILE
          </span>
        </div>

        <div className="mb-8 inline-flex hero-sub items-center gap-2 px-4 py-1.5 rounded-full border border-[#F8D794]/20 bg-[#64090C]/30 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#F8D794] animate-pulse" />
          <span className="font-bebas text-[#F8D794] tracking-wider text-sm mt-0.5">3 Outlets • Swiggy • Zomato</span>
        </div>

        <h1
          ref={textRef}
          className="font-display font-black italic text-[#EFEACD] text-[clamp(48px,8vw,120px)] leading-[0.9] tracking-tight mb-6 uppercase flex flex-wrap justify-center gap-x-4"
        >
          <span className="hero-word">Where</span>
          <span className="hero-word">Every</span>
          <span className="hero-word text-[#9C0512]">—</span>
          <br className="hidden md:block" />
          <span className="hero-word text-[#9C0512]">Bite</span>
          <span className="hero-word">Hits</span>
        </h1>

        <p className="hero-sub font-heading italic font-medium text-2xl md:text-4xl text-[#EFEACD]/70 mb-10">
          Kahalgaon's First Youth Catering Cafe'
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link
            to="/franchise#contact-section"
            className="hero-btn w-full sm:w-[200px] bg-[#9C0512] hover:bg-[#64090C] text-[#EFEACD] font-body px-8 py-4 rounded-sm text-sm uppercase tracking-wider font-semibold shadow-[0_10px_40px_rgba(156,5,18,0.3)] hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(156,5,18,0.4)] transition-all duration-300 ease-out text-center"
          >
            BOOK US
          </Link>

          <div className="hidden sm:block hero-btn w-[1px] h-8 bg-gradient-to-b from-[#EFEACD]/0 via-[#EFEACD]/30 to-[#EFEACD]/0" />

          <Link
            to="/franchise"
            className="hero-btn w-full sm:w-[200px] bg-gradient-to-r from-[#F8D794] via-[#FFEAAA] to-[#D4AF37] text-[#0E0000] font-body px-8 py-4 rounded-sm text-sm uppercase tracking-wider font-bold shadow-[0_0_30px_rgba(248,215,148,0.5)] hover:scale-105 active:scale-95 hover:shadow-[0_0_50px_rgba(248,215,148,0.8)] hover:brightness-110 transition-all duration-300 ease-out text-center flex items-center justify-center border border-[#FFEAAA]/50"
          >
            GET FRANCHISE
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20">
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#EFEACD]/0 via-[#EFEACD]/50 to-[#EFEACD]/0 animate-[pulse_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
