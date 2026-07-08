import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Mood board palette — warm, food-forward, earthy
        chili: {
          DEFAULT: '#8B2412', // deep chili red — primary: headers, CTA
          600: '#7A1F0F',
          700: '#6B1B0D',
        },
        amber: {
          DEFAULT: '#C8892B', // warm amber/gold — prices, icons, dividers
          soft: '#D9A44E',
        },
        charcoal: {
          DEFAULT: '#2B2018', // charcoal brown — text, footer, overlays
          soft: '#4A3A2C',
        },
        cream: '#F4EBDD', // warm cream — backgrounds, section fills
        offwhite: '#FBF7F0', // off-white — cards, whitespace
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        serif: ['Cormorant', 'Georgia', 'serif'],
        sans: ['"Work Sans"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Fluid type scale
        'fluid-eyebrow': ['clamp(0.75rem, 0.7rem + 0.3vw, 0.9rem)', { lineHeight: '1.4', letterSpacing: '0.18em' }],
        'fluid-h1': ['clamp(2.75rem, 1.8rem + 4.8vw, 6rem)', { lineHeight: '1.02', letterSpacing: '-0.01em' }],
        'fluid-h2': ['clamp(2rem, 1.4rem + 2.6vw, 3.5rem)', { lineHeight: '1.08', letterSpacing: '-0.01em' }],
        'fluid-h3': ['clamp(1.4rem, 1.1rem + 1.2vw, 2rem)', { lineHeight: '1.15' }],
        'fluid-quote': ['clamp(1.6rem, 1.1rem + 2.2vw, 3rem)', { lineHeight: '1.2' }],
        'fluid-price': ['clamp(2.25rem, 1.6rem + 2.4vw, 3.25rem)', { lineHeight: '1' }],
      },
      maxWidth: {
        content: '1200px',
        prose: '68ch',
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(43, 32, 24, 0.10), 0 8px 28px -8px rgba(43, 32, 24, 0.14)',
        lift: '0 6px 16px -4px rgba(43, 32, 24, 0.14), 0 20px 48px -16px rgba(43, 32, 24, 0.22)',
        glow: '0 0 0 1px rgba(200, 137, 43, 0.25), 0 10px 40px -12px rgba(139, 36, 18, 0.35)',
      },
      transitionTimingFunction: {
        'out-soft': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'kenburns': {
          '0%': { transform: 'scale(1.05) translateY(0)' },
          '100%': { transform: 'scale(1.18) translateY(-1.5%)' },
        },
        'steam': {
          '0%': { transform: 'translateY(0) scaleX(1)', opacity: '0' },
          '15%': { opacity: '0.5' },
          '100%': { transform: 'translateY(-90px) scaleX(1.6)', opacity: '0' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        kenburns: 'kenburns 22s ease-out forwards',
        steam: 'steam 7s ease-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
