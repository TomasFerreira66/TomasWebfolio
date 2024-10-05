"use client"; // Indicates that this is a client-side component

// Import necessary utilities and components from local libraries and Framer Motion
import { cn } from "@/lib/utils"; // Utility function for conditionally joining class names
import { motion, stagger, useAnimate, useInView } from "framer-motion"; // Animation functions from Framer Motion
import { useEffect } from "react"; // React hook for handling side effects

// TypewriterEffect Component
// Renders a typewriter effect with animated text and a blinking cursor
export const TypewriterEffect = ({
  words, // Array of words to display, each word has a text and optional className
  className, // Additional className for the text container
  cursorClassName, // ClassName for the cursor
}: {
  words: {
    text: string; // The text of the word to display
    className?: string; // Optional className for the word
  }[];
  className?: string; // Optional className for the text container
  cursorClassName?: string; // Optional className for the cursor
}) => {
  // Split the text of each word into an array of individual characters
  const wordsArray = words.map((word) => {
    return {
      ...word,
      text: word.text.split(""), // Convert the word's text into an array of characters
    };
  });

  // useAnimate hook to control animations
  const [scope, animate] = useAnimate();

  // useInView hook to check if the component is in the viewport
  const isInView = useInView(scope);

  // useEffect hook to trigger animation when the component comes into view
  useEffect(() => {
    if (isInView) {
      animate(
        "span", // Animate the <span> elements
        {
          display: "inline-block", // Ensure characters are displayed inline
          opacity: 1, // Make characters visible
          width: "fit-content", // Adjust width to fit content
        },
        {
          duration: 0.1, // Animation duration for each character
          delay: stagger(0.05), // Stagger the animation by 0.1s between characters
          ease: "easeInOut", // Easing function for smooth animation
        }
      );
    }
  }, [isInView]); // Trigger effect when 'isInView' changes

  // Function to render words and animate them character by character
  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline"> {/* Scope for animation */}
        {wordsArray.map((word, idx) => (
          <div key={`word-${idx}`} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                initial={{}} // Initial animation state (empty in this case)
                key={`char-${index}`} // Unique key for each character
                className={cn(
                  `text-white opacity-0 hidden`, // Always white text, initially hidden
                  word.className // Optional word-specific className
                )}
              >
                {char} {/* Render each character */}
              </motion.span>
            ))}
            &nbsp; {/* Add space between words */}
          </div>
        ))}
      </motion.div>
    );
  };

  // Return the complete typewriter effect with a blinking cursor
  return (
    <div
      className={cn(
        "text-base sm:text-xl md:text-3xl lg:text-5xl font-thin text-center", // Default text styling
        className // Optional additional className
      )}
    >
      {renderWords()} {/* Call to render the words */}
      <motion.span
        initial={{
          opacity: 0, // Cursor starts invisible
        }}
        animate={{
          opacity: 1, // Cursor fades in
        }}
        transition={{
          duration: 0.8, // Blink duration
          repeat: Infinity, // Repeat animation indefinitely
          repeatType: "reverse", // Reverses the blink effect (fade in and out)
        }}
        className={cn(
          "inline-block rounded-sm w-[2px] h-4 md:h-6 lg:h-10 bg-blue-300", // Styling for the cursor
          cursorClassName // Optional additional className for the cursor
        )}
      ></motion.span>
    </div>
  );
};
