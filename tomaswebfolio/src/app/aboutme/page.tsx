"use client"
import Header from '../components/Header.jsx';
import { Meteors } from '@/components/ui/meteors';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';
import { useState } from 'react';





export default function Home() {

  const [displayText, setDisplayText] = useState("Hello, World!");
  
  // State to hold the value of the input textbox
  const [inputText, setInputText] = useState("");

  // Function to update the display text with the input text
  const updateText = () => {
    setDisplayText(inputText);
    setInputText(""); // Clear the input field after updating
  };


    return (
      <div>
        <Header />

        <div className="border-2 border-white p-4 rounded">
        
        </div>

        <Meteors />
        <ShootingStars />
        <StarsBackground />           
      </div>
      
    );
    
  }