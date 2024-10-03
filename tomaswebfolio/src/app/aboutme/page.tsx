"use client"
import Header from '../components/Header.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { useState } from 'react';
import Componentsaboutme from './components.jsx'

export default function Home() {


  return (
    <div>
      <Header />
      <Componentsaboutme />
      <Meteors />
      <ShootingStars />
      <StarsBackground />
    </div>

  );

}