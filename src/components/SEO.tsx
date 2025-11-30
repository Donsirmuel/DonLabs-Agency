import { useEffect } from 'react';
import { ASSETS } from '@/lib/assets';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  canonical?: string;
  structuredData?: object | null;
}

const setMetaTag = (selector: string, attr: string, value: string) => {
  const el = document.querySelector(selector) as HTMLMetaElement | null;
  if (el) el.setAttribute(attr, value);
};

const ensureLinkCanonical = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.setAttribute('rel', 'canonical');
    document.head.appendChild(link);
  }
  link.setAttribute('href', href);
};

const ensureStructuredData = (data: object | null) => {
  const id = 'page-structured-data';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (el && !data) {
    el.remove();
    return;
  }

  if (!el && data) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }

  if (el && data) {
    el.textContent = JSON.stringify(data);
  }
};

const SEO = ({ 
  title = "DonLabs — Innovate your Digital Experience",
  description = "DonLabs is a web development agency building modern websites, e-commerce platforms, and web applications for businesses. We focus on design, performance and measurable results.",
  keywords = "DonLabs, web agency, web development, Django, React, e-commerce, digital agency",
  image = ASSETS.logo,
  url = typeof window !== 'undefined' ? window.location.href : '/',
  canonical,
  structuredData = null
}: SEOProps) => {

  useEffect(() => {
    document.title = title;

    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[name="keywords"]', 'content', keywords);
    setMetaTag('meta[name="robots"]', 'content', 'index,follow');

    // Open Graph
    setMetaTag('meta[property="og:type"]', 'content', 'website');
    setMetaTag('meta[property="og:site_name"]', 'content', 'DonLabs');
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:image"]', 'content', image);
    setMetaTag('meta[property="og:url"]', 'content', url);
    setMetaTag('meta[property="og:image:width"]', 'content', '1200');
    setMetaTag('meta[property="og:image:height"]', 'content', '630');

    // Twitter
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', image);

    // Canonical
    const canonicalHref = canonical || url;
    if (canonicalHref) ensureLinkCanonical(canonicalHref);

    // Structured data injection (per-page)
    ensureStructuredData(structuredData);

    // Prefetch large social image to help crawlers and improve link previews where supported
    try {
      const id = 'prefetch-og-image';
      if (!document.getElementById(id)) {
        const l = document.createElement('link');
        l.id = id;
        l.rel = 'preload';
        l.as = 'image';
        l.href = image;
        document.head.appendChild(l);
      }
    } catch (e) {
      // ignore
    }

  }, [title, description, keywords, image, url, canonical, structuredData]);

  return null;
};

export default SEO;