import snpLogo from '../../assets/images/snp_logo.png';

interface SNPLogoProps {
  className?: string;
  showText?: boolean; // kept for backward-compat, not used anymore
}

export default function SNPLogo({ className = 'w-16 h-16' }: SNPLogoProps) {
  return (
    <img
      src={snpLogo}
      alt="Sizzler 'n' Pizza Cafe Logo"
      className={`${className} rounded-full object-cover border border-[#F8D794]/20 hover:border-[#F8D794]/50 bg-[#0E0000] transition-transform duration-200 hover:scale-110 cursor-pointer`}
    />
  );
}
