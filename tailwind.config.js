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
          "0%": {},
          "40%, 60%": {
            transform: "translate(-220%, 200%) rotate(360deg)",
          },
          "100%": {
            transform: "translate(350%, 15%) rotate(0deg)",
          },
        },
        letterE: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-40%, 80%) rotate(-90deg)",
          },
          "100%": {
            transform: "translate(210%, -65%)  rotate(90deg)",
          },
        },
        letterR: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(300%, -60%) rotate(360deg)",
          },
          "100%": {
            transform: "translate(40%, 28%) rotate(0deg)",
          },
        },
        letterS: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(300%, -30%)  rotate(-90deg)",
          },
          "100%": {
            transform: "translate(60%, -40%) rotate(90deg)",
          },
        },
        letterO: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(170%, -125%) rotate(720deg)",
          },
          "100%": {
            transform: "translate(-140%, 0%)  rotate(0deg)",
          },
        },
        letterN: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-180%, -50%)  rotate(360deg)",
          },
          "100%": {
            transform: "translate(-230%, 86%)  rotate(0deg)",
          },
        },
        letterA: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-350%, 50%) rotate(-360deg)",
          },
          "100%": {
            transform: "translate(80%, -1%) rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
