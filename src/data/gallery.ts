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
    afterIndex: 7, // inserts after the 8th item (0-indexed 7)
    eyebrow: "Hungry Now",
    heading: "Order via Swiggy/Zomato",
    description: "Craving SNP? Get your favorites delivered piping hot to your doorstep.",
    ctaLabel: "Order Online",
    ctaLink: "#",
    bgImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1080"
  },
  {
    afterIndex: 16, // inserts after the 17th item
    eyebrow: "Celebrations",
    heading: "Book Your Party",
    description: "Birthdays, anniversaries, or corporate meetups. Make it memorable at SNP.",
    ctaLabel: "Reserve Space",
    ctaLink: "/franchise#contact-section",
    bgImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1080"
  }
];

export const galleryItems: GalleryItem[] = [
  { id: '1', type: 'image', src: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=800', aspect: 'portrait', alt: 'Steaming Momos' },
  { id: '2', type: 'image', src: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=800', aspect: 'square', alt: 'Cocktail Drink' },
  { id: '3', type: 'video', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', poster: 'https://images.unsplash.com/photo-1555507036-ab1f40ce88cb?auto=format&fit=crop&q=80&w=800', aspect: 'landscape', alt: 'Party Atmosphere' },
  { id: '4', type: 'image', src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=800', aspect: 'portrait', alt: 'Loaded Pizza' },
  { id: '5', type: 'image', src: 'https://images.unsplash.com/photo-1544025162-81111420d4d4?auto=format&fit=crop&q=80&w=800', aspect: 'landscape', alt: 'Hot Sizzler' },
  { id: '6', type: 'image', src: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80&w=800', aspect: 'square', alt: 'Dessert' },
  { id: '7', type: 'image', src: 'https://images.unsplash.com/photo-1628296517652-516d27f3112d?auto=format&fit=crop&q=80&w=800', aspect: 'portrait', alt: 'Tandoori' },
  { id: '8', type: 'video', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', poster: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800', aspect: 'landscape', alt: 'Restaurant Vibe' },
  { id: '9', type: 'image', src: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=800', aspect: 'square', alt: 'Coffee Art' },
  { id: '10', type: 'image', src: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&q=80&w=800', aspect: 'portrait', alt: 'Halloween Drink' },
  { id: '11', type: 'image', src: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800', aspect: 'landscape', alt: 'Romantic Table Setup' },
  { id: '12', type: 'image', src: 'https://images.unsplash.com/photo-1490818387583-1b5ba45227fa?auto=format&fit=crop&q=80&w=800', aspect: 'square', alt: 'Spring Salad' },
  { id: '13', type: 'video', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', poster: 'https://images.unsplash.com/photo-1563204738-f1cbae2ba542?auto=format&fit=crop&q=80&w=800', aspect: 'portrait', alt: 'Tropical Drink' },
  { id: '14', type: 'image', src: 'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?auto=format&fit=crop&q=80&w=800', aspect: 'square', alt: 'Festive Platter' },
  { id: '15', type: 'image', src: 'https://images.unsplash.com/photo-1588675646184-a5a41bc78788?auto=format&fit=crop&q=80&w=800', aspect: 'landscape', alt: 'Aesthetic Interior' },
  { id: '16', type: 'image', src: 'https://images.unsplash.com/photo-1563514986161-00af7c98da5b?auto=format&fit=crop&q=80&w=800', aspect: 'portrait', alt: 'Nightlife DJ' },
  { id: '17', type: 'image', src: 'https://images.unsplash.com/photo-1516997121675-4c2d1684aa3e?auto=format&fit=crop&q=80&w=800', aspect: 'square', alt: 'Group Gathering' },
  { id: '18', type: 'image', src: 'https://images.unsplash.com/photo-1554118811-1e0d58224d24?auto=format&fit=crop&q=80&w=800', aspect: 'landscape', alt: 'Espresso Machine' },
  { id: '19', type: 'image', src: 'https://images.unsplash.com/photo-1574936145840-28808d77a0b6?auto=format&fit=crop&q=80&w=800', aspect: 'portrait', alt: 'Sushi Platter' },
  { id: '20', type: 'image', src: 'https://images.unsplash.com/photo-1508215885820-4585e5610e28?auto=format&fit=crop&q=80&w=800', aspect: 'square', alt: 'Chef Plating' },
  { id: '21', type: 'video', src: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', poster: 'https://images.unsplash.com/photo-1536939459926-3011eb404109?auto=format&fit=crop&q=80&w=800', aspect: 'landscape', alt: 'Live Band' },
  { id: '22', type: 'image', src: 'https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?auto=format&fit=crop&q=80&w=800', aspect: 'portrait', alt: 'Cocktail Pour' },
  { id: '23', type: 'image', src: 'https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?auto=format&fit=crop&q=80&w=800', aspect: 'square', alt: 'Dim Sum' },
  { id: '24', type: 'image', src: 'https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&q=80&w=800', aspect: 'landscape', alt: 'Outdoor Seating' },
];
