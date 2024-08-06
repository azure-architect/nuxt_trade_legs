import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  css: [
    '@/assets/css/main.scss',
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css'
  ],
  plugins: [
    '@/plugins/vuetify.ts',
  ],
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'My awesome description' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap' }
      ]
    }
  }
})