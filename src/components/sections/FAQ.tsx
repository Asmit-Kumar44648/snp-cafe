import { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Plus } from 'lucide-react';
import { faqs } from '../../data/content';

const AccordionItem = ({ question, answer, isOpen, onClick }: any) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.to(contentRef.current, { height: 'auto', duration: 0.4, ease: 'power2.inOut', opacity: 1 });
    } else {
      gsap.to(contentRef.current, { height: 0, duration: 0.3, ease: 'power2.inOut', opacity: 0 });
    }
  }, [isOpen]);

  return (
    <div className="border-b border-[#EFEACD]/10">
      <button 
        className="w-full py-6 flex items-center justify-between text-left group"
        onClick={onClick}
      >
        <span className="font-heading font-medium text-2xl text-[#EFEACD] pr-8 group-hover:text-[#F8D794] transition-colors">
          {question}
        </span>
        <div className={`transform transition-transform duration-500 text-[#9C0512] ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
          <Plus size={24} />
        </div>
      </button>
      <div 
        ref={contentRef} 
        className="h-0 overflow-hidden opacity-0"
      >
        <p className="pb-6 font-body text-[#EFEACD]/60 text-lg leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#0E0000]" data-section="faq">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-bebas text-[#F8D794] text-xl tracking-[0.3em] mb-4 block">KNOW MORE</span>
          <h2 className="font-display font-bold text-5xl md:text-6xl text-[#EFEACD]">Frequently Asked.</h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
