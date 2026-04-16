const CONSENT_KEY = 'donlabs.analytics.consent';
const GTAG_SCRIPT_ID = 'ga4-script';
const GA_MEASUREMENT_ID = (import.meta.env.VITE_GA4_MEASUREMENT_ID || '').trim();

type ConsentStatus = 'granted' | 'denied' | 'unset';
type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let analyticsInitialized = false;
let scriptLoadingPromise: Promise<void> | null = null;

const hasWindow = () => typeof window !== 'undefined';

export const getConsentStatus = (): ConsentStatus => {
  if (!hasWindow()) return 'unset';

  const raw = window.localStorage.getItem(CONSENT_KEY);
  if (raw === 'granted' || raw === 'denied') return raw;
  return 'unset';
};

export const setConsentStatus = (status: Exclude<ConsentStatus, 'unset'>) => {
  if (!hasWindow()) return;
  window.localStorage.setItem(CONSENT_KEY, status);
};

export const hasAnalyticsConsent = () => getConsentStatus() === 'granted';

export const hasAnalyticsId = () => Boolean(GA_MEASUREMENT_ID);

const loadScript = (): Promise<void> => {
  if (!hasWindow() || !hasAnalyticsId()) {
    return Promise.resolve();
  }

  if (document.getElementById(GTAG_SCRIPT_ID)) {
    return Promise.resolve();
  }

  if (scriptLoadingPromise) {
    return scriptLoadingPromise;
  }

  scriptLoadingPromise = new Promise((resolve) => {
    const script = document.createElement('script');
    script.id = GTAG_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.head.appendChild(script);
  });

  return scriptLoadingPromise;
};

export const initAnalytics = async () => {
  if (!hasWindow() || analyticsInitialized || !hasAnalyticsConsent() || !hasAnalyticsId()) {
    return;
  }

  await loadScript();

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
  if (!hasAnalyticsConsent() || !hasAnalyticsId()) return;

  await initAnalytics();
  if (!window.gtag) return;

  window.gtag('event', 'page_view', {
    page_path: path,
    page_location: window.location.href,
    page_title: document.title
  });
};

export const trackEvent = async (eventName: string, params: EventParams = {}) => {
  if (!hasAnalyticsConsent() || !hasAnalyticsId()) return;

  await initAnalytics();
  if (!window.gtag) return;

  window.gtag('event', eventName, params);
};
