// Utility function to get the correct base path for assets
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

  return useRepoPrefix ? `/My-Portfolio/${cleanPath}` : `/${cleanPath}`;
};

// Pre-configured asset paths
export const ASSETS = {
  profileImage: getAssetPath('profile-image.jpg'),
  cv: getAssetPath('Samuel_Olaonipekun_CV.pdf'),
  placeholder: getAssetPath('placeholder.svg'),
  favicon: getAssetPath('favicon.ico'),
  logo: getAssetPath('logo.jpeg'),
  // Project screenshots
  devblog: getAssetPath('og/home.svg'),
  glitglam: getAssetPath('glitglam-screenshot.png'),
  devblogScreenshot: getAssetPath('devblog-screenshot.png'),
  shindaraScreenshot: getAssetPath('shindara-screenshot.png'),
  // Hero background images - place copies in public/ as hero.jpg and hero-mobile.jpg
  hero: getAssetPath('hero.jpg'),
  // use generated 640px mobile-friendly variant when available
  heroMobile: getAssetPath('hero-640.jpg'),
} as const;