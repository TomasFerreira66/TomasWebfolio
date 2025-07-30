import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const iconVariants = {
  hidden: { scale: 0, rotate: -180 },
  visible: { 
    scale: 1, 
    rotate: 0,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.2
    }
  },
  hover: { 
    scale: 1.1,
    rotate: 5,
    transition: { duration: 0.2 }
  }
};

const AnimatedIcon = ({ label, Icon, bgColor, delay = 0 }) => {
  return (
    <motion.div 
      className="flex flex-col items-center text-2xl cursor-pointer"
      initial="hidden"
      animate="visible"
      whileHover="hover"
      variants={containerVariants}
      style={{ animationDelay: `${delay}s` }}
    >
      <motion.div
        variants={iconVariants}
        className={`w-24 h-24 rounded-full flex items-center justify-center ${bgColor} shadow-lg hover:shadow-xl transition-shadow duration-300`}
      >
        <Icon className="w-16 h-16 text-white drop-shadow-md" />
      </motion.div>
      <motion.span 
        className="mt-3 w-24 text-center font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {label}
      </motion.span>
    </motion.div>
  );
};

export default AnimatedIcon;