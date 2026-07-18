import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  MessageSquare, 
  Instagram, 
  Facebook, 
  ArrowUpRight, 
  ShoppingBag, 
  Compass, 
  HelpCircle, 
  ChevronDown, 
  MessageCircle, 
  Map 
} from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { getWhatsAppLink } from '../../lib/whatsapp';

interface MapOption {
  id: string;
  label: string;
  address: string;
  embedUrl: string;
  mapsLink: string;
}

const mapOptions: MapOption[] = [
  {
    id: "flagship",
    label: "Kahalgaon Flagship",
    address: "Satkar Chowk, Kahalgaon, Bhagalpur, Bihar 813203",
    embedUrl: "https://maps.google.com/maps?q=Satkar%20Chowk,%20Kahalgaon,%20Bhagalpur,%20Bihar&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapsLink: "https://maps.google.com/?q=Satkar+Chowk,+Kahalgaon"
  },
  {
    id: "branch",
    label: "Mahagama Branch",
    address: "Mahagama, Godda, Jharkhand",
    embedUrl: "https://maps.google.com/maps?q=Mahagama,%20Godda,%20Jharkhand&t=&z=16&ie=UTF8&iwloc=&output=embed",
    mapsLink: "https://maps.google.com/?q=Mahagama,+Godda"
  },
  {
    id: "maharajganj",
    label: "Maharajganj",
    address: "Main Market, Maharajganj, Bihar",
    embedUrl: "https://maps.google.com/maps?q=Maharajganj,%20Bihar&t=&z=15&ie=UTF8&iwloc=&output=embed",
    mapsLink: "https://maps.google.com/?q=Maharajganj,+Bihar"
  }
];

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "Do you offer full kitchen setup guidance?",
    answer: "Absolutely. We supply a detailed kitchen layout plan, exact specifications for the kitchen equipment (sizzler pans, ovens, ventilation), and direct partnerships with trusted equipment distributors."
  },
  {
    id: 2,
    question: "What is the typical timeframe to launch?",
    answer: "Most SNP outlets launch within 30 to 45 days from signing the franchise agreement. This covers space finalization, custom interiors, equipment installation, and full menu training."
  },
  {
    id: 3,
    question: "How do you maintain consistency in taste?",
    answer: "SNP's brand depends on the perfect sizzle. We supply our custom spices, base sauces, and marinades directly to your kitchen. Your culinary team also undergoes 1:1 training to match original recipes exactly."
  },
  {
    id: 4,
    question: "Do you support Swiggy & Zomato integration?",
    answer: "Yes. From day one, we help list your outlet, optimize photography, configure promotions, and align delivery radius settings to ensure high delivery order volumes."
  },
  {
    id: 5,
    question: "What are the royalty rules?",
    answer: "We offer some of the most partner-friendly, straight-forward models in the market with no hidden costs. Reach out on WhatsApp with your market details and we will share exact pricing structures."
  }
];

const aiTemplates = [
  {
    label: "🎉 Celebration Booking",
    text: "Hi SNP Owner! I'd like to book space for a Party Celebration.\nName: [Name]\nDate: [Date]\nExpected Guests: [e.g. 25 people]\nOccasion: [e.g. Birthday]"
  },
  {
    label: "💼 Franchise Enquiry",
    text: "Hi SNP Team! I'm interested in opening an SNP Sizzler 'n Pizza franchise model.\nPlease share details on setup timelines, equipment list, spices supply, and royalty requirements."
  },
  {
    label: "🍱 Bulk Order Inquiry",
    text: "Hi SNP Manager! I want to place a bulk catering/food order for a private function.\nPlease share your custom party packs and price list."
  },
  {
    label: "🛸 Radius & Custom Delivery",
    text: "Hi SNP Cafe! I want to check custom delivery options outside your standard 5km Swiggy/Zomato range.\nDelivery Location: [Your Address/Town]"
  },
  {
    label: "🥘 Custom Request",
    text: "Hi! I wanted to check menu customizations or ingredient specifications (e.g. spice level, gluten, allergies).\nMy Query: "
  }
];

