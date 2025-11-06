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
      title: "DevBlog Platform",
      description: "A blogging platform I built to practice full-stack development with rich text editing, user authentication, and responsive design.",
      features: [
        "Rich text editor with markdown support",
        "User authentication system",
        "Comment functionality",
        "SEO-friendly URLs",
        "Fully responsive design"
      ],
      githubUrl: "https://github.com/Donsirmuel/DevBlog-A-Developer-Blog",
      liveUrl: "https://donsirmuel.github.io/DevBlog-A-Developer-Blog/",
      imageUrl: ASSETS.devblogScreenshot,
      hasLive: true,
      projectType: "Content Management / Portfolio Project",
      clientBenefit: "Demonstrates full-stack development skills with content management features"
    },
    {
      title: "Glitglam Beauty Salon",
      description: "Practice e-commerce website for a beauty boutique concept, featuring product showcases and modern design patterns.",
      features: [
        "Product catalog with filtering",
        "Responsive product pages",
        "Modern UI/UX design",
        "Shopping cart functionality",
        "Clean, maintainable code"
      ],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: ASSETS.glitglam,
      hasLive: false,
      projectType: "E-Commerce / Portfolio Project",
      clientBenefit: "Showcases e-commerce development skills and modern web design capabilities"
    },
    {
      title: "Shindara Style Hub",
      description: "Fashion e-commerce concept I built to practice building online stores with payment integration and product management.",
      features: [
        "Men's and women's product collections",
        "Product pages with details and variants",
        "Shopping cart and checkout flow",
        "Mobile-responsive design",
        "Paystack payment integration",
        "Blog section for content marketing"
      ],
      githubUrl: "#",
      liveUrl: "https://donsirmuel.github.io/shindara-style-hub/#",
      imageUrl: ASSETS.shindaraScreenshot,
      hasLive: true,
      projectType: "Fashion E-Commerce / Portfolio Project",
      clientBenefit: "Demonstrates ability to build complete e-commerce solutions with payment processing"
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
