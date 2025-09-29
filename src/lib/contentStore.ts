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

// Version number - increment this when you want to force update all users' cached content
const CONTENT_VERSION = 3;

export const defaultContent: SiteContent = {
  about: {
    heading: 'About Samuel',
    intro: "I build web products that help businesses sell more and operate better. Based in Lagos, I specialise in Django backends and React frontends, with production deployments on PostgreSQL and container platforms.",
    details: "My work focuses on measurable outcomes: faster page loads, reliable payment flows, and admin tools that save time. Recent projects include an e-commerce rebuild that increased transactions by 43% and a marketplace API that handled a 3x traffic spike without downtime."
  },
  projects: [
    {
      title: "Devblog.com.ng",
      description: "Devblog is a Nigerian tech blog covering web development, tutorials, and product engineering best practices. I built the platform with a Django backend and a modern React frontend to deliver fast, SEO-friendly articles.",
      features: [
        "Django-powered CMS for articles",
        "Responsive React frontend",
        "SEO-friendly markup and RSS",
        "Search and category filters",
        "Optimized image delivery and caching"
      ],
      githubUrl: "#",
      liveUrl: "https://devblog.com.ng",
  imageUrl: ASSETS.devblogScreenshot,
      hasLive: true,
      projectType: "Tech Blog",
      clientBenefit: "A fast, searchable content platform for technical articles and tutorials"
    },
    {
      title: "GlitGlam - Fashion Store",
      description: "GlitGlam is a boutique fashion store focused on curated womenswear. The project includes a product catalog, shopping cart, and checkout flows with a polished responsive design crafted to increase conversions.",
      features: [
        "Product catalog & category browsing",
        "Shopping cart and checkout",
        "Payment gateway integration",
        "Admin product management",
        "Responsive, conversion-focused UI"
      ],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: ASSETS.glitglam,
      hasLive: false,
      projectType: "Retail / E-Commerce",
      clientBenefit: "A high-converting online storefront for boutique fashion"
    }
  ],
  services: [
    {
      title: "Business Websites",
      description: "Professional business websites designed to enhance your online presence and connect with your target audience effectively.",
      features: [
        "Responsive Design & Mobile Optimization",
        "Search Engine Optimization (SEO)",
        "Content Management System",
        "Contact Forms & Business Integration",
        "Performance Optimization",
        "1-Year Maintenance & Support"
      ],
      popular: false,
      recommendedPackage: 'Corporate / Business Website'
    },
    {
      title: "E-Commerce Solutions",
      description: "Complete online store solutions with secure payment processing, inventory management, and customer-friendly shopping experiences.",
      features: [
        "Product Catalog & Shopping Cart",
        "Payment Gateway Integration",
        "Order Management System",
        "Inventory Tracking",
        "Customer Account Management",
        "Mobile-Responsive Design"
      ],
      popular: true,
      recommendedPackage: 'Small e‑commerce / Medium e‑commerce'
    },
    {
      title: "Custom Web Applications",
      description: "Tailored web applications built to address your specific business requirements and streamline your operations.",
      features: [
        "Custom Business Logic",
        "User Authentication & Roles",
        "Database Management",
        "API Integration",
        "Real-time Features",
        "Scalable Architecture"
      ],
      popular: false,
      recommendedPackage: 'Premium e‑commerce / Enterprise'
    },
    {
      title: "Mobile Apps (PWA)",
      description: "App-like experience that works on all devices",
      features: [
        "Works Like Native App",
        "Offline Functionality",
        "Push Notifications",
        "App Store Ready",
        "Fast & Lightweight",
        "Cross-Platform Compatible"
      ],
      popular: false,
      recommendedPackage: 'Premium / Enterprise'
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
  },
  {
    id: 'small-ecom',
    name: 'Small e‑commerce',
    price: '₦350,000 - ₦600,000',
    desc: 'Small online stores with product catalogs and simple checkout - ideal for boutiques and SMB sellers.',
    includes: [
      'Product catalog, product pages and category browsing',
      'Cart, checkout and order confirmation flows',
      'Payment gateway integration (Paystack / Flutterwave / Stripe)',
      'Django backend or Django + DRF APIs with PostgreSQL',
      'Admin order/product management, basic reporting & 3 months support'
    ],
    popular: true
  },
  {
    id: 'medium-ecom',
    name: 'Medium e‑commerce',
    price: '₦600,000 - ₦1,200,000',
    desc: 'Growing stores that need inventory, user accounts, discounts and integrations.',
    includes: [
      'Everything in Small e‑commerce',
      'User accounts, order history and customer dashboards',
      'Inventory management, discounts & coupon systems',
      'Integrated email/SMS notifications and analytics',
      'Performance tuning, staging environment & 4 months support'
    ]
  },
  {
    id: 'premium-ecom',
    name: 'Premium e‑commerce / Enterprise',
    price: 'Custom pricing (₦1,200,000+)',
    desc: 'Full custom e‑commerce platforms with integrations, automation and scaling support.',
    includes: [
      'Custom API design (Django + DRF) and React storefront',
      'PostgreSQL schema design, caching & background workers',
      'Third‑party integrations (ERP/CRM, logistics, payment providers)',
      'Containerized deployments (Docker), CI/CD, monitoring & 6 months support'
    ]
  }
]
};

const STORAGE_KEY = 'siteContent';
const VERSION_KEY = 'siteContentVersion';

export function loadContent(): SiteContent {
  try {
    // Check if stored version matches current version
    const storedVersion = localStorage.getItem(VERSION_KEY);
    const currentVersion = CONTENT_VERSION.toString();
    
    if (storedVersion !== currentVersion) {
      // Version mismatch - clear old content and use defaults
      localStorage.removeItem(STORAGE_KEY);
      localStorage.setItem(VERSION_KEY, currentVersion);
      return defaultContent;
    }
    
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return JSON.parse(raw) as SiteContent;
    }
  } catch (err) {
    // ignore parsing errors and fall back to defaults
  }
  
  // Set version for first-time visitors
  localStorage.setItem(VERSION_KEY, CONTENT_VERSION.toString());
  return defaultContent;
}

export function saveContent(content: SiteContent) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
    // Always save current version when content is saved
    localStorage.setItem(VERSION_KEY, CONTENT_VERSION.toString());
  } catch (err) {
    console.error('Failed to save content', err);
  }
}
