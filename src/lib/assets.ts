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
} as const;