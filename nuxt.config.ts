import { resolve} from 'path';
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    // path of current project root folder  
    '@': resolve(__dirname, '/'),
  }
})
