"use client"
import Header from '../components/Header.jsx';

import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { useState } from 'react';
import Comp_webstack from './comp_webstack.jsx'
import Comp_aboutme from './comp_aboutme.jsx'


export default function Home() {


  return (
    <div className='font-thin'>
      <Header />
      
      <div className='p-10 md:p-30 lg:p-20'>
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