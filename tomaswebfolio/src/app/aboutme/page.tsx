"use client"
import Header from '../components/Header.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { useState } from 'react';
import Componentsaboutme from './components.jsx'

import {
  IconBrandFramerMotion,
  IconBrandGithub,
  IconBrandGmail,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandLinkedin,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
  IconBrandX,
  IconExchange,
  IconFileTextSpark,
  IconHome,
  IconLanguage,
  IconNewSection,
  IconTerminal2,
  IconUserFilled,
} from "@tabler/icons-react";




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