export default function Contact() {
  const [activeSubPage, setActiveSubPage] = useState<'enquiry' | 'maps' | 'faq'>('enquiry');
  const [activeMapId, setActiveMapId] = useState<string>('flagship');
  const [openFaqId, setOpenFaqId] = useState<number | null>(1);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.message.trim()) {
      toast.error("Please fill in fields properly!");
      return;
    }

    setLoading(true);
    toast.success("Opening WhatsApp...");

    const formattedMessage = `Hi SNP!\nName: ${formData.name}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
    
    setTimeout(() => {
      window.open(getWhatsAppLink(formattedMessage), '_blank');
      setLoading(false);
      setFormData({ name: '', phone: '', message: '' });
    }, 1000);
  };

  const currentMap = mapOptions.find(opt => opt.id === activeMapId) || mapOptions[0];

  return (
    <section id="contact-section" className="py-24 bg-pure-black relative overflow-hidden scroll-mt-20">
      <Toaster position="bottom-right" reverseOrder={false} />
      
      {/* Subtle glowing backgrounds */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-red-carriage/10 blur-[130px]" />
        <div className="absolute top-1/4 left-0 w-80 h-80 rounded-full bg-ceramic-yellow/5 blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase block mb-3">
            Interact & Connect
          </span>
          <h2 className="font-display font-medium text-4xl md:text-6xl text-pastel-beige mb-4 trailing-none leading-none">
            Get In Touch
          </h2>
          <p className="font-heading text-base md:text-lg text-pastel-beige/70 italic leading-relaxed">
            Have questions about franchise options, menu items, or booking? Use the simple sub-pages below to find everything instantly.
          </p>
        </div>

        {/* Elegant Sub-navigation / Tabs Bar */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mb-12 max-w-xl mx-auto border-b border-[#9C0512]/20 pb-4">
          <button
            onClick={() => setActiveSubPage('enquiry')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
              activeSubPage === 'enquiry'
                ? 'bg-red-carriage text-white shadow-[0_0_20px_rgba(156,5,18,0.3)]'
                : 'text-pastel-beige/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <MessageCircle size={15} />
            <span className="hidden sm:inline">Quick</span> Enquiry
          </button>

          <button
            onClick={() => setActiveSubPage('maps')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
              activeSubPage === 'maps'
                ? 'bg-red-carriage text-white shadow-[0_0_20px_rgba(156,5,18,0.3)]'
                : 'text-pastel-beige/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <Map size={15} />
            <span className="hidden sm:inline">Interactive</span> Maps
          </button>

          <button
            onClick={() => setActiveSubPage('faq')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-xl font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
              activeSubPage === 'faq'
                ? 'bg-red-carriage text-white shadow-[0_0_20px_rgba(156,5,18,0.3)]'
                : 'text-pastel-beige/60 hover:text-white hover:bg-white/5'
            }`}
          >
            <HelpCircle size={15} />
            <span className="hidden sm:inline">Smart</span> FAQ
          </button>
        </div>

        {/* ========================================================= */}
        {/* SUB PAGE 1: ENQUIRY & CONTACT DETAILS */}
        {/* ========================================================= */}
        {activeSubPage === 'enquiry' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start animate-fade-in">
            {/* Left Block — Contact Details (5 cols) */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-6">
              <div className="glass-card rounded-2xl p-8 md:p-10 border border-red-carriage/20">
                <h3 className="font-display font-bold text-2xl text-ceramic-yellow mb-6">
                  Direct Lines
                </h3>

                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-ceramic-yellow/10 flex items-center justify-center text-ceramic-yellow shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <span className="font-bebas text-xs tracking-wider text-pastel-beige/40 uppercase block mb-1">HQ Location</span>
                      <p className="font-body text-pastel-beige text-base font-semibold">Satkar Chowk, Kahalgaon, Bhagalpur, Bihar</p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-ceramic-yellow/10 flex items-center justify-center text-ceramic-yellow shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="font-bebas text-xs tracking-wider text-pastel-beige/40 uppercase block mb-1">On-Call Support</span>
                      <p className="font-body text-pastel-beige text-base leading-relaxed font-semibold">
                        <a href="tel:7061885890" className="hover:text-ceramic-yellow transition-colors mr-2">+91 7061885890</a> / 
                        <a href="tel:8083484559" className="hover:text-ceramic-yellow transition-colors ml-2">+91 8083484559</a>
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-full bg-ceramic-yellow/10 flex items-center justify-center text-ceramic-yellow shrink-0">
                      <MessageSquare size={18} />
                    </div>
                    <div>
                      <span className="font-bebas text-xs tracking-wider text-pastel-beige/40 uppercase block mb-1">Support Chats</span>
                      <p className="font-body text-pastel-beige/80 text-sm leading-relaxed">
                        "Enquire directly on WhatsApp to coordinate bulk bookings, private parties, or franchise reviews with our manager."
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social Channels row */}
                <div className="mt-10 pt-8 border-t border-pastel-beige/10">
                  <span className="font-bebas text-xs tracking-wider text-pastel-beige/40 uppercase block mb-4">FOLLOW THE SIZZLE</span>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://instagram.com/snp_cafe_" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-pure-black/40 hover:bg-ceramic-yellow hover:text-bordeaux border border-pastel-beige/15 flex items-center justify-center text-pastel-beige transition-all shadow-md group"
                      title="Follow @snp_cafe_"
                    >
                      <Instagram size={18} />
                    </a>
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-11 h-11 rounded-xl bg-pure-black/40 hover:bg-ceramic-yellow hover:text-bordeaux border border-pastel-beige/15 flex items-center justify-center text-pastel-beige transition-all shadow-md group"
                    >
                      <Facebook size={18} />
                    </a>
                    <a 
                      href="https://www.zomato.com/kahalgaon/snp-cafe-kahalgaon-locality-" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-11 px-4 rounded-xl bg-pure-black/40 hover:border-ceramic-yellow/50 border border-pastel-beige/15 flex items-center justify-center text-pastel-beige font-bebas text-sm gap-1 transition-all"
                    >
                      Zomato
                      <ArrowUpRight size={12} className="opacity-50" />
                    </a>
                    <a 
                      href="https://www.swiggy.com/restaurants/snp-sizzler-n-pizza-town-area-kahalgaon-1014029" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="h-11 px-4 rounded-xl bg-pure-black/40 hover:border-ceramic-yellow/50 border border-pastel-beige/15 flex items-center justify-center text-pastel-beige font-bebas text-sm gap-1 transition-all"
                    >
                      Swiggy
                      <ArrowUpRight size={12} className="opacity-50" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Block — Interactive Form (7 cols) */}
            <div className="lg:col-span-12 xl:col-span-7">
              <div className="glass-card rounded-2xl p-8 md:p-10 border border-red-carriage/20">
                <h3 className="font-display font-bold text-2xl text-ceramic-yellow mb-2">
                  Send a Message
                </h3>
                <p className="font-body text-[#EFEACD]/60 mb-6 text-sm">
                  We respond directly on WhatsApp. Fill in simple details to launch the chat.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="font-bebas text-xs tracking-widest text-[#F8D794] uppercase">Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full bg-[#0E0000]/60 border border-[#EFEACD]/15 rounded-xl px-4 py-3.5 font-body text-[#EFEACD] focus:outline-none focus:border-ceramic-yellow transition-colors placeholder:text-pastel-beige/35 text-sm"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-bebas text-xs tracking-widest text-[#F8D794] uppercase">Phone Number</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 9999999999"
                        className="w-full bg-[#0E0000]/60 border border-[#EFEACD]/15 rounded-xl px-4 py-3.5 font-body text-[#EFEACD] focus:outline-none focus:border-ceramic-yellow transition-colors placeholder:text-pastel-beige/35 text-sm"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center mb-1">
                      <label className="font-bebas text-xs tracking-widest text-[#F8D794] uppercase">Your Message</label>
                      <span className="text-[10px] font-body text-ceramic-yellow uppercase tracking-wider animate-pulse flex items-center gap-1 font-bold">
                        ✨ Core AI Scenario Assistant
                      </span>
                    </div>

                    <p className="font-body text-[#EFEACD]/50 text-xs mb-2">
                      Tap a scenario to instantly formulate a formatted WhatsApp message structure:
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-3 max-h-36 overflow-y-auto pr-1">
                      {aiTemplates.map((template, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => {
                            setFormData({ ...formData, message: template.text });
                            toast.success(`✨ Copied scenario details into message field!`);
                          }}
                          className="bg-[#0E0000]/80 hover:bg-ceramic-yellow hover:text-bordeaux border border-[#9C0512]/30 hover:border-ceramic-yellow px-3 py-1.5 rounded-lg font-body text-xs text-pastel-beige transition-all active:scale-95 text-left duration-200 cursor-pointer"
                        >
                          {template.label}
                        </button>
                      ))}
                    </div>

                    <textarea 
                      rows={5}
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Select a scenario template above or write custom questions..."
                      className="w-full bg-[#0E0000]/60 border border-[#EFEACD]/15 rounded-xl px-4 py-3.5 font-body text-[#EFEACD] focus:outline-none focus:border-ceramic-yellow transition-colors placeholder:text-pastel-beige/35 text-sm resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    disabled={loading}
                    className="w-full bg-red-carriage hover:bg-[#b00615] text-white font-body font-bold uppercase tracking-wider text-sm py-4 rounded-xl transition-all shadow-[0_0_20px_rgba(156,5,18,0.3)] hover:scale-[1.01] active:scale-95 disabled:opacity-50"
                  >
                    {loading ? "Preparing WhatsApp link..." : "Send via WhatsApp"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SUB PAGE 2: MAP FINDER & LOCATION STATS (Shifted Here) */}
        {/* ========================================================= */}
        {activeSubPage === 'maps' && (
          <div className="space-y-8 animate-fade-in">
            {/* Header / Intro */}
            <div className="bg-pure-black/35 backdrop-blur-md rounded-2xl p-6 border border-pastel-beige/5 mb-2 max-w-4xl mx-auto text-center">
              <h3 className="font-display font-medium text-2xl text-pastel-beige mb-3 flex items-center justify-center gap-2">
                <Compass className="text-ceramic-yellow" size={20} />
                Visit An Active Outlet
              </h3>
              <p className="font-body text-pastel-beige/75 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
                No reservations, no dress codes, no long waitlists. 
                Our spaces represent absolute freedom — fast WiFi, generous outlets, signature sizzlers, and a vibrant community environment.
              </p>
            </div>

            {/* Tab Selection Row */}
            <div className="flex flex-wrap justify-center items-center gap-2 pb-2">
              {mapOptions.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => setActiveMapId(opt.id)}
                  className={`px-5 py-2.5 rounded-full font-body font-bold text-xs uppercase tracking-wider transition-all duration-300 ${
                    activeMapId === opt.id
                      ? 'bg-ceramic-yellow text-bordeaux shadow-[0_0_15px_rgba(248,215,148,0.25)]'
                      : 'bg-[#0E0000]/60 text-pastel-beige/75 hover:text-white border border-[#9C0512]/20 hover:border-ceramic-yellow/30'
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            {/* Address Banner */}
            <div className="bg-pure-black/35 border border-ceramic-yellow/15 px-6 py-4 rounded-2xl text-center max-w-2xl mx-auto mb-2 shadow-md">
              <span className="font-bebas text-xs tracking-wider text-ceramic-yellow block mb-1">
                Selected Outlet Address
              </span>
              <p className="font-body text-base text-pastel-beige font-semibold">
                {currentMap.address}
              </p>
            </div>

            {/* Interactive map view frame */}
            <div className="relative w-full aspect-[16/10] md:aspect-[21/9] min-h-[350px] shadow-2xl rounded-2xl overflow-hidden border border-[#9C0512]/30 bg-bordeaux/20">
              <iframe
                src={currentMap.embedUrl}
                title={currentMap.label}
                className="w-full h-full border-0 opacity-95 focus:outline-none"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Premium Floating overlay directions launcher */}
              <div className="absolute bottom-4 right-4 z-20">
                <a
                  href={currentMap.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ceramic-yellow hover:bg-[#ffe3aa] text-bordeaux font-bebas text-xs tracking-wider font-bold h-9 px-4 rounded-lg shadow-2xl flex items-center gap-2 transform hover:scale-105 active:scale-95 transition-all border border-bordeaux/10"
                >
                  Open in Google Maps
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>

            {/* Delivery Note */}
            <div className="glass-card max-w-2xl mx-auto rounded-xl p-5 border border-ceramic-yellow/10 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left justify-center">
              <div className="w-10 h-10 rounded-full bg-ceramic-yellow/10 flex items-center justify-center text-ceramic-yellow shrink-0 font-bold">
                <ShoppingBag size={18} />
              </div>
              <div>
                <p className="font-body text-pastel-beige/80 text-sm leading-relaxed">
                  <span className="text-ceramic-yellow font-bold uppercase tracking-wider block sm:inline mr-2">Service Radius Note:</span>
                  Flat ₹30 delivery within a 5km radius of each physical location. Outside this radius? Place your orders via our Swiggy / Zomato channels.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* SUB PAGE 3: SMART FAQ ACCORDION (Added "In Between") */}
        {/* ========================================================= */}
        {activeSubPage === 'faq' && (
          <div className="max-w-3xl mx-auto space-y-4 animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="font-display font-medium text-2xl text-pastel-beige mb-2">Franchise & Setup FAQ</h3>
              <p className="font-body text-pastel-beige/60 text-xs md:text-sm">
                Get answers to basic setup logistics, consistency rules, and launch timelines immediately. Or reach out to us with custom queries.
              </p>
            </div>

            {faqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div 
                  key={faq.id}
                  className="rounded-2xl border border-red-carriage/20 bg-[#0C0000]/30 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-white/5 transition-all text-pastel-beige group"
                  >
                    <span className="font-heading font-medium text-base md:text-lg text-pastel-beige group-hover:text-ceramic-yellow transition-colors pr-4">
                      {faq.question}
                    </span>
                    <span className={`text-ceramic-yellow transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                      <ChevronDown size={18} />
                    </span>
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-pastel-beige/70 font-body text-sm md:text-base leading-relaxed border-t border-pastel-beige/5 animate-fade-in bg-pure-black/30">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}

            {/* Final bottom CTA card inside FAQ tab */}
            <div className="glass-card rounded-2xl p-6 border border-ceramic-yellow/10 text-center mt-10">
              <p className="font-body text-pastel-beige/80 text-sm mb-4">
                Have different queries or ready to review specific site layouts in Bhagalpur or nearby regions?
              </p>
              <button 
                onClick={() => setActiveSubPage('enquiry')}
                className="inline-flex items-center gap-2 text-ceramic-yellow hover:text-[#ffeaae] font-body font-bold text-xs uppercase tracking-wider border-b border-ceramic-yellow/30 pb-0.5"
              >
                Start An Enquiry Now
                <ArrowUpRight size={12} />
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
