import { getWhatsAppLink } from '../lib/whatsapp';

export interface LineupDay {
  id: string;
  dayShort: string;
  date: string;
  title: string;
  thumb: string;
  media: string;
  tag: string;
  status: 'LIVE' | null;
  description: string;
  ctaPrimary: { label: string; link: string };
  ctaSecondary: { label: string; link: string };
}

const bookTableMsg = "Hi SNP! I'd like to book a table.\nName: \nDate: \nTime: \nGuests: ";
const reserveNowMsg = "Hi SNP! I'd like to make a reservation.\nName: \nDate: \nTime: \nGuests: ";
const eventsInfoMsg = "Hi SNP! I'd like to know more about the upcoming events and celebrations at SNP Cafe.";

export const weeklyLineupData: LineupDay[] = [
  {
    id: 'jan',
    dayShort: 'JAN',
    date: 'NEW YEAR MENU',
    title: 'Winter Warmers',
    thumb: 'https://images.unsplash.com/photo-1541944743-275331f407fc?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1541944743-275331f407fc?auto=format&fit=crop&q=80&w=1080',
    tag: 'COMFORT FOOD',
    status: null,
    description: 'Start the year with our hearty winter warmer specials featuring rich stews and steaming hot chocolate.',
    ctaPrimary: { label: 'Explore Menu', link: '/menu' },
    ctaSecondary: { label: 'Book Table', link: getWhatsAppLink(bookTableMsg) }
  },
  {
    id: 'feb',
    dayShort: 'FEB',
    date: 'VALENTINE WEEK',
    title: 'Love & Lattes',
    thumb: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=1080',
    tag: 'ROMANCE',
    status: null,
    description: 'Special couples menus and romantic aesthetic setups perfect for your Valentine dates.',
    ctaPrimary: { label: 'Reserve Now', link: getWhatsAppLink(reserveNowMsg) },
    ctaSecondary: { label: 'See Offers', link: '/menu' }
  },
  {
    id: 'mar',
    dayShort: 'MAR',
    date: 'SPRING AWAKENING',
    title: 'Holi Colors & Flavors',
    thumb: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?auto=format&fit=crop&q=80&w=1080',
    tag: 'FESTIVE',
    status: null,
    description: 'Celebrate the festival of colors with our special Thandai variations and colorful dessert platters.',
    ctaPrimary: { label: 'Explore Sweets', link: '/menu?category=sweets' },
    ctaSecondary: { label: 'Book Table', link: getWhatsAppLink(bookTableMsg) }
  },
  {
    id: 'apr',
    dayShort: 'APR',
    date: 'SPRING MENU',
    title: 'Fresh & Floral',
    thumb: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1080',
    tag: 'SEASONAL',
    status: null,
    description: 'Light, refreshing spring salads and floral-infused beverages hit our menu this month.',
    ctaPrimary: { label: 'Explore Menu', link: '/menu' },
    ctaSecondary: { label: 'Outlet Info', link: '/franchise#outlets-section' }
  },
  {
    id: 'may',
    dayShort: 'MAY',
    date: 'SUMMER VIBES',
    title: 'Summer Coolers',
    thumb: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=1080',
    tag: 'REFRESH',
    status: 'LIVE',
    description: 'Beat the heat with our signature mocktails, iced coffees, and frozen treats.',
    ctaPrimary: { label: 'Drinks Menu', link: '/menu?category=drinks' },
    ctaSecondary: { label: 'Book Table', link: getWhatsAppLink(bookTableMsg) }
  },
  {
    id: 'jun',
    dayShort: 'JUN',
    date: 'SUMMER SPECIAL',
    title: 'Tropical Delights',
    thumb: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?auto=format&fit=crop&q=80&w=1080',
    tag: 'CELEBRATE',
    status: null,
    description: 'Tropical fruit pastries, special summer nights, and vibrant gatherings.',
    ctaPrimary: { label: 'Events Info', link: getWhatsAppLink(eventsInfoMsg) },
    ctaSecondary: { label: 'Explore Menu', link: '/menu' }
  },
  {
    id: 'jul',
    dayShort: 'JUL',
    date: 'MONSOON CRAVINGS',
    title: 'Monsoon Munchies',
    thumb: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&q=80&w=1080',
    tag: 'RAINY DAYS',
    status: null,
    description: 'Nothing beats hot pakoras, spicy momos, and cutting chai while it rains outside.',
    ctaPrimary: { label: 'Explore Menu', link: '/menu' },
    ctaSecondary: { label: 'Book Table', link: getWhatsAppLink(bookTableMsg) }
  },
  {
    id: 'aug',
    dayShort: 'AUG',
    date: 'FRIENDSHIP DAY',
    title: 'BFF Platters',
    thumb: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=1080',
    tag: 'SHAREABLE',
    status: null,
    description: 'Gather your squad for giant shareable platters and pitcher specials all month long.',
    ctaPrimary: { label: 'Reserve Now', link: getWhatsAppLink(reserveNowMsg) },
    ctaSecondary: { label: 'See Offers', link: '/menu' }
  },
  {
    id: 'sep',
    dayShort: 'SEP',
    date: 'COFFEE DAY',
    title: 'Brewers Festival',
    thumb: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&q=80&w=1080',
    tag: 'CAFFEINE FIX',
    status: null,
    description: 'Celebrating international coffee day with exotic brews, coffee workshops, and tasting sessions.',
    ctaPrimary: { label: 'Coffee Menu', link: '/menu?category=coffee' },
    ctaSecondary: { label: 'Outlet Info', link: '/franchise#outlets-section' }
  },
  {
    id: 'oct',
    dayShort: 'OCT',
    date: 'HALLOWEEN',
    title: 'Spooky Specials',
    thumb: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1509557965875-b88c97052f0e?auto=format&fit=crop&q=80&w=1080',
    tag: 'SPOOKY SEASON',
    status: null,
    description: 'Costume parties, pumpkin spice everything, and terrifyingly delicious dark desserts.',
    ctaPrimary: { label: 'Events Info', link: getWhatsAppLink(eventsInfoMsg) },
    ctaSecondary: { label: 'Book Table', link: getWhatsAppLink(bookTableMsg) }
  },
  {
    id: 'nov',
    dayShort: 'NOV',
    date: 'DIWALI SPECIAL',
    title: 'Lights & Delights',
    thumb: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1080',
    tag: 'FESTIVE',
    status: null,
    description: 'Festive fusion menus, illuminated ambiance, and special Diwali gift hampers available.',
    ctaPrimary: { label: 'Explore Sweets', link: '/menu?category=sweets' },
    ctaSecondary: { label: 'Book Table', link: getWhatsAppLink(bookTableMsg) }
  },
  {
    id: 'dec',
    dayShort: 'DEC',
    date: 'HOLIDAY SEASON',
    title: 'Winter Wonderland',
    thumb: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=150&h=150',
    media: 'https://images.unsplash.com/photo-1543007630-9710e4a00a20?auto=format&fit=crop&q=80&w=1080',
    tag: 'YEAR END',
    status: null,
    description: 'Christmas roasts, plum cakes, mulled beverages, and our grand New Year’s Eve bash.',
    ctaPrimary: { label: 'Reserve Now', link: getWhatsAppLink(reserveNowMsg) },
    ctaSecondary: { label: 'Events Info', link: getWhatsAppLink(eventsInfoMsg) }
  }
];
