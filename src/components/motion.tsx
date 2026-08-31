import { motion, useReducedMotion } from "framer-motion";
import type { HTMLAttributes, ReactNode } from "react";

const Motion = motion;

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96, y: 24 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

export const staggerFast = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.05 } },
};

export const spring = {
  type: "spring",
  stiffness: 260,
  damping: 20,
  mass: 0.8,
} as const;

export const springBounce = {
  type: "spring",
  stiffness: 320,
  damping: 12,
} as const;

export const springSnappy = {
  type: "spring",
  stiffness: 400,
  damping: 18,
} as const;

type SectionRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  once?: boolean;
  margin?: string;
};

export function SectionReveal({
  children,
  className = "",
  once = true,
  margin = "-80px",
  ...rest
}: SectionRevealProps) {
  const shouldReduce = useReducedMotion();
  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={shouldReduce ? fadeIn : fadeUp}
      transition={shouldReduce ? { duration: 0.25, ease: "easeOut" } : spring}
      className={className}
      {...rest}
    >
      {children}
    </Motion.div>
  );
}

type StaggerRevealProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
  once?: boolean;
  margin?: string;
  fast?: boolean;
};

export function StaggerReveal({
  children,
  className = "",
  once = true,
  margin = "-80px",
  fast = false,
  ...rest
}: StaggerRevealProps) {
  const shouldReduce = useReducedMotion();
  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin }}
      variants={fast ? staggerFast : stagger}
      className={className}
      {...rest}
    >
      {children}
    </Motion.div>
  );
}

type StaggerItemProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export function StaggerItem({
  children,
  className = "",
  ...rest
}: StaggerItemProps) {
  return (
    <Motion.div variants={fadeUp} transition={spring} className={className} {...rest}>
      {children}
    </Motion.div>
  );
}
