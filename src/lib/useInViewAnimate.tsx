import { useEffect } from 'react';

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  animationClass?: string;
  once?: boolean;
  delay?: number;
};

export default function useInViewAnimate(
  ref: React.RefObject<HTMLElement>,
  options: Options = {}
) {
  const { root = null, rootMargin = '0px 0px -10% 0px', threshold = 0.12, animationClass = 'animate-fade-in-up', once = true, delay = 0 } = options;

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const handle = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          try {
            if (delay && el.style) el.style.animationDelay = `${delay}s`;
            el.classList.add(animationClass);
            el.classList.remove('opacity-0');
          } catch (e) {
            // ignore
          }

          if (once) observer.unobserve(entry.target);
        }
      });
    };

    const io = new IntersectionObserver(handle, { root, rootMargin, threshold });
    io.observe(el);

    return () => io.disconnect();
  }, [ref, root, rootMargin, threshold, animationClass, once, delay]);
}
