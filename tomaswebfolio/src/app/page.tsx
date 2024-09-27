import Header from './components/Header.jsx';
import Contact from './components/Contact.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { BentoGridSecondDemo } from '@/components/ui/bento-grid'; // Ensure this is imported correctly

export default function Home() {
  return (
    <div>
      <Header />


      {/* Second Bento Grid */}
      <div className="mt-8">
        <BentoGridSecondDemo />
      </div>

      <Contact />
      <ShootingStars />
      <StarsBackground />
      <Meteors />
    </div>
  );
}
