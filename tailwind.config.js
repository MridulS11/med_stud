/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        marrow: {
          bg: '#E8ECE7',
          surface: '#F4F7F4',
          card: '#FFFFFF',
          teal: {
            DEFAULT: '#274B41',
            dark: '#1B372F',
            light: '#3A6357',
            soft: '#E3ECE8',
            subtle: '#ECF3EF'
          },
          amber: {
            DEFAULT: '#DF9145',
            hover: '#CF7F32',
            light: '#FDF6ED',
            badge: '#F7E7D6'
          },
          text: {
            primary: '#1A2421',
            secondary: '#5C6B64',
            muted: '#8A9992'
          },
          border: '#D8E2DA',
          borderSubtle: '#E6ECE7'
        }
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'Cambria', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'marrow-card': '0 2px 12px -2px rgba(39, 75, 65, 0.06), 0 1px 3px rgba(0, 0, 0, 0.04)',
        'marrow-hover': '0 8px 24px -4px rgba(39, 75, 65, 0.12), 0 2px 6px rgba(0, 0, 0, 0.04)',
      },
      borderRadius: {
        '2xl': '18px',
        '3xl': '24px',
        '4xl': '32px',
      }
    },
  },
  plugins: [],
}
