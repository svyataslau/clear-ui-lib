import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Helvetica Light"',
          '"HelveticaNeue-Light"',
          '"Helvetica Neue Light"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      colors: {
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
        'neumorphism': '18px 18px 30px #d1d9e6, -18px -18px 30px #ffffff',
        'neumorphism-card': '8px 8px 16px #d1d9e6, -8px -8px 16px #ffffff',
        'neumorphism-inset': 'inset 18px 18px 30px #d1d9e6, inset -18px -18px 30px #ffffff',
      }
    },
  },
  plugins: [],
};

export default config;
