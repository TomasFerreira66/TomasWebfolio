import Header from './components/Header.jsx';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { FloatingDockDemo } from './components/About.jsx';
import { TypewriterEffectDemo } from './components/Text.jsx';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='font-thin'>
      <Header />
      
      <TypewriterEffectDemo />
    
      <FloatingDockDemo />

      <ShootingStars />
      <StarsBackground />
    
     
    </div>
  );
}
