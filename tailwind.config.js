/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    // Replace the default palette wholesale so no stock Tailwind colors leak in.
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      evergreen: {
        DEFAULT: '#1E4438',
        light: '#2F6E52',
        deep: '#14312A',
      },
      marigold: {
        DEFAULT: '#E8A548',
        deep: '#C9822E',
      },
      ink: '#1C1B18',
      paper: '#F7F4EE',
      line: '#D8D3C6',
      whatsapp: '#25D366',
      sand: {
        50: '#FBFAF6',
        100: '#F2EEE4',
        200: '#E7E1D2',
        300: '#D8D3C6',
        400: '#B7B0A0',
        500: '#8B8474',
        600: '#615B4E',
      },
    },
    fontFamily: {
      display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.6rem' }],
      lg: ['1.25rem', { lineHeight: '1.75rem' }],
      xl: ['1.75rem', { lineHeight: '2rem' }],
      '2xl': ['2.5rem', { lineHeight: '2.75rem' }],
      '3xl': ['3.5rem', { lineHeight: '3.75rem' }],
    },
    extend: {
      borderRadius: {
        card: '1.125rem',
      },
      boxShadow: {
        card: '0 1px 2px rgba(28,27,24,0.04), 0 12px 30px -18px rgba(28,27,24,0.30)',
        lift: '0 2px 4px rgba(28,27,24,0.05), 0 22px 44px -22px rgba(28,27,24,0.38)',
        float: '0 8px 24px -6px rgba(20,49,42,0.45)',
      },
      maxWidth: {
        content: '76rem',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
}
