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

    <div className="flex flex-col items-center justify-center p-10 ">
      <TypewriterEffect words={hello} />    
    </div>
    
   
  
    
  );
}
