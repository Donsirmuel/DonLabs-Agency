export type Project = {
  title: string;
  description: string;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  hasLive?: boolean;
  projectType?: string;
  clientBenefit?: string;
};

export type Service = {
  title: string;
  description: string;
  features: string[];
  popular?: boolean;
  recommendedPackage?: string;
};

export type Package = {
  id: string;
  name: string;
  price: string;
  desc: string;
  includes: string[];
  popular?: boolean;
};

export type AboutContent = {
  heading?: string;
  intro?: string;
  details?: string;
};

export type SiteContent = {
  about: AboutContent;
  projects: Project[];
  services: Service[];
  pricing: Package[];
};

import { ASSETS } from "@/lib/assets";

export const defaultContent: SiteContent = {
  about: {
    heading: 'About Samuel',
    intro: "I build web products that help businesses sell more and operate better. Based in Lagos, I specialise in Django backends and React frontends, with production deployments on PostgreSQL and container platforms.",
    details: "My work focuses on measurable outcomes: faster page loads, reliable payment flows, and admin tools that save time. Recent projects include an e-commerce rebuild that increased transactions by 43% and a marketplace API that handled a 3x traffic spike without downtime."
  },
  projects: [
    {
      title: "Vendora - E-Commerce Platform",
      description: "A comprehensive e-commerce solution with product management, secure payment processing, and customer account features. Built for scalability and optimal user experience.",
      features: ["Product Catalog", "Shopping Cart", "Payment Integration", "Order Management", "Customer Accounts", "Admin Dashboard"],
      githubUrl: "https://github.com/Donsirmuel/vendora",
      liveUrl: "#",
      imageUrl: ASSETS.placeholder,
      hasLive: false,
      projectType: "E-Commerce Platform",
      clientBenefit: "Complete online store with secure transactions"
    }
  ],
  services: [
    {
      title: "Business Websites",
      description: "Professional business websites designed to enhance your online presence and connect with your target audience effectively.",
      features: ["Responsive Design & Mobile Optimization", "Search Engine Optimization (SEO)", "Content Management System", "Contact Forms & Business Integration", "Performance Optimization", "1-Year Maintenance & Support"],
      popular: false,
      recommendedPackage: 'Corporate / Business Website'
    }
  ],
  pricing: [
    {
      id: 'corporate',
      name: 'Corporate / Business Website',
      price: '₦180,000 - ₦350,000',
      desc: 'For professionals, agencies, corporate teams and service providers who need a polished web presence or company site.',
      includes: [
        '5–10 content pages (About, Services, Team, Blog, Contact)',
        'SEO-friendly React frontend, optional Django headless CMS',
        'Blog setup with structured content and RSS',
        'Contact forms, lead capture & newsletter integration',
        'Basic analytics, accessibility checks & 1 month support'
      ]
    }
  ]
};

const STORAGE_KEY = 'siteContent';

export function loadContent(): SiteContent {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as SiteContent;
    }
  } catch (err) {
    // ignore
  }
  return defaultContent;
}

export function saveContent(content: SiteContent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  } catch (err) {
    console.error('Failed to save content', err);
  }
}
