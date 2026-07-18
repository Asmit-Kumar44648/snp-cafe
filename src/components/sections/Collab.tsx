import { getWhatsAppLink, prefilledMessages } from '../../lib/whatsapp';

const collabs = [
  {
    num: "01",
    title: "Brand Events",
    desc: "Host your product launch, meetup, or pop-up at our aesthetic cafes.",
  },
  {
    num: "02",
    title: "College Fests",
    desc: "Sponsorships, food stalls, or meal partnerships for your university events.",
  },
  {
    num: "03",
    title: "Food Partnerships",
    desc: "Are you a creator or a local brand? Let's create a signature dish together.",
  }
];

export default function Collab() {
  return (
    <section className="py-24 bg-[#080808] relative overflow-hidden border-b border-[#9C0512]/20" data-section="collab">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2 className="font-display font-medium text-5xl md:text-7xl text-[#EFEACD] mb-16">
          <span className="italic text-[#9C0512]">Collab</span> With Us
        </h2>

        <div className="flex flex-col gap-4">
          {collabs.map((collab, i) => (
            <div 
              key={i} 
              className="group flex flex-col md:flex-row md:items-center justify-between p-8 md:p-10 border-b border-[#EFEACD]/10 hover:bg-[#64090C]/10 transition-colors"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12 mb-6 md:mb-0">
                <span className="font-bebas text-5xl text-[#9C0512] opacity-50 group-hover:opacity-100 transition-opacity">
                  {collab.num}
                </span>
                <div>
                  <h3 className="font-heading font-semibold text-3xl text-[#F8D794] mb-2">{collab.title}</h3>
                  <p className="font-body text-[#EFEACD]/60 max-w-lg">{collab.desc}</p>
                </div>
              </div>
              
              <a 
                href={getWhatsAppLink(prefilledMessages.collab)}
                target="_blank"
                rel="noreferrer"
                className="shrink-0 w-max bg-transparent border border-[#9C0512] text-[#EFEACD] px-8 py-3 rounded-full font-body text-sm tracking-wider uppercase hover:bg-[#9C0512] hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_20px_rgba(156,5,18,0.4)] transition-all duration-300 ease-out"
              >
                Enquire Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
