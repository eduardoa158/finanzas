/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Marca: azul profundo, verde financiero, dorado sutil, grafito.
        brand: {
          50: '#eef4ff',
          100: '#d9e6ff',
          200: '#b8d0ff',
          300: '#8bb1ff',
          400: '#5b87fb',
          500: '#3a63f0',
          600: '#2647d6',
          700: '#1f37ad',
          800: '#1f3289',
          900: '#1f2f6e',
          950: '#0b1220',
        },
        money: {
          // verde financiero
          50: '#ecfdf3',
          100: '#d1fadf',
          200: '#a6f4c5',
          300: '#6ce9a6',
          400: '#32d583',
          500: '#12b76a',
          600: '#039855',
          700: '#027a48',
          800: '#05603a',
          900: '#054f31',
        },
        danger: {
          50: '#fef3f2',
          100: '#fee4e2',
          200: '#fecdca',
          300: '#fda29b',
          400: '#f97066',
          500: '#f04438',
          600: '#d92d20',
          700: '#b42318',
          800: '#912018',
          900: '#7a271a',
        },
        warn: {
          50: '#fffaeb',
          100: '#fef0c7',
          200: '#fedf89',
          300: '#fec84b',
          400: '#fdb022',
          500: '#f79009',
          600: '#dc6803',
          700: '#b54708',
          800: '#93370d',
          900: '#7a2e0e',
        },
        gold: {
          400: '#e8c468',
          500: '#d4af37',
          600: '#b8932a',
        },
        // Superficies grafito (modo oscuro)
        ink: {
          950: '#070b14',
          900: '#0b1220',
          850: '#0f1828',
          800: '#131d30',
          700: '#1b2840',
          600: '#27374f',
          500: '#3a4d6b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
        numeric: ['"Geist Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.125rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.10)',
        card: '0 4px 24px -8px rgba(16,24,40,0.18)',
        float: '0 12px 40px -12px rgba(16,24,40,0.30)',
        glow: '0 0 0 1px rgba(58,99,240,0.18), 0 8px 32px -12px rgba(58,99,240,0.45)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2647d6 0%, #3a63f0 50%, #5b87fb 100%)',
        'gradient-money': 'linear-gradient(135deg, #027a48 0%, #12b76a 100%)',
        'gradient-night': 'linear-gradient(160deg, #0b1220 0%, #131d30 60%, #0f1828 100%)',
        'gradient-gold': 'linear-gradient(135deg, #b8932a 0%, #e8c468 100%)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.3s ease-out',
        'scale-in': 'scale-in 0.2s ease-out',
      },
    },
  },
  plugins: [],
};
