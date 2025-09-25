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
    },
    {
      title: "Business Portfolio Websites",
      description: "Professional business websites and e-commerce platforms featuring responsive design, SEO optimization, and content management. Built for local businesses and growing e-commerce stores using Django, React and PostgreSQL.",
      features: ["Responsive Design", "SEO Optimization", "Content Management", "Contact Forms", "Performance Optimization", "Mobile-Friendly"],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: ASSETS.placeholder,
      hasLive: false,
      projectType: "Business Website",
      clientBenefit: "Enhanced online presence and customer engagement"
    },
    {
      title: "Custom Web Applications",
      description: "Tailored web applications designed to streamline business processes and improve operational efficiency. Features custom workflows, user management, and data analytics.",
      features: ["Custom Workflows", "User Management", "Data Analytics", "API Integration", "Real-time Updates", "Scalable Architecture"],
      githubUrl: "https://github.com/Donsirmuel",
      liveUrl: "#",
      imageUrl: ASSETS.placeholder,
      hasLive: false,
      projectType: "Web Application",
      clientBenefit: "Streamlined operations and improved efficiency"
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
