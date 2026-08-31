export type Project = {
  title: string;
  description: string;
  features: string[];
  slug?: string;
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  caseStudyDesktopImageUrl?: string;
  caseStudyMobileImageUrl?: string;
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
const CONTENT_VERSION = 34;

export const defaultContent: SiteContent = {
  about: {
    heading: 'About DonLabs',
    intro: "We build web products that help businesses sell more and operate better. Based in Africa and available for remote partnerships, we specialise in Django backends and React frontends, with production deployments on PostgreSQL and container platforms.",
    details: "Our work focuses on measurable outcomes: faster page loads, reliable payment flows, and admin tools that save time. Recent projects include an e-commerce rebuild that increased transactions by 35% and a marketplace API that handled high traffic without downtime."
  },
  projects: [
    {
      title: "DevBlog Platform",
      description: "A publishing platform built for an editorial team to manage articles, authors, and SEO-friendly content. We improved publishing workflows and page performance.",
      features: [
        "Custom CMS with editorial roles and scheduling",
        "Markdown and rich-text support with media management",
        "SEO-friendly routing and metadata management",
        "Performance optimizations for fast time-to-interactive",
        "Responsive layout and accessible components"
      ],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: ASSETS.devblogScreenshot,
      caseStudyDesktopImageUrl: ASSETS.devblogScreenshot,
      hasLive: false,
      projectType: "Content Management",
      clientBenefit: "Solved the slow, manual publishing process by giving the team role-based CMS controls, scheduling, and a faster reading experience."
    },
    {
      title: "Glitglam Beauty Salon",
      description: "A production e-commerce store rebuilt to reduce cart abandonment and improve conversion for a beauty retailer.",
      features: [
        "Improved checkout UX and faster cart flows",
        "Server-side rendering for product pages",
        "Inventory sync and admin dashboards",
        "Mobile-first responsive design",
        "Payment gateway integration and analytics"
      ],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: ASSETS.glitglam,
      caseStudyDesktopImageUrl: ASSETS.glitglam,
      hasLive: false,
      projectType: "E-Commerce",
      clientBenefit: "Solved checkout drop-off and messy order handling with a cleaner shopping flow, stronger mobile UX, and simpler admin control."
    },
    {
      title: "Shindara Style Hub",
      description: "A fashion storefront and admin panel built to support high-volume product catalogs and promotions.",
      features: [
        "Product variants and collection management",
        "Promotions, discounting and coupon support",
        "Robust checkout with fraud prevention measures",
        "Admin tools for orders, returns and reporting",
        "Scalable deployment and monitoring"
      ],
      githubUrl: "#",
      liveUrl: "https://shindara-style.vercel.app",
      imageUrl: ASSETS.shindaraScreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseShindaraDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseShindaraMobile,
      hasLive: true,
      projectType: "E-Commerce",
      clientBenefit: "Solved the pressure of managing a larger catalog by making promotions, orders, and storefront updates easier to handle at scale."
    },
    {
      title: "Bubbalicious Hair & Co",
      description: "A professional salon website for Rothwell's premier destination for lived-in blonde hair colour services. Built with modern web technologies to showcase services, enable online booking, and provide an elegant browsing experience.",
      features: [
        "Responsive design optimized for mobile and desktop",
        "Service showcase with detailed descriptions",
        "Online booking system integration",
        "Gallery section for portfolio display",
        "Contact forms and location information",
        "SEO-optimized for local search visibility"
      ],
      githubUrl: "#",
      liveUrl: "https://bubbalicioushairandco.vercel.app",
      imageUrl: ASSETS.bubbaliciousScreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseBubbaliciousDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseBubbaliciousMobile,
      hasLive: true,
      projectType: "Business Website",
      clientBenefit: "Solved the 'hard to understand at a glance' problem by presenting services clearly, supporting bookings, and making the salon look premium online."
    },
    {
      title: "Shobs Graphic Design Portfolio",
      description: "A newly developed portfolio site for a graphic design brand, showcasing services, brand identity work, and a curated gallery of visual projects.",
      features: [
        "Portfolio-driven layout with visual project highlights",
        "Services and brand story sections for lead generation",
        "Responsive design optimized for mobile browsing",
        "Performance-focused asset loading for crisp visuals",
        "Clear contact paths for client inquiries"
      ],
      githubUrl: "#",
      liveUrl: "https://shobs-portfolio-site.vercel.app/",
      imageUrl: ASSETS.shobsPortfolioScreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseShobsDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseShobsMobile,
      hasLive: true,
      projectType: "Portfolio Website",
      clientBenefit: "Solved the weak portfolio presentation by giving the brand a sharper story, clearer services, and easier enquiry paths."
    },
    {
      title: "Vendora",
      description: "A marketplace-style e-commerce experience focused on fast discovery and reliable checkout for multi-vendor catalogs.",
      features: [
        "Multi-vendor product listings with search and filtering",
        "Secure checkout with payment gateway integration",
        "Responsive UX tuned for mobile shoppers",
        "Admin workflows for vendors and order management"
      ],
      githubUrl: "#",
      liveUrl: "#",
      imageUrl: ASSETS.vendoraScreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseVendoraDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseVendoraMobile,
      hasLive: false,
      projectType: "Marketplace",
      clientBenefit: "Solved slow product discovery and clunky checkout by making browsing faster, order handling cleaner, and the buyer journey more reliable."
    },
    {
      title: "Northline Wears",
      description: "A fashion storefront created to give the brand a cleaner online presence, stronger product presentation, and a smoother path to browsing and enquiries.",
      features: [
        "Responsive storefront layout for mobile and desktop shoppers",
        "Clear product presentation with polished visual hierarchy",
        "Simple navigation that helps visitors browse faster",
        "Brand-focused design that feels modern and trustworthy",
        "Optimized enquiry and conversion pathways"
      ],
      githubUrl: "#",
      liveUrl: "https://northline-wears.vercel.app",
      imageUrl: ASSETS.northlineScreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseNorthlineDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseNorthlineMobile,
      hasLive: true,
      projectType: "Fashion E-Commerce",
      clientBenefit: "Solved the need for a more polished fashion storefront by making the brand look credible, the products easier to explore, and the next step clearer for shoppers."
    },
    {
      title: "VeriClick",
      description: "A SaaS security tool that protects your links from bots and suspicious traffic. Every click is checked against your IP rules and bot detection before it reaches your page, with a plain-language reason for every decision.",
      features: [
        "Bot detection and suspicious traffic screening on every click",
        "Custom IP rules and allow/block configurations",
        "Plain-language explanations for why each request was flagged",
        "Real-time click analytics and request insights",
        "SaaS subscription model with a free beta tier"
      ],
      slug: "vericlick",
      githubUrl: "#",
      liveUrl: "https://getvericlick.site",
      imageUrl: ASSETS.vericlickScreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseVericlickDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseVericlickMobile,
      hasLive: true,
      projectType: "SaaS",
      clientBenefit: "Solved the problem of bot clicks and junk traffic distorting link performance by filtering suspicious requests automatically and showing exactly why each one was blocked."
    },
  ],
  services: [
    {
      title: "Business Websites",
      description: "Want a website that looks great and actually brings customers? We build fast, easy-to-update sites that make visitors comfortable and get them to contact you.",
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
      description: "Sell online without the headache. We set up product pages, a smooth checkout, and easy admin so you can focus on growing sales - not wrestling with software.",
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
      description: "Got a process that could be faster? We build custom apps - dashboards, booking systems, marketplaces - that automate work and help your team deliver more.",
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
      "Proposal - We provide a clear plan, timeline and fixed price (or range). You review and we tweak it together.",
      "Build - We deliver work in short, visible milestones so you can see progress and give feedback.",
      "Launch - We deploy your site or app, handle DNS and initial monitoring, and make sure everything runs smoothly.",
      "Support - After launch we offer maintenance and support options so your site stays fast and secure."
    ],
    faq: [
      {
        q: "How long does a project take?",
        a: "Small sites: 3-7 days. Simple stores: 7-14 days. Custom apps: timelines depend on scope - we provide clear estimates during discovery."
      },
      {
        q: "How much will it cost?",
        a: "We provide clear price ranges on the pricing cards and a fixed quote in the proposal so there are no surprises."
      },
      {
        q: "Do you offer ongoing support?",
        a: "Yes - we offer maintenance packages for updates, backups and security. You can also opt for hourly support after launch."
      }
    ]
  },
  pricing: [
  {
    id: 'corporate',
    name: 'Corporate / Business Website',
    price: '₦200,000+',
    desc: 'For professionals, agencies, corporate teams and service providers who need a polished web presence or company site.',
    includes: [
      '5–10 content pages (About, Services, Team, Blog, Contact)',
      'Fast frontend with optional easy content editing',
      'Blog setup with structured content and RSS',
      'Contact forms, lead capture & newsletter integration',
      'Basic analytics, accessibility checks & 1 month support'
    ]
  },
  {
    id: 'small-ecom',
    name: 'Small e‑commerce',
    price: '₦350,000+',
    desc: 'Small online stores with product catalogs and simple checkout - ideal for boutiques and SMB sellers.',
    includes: [
      'Product catalog, product pages and category browsing',
      'Cart, checkout and order confirmation flows',
      'Payment gateway integration (Paystack / Flutterwave / Stripe)',
      'Reliable backend with secure data storage',
      'Admin order/product management, basic reporting & 3 months support'
    ],
    popular: true
  },
  {
    id: 'medium-ecom',
    name: 'Medium e‑commerce',
    price: '₦600,000+',
    desc: 'Growing stores that need inventory, user accounts, discounts and integrations.',
    includes: [
      'Everything in Small e‑commerce',
      'User accounts, order history and customer dashboards',
      'Inventory management, discounts & coupon systems',
      'Email/SMS notifications and sales tracking',
      'Speed improvements, test environment & 4 months support'
    ]
  },
  {
    id: 'premium-ecom',
    name: 'Premium e‑commerce / Enterprise',
    price: '₦1,200,000+',
    desc: 'Full custom e‑commerce platforms with integrations, automation and scaling support.',
    includes: [
      'Custom backend setup and React storefront',
      'Database setup, caching, and background processing',
      'Third‑party integrations (ERP/CRM, logistics, payment providers)',
      'Reliable deployment, monitoring & 6 months support'
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
