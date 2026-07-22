export type AspectRatio = 'portrait' | 'square' | 'landscape';
export type MediaType = 'image' | 'video';

export interface GalleryItem {
  id: string;
  type: MediaType;
  src: string;
  poster?: string;
  aspect: AspectRatio;
  alt: string;
}

export interface CtaCard {
  afterIndex: number;
  eyebrow: string;
  heading: string;
  description: string;
  ctaLabel: string;
  ctaLink: string;
  bgImage: string;
}

export const ctaCards: CtaCard[] = [
  {
    afterIndex: 2,
    eyebrow: "Hungry Now",
    heading: "Order via Swiggy/Zomato",
    description: "Craving SNP? Get your favorites delivered piping hot to your doorstep.",
    ctaLabel: "Order Online",
    ctaLink: "#",
    bgImage: "/assets/images/snp_gallery_pizza_box.jpg"
  },
  {
    afterIndex: 4,
    eyebrow: "Celebrations",
    heading: "Book Your Party at SNP",
    description: "Birthdays, anniversaries, or group meetups. Make it memorable at Sizzler 'n' Pizza Cafe.",
    ctaLabel: "Reserve Space",
    ctaLink: "/franchise#contact-section",
    bgImage: "/assets/images/snp_gallery_main_hall.jpg"
  }
];

export const galleryItems: GalleryItem[] = [
  { 
    id: '1', 
    type: 'image', 
    src: '/assets/images/snp_gallery_dining_wall.jpg', 
    aspect: 'landscape', 
    alt: 'SNP Italian Pizza Mural & Yellow Dining Area' 
  },
  { 
    id: '2', 
    type: 'image', 
    src: '/assets/images/snp_gallery_neon_sign.png', 
    aspect: 'portrait', 
    alt: 'Glow Neon SNP CAFE Sign & Hanging Rope Lights' 
  },
  { 
    id: '3', 
    type: 'image', 
    src: '/assets/images/snp_gallery_pizza_box.jpg', 
    aspect: 'landscape', 
    alt: 'Signature Sizzler n Pizza Cafe Branded Pizza Box' 
  },
  { 
    id: '4', 
    type: 'image', 
    src: '/assets/images/snp_gallery_pillar_hallway.jpg', 
    aspect: 'portrait', 
    alt: 'Red Pillar Dining Hallway & Counter' 
  },
  { 
    id: '5', 
    type: 'image', 
    src: '/assets/images/snp_gallery_main_hall.jpg', 
    aspect: 'landscape', 
    alt: 'SNP Main Cafe Seating & Counter' 
  },
];
