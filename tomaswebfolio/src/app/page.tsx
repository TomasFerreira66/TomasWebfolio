import Header from './components/Header.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { FloatingDockDemo } from './components/About.jsx';
import { TypewriterEffectDemo } from './components/Text.jsx';

export default function Home() {
  return (
    <div>
      <Header />

      <TypewriterEffectDemo />
      <FloatingDockDemo />
      <ShootingStars />
      <StarsBackground />
      <Meteors />
     
    </div>
  );
}
