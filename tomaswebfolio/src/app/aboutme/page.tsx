"use client"
import Header from '../components/Header.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { useState } from 'react';
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconFileTextSpark,
  IconHome,
  IconNewSection,
  IconTerminal2,
  IconUserFilled,
} from "@tabler/icons-react";




export default function Home() {


  return (
    <div>
      <Header />

      <div className="flex justify-center items-center">
        <div className="flex flex-col border-2 w-1/3 items-center border-white p-4 rounded text-7xl">
          Me
        </div>
        <div className="flex flex-col border-2 w-1/3 items-center border-white p-4 rounded text-7xl ml-4">
          Web Tech
        </div>
        <div className="flex flex-col border-2 w-1/3 items-center border-white p-4 rounded text-7xl ml-4">
          Education
        </div>
      </div>


      <div className="flex justify-center">
        <div className="flex flex-col border-2 w-1/3 items-center border-white p-4 rounded text-2xl">
          Hello, my name is Tomás, I'm a Portuguese software engineer with a passion for web development.
        </div>

        <div className="flex flex-col border-2 w-1/3 items-center border-white p-4 rounded text-2xl ml-4">
          HTML
          <IconFileTextSpark className="h-16 w-full text-neutral-500 dark:text-neutral-300" />
          Javascript
          <IconFileTextSpark className="h-16 w-full text-neutral-500 dark:text-neutral-300" />
          React
          <IconFileTextSpark className="h-16 w-full text-neutral-500 dark:text-neutral-300" />
          NextJS
          <IconFileTextSpark className="h-16 w-full text-neutral-500 dark:text-neutral-300" />
          Tailwind CSS
          <IconFileTextSpark className="h-16 w-full text-neutral-500 dark:text-neutral-300" />
          Framer Motion
          <IconFileTextSpark className="h-16 w-full text-neutral-500 dark:text-neutral-300" />
        </div>

        <div className="flex flex-col border-2 w-1/3 items-center border-white p-4 rounded text-7xl ml-4">

        </div>

      </div>


      <Meteors />
      <ShootingStars />
      <StarsBackground />
    </div>

  );

}