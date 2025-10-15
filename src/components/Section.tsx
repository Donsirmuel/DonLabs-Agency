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

const Section = ({ children, className = '', animationClass, once = true, delay = 0, as = 'section', ...rest }: SectionProps) => {
  const ref = useRef<HTMLElement | null>(null);
  useInViewAnimate(ref as React.RefObject<HTMLElement>, { animationClass: animationClass || 'animate-fade-in-up', once, delay });

  const Tag: any = as;
  return (
    <Tag ref={ref} className={`opacity-0 ${className}`} {...rest}>
      {children}
    </Tag>
  );
};

export default Section;
