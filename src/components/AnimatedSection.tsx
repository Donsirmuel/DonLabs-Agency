import { useRef, useEffect, useState } from 'react';

type AnimationType = 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'fade-in';

const animationDelayClassMap: Record<number, string> = {
  0: 'animation-delay-0',
  50: 'animation-delay-50',
  100: 'animation-delay-100',
  150: 'animation-delay-150',
  200: 'animation-delay-200',
  250: 'animation-delay-250',
  300: 'animation-delay-300',
  400: 'animation-delay-400',
  500: 'animation-delay-500',
  600: 'animation-delay-600',
  700: 'animation-delay-700',
  800: 'animation-delay-800',
  900: 'animation-delay-900',
  1000: 'animation-delay-1000',
};

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: AnimationType;
  delay?: number;
  className?: string;
}

const AnimatedSection = ({ 
  children, 
  animation = 'fade-in-up', 
  delay = 0,
  className = ''
}: AnimatedSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px',
      }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${animationDelayClassMap[delay] || animationDelayClassMap[0]} ${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
