import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { menuCategories, menuItems } from '../../data/menu';
import { Search, X, ShoppingCart, Plus, Check, Sparkles, Flame } from 'lucide-react';

import imgVolcanoBurger   from '../../assets/images/hero_food_chicken_volcano_burger.jpg';
import imgPremiumChicken  from '../../assets/images/hero_food_premium_fried_chicken.jpg';
import imgSpicyPaneer     from '../../assets/images/hero_food_spicy_paneer_pizza.jpg';
import imgPaneerTikka     from '../../assets/images/hero_food_paneer_tikka_burger.jpg';
import imgCrispyChicken   from '../../assets/images/hero_food_crispy_chicken_burger.jpg';
import imgChickenSizzler  from '../../assets/images/hero_food_chicken_sizzler.jpg';
import imgPaneerSizzler   from '../../assets/images/snp_gallery_fried_chicken_platter.png';
import imgCoupleCombo     from '../../assets/images/snp_gallery_pizza_combo.jpg';
import imgSizzlingBrownie from '../../assets/images/snp_gallery_cake_celebration.png';

const TOP_PICKS = [
  { img: imgVolcanoBurger,   label: 'Chicken Volcano Burger',    badge: '🔥 HOT',    price: '₹179', isVeg: false },
  { img: imgSpicyPaneer,     label: 'Spicy Paneer Pizza',        badge: '⭐ BEST',   price: '₹129', isVeg: true  },
  { img: imgPremiumChicken,  label: 'Premium Fried Chicken',     badge: '👑 PRIME',  price: '₹169', isVeg: false },
  { img: imgChickenSizzler,  label: 'Chicken Exotic Sizzler',    badge: '🍳 SIZZLE', price: '₹369', isVeg: false },
  { img: imgPaneerSizzler,   label: 'Schezwan Paneer Sizzler',   badge: '💚 SIZZLE', price: '₹279', isVeg: true  },
  { img: imgPaneerTikka,     label: 'Paneer Tikka Burger',       badge: '💚 VEG',    price: '₹159', isVeg: true  },
  { img: imgCrispyChicken,   label: 'Crispy Chicken Burger',     badge: '🍗 CRISP',  price: '₹119', isVeg: false },
  { img: imgCoupleCombo,     label: 'Couple Combo Meal',         badge: '❤️ DATE',   price: '₹499', isVeg: true  },
  { img: imgSizzlingBrownie, label: 'Sizzling Brownie + IceCream', badge: '🍫 WOW',  price: '₹179', isVeg: true  },
];

interface MenuProps {
  limit?: number;
  isHomePage?: boolean;
}

