import { useEffect } from 'react';

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
  title = "Samuel Olaonipekun - Django Web Developer | Python Backend Expert | Lagos Nigeria",
  description = "Hire Samuel Olaonipekun, a skilled Django Web Developer from Lagos, Nigeria. Expert in Python, REST APIs, PostgreSQL, and scalable web applications.",
  keywords = "Samuel Olaonipekun, Django Developer, Python Developer, Web Developer Lagos, Backend Developer Nigeria, REST API Developer, PostgreSQL Expert",
  image = "https://donsirmuel.github.io/My-Portfolio/profile-image.jpg",
  url = "https://donsirmuel.github.io/My-Portfolio/",
  canonical,
  structuredData = null
}: SEOProps) => {

  useEffect(() => {
    document.title = title;

    setMetaTag('meta[name="description"]', 'content', description);
    setMetaTag('meta[name="keywords"]', 'content', keywords);

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:image"]', 'content', image);
    setMetaTag('meta[property="og:url"]', 'content', url);

    // Twitter
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', image);

    // Canonical
    const canonicalHref = canonical || url;
    if (canonicalHref) ensureLinkCanonical(canonicalHref);

    // Structured data injection (per-page)
    ensureStructuredData(structuredData);

  }, [title, description, keywords, image, url, canonical, structuredData]);

  return null;
};

export default SEO;