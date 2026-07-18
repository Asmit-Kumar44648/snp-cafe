import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { menuCategories, menuItems } from '../../data/menu';
import { Leaf, Flame, Info, ArrowRight, Search, X, ShoppingCart } from 'lucide-react';

interface MenuProps {
  limit?: number;
  isHomePage?: boolean;
}

export default function Menu({ limit, isHomePage = false }: MenuProps) {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].trim().toLowerCase());
  const [dietaryPreference, setDietaryPreference] = useState<'all' | 'veg' | 'non-veg'>('all');
  const [searchQuery, setSearchQuery] = useState('');

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
  };

  const getPremiumImage = (imagePath: string, name: string, category: string) => {
    const itemName = name.toLowerCase();
    const cat = category.trim().toLowerCase();

    // 1. PIZZAS
    if (cat === "pizza's") {
      if (itemName.includes("margherita")) return "https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=600&q=80";
      if (itemName.includes("corn")) return "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80";
      if (itemName.includes("paneer") || itemName.includes("tandoori")) return "https://images.unsplash.com/photo-1594009242813-bfa45914543d?auto=format&fit=crop&w=600&q=80";
      if (itemName.includes("chicken")) return "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=600&q=80";
      if (itemName.includes("volcano")) return "https://images.unsplash.com/photo-1590947132387-155cc02f3212?auto=format&fit=crop&w=600&q=80";
      return "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80";
    }

    // 2. BURGERS
    if (cat === "burgers") {
      if (itemName.includes("aloo") || itemName.includes("veg")) return "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80";
      if (itemName.includes("paneer")) return "https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?auto=format&fit=crop&w=600&q=80";
      if (itemName.includes("chicken")) return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80";
      return "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80";
    }

    // 3. SANDWICHES
    if (cat === "sandwiches") {
      if (itemName.includes("cheese") || itemName.includes("corn")) return "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80";
      if (itemName.includes("paneer") || itemName.Tikka || itemName.includes("chicken")) return "https://images.unsplash.com/photo-1509722747041-616f39b57569?auto=format&fit=crop&w=600&q=80";
      return "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&w=600&q=80";
    }

    // 4. MOMOS & WRAPS
    if (cat === "momos & wraps") {
      if (itemName.includes("wrap")) {
        return "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&w=600&q=80";
      }
      if (itemName.includes("fried") || itemName.includes("kurkure")) {
        return "https://images.unsplash.com/photo-1541696432-82c6da8ce7bf?auto=format&fit=crop&w=600&q=80";
      }
      return "https://images.unsplash.com/photo-1625220194771-7ebedd0b70b4?auto=format&fit=crop&w=600&q=80";
    }

    // 5. FRIED CHICKEN & KOREAN
    if (cat === "fried chicken & korean") {
      if (itemName.includes("ramen")) {
        return "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80";
      }
      return "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=600&q=80";
    }

    // 6. SIZZLERS & COMBOS
    if (cat === "sizzlers & combos") {
      return "/src/assets/images/menu_sizzler.png";
    }

    // 7. SNACKS & PASTA
    if (cat === "snacks & pasta") {
      if (itemName.includes("fries")) return "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80";
      if (itemName.includes("pasta")) {
        if (itemName.includes("red")) return "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=600&q=80";
        return "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=600&q=80";
      }
      return "https://images.unsplash.com/photo-1531749668029-2db88e4b76ce?auto=format&fit=crop&w=600&q=80";
    }

    // 8. DRINKS & DESSERTS
    if (cat === "drinks & desserts") {
      if (itemName.includes("shake")) return "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80";
      if (itemName.includes("mojito") || itemName.includes("blue") || itemName.includes("mint") || itemName.includes("strawberry")) {
        return "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80";
      }
      if (itemName.includes("coffee") || itemName.includes("latte") || itemName.includes("cappuccino")) {
        return "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80";
      }
      return "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&q=80";
    }

    return imagePath;
  };

  return (
    <section className={`py-20 relative overflow-hidden ${isHomePage ? 'bg-[#0E0000]' : 'bg-transparent'}`}>
      {/* Tagline Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-[0.02] flex items-center justify-center overflow-hidden z-0">
        <span className="font-bebas text-[30vw] whitespace-nowrap rotate-[-15deg] select-none">
          SIZZLE SLICE SMILE
        </span>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9C0512]/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F8D794]/5 rounded-full blur-[120px] -z-10" />

      {/* Sticky Mobile CTA is handled by CartDrawer's floating button */}

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <span className="font-bebas text-[#9C0512] text-sm md:text-base tracking-[0.5em] uppercase font-bold">
              SIZZLE <span className="text-[#F8D794]">•</span> SLICE <span className="text-[#F8D794]">•</span> SMILE
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display font-black italic text-[#EFEACD] text-5xl md:text-8xl uppercase mb-6 relative inline-block"
            style={{ 
              textShadow: '2px 2px 0px rgba(156, 5, 18, 0.3), 4px 4px 0px rgba(0,0,0,0.5)',
              letterSpacing: '-0.02em'
            }}
          >
            {isHomePage ? 'Fresh From Our Kitchen' : 'Our Full Menu'}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-[#9C0512] to-transparent" />
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#F8D794] font-medium tracking-[0.2em] uppercase text-xs md:text-sm max-w-2xl mx-auto opacity-80"
          >
            {isHomePage ? 'Explore our most popular categories curated for your cravings' : 'Every dish is a masterpiece, crafted with passion and served with love'}
          </motion.p>
        </div>

        {/* Instant Search Filter */}
        <div className="max-w-md mx-auto mb-10 px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search dishes (e.g. pizza, burger, momos)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A0A0B]/60 border border-[#F8D794]/20 hover:border-[#F8D794]/40 focus:border-[#9C0512] rounded-2xl px-5 py-4 pl-12 font-body text-[#EFEACD] focus:outline-none transition-all placeholder:text-[#F8D794]/40 text-sm shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)] focus:shadow-[0_0_15px_rgba(156,5,18,0.25)]"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#F8D794]/50" />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#F8D794]/50 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Categories - Scrollable Slider */}
        <div className="relative mb-14 -mx-4">
          <div className="flex overflow-x-auto gap-3 py-4 px-4 scroll-smooth no-scrollbar justify-start md:justify-center">
            {menuCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category.trim().toLowerCase())}
                className={`flex-shrink-0 px-8 py-3 rounded-xl font-bebas text-lg tracking-[0.1em] transition-all duration-300 border ${
                  activeCategory === category.trim().toLowerCase()
                    ? 'bg-[#9C0512] text-white border-[#9C0512] shadow-[0_0_20px_rgba(156,5,18,0.4)] scale-105'
                    : 'bg-[#1A0A0B]/50 text-[#F8D794]/70 border-[#F8D794]/10 hover:border-[#F8D794]/30 hover:text-[#F8D794]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Dietary Pref Toggle */}
        <div className="flex justify-center mb-12 px-4">
          <div className="bg-[#1A0A0B]/80 border border-[#F8D794]/10 p-1 rounded-xl md:rounded-2xl flex gap-1 md:gap-2 backdrop-blur-md shadow-xl overflow-x-auto no-scrollbar max-w-full">
            {[
              { id: 'all', label: 'All Dishes', icon: null },
              { id: 'veg', label: 'Pure Veg', icon: <Leaf className="w-4 h-4 text-green-500" fill="currentColor" /> },
              { id: 'non-veg', label: 'Non-Veg', icon: <div className="w-2.5 h-2.5 rounded-full bg-[#9C0512]" /> }
            ].map((pref) => (
              <button
                key={pref.id}
                onClick={() => setDietaryPreference(pref.id as any)}
                className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bebas text-sm md:text-base tracking-widest transition-all duration-300 ${
                  dietaryPreference === pref.id
                    ? 'bg-[#EFEACD] text-[#0E0000] shadow-inner font-bold'
                    : 'text-[#F8D794]/60 hover:text-[#F8D794]'
                }`}
              >
                {pref.icon}
                {pref.label}
              </button>
            ))}
          </div>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[400px]">
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                className="group relative bg-[#1A0A0B] rounded-3xl overflow-hidden border border-[#F8D794]/10 hover:border-[#F8D794]/30 transition-all duration-500 shadow-[8px_8px_16px_rgba(0,0,0,0.5),_inset_-4px_-4px_8px_rgba(248,215,148,0.05),_inset_4px_4px_8px_rgba(0,0,0,0.8)]"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <motion.img
                    src={getPremiumImage(item.image, item.name, item.category)}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-all duration-700 ease-out"
                    animate={{ 
                      y: [0, -5, 0],
                      scale: [1, 1.02, 1],
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -2, 2, -2, 0],
                      transition: { duration: 0.3 }
                    }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0000] via-transparent to-transparent opacity-80" />
                  
                  {item.category === 'Sizzlers' && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-[#9C0512] to-[#64090C] text-white text-[10px] font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 uppercase tracking-wider z-10 shadow-lg">
                      <Flame className="w-3 h-3 animate-pulse" /> Signature
                    </div>
                  )}
                  
                  {item.isVeg && (
                    <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-1.5 rounded-full border border-white/20 z-10">
                      <Leaf className="w-4 h-4 text-green-500" fill="currentColor" />
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-black italic text-[#EFEACD] text-2xl leading-tight group-hover:text-[#F8D794] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex flex-col items-end">
                      <span className="font-bebas text-[#F8D794] text-2xl tracking-tighter">₹{item.price}</span>
                      <span className="text-[10px] text-[#F8D794]/40 uppercase tracking-widest">+ Taxes</span>
                    </div>
                  </div>
                  
                  <p className="text-[#F8D794]/60 text-sm mb-6 line-clamp-2 font-body leading-relaxed group-hover:text-[#F8D794]/80 transition-colors">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleAddToCart(item)}
                      className="flex-1 bg-[#9C0512] hover:bg-[#B70615] text-white font-bebas text-lg tracking-[0.2em] py-3 rounded-xl transition-all active:scale-95 group/btn relative overflow-hidden shadow-[4px_4px_8px_rgba(0,0,0,0.5),_inset_-2px_-2px_4px_rgba(255,255,255,0.1),_inset_2px_2px_4px_rgba(0,0,0,0.4)] cursor-pointer"
                    >
                      <span className="relative z-10 flex items-center justify-center gap-2"><ShoppingCart className="w-4 h-4" /> Add to Cart</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-1000 ease-in-out" />
                    </button>
                    <button className="w-12 h-12 flex items-center justify-center rounded-xl border border-[#F8D794]/10 text-[#F8D794]/50 hover:text-[#F8D794] hover:bg-[#F8D794]/5 transition-all shadow-[inset_2px_2px_4px_rgba(0,0,0,0.5)]">
                      <Info className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {isHomePage && (
          <div className="mt-16 text-center">
            <Link 
              to="/menu"
              className="inline-flex items-center gap-2 text-[#F8D794] font-display font-bold text-2xl uppercase tracking-widest hover:text-[#EFEACD] transition-colors group"
            >
              View Full Menu 
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        )}

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#F8D794]/40 font-bebas text-2xl tracking-widest">
              Coming Soon to this {dietaryPreference !== 'all' ? dietaryPreference : ''} category!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
