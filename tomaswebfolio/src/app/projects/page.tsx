import Header from '../components/Header.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';


export default function Home() {
    return (
      <div>
        <Header />
        <Meteors />
        <ShootingStars />
        <StarsBackground />       
      </div>
    );
  }