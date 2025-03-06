import { fileURLToPath } from 'url';

import {
	defineNuxtModule,
	addPlugin,
	createResolver,
	addServerHandler
} from '@nuxt/kit';
export interface ModuleOptions {
  addPlugin: boolean;
  addApiProxy: boolean;
  fetchOptions: Object;
  dataProcessors: (Function | [Function, Object])[];
};

export default defineNuxtModule<ModuleOptions>({
	meta: {
		name: 'nuxt-umbraco',
		configKey: 'nuxtUmbraco',
		compatibility: {
			nuxt: '^3.0.0'
		}
	},

	defaults: {
		addPlugin: true,
		addApiProxy: true,
    fetchOptions: null,
    dataProcessors: [],
	},

	setup (options, nuxt) {
		const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
		const { resolve } = createResolver(import.meta.url);

    // Add fetchOptions to runtimeConfig
    if (options.fetchOptions) {
      nuxt.options.runtimeConfig.nuxtUmbraco = {
        fetchOptions: options.fetchOptions,
      }
    };

    // Add all options to appConfig
    nuxt.options.appConfig.nuxtUmbraco = { ...options };

		if (options.addPlugin) {
			nuxt.options.build.transpile.push(runtimeDir);
			addPlugin(resolve(runtimeDir, 'plugin'));
		}
		if (options.addApiProxy) {
			addServerHandler({
				route: '/api/data',
				handler: resolve(runtimeDir, 'server/api/data')
			});
		}
	}
});
