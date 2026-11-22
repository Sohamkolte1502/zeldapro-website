/** Global primary navigation chrome — TCS-style charcoal bar + mega panels. */
export type NavTheme = 'dark' | 'light'

export const NAV_THEME: NavTheme = 'dark'

/** TCS-inspired nav chrome (bar and dropdown share the same surface). */
export const NAV_DARK = {
  background: '#000000',
  backgroundExpanded: '#1E2222',
  border: 'rgba(255,255,255,0.08)',
  text: '#FFFFFF',
  textMuted: 'rgba(255,255,255,0.72)',
  linkHover: '#FFFFFF',
  linkActive: '#078BCB',
  ctaBackground: '#087FC1',
  ctaForeground: '#FFFFFF',
} as const

/** Legacy light palette — unused while `NAV_THEME` is `dark`. */
export const NAV_LIGHT = {
  background: '#F0F4F6',
  border: '#DCE5EA',
  text: '#172B3A',
  textHoverActive: '#078BCB',
  ctaBackground: '#087FC1',
  ctaForeground: '#FFFFFF',
  shadow: '0 4px 18px rgba(7, 19, 31, 0.08)',
  dropdownShadow: '0 8px 24px rgba(7, 19, 31, 0.1)',
} as const