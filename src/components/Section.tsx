import React, { useRef } from 'react';
import useInViewAnimate from '@/lib/useInViewAnimate';

type SectionProps = React.PropsWithChildren<{
  className?: string;
  animationClass?: string;
  once?: boolean;
  delay?: number;
  as?: string;
  id?: string;
  'aria-labelledby'?: string;
}>;

const ANIMATIONS = [
  'animate-fade-in-up',
  'animate-slide-up',
  'animate-float'
];

const Section = ({ children, className = '', animationClass, once = true, delay = 0, as = 'section', ...rest }: SectionProps) => {
  const ref = useRef<HTMLElement | null>(null);

  // Respect user reduced motion preference
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const chosenAnimation = animationClass ?? (prefersReduced ? 'animate-fade-in-up' : ANIMATIONS[Math.floor(Math.random() * ANIMATIONS.length)]);

  useInViewAnimate(ref as React.RefObject<HTMLElement>, { animationClass: chosenAnimation, once, delay });

  const Tag: any = as;
  return (
    <Tag ref={ref} className={`opacity-0 ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Section;
