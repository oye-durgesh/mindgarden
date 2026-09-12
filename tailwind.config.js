/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        morning: { from: '#f5ede0', to: '#eee0c8' },
        afternoon: { from: '#f7ddb8', to: '#f0c090' },
        evening: { from: '#2b1f3d', to: '#1c1430' },
        night: { from: '#1a1428', to: '#0f0c1a' },
        gamesHub: { from: '#241a33', to: '#160f22' },
        accent: {
          purple: '#8b5cf6',
          purpleDark: '#6d28d9',
          orange: '#f5a962',
          green: '#7fd67f',
        },
        card: {
          light: 'rgba(255,255,255,0.9)',
          dark: 'rgba(255,255,255,0.06)',
          darkBorder: 'rgba(255,255,255,0.1)',
        },
        text: {
          onDark: '#f2eefa',
          onDarkMuted: '#a89bc0',
          onLight: '#2b2233',
          onLightMuted: '#8a8090',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      boxShadow: {
        glass: '0 8px 32px rgba(43, 31, 61, 0.12)',
        glow: '0 0 40px rgba(139, 92, 246, 0.35)',
      },
    },
  },
  plugins: [],
}
