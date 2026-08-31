import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { fadeUp, spring } from '@/components/motion';

type SectionProps = React.PropsWithChildren<{
  className?: string;
  once?: boolean;
  delay?: number;
  as?: 'section' | 'div';
  id?: string;
  'aria-labelledby'?: string;
}>;

const Section = ({ children, className = '', once = true, delay = 0, as = 'section', ...rest }: SectionProps) => {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    const Tag = as;
    return (
      <Tag className={className} {...rest}>
        {children}
      </Tag>
    );
  }

  const MotionTag = (as === 'div' ? motion.div : motion.section) as typeof motion.section;
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-80px' }}
      variants={fadeUp}
      transition={{ ...spring, delay: delay / 1000 }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

export default Section;
