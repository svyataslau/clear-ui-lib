import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        neumorphism: {
          light: '#ffffff',
          dark: '#d1d9e6',
          pressed: '#c7ccd3',
          background: '#ecf0f3',
          classic: '#f0f0f3',
          classic-dark: '#aeaece',
        }
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'neumorphism': '18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff',
        'neumorphism-inset': 'inset 18px 18px 30px #d1d9e6, inset -18px -18px 30px #ffffff',
        'neumorphism-pressed': 'inset 18px 18px 30px #c7ccd3, inset -18px -18px 30px #ffffff',
        'neumorphism-card': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neumorphism-input': 'inset 8px 8px 16px #d1d9e6, inset -8px -8px 16px #ffffff',
        'neumorphism-convex': '-10px -10px 30px #ffffff, 10px 10px 30px #aeaece 40%',
        'neumorphism-concave': 'inset -10px -10px 10px #aeaece 25%, inset 10px 10px 10px #ffffff',
      }
    },
  },
  plugins: [],
}

export default config
