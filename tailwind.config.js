/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    backgroundSize: { 
      'auto': 'auto',
      'contain': 'contain',
      'cover': 'cover',
      '50%': '50%',
    },
    extend: {
      animation: {
        'spin-slow':'spin 3s linear infinite',
        'wiggle': 'wiggle 3s linear infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Raleway'],
      'nav': ['Caveat'],
      'hero': ['Nanum Myeongjo'],
      'futura' : ['futura-pt'],
      'mont': ['Montserrat']
    }
  },
}
