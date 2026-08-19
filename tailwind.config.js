/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0a0d16',
        surface: '#121729',
        surface2: '#0d111f',
        border: '#232b42',
        text: '#eef1f8',
        muted: '#8993ac',
        accent: '#7c6cff',
        accent2: '#3ee8c8',
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(124,108,255,0.15), 0 8px 30px -8px rgba(124,108,255,0.35)',
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #7c6cff 0%, #3ee8c8 100%)',
      },
    },
  },
  plugins: [],
}