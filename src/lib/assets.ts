// Utility function to get the correct base path for assets
const CACHE_BUST = '?v=4';

export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Canonical host is https://donlabs.site on Vercel (GH Pages retired).
  // Always serve from root so sitemap, OG, and asset URLs stay absolute.
  const fullPath = `/${cleanPath}`;
  const encodedPath = encodeURI(fullPath);
  return `${encodedPath}${CACHE_BUST}`;
};

// Pre-configured asset paths
export const ASSETS = {
  profileImage: getAssetPath('profile-image.jpg'),
  cv: getAssetPath('Founders_CV.pdf'),
  // Human-facing label for the CV download link
  cvLabel: "Founder's CV",
  placeholder: getAssetPath('placeholder.svg'),
  favicon: getAssetPath('favicon.png'),
  logo: getAssetPath('logo-full.png'),
  logoFull: getAssetPath('logo-full.png'),
  logoNav: getAssetPath('logo-nav.webp'),
  ogDefault: getAssetPath('og/Donlabs-OG.png'),
  // New brand assets added from uploaded media
  // Hero posters
  heroPosterDesktop: getAssetPath('hero-poster-desktop.jpg'),
  heroPosterMobile: getAssetPath('hero-poster-mobile.jpg'),
  // Project screenshots
  glitglam: getAssetPath('glitglam-screenshot.webp'),
  devblogScreenshot: getAssetPath('devblog-screenshot.webp'),
  shindaraScreenshot: getAssetPath('shindara-screenshot.webp'),
  bubbaliciousScreenshot: getAssetPath('bubbalicious-screenshot.webp'),
  shobsPortfolioScreenshot: getAssetPath('Shobs-portfolio-image.webp'),
  vendoraScreenshot: getAssetPath('vendora-screenshot.webp'),
  northlineScreenshot: getAssetPath('northline-screenshot.webp'),
  vericlickScreenshot: getAssetPath('vericlick-screenshot.png'),
  juristaScreenshot: getAssetPath('jurista-screenshot.webp'),
  nearhomeScreenshot: getAssetPath('nearhome-screenshot.webp'),
  oohjayscreenshot: getAssetPath('ooh-jay-screenshot.webp'),
  showcaseShindaraDesktop: getAssetPath('project-showcases/desktop/shindara-style-hub.webp'),
  showcaseShindaraMobile: getAssetPath('project-showcases/mobile/shindara-style-hub.webp'),
  showcaseBubbaliciousDesktop: getAssetPath('project-showcases/desktop/bubbalicious-hair-and-co.webp'),
  showcaseBubbaliciousMobile: getAssetPath('project-showcases/mobile/bubbalicious-hair-and-co.webp'),
  showcaseShobsDesktop: getAssetPath('project-showcases/desktop/shobs-graphic-design-portfolio.webp'),
  showcaseShobsMobile: getAssetPath('project-showcases/mobile/shobs-graphic-design-portfolio.webp'),
  showcaseVendoraDesktop: getAssetPath('project-showcases/desktop/vendora.webp'),
  showcaseVendoraMobile: getAssetPath('project-showcases/mobile/vendora.webp'),
  showcaseNorthlineDesktop: getAssetPath('project-showcases/desktop/northline-wears.webp'),
  showcaseNorthlineMobile: getAssetPath('project-showcases/mobile/northline-wears.webp'),
  showcaseVericlickDesktop: getAssetPath('project-showcases/desktop/vericlick.webp'),
  showcaseVericlickMobile: getAssetPath('project-showcases/mobile/vericlick.webp'),
  showcaseJuristaDesktop: getAssetPath('project-showcases/desktop/jurista-law.webp'),
  showcaseJuristaMobile: getAssetPath('project-showcases/mobile/jurista-law.webp'),
  showcaseNearHomeDesktop: getAssetPath('project-showcases/desktop/near-home.webp'),
  showcaseNearHomeMobile: getAssetPath('project-showcases/mobile/near-home.webp'),
  showcaseOohJayDesktop: getAssetPath('project-showcases/desktop/ooh-jay.webp'),
  showcaseOohJayMobile: getAssetPath('project-showcases/mobile/ooh-jay.webp'),
  sungridScreenshot: getAssetPath('sungrid-screenshot.webp'),
  showcaseSungridDesktop: getAssetPath('project-showcases/desktop/sungrid-systems.webp'),
  showcaseSungridMobile: getAssetPath('project-showcases/mobile/sungrid-systems.webp'),
  // Other project images
  businessWebsite: getAssetPath('business website.png'),
  // Hero background images - place copies in public/ as hero.jpg and hero-mobile.jpg
  hero: getAssetPath('hero.jpg'),
  // use generated 640px mobile-friendly variant when available
  heroMobile: getAssetPath('hero-640.jpg'),
} as const;
