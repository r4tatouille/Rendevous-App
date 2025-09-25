// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@pinia/nuxt"],
  css: ["~/assets/main.css"],
  app: {
    head: {
      title: "Rendevous App",
      meta: [
        {
          name: "Description",
          content: "Nuxt.JS",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },
});
