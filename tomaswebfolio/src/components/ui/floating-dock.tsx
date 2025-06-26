/**
 * Note: Use position fixed according to your needs
 * Desktop navbar is better positioned at the bottom
 * Mobile navbar is better positioned at bottom right.
 **/
"use client";
import { cn } from "@/lib/utils";
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
    <div className={cn("block md:hidden z-50", className)}>
      <AnimatePresence>
        <motion.div
          layoutId="nav"
          className="flex flex-col items-center gap-3 p-4 bg-black/80 backdrop-blur-sm rounded-2xl border border-neutral-700"
        >
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
                transition: {
                  delay: idx * 0.05,
                },
              }}
              transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              className="flex items-center gap-3 w-full"
            >
              <Link
                href={item.href}
                target={item.title === "CV" ? "_blank" : undefined}
                rel={item.title === "CV" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 w-full p-3 rounded-xl hover:bg-neutral-800 transition-colors duration-200"
              >
                <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-neutral-900 flex items-center justify-center flex-shrink-0">
                  <div className="h-5 w-5 sm:h-6 sm:w-6 text-white">{item.icon}</div>
                </div>
                <span className="text-white text-sm sm:text-base font-medium whitespace-nowrap">
                  {item.title}
                </span>
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
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex gap-5 items-center z-50",
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
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthTransform = useTransform(distance, [-150, 0, 150], [100, 140, 100]);
  const heightTransform = useTransform(distance, [-150, 0, 150], [100, 140, 100]);

  const widthTransformIcon = useTransform(distance, [-150, 0, 150], [50, 70, 50]);
  const heightTransformIcon = useTransform(distance, [-150, 0, 150], [50, 70, 50]);

  const width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  const heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const isCVButton = title === "CV"; 

  return (
    <Link
      href={href}
      target={isCVButton ? "_blank" : undefined}
      rel={isCVButton ? "noopener noreferrer" : undefined}
      className="flex items-center justify-center"
    >
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