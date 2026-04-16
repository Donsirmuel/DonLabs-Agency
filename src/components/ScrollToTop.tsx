import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageView } from '@/lib/analytics';

/**
 * ScrollToTop component ensures that when navigating between pages,
 * the window scrolls to the top automatically.
 */
const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    trackPageView(`${pathname}${search}`);
  }, [pathname, search]);

  return null;
};

export default ScrollToTop;
