import {
  IconBrandFramerMotion,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandTailwind,
} from "@tabler/icons-react";
import { motion } from "framer-motion";

import AnimatedIcon from "./animatedIcon.jsx";

const webStackData = [
  { 
    label: "HTML", 
    icon: IconBrandHtml5, 
    bgColor: "bg-gradient-to-br from-orange-400 to-orange-600",
    description: "Markup language for web structure"
  },
  { 
    label: "JavaScript", 
    icon: IconBrandJavascript, 
    bgColor: "bg-gradient-to-br from-yellow-300 to-yellow-500",
    description: "Dynamic programming language"
  },
  { 
    label: "React", 
    icon: IconBrandReact, 
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    description: "Component-based UI library"
  },
  { 
    label: "Next.js", 
    icon: IconBrandNextjs, 
    bgColor: "bg-gradient-to-br from-gray-800 to-black",
    description: "Full-stack React framework"
  },
  { 
    label: "Tailwind", 
    icon: IconBrandTailwind, 
    bgColor: "bg-gradient-to-br from-teal-400 to-blue-500",
    description: "Utility-first CSS framework"
  },
  { 
    label: "Motion", 
    icon: IconBrandFramerMotion, 
    bgColor: "bg-gradient-to-br from-pink-400 to-pink-600",
    description: "Animation library for React"
  },
];

const title = {
  hidden: { opacity: 0, y: -50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const stack = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const Comp_webstack = () => {
  return (
    <div className="p-6 flex items-center justify-center">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="flex flex-col space-y-12 items-center justify-center font-thin"
          initial="hidden"
          animate="visible"
          variants={stack}
        >
          <motion.div 
            className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold text-center"
            variants={title}
          >
            My Web Stack
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12"
            variants={stack}
          >
            {webStackData.map(({ label, icon, bgColor, description }, index) => (
              <AnimatedIcon 
                key={label} 
                label={label} 
                Icon={icon} 
                bgColor={bgColor}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Comp_webstack;