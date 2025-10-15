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
  servicesInfo?: {
    howItWorks?: string[];
    faq?: { q: string; a: string }[];
  };
  pricing: Package[];
};

import { ASSETS } from "@/lib/assets";

// Version number - increment this when you want to force update all users' cached content
const CONTENT_VERSION = 4;

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
    },
    {
      title: "Shindara Style Hub (Concept)",
      description: "A small fashion e-commerce store I recently built. Built for a Fashion Brand that sells men's and women's wear and focuses on clear product pages and easy shopping.",
      features: [
        "Men's and women's collections",
        "Simple product pages with prices and sizes",
        "Easy browsing and quick checkout flow",
        "Mobile-friendly and fast to load",
        "Paystack-integrated for fast and secure payment",
        "Blog Section for Sharing latest Fashion works and contents to Customers."
      ],
      githubUrl: "#",
      liveUrl: "https://donsirmuel.github.io/shindara-style-hub/#",
      imageUrl: ASSETS.shindaraScreenshot,
      hasLive: true,
      projectType: "Small Fashion E-Commerce",
      clientBenefit: "A clean, user-friendly store that helps small fashion businesses sell more online. You can view the live concept on GitHub Pages without visiting the client's real store."
    }
  ],
  services: [
    {
      title: "Business Websites",
      description: "Want a website that looks great and actually brings customers? I build fast, easy-to-update sites that make visitors comfortable and get them to contact you.",
      features: [
        "Mobile-first design that looks great on any device",
        "Simple content editing (Django CMS or headless options)",
        "SEO basics so new customers can find you",
        "Contact forms, lead capture and newsletters",
        "Speed and accessibility checks for better conversions",
        "Launch help and optional ongoing support"
      ],
      popular: false,
      recommendedPackage: 'Corporate / Business Website'
    },
    {
      title: "E‑commerce Stores",
      description: "Sell online without the headache. I set up product pages, a smooth checkout, and easy admin so you can focus on growing sales - not wrestling with software.",
      features: [
        "Product listings, search and categories",
        "Fast, secure cart and checkout flows",
        "Payment integrations (Paystack / Flutterwave / Stripe)",
        "Order and inventory management made simple",
        "Mobile shopping that converts",
        "Launch support and basic fraud protections"
      ],
      popular: true,
      recommendedPackage: 'Small e‑commerce / Medium e‑commerce'
    },
    {
      title: "Custom Web Apps",
      description: "Got a process that could be faster? I build custom apps - dashboards, booking systems, marketplaces - that automate work and help your team deliver more.",
      features: [
        "Custom workflows that match how you work",
        "User accounts, roles and secure access",
        "APIs and integrations (payments, shipping, CRM)",
        "Reports, dashboards and admin tools",
        "Built to scale with performance in mind",
        "Transparent milestones and ongoing support"
      ],
      popular: false,
      recommendedPackage: 'Premium e‑commerce / Enterprise'
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Want an app-like experience without the app store hassle? PWAs install on phones, work offline and feel instant - great for repeat customers.",
      features: [
        "Install on the home screen for quick access",
        "Offline caching for fast repeat visits",
        "Push notifications to bring customers back",
        "Smooth cross-platform experience on mobile browsers",
        "Lightweight and easy to maintain",
        "Tracking to improve conversions"
      ],
      popular: false,
      recommendedPackage: 'Premium / Enterprise'
    }
  ],
  servicesInfo: {
    howItWorks: [
      "Discovery - We start with a short chat to understand your goals and the results you want.",
      "Proposal - I send a clear plan, timeline and fixed price (or range). You review and we tweak it together.",
      "Build - I deliver work in short, visible milestones so you can see progress and give feedback.",
      "Launch - I deploy your site or app, handle DNS and initial monitoring, and make sure everything runs smoothly.",
      "Support - After launch I offer maintenance and support options so your site stays fast and secure."
    ],
    faq: [
      {
        q: "How long does a project take?",
        a: "Small sites: 2–4 weeks. Simple stores: 4–8 weeks. Custom apps: timelines depend on scope - I’ll give a clear estimate in the proposal."
      },
      {
        q: "How much will it cost?",
        a: "I offer clear price ranges on the pricing cards. I’ll also give a fixed quote in the proposal so there are no surprises."
      },
      {
        q: "Do you offer ongoing support?",
        a: "Yes - I offer maintenance packages for updates, backups and security. You can also opt for hourly support after launch."
      }
    ]
  },
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
