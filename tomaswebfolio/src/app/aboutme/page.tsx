"use client"
import Header from '../components/Header.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { useState } from 'react';





export default function Home() {


  return (
    <div>
      <Header />

      <div className="flex justify-center items-center">
        <div className="flex flex-col border-2 w-1/2 items-start border-white p-4 rounded text-2xl">
          <p>Hello, my name is Tomás, I'm a Portuguese software engineer with a passion for web development.</p>
          
          <p>Web Tech: I work around JavaScript frameworks like React and Next.js. For design I specialize in Figma, Tailwind CSS and Framer Motion for some crispy clean websites.</p>
        </div>
      </div>

      <Meteors />
      <ShootingStars />
      <StarsBackground />
    </div>

  );

}