import Header from '../components/Header.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import Personal_project from './personal_projects.jsx';

export default function Home() {
  return (
    <div className='font-thin'>
      <Header />

      <Personal_project />

      
      
      
      <Meteors />
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}