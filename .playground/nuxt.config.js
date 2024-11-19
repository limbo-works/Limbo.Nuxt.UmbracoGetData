import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '..'

export default defineNuxtConfig({
 modules: [
   MyModule
 ],

 nuxtUmbraco: {
   addApiProxy: true,
   addPlugin: true,
   fetchOptions: {
    timeout: 5000,
    retry: 2
   },
 },

 runtimeConfig: {
      public: {
          apiDomain: 'https://10175ni-be.liveserver.nu/',
          appHost: '10175ni-fe.liveserver.nu',
      },
  },

 compatibilityDate: '2024-08-27',
})
