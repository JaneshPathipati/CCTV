import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        premiummyello: {
          DEFAULT: '#F2D74E',
          light: '#F5D547',
          dark: '#D4B93D',
        },
        hso: {
          yellow: '#F2D74E',
          'yellow-light': '#F5D547',
          'yellow-dark': '#D4B93D',
        },
        jet: {
          black: '#000000',
          soft: '#111111',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
        'soft-grey': {
          DEFAULT: '#EDEDED',
          light: '#F2F2F2',
        },
        gunmetal: {
          DEFAULT: '#2E2E2E',
          light: '#3A3A3A',
          dark: '#1A1A1A',
        },
        signal: {
          blue: '#1F6AE1',
          'blue-light': '#3D7FE8',
          'blue-dark': '#1A5BC7',
        },
        primary: {
          blue: '#1F6AE1',
          'blue-light': '#3D7FE8',
          'blue-dark': '#1A5BC7',
          DEFAULT: '#1F6AE1',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', '-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(31, 106, 225, 0.3)' },
          '100%': { boxShadow: '0 0 40px rgba(31, 106, 225, 0.6)' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 12px 48px 0 rgba(31, 38, 135, 0.45)',
        'glow-yellow': '0 0 30px rgba(251, 212, 3, 0.4)',
        'glow-blue': '0 0 30px rgba(31, 106, 225, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
