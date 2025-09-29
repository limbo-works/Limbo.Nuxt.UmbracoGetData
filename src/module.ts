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
  debug: boolean;
  routeData: Record<string, any>;
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
    debug: false,
    routeData: {},
	},

	setup (options, nuxt) {
		const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));
		const { resolve } = createResolver(import.meta.url);
    if (options.fetchOptions || options.debug || options.routeData) {
      nuxt.options.appConfig.nuxtUmbraco = {
        fetchOptions: options.fetchOptions,
        debug: options.debug,
        routeData: options.routeData,
      }
    };


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
