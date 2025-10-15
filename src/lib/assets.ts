// Utility function to get the correct base path for assets
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), prepend the repository name
  if (import.meta.env.PROD) {
    return `/My-Portfolio/${cleanPath}`;
  }
  
  // In development, use the path as-is
  return `/${cleanPath}`;
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
  // Hero background images - place copies in public/ as hero.jpg and hero-mobile.jpg
  hero: getAssetPath('hero.jpg'),
  // use generated 640px mobile-friendly variant when available
  heroMobile: getAssetPath('hero-640.jpg'),
} as const;