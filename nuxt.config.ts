// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  devtools: { enabled: true },
  css:[
    '~/assets/css/main.css',
    "primevue/resources/themes/lara-light-blue/theme.css",
    "primevue/resources/primevue.css",
    'primeicons/primeicons.css'
  ],
  build: {
		transpile: ["primevue"],
	},
})
