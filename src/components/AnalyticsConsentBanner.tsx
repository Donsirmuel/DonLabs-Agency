import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  getConsentStatus,
  setConsentStatus,
  initAnalytics,
  trackPageView,
  hasAnalyticsId
} from '@/lib/analytics';

const AnalyticsConsentBanner = () => {
  const [status, setStatus] = useState(getConsentStatus());

  if (!hasAnalyticsId() || status !== 'unset') {
    return null;
  }

  const rejectAnalytics = () => {
    setConsentStatus('denied');
    setStatus('denied');
  };

  const acceptAnalytics = async () => {
    setConsentStatus('granted');
    setStatus('granted');
    await initAnalytics();
    await trackPageView(`${window.location.pathname}${window.location.search}`);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-[100] border-t border-slate-700 bg-slate-950/95 p-4 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-200">
          DonLabs uses privacy-friendly analytics to understand site performance. Tracking starts only if you accept.
        </p>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={rejectAnalytics} className="border-slate-600 text-slate-200 hover:bg-slate-800">
            Decline
          </Button>
          <Button onClick={acceptAnalytics} className="bg-primary text-primary-foreground hover:bg-primary-hover">
            Accept analytics
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsConsentBanner;
