"use client";
import ProjectCard from "./projectCard.jsx";

export default function Projects() {
  return (
    <div className="flex flex-col items-center justify-center sm:text-xl md:text-3xl lg:text-5xl font-thin p-8">
      <div className="flex flex-col md:m-8 items-center sm:text-xl md:text-3xl lg:text-5xl pb-4">
        Personal Projects
      </div>

      {/* Flexbox layout for stacked project cards */}
      <div className="flex flex-col w-full lg:w-1/2 mt-8 space-y-8">
        {/* Project 1 */}
        <div className="w-full">
          <ProjectCard 
            title="Portfolio" 
            description="My first project done by myself... well, you're here after all. My portfolio! This portfolio was made using some beautiful components by Aceternity UI." 
            
            link="../#" 
          />

        
        </div>

        
       

        {/* Add more projects below */}
      </div>
    </div>
  );
}