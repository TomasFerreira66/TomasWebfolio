"use client";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, link }) => {
  return (
    <motion.div
      whileHover={{
        borderColor: "#3b82f6", // Tailwind's 'blue-500'
        boxShadow: "0px 0px 10px rgba(59, 130, 246, 0.5)", // Soft blue glow
        transition: {
          duration: 0.1,
          ease: "easeInOut",
          borderWidth: [0, 2, 4], // A dynamic trail growing around the card
        },
      }}
      className="border-2 border-transparent rounded-lg p-6 shadow-lg"
    >
      <h2 className="text-2xl md:text-4xl font-semibold mb-4">{title}</h2>
      <p className="text-lg md:text-2xl mb-4">
        {description}
      </p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline hover:text-blue-700 text-lg"
      >
        View Project
      </a>
    </motion.div>
  );
};

export default ProjectCard;