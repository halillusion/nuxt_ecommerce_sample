// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    GUID: process.env.GUID,
    API_USER: process.env.API_USER,
    API_PASS: process.env.API_PASS
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
        { src: "libs/bootstrap/bootstrap.bundle.min.js" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "stylesheet", href: "/libs/fonts.css" },
        { rel: "stylesheet", href: "libs/bootstrap/bootstrap.min.css" },
        { rel: "stylesheet", href: "libs/tabler-icons/tabler-icons.min.css" },
      ],
    },
  },
  buildModules: [
    "@nuxtjs/pwa",
    "@pinia/nuxt"
  ],
  imports: {
    dirs: ['store'],
  },
  modules: [
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: "tr",
    },
  },
  build: {},
})
