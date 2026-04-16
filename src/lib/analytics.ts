const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA4_MEASUREMENT_ID || '').trim();

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsInitialized = false;

const hasWindow = () => typeof window !== 'undefined';

export const hasAnalyticsId = () => Boolean(GA_MEASUREMENT_ID);

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