export default function Menu({ limit, isHomePage = false }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].trim().toLowerCase());
  const [dietaryPreference, setDietaryPreference] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [addedIds, setAddedIds] = useState<Record<number, boolean>>({});

  let filteredItems = menuItems.filter(item => {
    const categoryMatch = item.category.trim().toLowerCase() === activeCategory;
    const dietaryMatch = 
      dietaryPreference === 'all' ? true :
      dietaryPreference === 'veg' ? item.isVeg : !item.isVeg;
    const searchMatch = searchQuery.trim() === '' ? true :
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && dietaryMatch && searchMatch;
  });
  
  if (limit) {
    filteredItems = filteredItems.slice(0, limit);
  }

  const handleAddToCart = (item: typeof menuItems[0]) => {
    const event = new CustomEvent('add-to-cart', {
      detail: {
        id: item.id,
        name: item.name,
        price: item.price,
        category: item.category,
      },
    });
    window.dispatchEvent(event);

    // Feedback animation
    setAddedIds((prev) => ({ ...prev, [item.id]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.id]: false }));
    }, 1200);
  };

  return (
    <section className={`py-16 md:py-24 relative overflow-hidden ${isHomePage ? 'bg-[#0E0000]' : 'bg-transparent'}`}>
      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.015] flex items-center justify-center overflow-hidden z-0 select-none">
        <span className="font-bebas text-[35vw] whitespace-nowrap rotate-[-12deg] tracking-widest text-[#F8D794]">
          SNP MENU
        </span>
      </div>

      {/* Ambient Lighting Glows */}
      <div className="absolute top-10 left-1/3 w-[500px] h-[500px] bg-[#9C0512]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/3 w-[500px] h-[500px] bg-[#F8D794]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        
        {/* ── HOME PAGE: KFC-Style Top Picks Header ── */}
        {isHomePage ? (
          <div className="mb-14">
            {/* Section label */}
            <div className="text-center mb-8">
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-3"
              >
                <span className="font-bebas text-[#9C0512] text-xs md:text-sm tracking-[0.4em] uppercase font-bold bg-[#9C0512]/10 border border-[#9C0512]/20 px-4 py-1.5 rounded-full inline-flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-[#F8D794]" />
                  SIZZLE <span className="text-[#F8D794]">•</span> SLICE <span className="text-[#F8D794]">•</span> SMILE
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="font-heading italic font-bold text-[#EFEACD] text-4xl md:text-6xl lg:text-7xl uppercase mb-3"
              >
                Our Culinary Menu
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-[#F8D794]/70 font-body text-sm md:text-base max-w-xl mx-auto leading-relaxed mb-8"
              >
                Explore our handcrafted sizzlers, pizzas, burgers &amp; drinks
              </motion.p>

              {/* ── TOP 5 KFC-Style Food Cards ── */}
              <div className="flex flex-wrap items-end justify-center gap-4 md:gap-6 py-6">
                {TOP_PICKS.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30, scale: 0.85 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: 'backOut' }}
                    className="group flex flex-col items-center w-[110px] md:w-[140px] cursor-pointer"
                  >
                    {/* Circular Image */}
                    <div className="relative w-[90px] h-[90px] md:w-[120px] md:h-[120px] rounded-full overflow-hidden border-[3px] border-[#F8D794]/40 group-hover:border-[#F8D794] shadow-[0_8px_32px_rgba(0,0,0,0.6)] group-hover:shadow-[0_8px_40px_rgba(156,5,18,0.5)] transition-all duration-400">
                      <img
                        src={item.img}
                        alt={item.label}
                        className="w-full h-full object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                        loading="lazy"
                      />
                      {/* Inner vignette */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[#0E0000]/50 via-transparent to-transparent" />
                    </div>

                    {/* Badge */}
                    <span
                      className={`-mt-3 z-10 text-[9px] md:text-[10px] font-bold tracking-widest px-2.5 py-0.5 rounded-full shadow-lg whitespace-nowrap
                        ${item.isVeg
                          ? 'bg-emerald-500 text-white'
                          : 'bg-[#9C0512] text-[#EFEACD]'
                        }`}
                    >
                      {item.badge}
                    </span>

                    {/* Name & Price */}
                    <p className="mt-2 text-[11px] md:text-[13px] font-bold text-[#EFEACD] text-center leading-tight line-clamp-2 group-hover:text-[#F8D794] transition-colors px-1">
                      {item.label}
                    </p>
                    <p className="text-[13px] md:text-base font-bebas text-[#F8D794] tracking-wider mt-1">
                      {item.price}
                    </p>

                    {/* Veg/Non-Veg dot */}
                    <div className={`w-3 h-3 rounded-full border mt-1 ${item.isVeg ? 'bg-emerald-500 border-emerald-700' : 'bg-[#9C0512] border-red-900'}`} />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          /* ── FULL MENU PAGE: Standard Header ── */
          <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-3"
            >
              <span className="font-bebas text-[#9C0512] text-xs md:text-sm tracking-[0.4em] uppercase font-bold bg-[#9C0512]/10 border border-[#9C0512]/20 px-4 py-1.5 rounded-full">
                SIZZLE <span className="text-[#F8D794]">•</span> SLICE <span className="text-[#F8D794]">•</span> SMILE
              </span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-heading italic font-bold text-[#EFEACD] text-4xl md:text-6xl lg:text-7xl uppercase mb-4"
            >
              Complete Cafe Menu
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#F8D794]/70 font-body text-sm md:text-base max-w-xl mx-auto leading-relaxed"
            >
              Carefully curated recipes made fresh with premium ingredients
            </motion.p>
          </div>
        )}

        {/* Search & Dietary Controls Container */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 bg-[#160808]/80 backdrop-blur-md p-4 rounded-2xl border border-[#F8D794]/15 shadow-xl">
          {/* Instant Search Bar */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#0E0000] border border-[#F8D794]/20 focus:border-[#9C0512] rounded-xl px-4 py-2.5 pl-10 font-body text-[#EFEACD] text-xs md:text-sm focus:outline-none transition-all placeholder:text-[#F8D794]/40"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#F8D794]/50" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-[#F8D794]/50 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dietary Filter (All / Veg / Non-Veg) */}
          <div className="flex items-center gap-1.5 bg-[#0E0000] p-1 rounded-xl border border-[#F8D794]/10 w-full md:w-auto justify-center">
            {[
              { id: 'all', label: 'All Items' },
              { id: 'veg', label: 'Veg Only', isVeg: true },
              { id: 'non-veg', label: 'Non-Veg', isVeg: false }
            ].map((pref) => (
              <button
                key={pref.id}
                onClick={() => setDietaryPreference(pref.id as any)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bebas text-xs md:text-sm tracking-wider transition-all duration-300 ${
                  dietaryPreference === pref.id
                    ? 'bg-[#9C0512] text-white shadow-md font-bold'
                    : 'text-[#F8D794]/60 hover:text-[#F8D794]'
                }`}
              >
                {pref.id === 'veg' && (
                  <span className="w-2.5 h-2.5 rounded-sm border border-emerald-500 p-0.5 flex items-center justify-center">
                    <span className="w-full h-full rounded-full bg-emerald-500" />
                  </span>
                )}
                {pref.id === 'non-veg' && (
                  <span className="w-2.5 h-2.5 rounded-sm border border-red-500 p-0.5 flex items-center justify-center">
                    <span className="w-full h-full rounded-full bg-red-500" />
                  </span>
                )}
                {pref.label}
              </button>
            ))}
          </div>
        </div>

        {/* Category Navigation Bar (Book Tabs) */}
        <div className="mb-10 overflow-x-auto no-scrollbar py-2 -mx-4 px-4">
          <div className="flex gap-2.5 min-w-max justify-start md:justify-center">
            {menuCategories.map((category) => {
              const isActive = activeCategory === category.trim().toLowerCase();
              return (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category.trim().toLowerCase())}
                  className={`px-5 py-2.5 rounded-xl font-bebas text-base tracking-wider transition-all duration-300 border ${
                    isActive
                      ? 'bg-[#F8D794] text-[#0E0000] border-[#F8D794] font-bold shadow-[0_0_20px_rgba(248,215,148,0.3)] scale-105'
                      : 'bg-[#160808]/60 text-[#EFEACD]/70 border-[#F8D794]/10 hover:border-[#F8D794]/30 hover:text-[#F8D794]'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Editorial Dining Book Page Layout (2 Columns on Desktop) */}
        <div className="bg-[#140707] border border-[#F8D794]/20 rounded-3xl p-6 md:p-10 shadow-2xl relative">
          
          {/* Category Title Banner */}
          <div className="flex items-center justify-between border-b border-[#F8D794]/20 pb-4 mb-8">
            <h3 className="font-bebas text-2xl md:text-4xl text-[#F8D794] tracking-widest uppercase flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#9C0512]" />
              {menuCategories.find(c => c.trim().toLowerCase() === activeCategory) || activeCategory}
            </h3>
            <span className="font-body text-xs text-[#EFEACD]/50 uppercase tracking-widest">
              {filteredItems.length} {filteredItems.length === 1 ? 'Item' : 'Items'}
            </span>
          </div>

          {/* Book Items List (2 Columns on Desktop) */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-8">
              <AnimatePresence mode="popLayout">
                {filteredItems.map((item) => {
                  const isAdded = addedIds[item.id];
                  return (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.25 }}
                      className="group flex flex-col justify-between p-4 rounded-2xl bg-[#0E0000]/40 border border-[#F8D794]/5 hover:border-[#F8D794]/25 transition-all duration-300 hover:bg-[#1A0A0B]/80"
                    >
                      <div>
                        {/* Title Row with Leader Dots & Price */}
                        <div className="flex items-baseline justify-between gap-3 mb-1.5">
                          
                          {/* Veg/Non-Veg Icon + Name */}
                          <div className="flex items-center gap-2.5 flex-1 min-w-0">
                            {/* Veg / Non-Veg Official Indicator Dot */}
                            {item.isVeg ? (
                              <span className="w-4 h-4 rounded-sm border border-emerald-500 p-0.5 flex items-center justify-center flex-shrink-0" title="Pure Veg">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                              </span>
                            ) : (
                              <span className="w-4 h-4 rounded-sm border border-red-500 p-0.5 flex items-center justify-center flex-shrink-0" title="Non-Veg">
                                <span className="w-2 h-2 rounded-full bg-red-500" />
                              </span>
                            )}

                            <span className="font-heading italic font-bold text-lg md:text-xl text-[#EFEACD] group-hover:text-[#F8D794] transition-colors truncate">
                              {item.name}
                            </span>
                          </div>

                          {/* Leader Dotted Line */}
                          <div className="flex-1 border-b border-dotted border-[#F8D794]/20 hidden sm:block mx-1" />

                          {/* Price Tag */}
                          <div className="flex items-baseline gap-1 flex-shrink-0">
                            <span className="font-bebas text-xl md:text-2xl text-[#F8D794] tracking-tight">
                              ₹{item.price}
                            </span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="font-body text-xs md:text-sm text-[#EFEACD]/60 leading-relaxed mb-4 pl-6">
                          {item.description}
                        </p>
                      </div>

                      {/* Bottom Bar: Quick Add Button */}
                      <div className="flex justify-end pt-2 border-t border-[#F8D794]/10">
                        <button
                          onClick={() => handleAddToCart(item)}
                          className={`flex items-center gap-2 px-4 py-1.5 rounded-xl font-bebas text-sm tracking-wider transition-all duration-300 cursor-pointer ${
                            isAdded
                              ? 'bg-emerald-600 text-white shadow-lg scale-105'
                              : 'bg-[#9C0512] hover:bg-[#C00A1A] text-white shadow-md hover:shadow-[0_0_15px_rgba(156,5,18,0.4)] active:scale-95'
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              Added!
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              ADD TO CART
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-[#F8D794]/50 font-bebas text-xl tracking-widest">
                No items found in this category matching your search/filters.
              </p>
            </div>
          )}
        </div>

        {/* Home Page "View Full Menu" Link */}
        {isHomePage && (
          <div className="mt-12 text-center">
            <Link 
              to="/menu"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#9C0512] to-[#B70615] text-[#EFEACD] font-bebas text-xl tracking-[0.2em] px-8 py-3.5 rounded-full border border-[#F8D794]/30 hover:border-[#F8D794] shadow-lg hover:shadow-[0_0_25px_rgba(248,215,148,0.4)] transition-all hover:scale-105"
            >
              <span>Explore Complete Menu</span>
              <ShoppingCart className="w-5 h-5 text-[#F8D794]" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
