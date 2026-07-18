import React, { useState, useRef, useEffect } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { getWhatsAppLink } from '../../lib/whatsapp';
import { seasons } from '../../data/seasons';

interface FAQ {
  id: number;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Do I need a certain follower count to apply?",
    answer: "No. We care more about whether you genuinely enjoy SNP and post consistently than your follower count."
  },
  {
    id: 2,
    question: "What if I miss a week?",
    answer: "Life happens. One off week won't end things — just give us a heads-up. Repeated no-shows without communication may affect weekly perks."
  },
  {
    id: 3,
    question: "Can I apply if I don't live in Kahalgaon or Maharajganj?",
    answer: "SNP Crew is built around our outlet locations, so you'll need to visit regularly. If you're nearby and can make it work, apply and let's talk."
  },
  {
    id: 4,
    question: "Is this a paid job?",
    answer: "Not a salaried role — it's perks-based: kit, weekly food credit, recognition, and an end-of-season reward."
  },
  {
    id: 5,
    question: "What happens after 65 days?",
    answer: "We'll review Season 01 together. Strong Crew members may be invited back for future seasons."
  }
];

export default function JoinUsFAQ() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openId, setOpenId] = useState<number | null>(1);
  const contentRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const activeSeason = seasons.find(s => s.status === 'active') || seasons[0];
  const isFull = activeSeason.spotsFilled >= activeSeason.spotsTotal;

  const handleToggle = (id: number) => {
    const isCurrentlyOpen = openId === id;
    const targetId = isCurrentlyOpen ? null : id;

    // Direct GSAP transition control for pristine height adjustment
    if (openId !== null && contentRefs.current[openId]) {
      gsap.to(contentRefs.current[openId], {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    }

    if (targetId !== null && contentRefs.current[targetId]) {
      // Temporarily set height auto to measure scrollHeight
      const targetEl = contentRefs.current[targetId];
      if (targetEl) {
        gsap.set(targetEl, { height: 'auto', opacity: 0 });
        const autoHeight = targetEl.scrollHeight;
        gsap.fromTo(targetEl,
          { height: 0, opacity: 0 },
          { height: autoHeight, opacity: 1, duration: 0.35, ease: 'power2.out' }
        );
      }
    }

    setOpenId(targetId);
  };

  // Initial setup for the first open FAQ item
  useEffect(() => {
    if (openId !== null && contentRefs.current[openId]) {
      gsap.set(contentRefs.current[openId], { height: 'auto', opacity: 1 });
    }
  }, []);

  const handleChatQuestions = () => {
    const msg = "Hi SNP! I'm interested in SNP Crew but had some questions.";
    window.open(getWhatsAppLink(msg), '_blank');
  };

  const handleApplyAnyway = () => {
    const msg = isFull 
      ? "Hi SNP! I'd like to join the waitlist for SNP Crew Season 02."
      : "Hi SNP! I'd like to apply for SNP Crew.\nName: __\nInstagram: __\nNearest Outlet: __";
    window.open(getWhatsAppLink(msg), '_blank');
  };

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-pure-black border-t border-pastel-beige/5 relative"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="font-bebas text-xs md:text-sm tracking-[0.3em] text-ceramic-yellow uppercase mb-3 block">
            QUESTIONS
          </span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-pastel-beige tracking-tight mb-2">
            Before You Apply
          </h2>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-20 max-w-3xl mx-auto">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className="rounded-2xl border border-red-carriage/20 bg-[#0C0000]/30 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => handleToggle(faq.id)}
                  className="w-full flex justify-between items-center px-6 py-5 text-left hover:bg-white/5 transition-all text-pastel-beige group"
                >
                  <span className="font-heading font-medium text-lg md:text-xl text-pastel-beige group-hover:text-ceramic-yellow transition-colors pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-ceramic-yellow transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} />
                  </span>
                </button>
                
                {/* Accordion interior controlled strictly by GSAP */}
                <div 
                  ref={(el) => { contentRefs.current[faq.id] = el; }}
                  className="overflow-hidden h-0 opacity-0"
                >
                  <div className="px-6 pb-6 pt-1 text-pastel-beige/70 font-body text-sm md:text-base leading-relaxed border-t border-pastel-beige/5 bg-pure-black/30">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* HELP CTA BOX (dark glass card, ceramic-yellow border, centered text + dual buttons) */}
        <div className="glass-card max-w-2xl mx-auto rounded-2xl p-8 md:p-10 border border-ceramic-yellow/30 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-ceramic-yellow/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10">
            <div className="w-12 h-12 rounded-full bg-ceramic-yellow/10 border border-ceramic-yellow/20 flex items-center justify-center text-ceramic-yellow mx-auto mb-6">
              <HelpCircle size={22} />
            </div>

            <h3 className="font-display font-bold text-2xl md:text-3xl text-pastel-beige mb-3 tracking-tight">
              Still Deciding?
            </h3>
            
            <p className="font-body text-sm md:text-base text-pastel-beige/70 max-w-md mx-auto mb-8 leading-relaxed">
              Tell us a bit about yourself — we'll let you know if SNP Crew is the right fit.
            </p>

            {/* Dual Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <button 
                onClick={handleChatQuestions}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-ceramic-yellow hover:bg-[#ebd097] text-bordeaux font-body font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full shadow-md transition-colors"
              >
                <MessageCircle size={16} />
                Chat on WhatsApp
              </button>
              
              <button 
                onClick={handleApplyAnyway}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent hover:bg-white/5 text-pastel-beige hover:text-white border border-pastel-beige/35 font-body font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-full transition-all"
              >
                {isFull ? 'Join the Waitlist' : 'Apply Anyway'}
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
