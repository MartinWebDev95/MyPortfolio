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
      keyframes: {
        blobs_animation: {
          from: {
            transform: 'rotate(0deg) scale(2)',
          },

          to: {
            transform: 'rotate(360deg) scale(2)',
          },
        },
        title_animation: {
          from: {
            opacity: 0,
          },

          to: {
            opacity: 1,
          },
        },
        socials_animation: {
          from: {
            transform: 'translateY(8rem)',
            opacity: 0,
          },

          to: {
            transform: 'translateY(0rem)',
            opacity: 1,
          },
        },
        animation_enter: {
          from: {
            transform: 'translateX(8rem)',
          },

          to: {
            transform: 'translateX(0rem)',
          },
        },

        animation_leave: {
          from: {
            transform: 'translateX(0rem)',
          },

          to: {
            transform: 'translateX(20rem)',
          },
        },
      },
      animation: {
        blobs_animation_one: 'blobs_animation 30s linear infinite both',
        blobs_animation_two: 'blobs_animation 50s linear infinite both',
        title_animation: 'title_animation 2s linear 1 both',
        socials_animation: 'socials_animation 1s linear .5s 1 both',
        animation_enter: 'animation_enter .3s linear 1 both',
        animation_leave: 'animation_leave .3s linear 1 both',
      },
    },
  },
  plugins: [],
};
