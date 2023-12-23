import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundColor: {
        primary: '#0373AA',
        'body-primary': '#F0F8FF',
      },
      textColor: {
        primary: '#0373AA',
      },
      borderColor: {
        primary: '#0373AA',
      },
      outlineColor: {
        primary: '#0373AA',
      },
      zIndex: {
        '0': '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '999': '999',
      },
      screens: {
        ssm: '450px',
      },
      animation: {
        undulate: 'float 6s ease-in-out infinite',
        ripple1: 'move 12s linear infinite',
        ripple2: 'move 8s linear infinite',
        ripple3: 'move 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        move: {
          '0%': { backgroundPosition: 'left 0px bottom 0' },
          '100%': { backgroundPosition: 'left 350px bottom 0' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
export default config;
