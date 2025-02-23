import Header from './components/Header.jsx';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { FloatingDockDemo } from './components/About.jsx';
import { TypewriterEffectDemo } from './components/Text.jsx';

export default function Home() {
  return (
    <div className='font-thin w-full'>
      
      <Header />
      
      <TypewriterEffectDemo />
    
      <FloatingDockDemo />

      <ShootingStars />
      <StarsBackground />
    
     
    </div>
  );
}
