import Header from './components/Header.jsx';
import Contact from './components/Contact.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background'



export default function Home() {
  return (
    <>
 
      <Header />
      <Meteors></Meteors>
      <Contact />
      <ShootingStars />
   <StarsBackground />
    </>
  );
}
