const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA4_MEASUREMENT_ID || '').trim();
const GA_SCRIPT_ID = 'google-analytics-gtag';
const GA_SCRIPT_SRC = (id: string) => `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsInitialized = false;
let analyticsLoadPromise: Promise<void> | null = null;

const hasWindow = () => typeof window !== 'undefined';

export const hasAnalyticsId = () => Boolean(GA_MEASUREMENT_ID);

const loadAnalyticsScript = () => {
  if (!hasWindow() || !hasAnalyticsId()) {
    return Promise.resolve();
  }

  const existingScript = document.getElementById(GA_SCRIPT_ID) as HTMLScriptElement | null;
  if (existingScript) {
    return Promise.resolve();
  }

  if (analyticsLoadPromise) {
    return analyticsLoadPromise;
  }

  analyticsLoadPromise = new Promise<void>((resolve, reject) => {
    const script = document.createElement('script');
    script.id = GA_SCRIPT_ID;
    script.async = true;
    script.src = GA_SCRIPT_SRC(GA_MEASUREMENT_ID);
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Failed to load Google Analytics script'));
    document.head.appendChild(script);
  }).catch((error) => {
    analyticsLoadPromise = null;
    throw error;
  });

  return analyticsLoadPromise;
};

export const initAnalytics = async () => {
  if (!hasWindow() || analyticsInitialized || !hasAnalyticsId()) {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  };

  window.gtag('js', new Date());
  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'granted'
  });
  window.gtag('config', GA_MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: false
  });

  try {
    await loadAnalyticsScript();
  } catch (error) {
    console.warn('Google Analytics script could not be loaded', error);
    return;
  }

  analyticsInitialized = true;
};

export const trackPageView = async (path: string) => {
  if (!hasAnalyticsId()) return;

  await initAnalytics();
  if (!window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title
  });
};

export const trackEvent = async (eventName: string, params: EventParams = {}) => {
  if (!hasAnalyticsId()) return;

  await initAnalytics();
  if (!window.gtag) return;

  window.gtag('event', eventName, params);
};
