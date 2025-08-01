"use client";
import { cn } from "@/lib/utils";
import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  useCallback,
} from "react";

interface StarProps {
  x: number;
  y: number;
  radius: number;
  opacity: number;
  twinkleSpeed: number | null;
}

interface StarBackgroundProps {
  starDensity?: number;
  allStarsTwinkle?: boolean;
  twinkleProbability?: number;
  minTwinkleSpeed?: number;
  maxTwinkleSpeed?: number;
  className?: string;
}

export const StarsBackground: React.FC<StarBackgroundProps> = ({
  starDensity = 0.00015,
  allStarsTwinkle = true,
  twinkleProbability = 1,
  minTwinkleSpeed = 0.5,
  maxTwinkleSpeed = 2,
  className,
}) => {
  const [stars, setStars] = useState<StarProps[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const canvasRef: RefObject<HTMLCanvasElement> =
    useRef<HTMLCanvasElement>(null);

  // Track scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const generateStars = useCallback(
    (width: number, height: number): StarProps[] => {
      // Generate stars for a larger area to account for scrolling
      const extendedHeight = height + window.innerHeight * 2; // Extra buffer
      const area = width * extendedHeight;
      const numStars = Math.floor(area * starDensity);
      return Array.from({ length: numStars }, () => {
        const shouldTwinkle =
          allStarsTwinkle || Math.random() < twinkleProbability;

        const radius = Math.random() < 1 ? Math.random() * 0.7 + 0.9 : Math.random() * 2 + 3;

        return {
          x: Math.random() * width,
          y: Math.random() * extendedHeight - window.innerHeight, // Offset for buffer
          radius: radius,
          opacity: Math.random() * 1 + 0.1,
          twinkleSpeed: shouldTwinkle
            ? minTwinkleSpeed +
              Math.random() * (maxTwinkleSpeed - minTwinkleSpeed)
            : null,
        };
      });
    },
    [
      starDensity,
      allStarsTwinkle,
      twinkleProbability,
      minTwinkleSpeed,
      maxTwinkleSpeed,
    ]
  );
    
  useEffect(() => {
    const updateStars = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const { width, height } = canvas.getBoundingClientRect();
        canvas.width = width;
        canvas.height = height;
        setStars(generateStars(width, height));
      }
    };

    updateStars();

    const resizeObserver = new ResizeObserver(updateStars);
    if (canvasRef.current) {
      resizeObserver.observe(canvasRef.current);
    }

    return () => {
      if (canvasRef.current) {
        resizeObserver.unobserve(canvasRef.current);
      }
    };
  }, [
    starDensity,
    allStarsTwinkle,
    twinkleProbability,
    minTwinkleSpeed,
    maxTwinkleSpeed,
    generateStars,
  ]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Calculate visible area based on scroll position
      const viewportTop = scrollY;
      const viewportBottom = scrollY + canvas.height;
      
      stars.forEach((star) => {
        // Create infinite scroll effect by wrapping star positions
        let starY = star.y;
        const totalHeight = document.documentElement.scrollHeight || canvas.height * 3;
        
        // Wrap stars vertically for infinite effect
        while (starY < viewportTop - 100) {
          starY += totalHeight;
        }
        while (starY > viewportBottom + 100) {
          starY -= totalHeight;
        }
        
        // Only render stars that are potentially visible
        if (starY >= viewportTop - 100 && starY <= viewportBottom + 100) {
          ctx.beginPath();
          ctx.arc(star.x, starY - scrollY, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
          ctx.fill();
        }

        if (star.twinkleSpeed !== null) {
          star.opacity =
            0.2 +
            Math.abs(Math.sin((Date.now() * 0.001) / star.twinkleSpeed) * 0.5);
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [stars, scrollY]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("h-full w-full fixed inset-0", className)}
      style={{ pointerEvents: "none", zIndex: -1 }}
    />
  );
};