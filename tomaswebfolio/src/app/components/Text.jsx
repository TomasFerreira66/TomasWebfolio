"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function TypewriterEffectDemo() {
  const hello = [
    {
      text: "Hello",
    },
    {
      text: "and",
    },
    {
      text: "welcome.",
    },
  ];

  const links = [
 {
  text: "Check",
 },
 {
  text:"out",
 },
 {
  text:"my",
 },
 {
  text:"portfolio",
 },
 {
  text:"in",
 },
 {
  text:"the",
 },
 {
  text:"menu",
 },
 {
  text:"below.",
 },

  ]


  return (
    <div>
    <div className="flex flex-col items-center justify-center ">
      <TypewriterEffect words={hello} />    
    </div>
    <div className="flex flex-col items-center justify-center ">
      <TypewriterEffect words={links} />    
    </div>
  </div>
  
    
  );
}
