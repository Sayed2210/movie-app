// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/scss/main.scss"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
});
