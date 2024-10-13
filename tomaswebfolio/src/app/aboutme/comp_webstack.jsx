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
    <div className="p-4">
      <div className="flex flex-col space-y-6 items-center justify-center font-thin">
        <div className="text-5xl md:text-7xl mb-3">Web Stack</div>
        <div className="flex flex-wrap items-center justify-center space-x-4 md:space-x-8">
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
  );
};

export default Comp_webstack;
