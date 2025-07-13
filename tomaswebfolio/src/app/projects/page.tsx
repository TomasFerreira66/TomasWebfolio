import HomeButton from '../components/HomeButton.jsx';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import Personal_project from './personal_projects.jsx';

export default function Home() {
  return (
    <div className='font-thin w-full h-screen'>
      <HomeButton />

      <Personal_project />  
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}