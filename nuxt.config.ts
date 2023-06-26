import { resolve} from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    // path of current project root folder  
    '@': resolve(__dirname, '/'),
  }, 
  css: [
    '~/assets/main.css',
    ],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
    
    runtimeConfig: {
      // Will be available in both server and client
      apiBaseURL: process.env.API_BASE_URL,
      apiToken: process.env.API_TOKEN,
    },
    

})
