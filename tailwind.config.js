import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        accent: '#ff80f9',
        'accent-dark': '#ff80b9',
        'accent-harmony': '#c680ff',
        'accent-bright': '#c76bc2', //'#d65cd0',
        'accent-brightest': '#cc00c2',
        background: '#212737',
        foreground: '#eaedf3',
        muted: '#343f60bf'
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      }
    }
  },

  plugins: [typography]
};
