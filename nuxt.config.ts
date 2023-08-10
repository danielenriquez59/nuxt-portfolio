// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/image',
  ],
  head: {
    "meta": [
      {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      },
      {
        "charset": "utf-8"
      }
    ],
    "link": [
    ],
    "style": [],
    "script": [],
    "noscript": []
  },
  colorMode: {
    classSuffix: ''
  },
  devtools: { enabled: true },
  css:[
    '~/assets/css/main.css',
    "primevue/resources/themes/bootstrap4-light-blue/theme.css",
    "primevue/resources/primevue.css",
    'primeicons/primeicons.css'
  ],
  build: {
		transpile: ["primevue"],
	},
})
