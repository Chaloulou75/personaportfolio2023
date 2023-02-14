/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./stores/WorkStore.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      fontSize: {
        "8xl": "5.25rem",
        "11xl": "11rem",
      },
      backgroundImage: {
        "dia-1": "url('/img/proyectos/dias/dia1.jpg')",
        "dia-2": "url('/img/proyectos/dias/dia2.jpg')",
        "dia-3": "url('/img/proyectos/dias/dia3.jpg')",
        "dia-4": "url('/img/proyectos/dias/dia4.jpg')",
        "dia-5": "url('/img/proyectos/dias/dia5.jpg')",
        "dia-6": "url('/img/proyectos/dias/dia6.jpg')",
      },
      colors: {
        gold: "#FFDF00",
        bluejuli: "#008aae",
        redjuli: "#f23941",
        yellowjuli: "#FFDF00",
      },
      cursor: {
        mano: "url('/assets/img/cursor/cursor-mano.png'), pointer",
        flecha: "url('/assets/img/cursor/cursor-flecha.png'), pointer",
      },
      animation: {
        appearLettersStart: "appearLettersStart 1.5s ease-in forwards",
        letterP: "letterP 6.4s ease-in-out 1 forwards running",
        letterE: "letterE 5.6s ease-in-out 1 forwards running",
        letterR: "letterR 6.1s ease-in-out 1 forwards running",
        letterS: "letterS 5.3s ease-in-out 1 forwards running",
        letterO: "letterO 6s ease-in-out 1 forwards running",
        letterN: "letterN 6.2s ease-in-out 1 forwards running",
        letterA: "letterA 5.9s ease-in-out 1 forwards running",
      },
      keyframes: {
        appearLettersStart: {
          "0%": {
            opacity: "0.1",
          },
          "100%": {
            opacity: "1",
          },
        },
        letterP: {
          "0%": {
            transform: "translate(0) rotate(0)",
          },
          "40%, 60%": {
            transform: "translate(80%, 200%) rotate(360deg)",
          },
          "100%": {
            transform: "translate(10%, 90%) rotate(0deg)",
          },
        },
        letterE: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-60%, 170%) rotate(-180deg)",
          },
          "100%": {
            transform: "translate(50%, -60%) rotate(90deg)",
          },
        },
        letterR: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(20%, -90%) rotate(360deg)",
          },
          "100%": {
            transform: "translate(0%, 27%) rotate(90deg)",
          },
        },
        letterS: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(170%, -280%)  rotate(-90deg)",
          },
          "100%": {
            transform: "translate(-60%, 10%) rotate(90deg)",
          },
        },
        letterO: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-60%, -200%) rotate(720deg)",
          },
          "100%": {
            transform: "translate(-77%, 20%)  rotate(0deg)",
          },
        },
        letterN: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(20%, 180%)  rotate(360deg)",
          },
          "100%": {
            transform: "translate(-75%, 55%)  rotate(0deg)",
          },
        },
        letterA: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-180%, 120%) rotate(-360deg)",
          },
          "100%": {
            transform: "translate(60%, -63%) rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
