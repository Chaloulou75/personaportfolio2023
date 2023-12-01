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
        letterD: "letterD 6.4s ease-in-out 1 forwards running",
        letterE: "letterE 5.1s ease-in-out 1 forwards running",
        letterN: "letterN 6.1s ease-in-out 1 forwards running",
        letterI: "letterI 5.7s ease-in-out 1 forwards running",
        letterM: "letterM 6s ease-in-out 1 forwards running",
        letterC: "letterC 6.3s ease-in-out 1 forwards running",
        letterO: "letterO 5.8s ease-in-out 1 forwards running",
        letterU: "letterU 5s ease-in-out 1 forwards running",
        letterS: "letterS 7s ease-in-out 1 forwards running",
        letterL: "letterL 6.8s ease-in-out 1 forwards running",
        letterT: "letterT 5.3s ease-in-out 1 forwards running",
        letterA: "letterA 6.5s ease-in-out 1 forwards running",
        mobileLetterD: "mobileLetterD 6.4s ease-in-out 1 forwards running",
        mobileLetterE: "mobileLetterE 5.6s ease-in-out 1 forwards running",
        mobileLetterN: "mobileLetterN 6.1s ease-in-out 1 forwards running",
        mobileLetterI: "mobileLetterI 5.3s ease-in-out 1 forwards running",
        mobileLetterM: "mobileLetterM 6s ease-in-out 1 forwards running",
        mobileLetterC: "mobileLetterC 6.2s ease-in-out 1 forwards running",
        mobileLetterO: "mobileLetterO 6.3s ease-in-out 1 forwards running",
        mobileLetterU: "mobileLetterU 5.5s ease-in-out 1 forwards running",
        mobileLetterS: "mobileLetterS 5.7s ease-in-out 1 forwards running",
        mobileLetterL: "mobileLetterL 6.1s ease-in-out 1 forwards running",
        mobileLetterT: "mobileLetterT 6.3s ease-in-out 1 forwards running",
        mobileLetterA: "mobileLetterA 6.5s ease-in-out 1 forwards running",
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
        letterD: {
          "0%": {
            transform: "translate(0) rotate(0)",
          },
          "40%, 60%": {
            transform: "translate(400%, 200%) rotate(360deg)",
          },
          "100%": {
            transform: "translate(150%, 115%) rotate(-90deg)",
          },
        },
        letterE: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-40%, 80%) rotate(-90deg)",
          },
          "100%": {
            transform: "translate(310%, -325%)  rotate(90deg)",
          },
        },
        letterN: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-420%, -70%) rotate(360deg)",
          },
          "100%": {
            transform: "translate(-100%, 400%) rotate(-810deg)",
          },
        },
        letterI: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(50%, -160%) rotate(-360deg)",
          },
          "100%": {
            transform: "translate(-20%, 50%) rotate(180deg)",
          },
        },
        letterM: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(380%, 190%) rotate(360deg)",
          },
          "100%": {
            transform: "translate(-200%, -25%) rotate(90deg)",
          },
        },
        letterC: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-80%, 300%) rotate(-360deg)",
          },
          "100%": {
            transform: "translate(50%, 70%) rotate(-90deg)",
          },
        },
        letterO: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(650%, -400%) rotate(720deg)",
          },
          "100%": {
            transform: "translate(1200%, -200%) rotate(-90deg)",
          },
        },
        letterU: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(500%, -120%) rotate(-360deg)",
          },
          "100%": {
            transform: "translate(-30%, 5%) rotate(360deg)",
          },
        },
        letterS: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-450%, -250%) rotate(360deg)",
          },
          "100%": {
            transform: "translate(80%, 30%) rotate(0deg)",
          },
        },
        letterL: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-160%, 240%) rotate(-360deg)",
          },
          "100%": {
            transform: "translate(20%, -30%) rotate(0deg)",
          },
        },
        letterT: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(600%, 80%) rotate(360deg)",
          },
          "100%": {
            transform: "translate(-30%, -50%) rotate(90deg)",
          },
        },
        letterA: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(250%, -600%) rotate(-360deg)",
          },
          "100%": {
            transform: "translate(0%, -1%) rotate(45deg)",
          },
        },
        mobileLetterD: {
          "0%": {
            transform: "translate(0) rotate(0)",
          },
          "40%, 60%": {
            transform: "translate(80%, 200%) rotate(270deg)",
          },
          "100%": {
            transform: "translate(10%, 90%) rotate(360deg)",
          },
        },
        mobileLetterE: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-60%, 170%)  rotate(-360deg)",
          },
          "100%": {
            transform: "translate(50%,-60%)  rotate(90deg)",
          },
        },
        mobileLetterN: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(80%, -90%)  rotate(270deg) ",
          },
          "100%": {
            transform: "translate(-20%, 270%) rotate(-720deg)",
          },
        },
        mobileLetterI: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(170%, -280%)  rotate(360deg)",
          },
          "100%": {
            transform: "translate(60%, 10%)  rotate(90deg)",
          },
        },
        mobileLetterM: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-60%, -200%)  rotate(360deg)",
          },
          "100%": {
            transform: "translate( -77%, 20%) rotate(-180deg)",
          },
        },
        mobileLetterC: {
          "0%": {},
          "40%, 60%": {
            transform: "translate( 20%, 180%) rotate(90deg) ",
          },
          "100%": {
            transform: "translate(-65%, 10%) rotate(-90deg)",
          },
        },
        mobileLetterO: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-180%, 120%) rotate(180deg)",
          },
          "100%": {
            transform: "translate(10%, -103%) rotate(180deg)",
          },
        },
        mobileLetterU: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(180%, -50%) rotate(-360deg)",
          },
          "100%": {
            transform: "translate(0%, -1%) rotate(-360deg)",
          },
        },
        mobileLetterS: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-650%, -115%) rotate(90deg)",
          },
          "100%": {
            transform: "translate(10%, -103%) rotate(-360deg)",
          },
        },
        mobileLetterL: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(20%, 120%) rotate(180deg)",
          },
          "100%": {
            transform: "translate(-65%, 10%) rotate(90deg)",
          },
        },
        mobileLetterT: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(-180%, 120%) rotate(180deg)",
          },
          "100%": {
            transform: "translate(10%, -103%) rotate(-360deg)",
          },
        },
        mobileLetterA: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(180%, 120%) rotate(180deg)",
          },
          "100%": {
            transform: "translate(-65%, 10%) rotate(-90deg)",
          },
        },
        mobileLetterN: {
          "0%": {},
          "40%, 60%": {
            transform: "translate(20%, 120%) rotate(180deg)",
          },
          "100%": {
            transform: "translate(-65%, 10%) rotate(-360deg)",
          },
        },
        mobileLetterT: {
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
