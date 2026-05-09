/**
 * Application-wide constants and theme configuration
 */

export const BRAND_NAME = 'Focus Garden';
export const CHROME_STORE_URL = 'https://chromewebstore.google.com/detail/focus-garden-block-websit/igkjojamgkbadkeflpflpcnhfhnjnelk';
export const GITHUB_URL = 'https://github.com/Iccrtlity/Focus-Garden';
export const GITHUB_ISSUES_URL = 'https://github.com/Iccrtlity/Focus-Garden/issues';

/**
 * Color scheme for the application
 */
export const colors = {
  // Backgrounds
  background: '#050a0a',
  backgroundDark: '#030707',
  
  // Surfaces
  surfaceCard: '#0d1117',
  surfaceBar: '#0a0e13',
  surfaceOverlay: '#111820',
  
  // Accent
  accent: '#10b981',
  accentDark: '#059669',
  accentLight: '#34d399',
  
  // Text
  textPrimary: 'text-white',
  textSecondary: 'text-stone-400',
  textTertiary: 'text-stone-500',
  textMuted: 'text-stone-600',
  
  // Borders
  borderDefault: 'border-white/5',
  borderLight: 'border-white/10',
} as const;

/**
 * Extension UI constants
 */
export const extension = {
  timerDefault: '25:00',
  sessionsDefault: 0,
  gardenEmoji: '🏜️',
} as const;

/**
 * Layout measurements
 */
export const layout = {
  maxWidth: 'max-w-6xl',
  smallWidth: 'w-[320px]',
} as const;
