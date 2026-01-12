/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'zap-green': '#adff2f',
        'electric-purple': '#a100ff',
        'cyber-blue': '#00f0ff',
        'hot-pink': '#ff00ae',
        'neon-orange': '#ff5e00',
        'brutal-black': '#000000',
        'brutal-white': '#ffffff',
        'funky-shadow': 'rgba(0,0,0,1)',
      },
      fontSize: {
        'display': ['clamp(3rem, 10vw, 8rem)', '1'],
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'display': ['Bebas Neue', 'Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'brutal': '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-hover': '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-lg': '12px 12px 0px 0px rgba(0,0,0,1)',
      },
      borderWidth: {
        '3': '3px',
        '5': '5px',
      },
      animation: {
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '33%': { transform: 'translate(-2px, 2px)' },
          '66%': { transform: 'translate(2px, -2px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: []
}
 