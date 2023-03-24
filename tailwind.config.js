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
        "denim-bluecode": "url('/img/portadas/bluecode.jpg')",
        "denim-central_denim": "url('/img/portadas/centraldenim.jpg')",
        "denim-premiere_vision": "url('/img/portadas/denimpremierevision.jpg')",
        "denim-here": "url('/img/portadas/here.jpg')",
        "denim-impar": "url('/img/portadas/impar.jpg')",
        "denim-indigo_fest": "url('/img/portadas/indigofest.jpg')",
        "sustainability-sistemas_materiales":
          "url('/img/portadas/sistemasmateriales.jpg')",
        "sustainability-duo": "url('/img/portadas/duo.jpg')",
        "sustainability-premiere_vision_eco_responsible_forum":
          "url('/img/portadas/premierevisionecoresponsibleforum.jpg')",
        "sustainability-fibra": "url('/img/portadas/fibra.jpg')",
        "sustainability-natural_pigments":
          "url('/img/portadas/naturalpigments.jpg')",
        "sustainability-a.w.a.k.e": "url('/img/portadas/awake.jpg')",
        "mediajournalism-wear_global_magazine":
          "url('/img/portadas/wearglobalmagazine.jpg')",
        "mediajournalism-weardenim_n03": "url('/img/portadas/weardenim.jpg')",
        "talksconferences-denimcracia": "url('/img/portadas/denimcracia.jpg')",
        "talksconferences-virtualtalks":
          "url('/img/portadas/virtualtalks.jpg')",
        "trendreports-bluekey": "url('/img/portadas/bluekey.jpg')",
        "trendreports-bluekey2": "url('/img/portadas/bluekey2.jpg')",
        "trendreports-bluekey3": "url('/img/portadas/bluekey3.jpg')",
        "trendreports-bluekey4": "url('/img/portadas/bluekey4.jpg')",
        "trendreports-trendreview": "url('/img/portadas/trendreview.jpg')",
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
