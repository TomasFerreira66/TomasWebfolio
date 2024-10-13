/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
"use client";
import { cn } from "@/lib/utils";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState } from "react";

export const FloatingDock = ({
  items,
  desktopClassName,
  mobileClassName,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
}) => {
  return (
    <>
      <FloatingDockDesktop items={items} className={desktopClassName} />
      <FloatingDockMobile items={items} className={mobileClassName} />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  return (
    <div className={cn("relative block md:hidden", className)}>
      <AnimatePresence>
        <motion.div
          layoutId="nav"
          className="flex bottom-full mb-2 inset-x-0 flex-row gap-2"
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 10,
                transition: {
                  delay: idx * 0.05,
                },
              }}
              transition={{ delay: (items.length - 1 - idx) * 0.05 }}
            >
              <Link
                href={item.href}
                className="h-14 w-14 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 rounded-full bg-black flex items-center justify-center" // Responsive sizes for small, medium, and large screens
              >
                <div className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8">{item.icon}</div> {/* Responsive icon sizes */}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};




const FloatingDockDesktop = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex gap-5 items-end", // Removed the container and padding
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({
  mouseX,
  title,
  icon,
  href,
}: {
  mouseX: MotionValue;
  title: string;
  icon: React.ReactNode;
  href: string;
}) {
  let ref = useRef<HTMLDivElement>(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };

    return val - bounds.x - bounds.width / 2;
  });

  // Increase these ranges to make the items larger.
  // Previously: [40, 80, 40] for width and height
  let widthTransform = useTransform(distance, [-150, 0, 150], [100, 140, 100]); // Larger size range
  let heightTransform = useTransform(distance, [-150, 0, 150], [100, 140, 100]);

  // Increase icon size as well.
  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [50, 70, 50]); // Previously [20, 40, 20]
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [50, 70, 50]);

  // Use spring animations to smoothly scale the larger sizes
  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
  <motion.div
    ref={ref}
    style={{ width, height }}
    onMouseEnter={() => setHovered(true)}
    onMouseLeave={() => setHovered(false)}
    className="aspect-square rounded-full bg-neutral-900 flex items-center justify-center relative"
  >
    <AnimatePresence>
      {hovered && (
        <motion.div
          initial={{ opacity: 0, y: 10, x: "-50%" }}
          animate={{ opacity: 1, y: 0, x: "-50%" }}
          exit={{ opacity: 0, y: 2, x: "-50%" }}
          className="px-2 py-0.5 whitespace-pre rounded-md bg-neutral-900 border border-neutral-700 text-white absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xl"
        >
          {title}
        </motion.div>
      )}
    </AnimatePresence>
    <motion.div
      style={{ width: widthIcon, height: heightIcon }}
      className="flex items-center justify-center text-white"
    >
      {icon}
    </motion.div>
  </motion.div>
</Link>


  );
}
