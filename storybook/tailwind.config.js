/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../src/**/*.{js,ts,jsx,tsx}", // Include library components and styles
  ],
  theme: {
    extend: {
      fontFamily: {
        'courier': ['Courier New', 'Courier', 'monospace'],
      },
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
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        neumorphism: {
          light: '#ffffff',
          dark: '#d1d9e6',
          pressed: '#c7ccd3',
          background: '#ecf0f3',
          classic: '#f0f0f3',
          'classic-dark': '#aeaece',
        }
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        // Neumorphism shadows defined in src/styles/index.css - don't override them here
      }
    }
  },
  plugins: [],
  safelist: [
    'bg-neumorphism-background',
    'bg-neumorphism-classic',
    'shadow-neumorphism',
    'shadow-neumorphism-inset',
    'shadow-neumorphism-pressed',
    'shadow-neumorphism-card',
    'shadow-neumorphism-input',
    'shadow-neumorphism-convex',
    'shadow-neumorphism-concave',
    'hover:shadow-neumorphism-pressed',
    'hover:shadow-neumorphism',
    'active:shadow-neumorphism-inset',
    'hover:bg-neumorphism-background',
  ],
}
