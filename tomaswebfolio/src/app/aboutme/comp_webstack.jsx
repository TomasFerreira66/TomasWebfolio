

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
  } from "@tabler/icons-react";


  import AnimatedIcon from "./animatedIcon.jsx"; // Adjust the path as necessary
  
  const Comp_webstack = () => {
    return (
      <div>
        <div className="flex space-y-4 p-4 items-center justify-center font-thin">
          <div className="flex flex-col space-y-4 items-center justify-center">
            <div className="text-7xl mb-3">Web Stack</div>
            <div className="flex flex-row flex-wrap space-x-8 ">
              {[
                { label: "HTML", icon: IconBrandHtml5, bgColor: "bg-orange-500" },
                { label: "Javascript", icon: IconBrandJavascript, bgColor: "bg-yellow-300" },
                { label: "React", icon: IconBrandReact, bgColor: "bg-blue-500" },
                { label: "NextJS", icon: IconBrandNextjs, bgColor: "bg-black" },
                { label: "Tailwind", icon: IconBrandTailwind, bgColor: "bg-gradient-to-r from-teal-400 to-blue-500" },
                { label: "Framer Motion", icon: IconBrandFramerMotion, bgColor: "bg-pink-500" },
              ].map(({ label, icon, bgColor }, index) => (
                <AnimatedIcon key={index} label={label} Icon={icon} bgColor={bgColor} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };


  export default Comp_webstack;

  

  