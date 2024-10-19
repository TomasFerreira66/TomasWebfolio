"use client"
import HomeButton from '../components/HomeButton.jsx';

import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import Comp_webstack from './comp_webstack.jsx'
import Comp_aboutme from './comp_aboutme.jsx'


export default function Home() {


  return (
    <div className='font-thin w-full'>
      <HomeButton />
      
      <div className='p-12'>
        <Comp_aboutme />
      </div>
     
      
     
      <div className='p-10 md:p-10 lg:p-10'>
        <Comp_webstack />
      </div>
      
  
      <ShootingStars />
      <StarsBackground />
    </div>

  );

}