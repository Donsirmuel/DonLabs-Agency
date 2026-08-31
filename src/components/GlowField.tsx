import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

type GlowDot = {
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  amber?: boolean;
};

const dots: GlowDot[] = [
  { x: 6, y: 18, size: 1.4, delay: 0.2, duration: 3.4 },
  { x: 9, y: 71, size: 1.1, delay: 1.6, duration: 4.2 },
  { x: 12, y: 42, size: 1.8, delay: 0.9, duration: 3.8 },
  { x: 15, y: 84, size: 1.2, delay: 2.1, duration: 4.8 },
  { x: 18, y: 26, size: 1.5, delay: 1.2, duration: 4.1 },
  { x: 22, y: 63, size: 1.3, delay: 0.5, duration: 3.7 },
  { x: 25, y: 12, size: 1.1, delay: 2.6, duration: 5.2 },
  { x: 28, y: 49, size: 1.7, delay: 1.8, duration: 4.4, amber: true },
  { x: 31, y: 77, size: 1.3, delay: 0.4, duration: 3.5 },
  { x: 34, y: 34, size: 1.2, delay: 2.3, duration: 4.7 },
  { x: 37, y: 91, size: 1.6, delay: 1.1, duration: 5.1 },
  { x: 40, y: 21, size: 1.4, delay: 0.8, duration: 4.0 },
  { x: 43, y: 58, size: 1.1, delay: 2.8, duration: 5.4 },
  { x: 46, y: 39, size: 1.9, delay: 1.5, duration: 3.6 },
  { x: 49, y: 7, size: 1.2, delay: 0.1, duration: 4.9 },
  { x: 52, y: 72, size: 1.5, delay: 2.0, duration: 4.3, amber: true },
  { x: 55, y: 28, size: 1.3, delay: 0.7, duration: 3.9 },
  { x: 58, y: 88, size: 1.1, delay: 2.5, duration: 5.0 },
  { x: 61, y: 44, size: 1.8, delay: 1.3, duration: 4.6 },
  { x: 64, y: 15, size: 1.2, delay: 0.6, duration: 3.7 },
  { x: 67, y: 67, size: 1.4, delay: 2.9, duration: 5.5 },
  { x: 70, y: 31, size: 1.7, delay: 1.9, duration: 4.1, amber: true },
  { x: 73, y: 83, size: 1.2, delay: 0.3, duration: 3.8 },
  { x: 76, y: 53, size: 1.5, delay: 2.2, duration: 4.7 },
  { x: 79, y: 19, size: 1.1, delay: 1.0, duration: 4.4 },
  { x: 82, y: 75, size: 1.9, delay: 2.7, duration: 5.1 },
  { x: 85, y: 37, size: 1.3, delay: 0.9, duration: 3.6 },
  { x: 88, y: 93, size: 1.4, delay: 1.7, duration: 4.8, amber: true },
  { x: 91, y: 24, size: 1.2, delay: 0.5, duration: 4.2 },
  { x: 94, y: 61, size: 1.6, delay: 2.4, duration: 5.3 },
  { x: 7, y: 56, size: 1.1, delay: 3.0, duration: 5.0 },
  { x: 13, y: 9, size: 1.5, delay: 1.4, duration: 4.3 },
  { x: 20, y: 94, size: 1.2, delay: 0.8, duration: 3.9 },
  { x: 27, y: 83, size: 1.4, delay: 2.2, duration: 4.6 },
  { x: 35, y: 15, size: 1.8, delay: 0.6, duration: 4.1, amber: true },
  { x: 42, y: 68, size: 1.2, delay: 2.6, duration: 5.2 },
  { x: 48, y: 95, size: 1.4, delay: 1.1, duration: 4.0 },
  { x: 53, y: 52, size: 1.1, delay: 3.2, duration: 5.6 },
  { x: 60, y: 9, size: 1.6, delay: 1.9, duration: 4.5 },
  { x: 66, y: 96, size: 1.2, delay: 0.4, duration: 3.8 },
  { x: 72, y: 6, size: 1.3, delay: 2.8, duration: 5.1 },
  { x: 81, y: 11, size: 1.7, delay: 1.6, duration: 4.2 },
  { x: 89, y: 48, size: 1.1, delay: 0.2, duration: 3.7 },
  { x: 96, y: 82, size: 1.4, delay: 2.1, duration: 4.9 },
  { x: 4, y: 88, size: 1.3, delay: 0.7, duration: 4.4 },
  { x: 17, y: 51, size: 1.6, delay: 2.5, duration: 5.3, amber: true },
  { x: 30, y: 5, size: 1.1, delay: 1.2, duration: 3.9 },
  { x: 57, y: 34, size: 1.4, delay: 0.9, duration: 4.7 },
  { x: 69, y: 57, size: 1.2, delay: 2.4, duration: 5.0 },
  { x: 84, y: 66, size: 1.5, delay: 1.8, duration: 4.1 },
  { x: 93, y: 8, size: 1.3, delay: 0.5, duration: 3.6 },
  { x: 38, y: 47, size: 1.5, delay: 2.0, duration: 4.8, amber: true },
];

type GlowFieldProps = {
  className?: string;
};

const GlowField = ({ className = "" }: GlowFieldProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [24, -28]);
  const x = useTransform(scrollYProgress, [0, 1], [-8, 8]);

  return (
    <motion.div
      ref={ref}
      style={shouldReduce ? undefined : { x, y }}
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      aria-hidden
    >
      {dots.map((dot, index) => (
        <motion.span
          key={`${dot.x}-${dot.y}-${index}`}
          animate={
            shouldReduce
              ? { opacity: dot.amber ? 0.18 : 0.1 }
              : {
                  opacity: dot.amber ? [0.06, 0.26, 0.09] : [0.04, 0.2, 0.06],
                  scale: [0.72, 1.35, 0.88],
                }
          }
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
          className={`absolute rounded-full ${dot.amber ? "bg-primary" : "bg-foreground"}`}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            boxShadow: dot.amber
              ? "0 0 12px hsl(var(--primary) / 0.2)"
              : "0 0 10px hsl(var(--foreground) / 0.14)",
          }}
        />
      ))}
    </motion.div>
  );
};

export default GlowField;
