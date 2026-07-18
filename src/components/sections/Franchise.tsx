import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { Store, TrendingUp, Users, PiggyBank } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';

export default function Franchise() {
  const sectionRef = useRef<HTMLElement>(null);
  const textBgRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    city: '',
    phone: '',
    investment: '10L - 15L'
  });

  useGSAP(() => {
    // Parallax background text
    gsap.fromTo(textBgRef.current,
      { xPercent: -20 },
      {
        xPercent: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          scrub: true,
          start: "top bottom",
          end: "bottom top"
        }
      }
    );
  }, { scope: sectionRef });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      toast.error('Name and Phone are required.');
      return;
    }
    
    // Construct WhatsApp message
    const message = `Hi SNP! I'm interested in franchise.\nName: ${formData.name}\nCity: ${formData.city}\nPhone: ${formData.phone}\nInvestment Range: ${formData.investment}`;
    
    // Open WhatsApp
    window.open(getWhatsAppLink(message), '_blank');
    
    toast.success('Redirecting to WhatsApp...');
    setFormData({ name: '', city: '', phone: '', investment: '10L - 15L' });
  };

  return (
    <section id="franchise" ref={sectionRef} className="py-32 bg-[#0E0000] relative overflow-hidden" data-section="franchise">
      <Toaster position="bottom-center" />
      {/* Massive Background Text */}
      <div 
        ref={textBgRef}
        className="absolute top-1/2 left-0 -translate-y-1/2 font-bebas text-[25vw] text-[#9C0512] opacity-[0.03] whitespace-nowrap pointer-events-none select-none"
      >
        FRANCHISE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Left: Content & Benefits */}
        <div>
          <h2 className="font-display font-medium text-5xl md:text-6xl text-[#EFEACD] mb-6 shadow-sm">
            Own an SNP.<br/>
            <span className="italic text-[#9C0512] font-black">Scale the Vibe.</span>
          </h2>
          <p className="font-body text-[#EFEACD]/70 text-lg md:text-xl mb-12">
            Join Bihar's fastest-growing premium café brand. We provide end-to-end setup, staff training, marketing, and the perfect menu to guarantee footfall.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            {[
              { icon: <Store />, title: "Complete Setup", desc: "From interior design to kitchen equipment." },
              { icon: <TrendingUp />, title: "High ROI", desc: "Optimized menu engineering for maximum profit." },
              { icon: <Users />, title: "Staff Training", desc: "Chefs mapped and trained to our standard." },
              { icon: <PiggyBank />, title: "Marketing", desc: "Brand level social media push for your outlet." },
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-[#9C0512] mt-1">{benefit.icon}</div>
                <div>
                  <h4 className="font-body font-semibold text-[#F8D794] text-lg mb-1">{benefit.title}</h4>
                  <p className="font-body text-[#EFEACD]/60 text-sm leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="inline-flex flex-wrap items-center gap-4 bg-[#64090C]/10 border border-[#9C0512]/30 px-6 py-4 rounded-xl">
            <span className="font-bebas text-2xl tracking-wider text-[#F8D794]">3 ACTIVE OUTLETS</span>
            <span className="text-[#9C0512]">|</span>
            <span className="font-bebas text-2xl tracking-wider text-[#EFEACD]">2 CITIES</span>
            <span className="text-[#9C0512]">|</span>
            <span className="font-bebas text-2xl tracking-wider text-[#EFEACD]">GROWING</span>
          </div>
        </div>

        {/* Right: The Form */}
        <div className="glass-card rounded-2xl p-8 md:p-10 border-[#9C0512]/30">
          <h3 className="font-heading font-semibold text-3xl text-[#EFEACD] mb-2">Request Callback</h3>
          <p className="font-body text-[#EFEACD]/60 mb-8 text-sm">Fill in your details and our team will connect with you.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-wider uppercase text-[#F8D794]">Full Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-[#0E0000]/50 border border-[#EFEACD]/20 rounded-sm px-4 py-3 font-body text-[#EFEACD] focus:outline-none focus:border-[#9C0512] transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs tracking-wider uppercase text-[#F8D794]">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-[#0E0000]/50 border border-[#EFEACD]/20 rounded-sm px-4 py-3 font-body text-[#EFEACD] focus:outline-none focus:border-[#9C0512] transition-colors"
                  placeholder="+91"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-body text-xs tracking-wider uppercase text-[#F8D794]">City</label>
                <input 
                  type="text" 
                  value={formData.city}
                  onChange={e => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#0E0000]/50 border border-[#EFEACD]/20 rounded-sm px-4 py-3 font-body text-[#EFEACD] focus:outline-none focus:border-[#9C0512] transition-colors"
                  placeholder="Patna"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-body text-xs tracking-wider uppercase text-[#F8D794]">Investment Capacity</label>
              <select 
                value={formData.investment}
                onChange={e => setFormData({ ...formData, investment: e.target.value })}
                className="w-full bg-[#0E0000]/80 border border-[#EFEACD]/20 rounded-sm px-4 py-3 font-body text-[#EFEACD] focus:outline-none focus:border-[#9C0512] transition-colors appearance-none"
              >
                <option value="Under 10L">Under 10L</option>
                <option value="10L - 15L">10L - 15L</option>
                <option value="15L - 25L">15L - 25L</option>
                <option value="25L+">25L+</option>
              </select>
            </div>

            <button 
              type="submit" 
              className="mt-4 w-full bg-[#9C0512] hover:bg-[#64090C] text-[#EFEACD] font-body px-8 py-4 rounded-sm text-sm uppercase tracking-wider font-semibold hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(156,5,18,0.4)] transition-all duration-300 ease-out"
            >
              Submit & Connect on WhatsApp
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
