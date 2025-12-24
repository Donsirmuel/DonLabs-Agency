// Utility function to get the correct base path for assets
const CACHE_BUST = '?v=3';

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
  return `${fullPath}${CACHE_BUST}`;
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
  // New brand assets added from uploaded media
  logoIcon: getAssetPath('logo-icon.png'),
  logoFull: getAssetPath('logo-full.png'),
  // Hero video and posters
  heroVideo: getAssetPath('hero-video.mp4'),
  heroVideoWebm: getAssetPath('hero-video.webm'),
  heroPosterDesktop: getAssetPath('hero-poster-desktop.jpg'),
  heroPosterMobile: getAssetPath('hero-poster-mobile.jpg'),
  // Project screenshots
  devblog: getAssetPath('og/home.svg'),
  glitglam: getAssetPath('glitglam-screenshot.png'),
  devblogScreenshot: getAssetPath('devblog-screenshot.png'),
  shindaraScreenshot: getAssetPath('shindara-screenshot.png'),
  bubbaliciousScreenshot: getAssetPath('bubbalicious-screenshot.jng'),
  // Hero background images - place copies in public/ as hero.jpg and hero-mobile.jpg
  hero: getAssetPath('hero.jpg'),
  // use generated 640px mobile-friendly variant when available
  heroMobile: getAssetPath('hero-640.jpg'),
} as const;