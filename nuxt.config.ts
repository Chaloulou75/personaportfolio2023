// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Persona Portfolio | Julieta Mercerat",
      meta: [
        {
          name: "description",
          content: "Diseñadora de moda y textil",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "icons/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "icons/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "icons/favicon-16x16.png",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
  css: ["~/assets/css/tailwind.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@vite-pwa/nuxt", "@nuxtjs/google-fonts", "@vueuse/nuxt"],
  googleFonts: {
    download: true,
    preconnect: true,
    families: {
      Montserrat: true,
    },
    display: "swap",
  },
  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: "Persona Portfolio - Julieta Mercerat",
      short_name: "Persona",
      description:
        "Diseñadora de moda y textil, Julieta Mercerat, Persona Portfolio",
      theme_color: "#FFDF00",
      icons: [
        {
          src: "icons/android-chrome-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "icons/android-chrome-512x512.png",
          sizes: "512x512",
          type: "image/png",
        },
        {
          src: "icons/apple-touch-icon.png",
          sizes: "180x180",
          type: "image/png",
        },
        {
          src: "icons/favicon-32x32.png",
          type: "image/png",
          sizes: "32x32",
        },
        {
          src: "icons/favicon-16x16.png",
          type: "image/png",
          sizes: "16x16",
        },
      ],
    },
    workbox: {
      cleanupOutdatedCaches: true,
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"],
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },
});
