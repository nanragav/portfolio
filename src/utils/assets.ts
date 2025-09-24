// Utility to handle asset paths consistently across environments
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  
  // In production (GitHub Pages), use the basePath prefix
  const basePath = process.env.NODE_ENV === 'production' ? '/portfolio' : '';
  
  return `${basePath}/${cleanPath}`;
};

// Specifically for icon assets
export const getIconPath = (iconName: string): string => {
  return getAssetPath(`icons/${iconName}`);
};