// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore


// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  device: {
        refreshOnResize: true
    },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},

    },
      css: ["~/assets/css/main.css"],
  },


  modules:[
    ["@nuxt/image"],
    ['@vueuse/nuxt'],
      ['@nuxtjs/tailwindcss'],
    ['nuxt-swiper'],
    ['@nuxtjs/device'],
    ['@nuxtjs/google-fonts', {
   families: {
     Roboto: true,
     Inter: [400, 700],
     'Josefin+Sans': true,
     Lato: [100, 300],
     Raleway: true,
     Montserrat: true
   }
 }],
    "@nuxtjs/device",
    "@nuxtjs/tailwindcss"
  ],
    router: {
        middleware: ['mobile']
    },


})