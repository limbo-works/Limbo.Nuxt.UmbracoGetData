import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, createResolver, addServerHandler } from '@nuxt/kit'
export interface ModuleOptions {
  addPlugin: boolean
  addApiProxy: boolean
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule'
  },
  defaults: {
    addPlugin: true,
    addApiProxy: true
  },
  setup (options, nuxt) {
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    if (options.addPlugin) {
      const { resolve } = createResolver(import.meta.url)
      const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
      nuxt.options.build.transpile.push(runtimeDir)
      addPlugin(resolve(runtimeDir, 'plugin'))
    }
    if (options.addApiProxy) {
      addServerHandler({
        route: '/api/data',
        handler: resolve(runtimeDir, 'server/api/data')
      })
    }
  }
})
