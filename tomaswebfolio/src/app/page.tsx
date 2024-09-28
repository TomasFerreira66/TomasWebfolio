import Header from './components/Header.jsx';
import Contact from './components/Contact.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { FloatingDockDemo } from './components/About.jsx';

export default function Home() {
  return (
    <div>
      <Header />


      <FloatingDockDemo />
      <ShootingStars />
      <StarsBackground />
      <Meteors />
      <Contact />
    </div>
  );
}
