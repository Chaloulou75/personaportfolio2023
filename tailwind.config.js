/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["Montserrat"],
      },
      fontSize: {
        "11xl": "11rem",
        "12xl": "12rem",
        "16xl": "16rem",
        "17xl": "17rem",
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
        yellowjuli: "#FFDF00", //#fed718
        background: {
          primary: "var(--bg-background-primary)",
          secondary: "var(--bg-background-secondary)",
          ternary: "var(--bg-background-ternary)",
        },
        copy: {
          primary: "var(--text-copy-primary)",
          secondary: "var(--text-copy-secondary)",
          ternary: "var(--text-copy-ternary)",
        },
      },
    },
  },
  plugins: [],
};
