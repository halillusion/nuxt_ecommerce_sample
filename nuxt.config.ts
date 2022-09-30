// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  publicRuntimeConfig: {
    API_KEY: process.env.API_URL,
    GUID: process.env.GUID,
  },
  css: ["@/assets/styles/global.scss"],
  app: {
    head: {
      title: "NuxtCommerce",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "A awesome commerce platform with Nuxt + Vue" },
        { name: "format-detection", content: "telephone=no" },
      ],
      script: [
        { src: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" },
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" },
      ],
    },
  },
  buildModules: ["@nuxtjs/pwa"],
  axios: {},
  pwa: {
    manifest: {
      lang: "tr",
    },
  },
  build: {},
})
