/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ['Space Mono', 'monospace'],
      },
      gridTemplateColumns: {
        fluid: 'repeat(auto-fit, minmax(20rem, 1fr))',
      },
    },
  },
  plugins: [],
};
