import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '..'
import DataProcessorTest from './assets/data-processors/test'

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
   dataProcessors: [
      [DataProcessorTest, { mode: 'once' }], // default mode: run once on the generic data set
      [DataProcessorTest, { mode: 'recursively' }], // run recursively on each property
   ],
 },

 runtimeConfig: {
      public: {
          apiDomain: 'https://10175ni-be.liveserver.nu/',
          appHost: '10175ni-fe.liveserver.nu',
      },
  },

  devServer: {
    port: 8000
  },
  experimental: { appManifest: false },

 compatibilityDate: '2024-08-27',
})
