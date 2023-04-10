/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing: {
      tightest: '-.075em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest2: '.25em',
      widest3: '.5em'
    },
    screens: {
      sm: "450px",
      md: "868px",
      lg: "1200px",
      xl: "1600px",
    },
    fontWeight: {
      hairline: 100,
      extralight: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    backgroundSize: {
      auto: "auto",
      contain: "contain",
      cover: "cover",
      "50%": "50%",
    },
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        wiggle: "wiggle 3s linear infinite",
        wiggle2: "wiggle2 3s linear infinite",
        slide: "slide 20s linear infinite",
      },
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-20deg)" },
          "50%": { transform: "rotate(20deg)" },
        },
        wiggle2: {
          "0%, 100%": { transform: "rotate(20deg)" },
          "50%": { transform: "rotate(-20deg)" },
        },
      },
    },
    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      mono: ["ui-monospace", "SFMono-Regular"],
      display: ["Oswald"],
      body: ["Raleway"],
      nav: ["Caveat"],
      hero: ["Nanum Myeongjo"],
      mont: ["Montserrat"],
      aug: ["August"],
    },
  },
};
