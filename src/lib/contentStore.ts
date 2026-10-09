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
const CONTENT_VERSION = 40;

export const defaultContent: SiteContent = {
  about: {
    heading: 'About DonLabs',
    intro: "DonLabs builds websites, commerce systems, and custom web platforms for businesses that need their online presence to look credible, load fast, and support real operations.",
    details: "We pair sharp React interfaces with dependable Django/Python backends, clean admin workflows, payments, analytics, and deployment support. The goal is not just a better-looking site; it is a web system your team can run, improve, and trust after launch."
  },
  projects: [
    {
      title: "DevBlog Platform",
      description: "An editorial publishing system built to replace slow manual article handling with role-based workflows, scheduled publishing, and fast SEO-ready pages.",
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
      clientBenefit: "Helped the editorial team publish with less friction by centralising author roles, scheduling, media handling, metadata, and performance-focused reading pages."
    },
    {
      title: "Glitglam Storefront",
      description: "An e-commerce storefront built to focus on clearer product discovery, faster mobile shopping, smoother checkout, and easier order management.",
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
      clientBenefit: "Reduced buying friction by improving the mobile journey, simplifying checkout decisions, and giving the business a cleaner way to manage products and orders."
    },
    {
      title: "Shindara Style Hub",
      description: "A fashion storefront and admin system built for larger catalogs, seasonal drops, promotions, and day-to-day order visibility.",
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
      clientBenefit: "Made catalog growth easier to handle by giving the team clearer product controls, promotional tools, and a storefront designed for fast browsing."
    },
    {
      title: "Bubbalicious Hair & Co",
      description: "A premium salon website designed to make specialist hair services easier to understand, showcase the brand beautifully, and guide visitors toward booking.",
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
      clientBenefit: "Turned a service-heavy offer into a clearer browsing experience with stronger visual trust, local SEO foundations, and direct booking paths."
    },
    {
      title: "Shobs Graphic Design Portfolio",
      description: "A portfolio website for a graphic design brand, structured around strong visual proof, clear service positioning, and easier client enquiries.",
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
      clientBenefit: "Gave the brand a stronger digital showroom where prospects can understand the offer, scan the work, and start a conversation quickly."
    },
    {
      title: "Vendora",
      description: "A marketplace-style commerce experience focused on faster product discovery, reliable checkout, and cleaner vendor/order workflows.",
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
      clientBenefit: "Improved the buyer journey by making search, filtering, checkout, and admin handling feel more predictable across a multi-vendor catalog."
    },
    {
      title: "Northline Wears",
      description: "A fashion storefront created to give the brand a sharper online presence, stronger product presentation, and clearer shopping intent.",
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
      clientBenefit: "Made the brand feel more credible online while helping shoppers browse products, understand the style direction, and move toward enquiry or purchase."
    },
    {
      title: "VeriClick",
      description: "A SaaS link-security product that checks traffic before it reaches protected pages, helping teams filter bot clicks, suspicious IPs, and distorted analytics.",
      features: [
        "Bot detection and suspicious traffic screening on every click",
        "Custom IP rules and allow/block configurations",
        "Plain-language explanations for why each request was flagged",
        "Real-time click analytics and request insights",
        "SaaS subscription model with a free beta tier"
      ],
      slug: "vericlick",
      githubUrl: "#",
      liveUrl: "https://vericlick.site",
      imageUrl: ASSETS.vericlickScreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseVericlickDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseVericlickMobile,
      hasLive: true,
      projectType: "SaaS",
      clientBenefit: "Protected campaign links from junk traffic by screening suspicious clicks automatically and explaining every allow/block decision in plain language."
    },
    {
      title: "OOH JAY Plumbing & Construction",
      description: "A service website for a Nigerian plumbing and construction brand, built to explain specialist water systems clearly and turn visits into fast WhatsApp and call enquiries.",
      features: [
        "Service breakdown for water systems, bathrooms, plant rooms and construction support",
        "Click-to-chat WhatsApp and call enquiry paths",
        "SEO foundations for Lagos, Abuja and Abeokuta plumbing searches",
        "Responsive layout tuned for mobile enquiries",
        "Structured data for services, FAQs and service areas"
      ],
      slug: "ooh-jay",
      githubUrl: "#",
      liveUrl: "https://ooh-jay.vercel.app",
      imageUrl: ASSETS.oohjayscreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseOohJayDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseOohJayMobile,
      hasLive: true,
      projectType: "Construction Website",
      clientBenefit: "Made a specialist trade easier to trust by clarifying the offer, proving engineering standards, and shortening the path to a quote."
    },
    {
      title: "Jurista Law",
      description: "A law-firm website built around transparent counsel, with upfront fee quotes, plain-English contracts, and clear paths to reach an attorney.",
      features: [
        "Practice-area positioning with plain-English messaging",
        "Upfront fee-quote and consultation enquiry paths",
        "Attorney contact details, office hours and location info",
        "Responsive layout with accessible typography",
        "SEO and structured data for legal-service discovery"
      ],
      slug: "jurista-law",
      githubUrl: "#",
      liveUrl: "https://jurista-law.vercel.app/",
      imageUrl: ASSETS.juristaScreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseJuristaDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseJuristaMobile,
      hasLive: true,
      projectType: "Legal Website",
      clientBenefit: "Turned legal services into a clearer decision by leading with transparency, simple next steps, and direct attorney access."
    },
    {
      title: "SunGrid Systems",
      description: "A solar-company website for Nigerian homes and businesses, built to explain load sizing, lithium storage packages, and inverter installs with clear quote paths.",
      features: [
        "Solar package presentation from 3.5kVA apartments to 10kVA family homes",
        "Load-calculation guidance for fridges, ACs, pumps and workstations",
        "Service-area coverage for Lagos, Abuja, Port Harcourt and Ibadan",
        "Quote and consultation enquiry flows",
        "SEO foundations for solar and inverter searches"
      ],
      slug: "sungrid-systems",
      githubUrl: "#",
      liveUrl: "https://sungrid-systems.vercel.app",
      imageUrl: ASSETS.sungridScreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseSungridDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseSungridMobile,
      hasLive: true,
      projectType: "Energy Website",
      clientBenefit: "Made solar easier to buy by translating panels, batteries and inverters into package sizes, running loads, and a clear next step."
    },
    {
      title: "Near Home",
      description: "A premium shortlet website showcasing furnished apartments across ten cities, set up with proper desks, tested fiber internet, and quiet bedrooms.",
      features: [
        "Apartment showcase built around work-ready stays",
        "Amenity highlights: fiber internet, workspaces, quiet rooms and backup power",
        "Keyless self check-in and stay information",
        "Booking and enquiry paths with multi-currency context",
        "Responsive design tuned for mobile browsing and booking"
      ],
      slug: "near-home",
      githubUrl: "#",
      liveUrl: "https://nearhome-luxe.vercel.app/",
      imageUrl: ASSETS.nearhomeScreenshot,
      caseStudyDesktopImageUrl: ASSETS.showcaseNearHomeDesktop,
      caseStudyMobileImageUrl: ASSETS.showcaseNearHomeMobile,
      hasLive: true,
      projectType: "Hospitality Website",
      clientBenefit: "Helped guests judge a stay faster by leading with work essentials, sleep quality, and simple booking steps."
    },
  ],
  services: [
    {
      title: "Business Websites",
      description: "Premium business websites for service brands, teams, and companies that need a credible online presence with clear messaging and conversion paths.",
      features: [
        "Mobile-first interface design with a polished brand feel",
        "Clear page structure for services, proof, and enquiries",
        "Simple content editing with Django CMS or headless options",
        "Technical SEO, metadata, and performance foundations",
        "Lead capture, newsletter, and contact workflows",
        "Launch support with optional care after handoff"
      ],
      popular: false,
      recommendedPackage: 'Corporate / Business Website'
    },
    {
      title: "E‑commerce Stores",
      description: "Commerce stores built around fast browsing, confident product decisions, reliable checkout, and admin workflows your team can actually manage.",
      features: [
        "Product catalogs with search, filtering, and categories",
        "Fast, secure cart and checkout flows tuned for mobile",
        "Payment integrations (Paystack / Flutterwave / Stripe)",
        "Order, inventory, and customer management",
        "Analytics setup for tracking sales and drop-off points",
        "Launch support, testing, and basic fraud protections"
      ],
      popular: true,
      recommendedPackage: 'Small e‑commerce / Medium e‑commerce'
    },
    {
      title: "Custom Web Apps",
      description: "Custom dashboards, portals, booking tools, marketplaces, and workflow systems designed to remove manual bottlenecks from your business.",
      features: [
        "Custom workflows mapped around how your team operates",
        "User accounts, roles and secure access",
        "APIs and integrations (payments, shipping, CRM)",
        "Reports, dashboards and admin tools",
        "Performance-minded architecture that can grow with usage",
        "Transparent milestones, documentation, and ongoing support"
      ],
      popular: false,
      recommendedPackage: 'Premium e‑commerce / Enterprise'
    },
    {
      title: "Progressive Web Apps (PWA)",
      description: "Installable web experiences that feel app-like on mobile while staying easier to launch, update, and maintain than native app-store builds.",
      features: [
        "Install on the home screen for quick access",
        "Offline caching for fast repeat visits",
        "Push notifications to bring customers back",
        "Smooth cross-platform experience on mobile browsers",
        "Lightweight and easy to maintain",
        "Usage tracking to improve repeat engagement"
      ],
      popular: false,
      recommendedPackage: 'Premium / Enterprise'
    }
  ],
  servicesInfo: {
    howItWorks: [
      "Discovery - We clarify the business goal, audience, offer, and what success should look like after launch.",
      "Proposal - You get a clear scope, timeline, deliverables, and budget before build work starts.",
      "Build - We design and develop in visible milestones so feedback happens before anything drifts.",
      "Launch - We handle deployment, DNS support, testing, analytics, and initial monitoring.",
      "Support - After launch, we keep the system stable with maintenance, improvements, and practical handoff."
    ],
    faq: [
      {
        q: "How long does a project take?",
        a: "Small business sites can take 3-7 days. Commerce stores often take 7-14 days. Custom platforms depend on scope, but we give you a clear timeline before work begins."
      },
      {
        q: "How much will it cost?",
        a: "The pricing page gives starting ranges. After discovery, we provide a fixed quote or a clear phased budget so you know what is included before we start."
      },
      {
        q: "Do you offer ongoing support?",
        a: "Yes. We offer maintenance for updates, backups, security checks, small improvements, and post-launch support when your team needs help up to 2 weeks after launch."
      }
    ]
  },
  pricing: [
  {
    id: 'corporate',
    name: 'Corporate / Business Website',
    price: '₦250,000+',
    desc: 'For service businesses, professionals, and teams that need a credible website with clear messaging, proof, and enquiry paths.',
    includes: [
      '5–10 content pages (About, Services, Team, Blog, Contact)',
      'Fast frontend with optional content editing',
      'Structured service, proof, blog, and contact sections',
      'Lead capture, newsletter, and enquiry workflows',
      'Analytics setup, accessibility checks & 1 month support'
    ]
  },
  {
    id: 'small-ecom',
    name: 'Small e‑commerce',
    price: '₦400,000+',
    desc: 'For small stores that need polished product pages, reliable checkout, and a backend that keeps orders manageable.',
    includes: [
      'Product catalog, product pages, search and category browsing',
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
    desc: 'For growing stores that need accounts, inventory, discounts, better reporting, and room to scale.',
    includes: [
      'Everything in Small e‑commerce',
      'User accounts, order history and customer dashboards',
      'Inventory management, discounts & coupon systems',
      'Email/SMS notifications and sales tracking',
      'Performance tuning, test environment & 4 months support'
    ]
  },
  {
    id: 'premium-ecom',
    name: 'Premium e‑commerce / Enterprise',
    price: '₦1,200,000+',
    desc: 'For serious commerce operations that need custom workflows, integrations, automation, and scaling support.',
    includes: [
      'Custom backend setup and React storefront',
      'Database setup, caching, and background processing',
      'Third‑party integrations (ERP/CRM, logistics, payment providers)',
      'Reliable deployment, monitoring, documentation & 6 months support'
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
