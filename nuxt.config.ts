// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    download: true,
    preload: true,
    families: {
      Roboto: {
        wght: [300, 400, 500],
        ital: [300, 400, 500]
      },
      'Playfair Display': {
        wght: [700]
      },
      Raleway: {
        wght: [300, 400, 500],

      },
      'Roboto Condensed': {
        wght: [300, 400, 700],
        ital: [300, 400, 700],
      },
    },
  },
  tailwindcss: {
    exposeConfig: true,
  },
  runtimeConfig: {
    // Will be available only on server-side
    apiBaseUrl: '',
    apiToken: '',
  }
})
