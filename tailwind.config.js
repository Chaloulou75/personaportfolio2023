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
        "denim-bluecode": "url('/img/denim/bluecode/1.jpg')",
        "denim-central_denim": "url('/img/denim/central_denim/1.jpg')",
        "denim-premiere_vision":
          "url('/img/denim/denim_premiere_vision/1.jpg')",
        "denim-here": "url('/img/denim/here/1.jpg')",
        "denim-impar": "url('/img/denim/impar/1.jpg')",
        "denim-indigo_fest": "url('/img/denim/indigo_fest/1.jpg')",
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
        mobileLetterP: "mobileLetterP 6.4s ease-in-out 1 forwards running",
        mobileLetterE: "mobileLetterE 5.6s ease-in-out 1 forwards running",
        mobileLetterR: "mobileLetterR 6.1s ease-in-out 1 forwards running",
        mobileLetterS: "mobileLetterS 5.3s ease-in-out 1 forwards running",
        mobileLetterO: "mobileLetterO 6s ease-in-out 1 forwards running",
        mobileLetterN: "mobileLetterN 6.2s ease-in-out 1 forwards running",
        mobileLetterA: "mobileLetterA 5.9s ease-in-out 1 forwards running",
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
            transform: "translate(-400%, 200%) rotate(360deg)",
          },
          "100%": {
            transform: "translate(150%, 15%) rotate(0deg)",
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
            transform: "translate(-170%, 0%)  rotate(0deg)",
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
            transform: "translate(-650%, -115%) rotate(-360deg)",
          },
          "100%": {
            transform: "translate(0%, -1%) rotate(0deg)",
          },
        },
        mobileLetterP: {
          "0%": {
            transform: "translate(0) rotate(0)",
          },
          "40%, 60%": {
            transform: "translate(80%, 200%) rotate(270deg)",
          },
          "100%": {
            transform: "translate(10%, 90%) rotate(0deg)",
          },
        },
        mobileLetterE: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-60%, 170%)  rotate(0deg)",
          },
          "100%": {
            transform: "translate(50%,-60%)  rotate(90deg)",
          },
        },
        mobileLetterR: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(20%, -90%)  rotate(270deg) ",
          },
          "100%": {
            transform: "translate(0%, 27%) rotate(0deg)",
          },
        },
        mobileLetterS: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(170%, -280%)  rotate(360deg)",
          },
          "100%": {
            transform: "translate(60%, 10%)  rotate(90deg)",
          },
        },
        mobileLetterO: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-60%, -200%)  rotate(360deg)",
          },
          "100%": {
            transform: "translate( -77%, 20%) rotate(0deg)",
          },
        },
        mobileLetterN: {
          "0%": {},
          "40%, 60%": {
            transform: "translate( 20%, 180%) rotate(90deg) ",
          },
          "100%": {
            transform: "translate(-65%, 10%) rotate(0deg)",
          },
        },
        mobileLetterA: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-180%, 120%) rotate(180deg)",
          },
          "100%": {
            transform: "translate(10%, -103%) rotate(0deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
