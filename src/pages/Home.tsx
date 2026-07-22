import Hero from '../components/sections/Hero';
import Marquee from '../components/sections/Marquee';
import About from '../components/sections/About';
import ReelGlider from '../components/sections/ReelGlider';
import GalleryPreview from '../components/sections/GalleryPreview';
import Menu from '../components/sections/Menu';
import Reviews from '../components/sections/Reviews';
import Collab from '../components/sections/Collab';
import FAQ from '../components/sections/FAQ';
import { dummyReels } from '../data/reels';

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <ReelGlider reels={dummyReels} />
      <GalleryPreview />
      <div id="menu">
        <Menu isHomePage limit={6} />
      </div>
      <Collab />
      <Reviews />
      <FAQ />
    </main>
  );
}
