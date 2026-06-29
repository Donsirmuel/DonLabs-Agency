// Utility function to get the correct base path for assets
const CACHE_BUST = '?v=4';

export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;

  // Helper to detect GitHub Pages-like subpath at runtime
  const isGitHubPagesRuntime = () => {
    try {
      if (typeof window !== 'undefined') {
        // Hostname contains github.io OR the current path contains the repo base
        if (window.location.hostname.includes('github.io')) return true;
        if (window.location.pathname.startsWith('/My-Portfolio/')) return true;
      }
    } catch (e) {
      // ignore
    }
    return false;
  };

  // Build-time heuristic: Vite exposes BASE_URL; if it's set to the repo subpath, respect it
  const baseUrl = (import.meta.env && (import.meta.env as any).BASE_URL) || '/';
  const isGitHubPagesBuild = typeof baseUrl === 'string' && baseUrl.startsWith('/My-Portfolio/');

  const useRepoPrefix = isGitHubPagesBuild || isGitHubPagesRuntime();

  const fullPath = useRepoPrefix ? `/My-Portfolio/${cleanPath}` : `/${cleanPath}`;
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
  ogDefault: getAssetPath('og/Donlabs-OG.png'),
  // New brand assets added from uploaded media
  logoIcon: getAssetPath('logo-icon.png'),
  logoFull: getAssetPath('logo-full.png'),
  // Hero video and posters
  heroVideo: getAssetPath('hero-video.mp4'),
  heroVideoWebm: getAssetPath('hero-video.webm'),
  heroPosterDesktop: getAssetPath('hero-poster-desktop.jpg'),
  heroPosterMobile: getAssetPath('hero-poster-mobile.jpg'),
  // Project screenshots
  glitglam: getAssetPath('glitglam-screenshot.webp'),
  devblogScreenshot: getAssetPath('devblog-screenshot.webp'),
  shindaraScreenshot: getAssetPath('shindara-screenshot.webp'),
  bubbaliciousScreenshot: getAssetPath('bubbalicious-screenshot.webp'),
  shobsPortfolioScreenshot: getAssetPath('Shobs-portfolio-image.webp'),
  vendoraScreenshot: getAssetPath('vendora-screenshot.webp'),
  showcaseShindaraDesktop: getAssetPath('project-showcases/desktop/shindara-style-hub.png'),
  showcaseShindaraMobile: getAssetPath('project-showcases/mobile/shindara-style-hub.png'),
  showcaseBubbaliciousDesktop: getAssetPath('project-showcases/desktop/bubbalicious-hair-and-co.png'),
  showcaseBubbaliciousMobile: getAssetPath('project-showcases/mobile/bubbalicious-hair-and-co.png'),
  showcaseShobsDesktop: getAssetPath('project-showcases/desktop/shobs-graphic-design-portfolio.png'),
  showcaseShobsMobile: getAssetPath('project-showcases/mobile/shobs-graphic-design-portfolio.png'),
  showcaseVendoraDesktop: getAssetPath('project-showcases/desktop/vendora.png'),
  showcaseVendoraMobile: getAssetPath('project-showcases/mobile/vendora.png'),
  // Other project images
  businessWebsite: getAssetPath('business website.png'),
  dataVisualization: getAssetPath('data visualization.png'),
  codeScreenshot: getAssetPath('code screenshot.png'),
  // Hero background images - place copies in public/ as hero.jpg and hero-mobile.jpg
  hero: getAssetPath('hero.jpg'),
  // use generated 640px mobile-friendly variant when available
  heroMobile: getAssetPath('hero-640.jpg'),
} as const;
