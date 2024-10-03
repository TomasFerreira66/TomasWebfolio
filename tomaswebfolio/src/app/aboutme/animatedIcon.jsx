
import { motion } from "framer-motion";


const dottedLineVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const AnimatedIcon = ({ label, Icon, bgColor }) => {
  return (
    <div className="flex flex-col items-center text-2xl">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={dottedLineVariants}
        className={`w-24 h-24 rounded-full flex items-center justify-center ${bgColor} ${'text-white'}`}
      >
        <Icon className="w-16 h-16 text-white" />
      </motion.div>
      <span className="mt-2 w-24 text-center">{label}</span> {/* Set a fixed width and center the text */}
    </div>
  );
};


export default AnimatedIcon;

