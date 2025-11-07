import { useRef, useEffect, useState } from 'react';

type AnimationType = 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'scale-in' | 'fade-in';

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

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={{
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
