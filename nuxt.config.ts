import { resolve } from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    'nuxt-svgo',
  ],
  googleFonts: {
    download: true,

    families: {
      Roboto: {
        wght: [300, 400, 500],
        ital: [300, 400, 500],
      },
      'Playfair Display': {
        wght: [700],
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
  },
});
