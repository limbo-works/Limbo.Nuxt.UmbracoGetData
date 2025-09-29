import { defineNuxtPlugin, useRuntimeConfig, useAppConfig, useRequestHeaders, setResponseStatus } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
	const UMBRACO_GET_DATA_ENDPOINT = 'api/data';
	//   const REDIRECT_STATUS_CODES = [301, 302, 307, 308]
	//   const BAD_REQUEST_STATUS_CODE = 400
	//   const NOT_FOUND_STATUS_CODE = 404
	//   const I_AM_A_TEAPOT_STATUS_CODE = 418
	//   const INTERNAL_SERVER_ERROR_STATUS_CODE = 500

	const fetchData = async (config = {}) => {
		const environment = useRuntimeConfig();
		const appConfig = useAppConfig();
		const isDebug = appConfig.nuxtUmbraco?.debug;

		/**
		* host handling start
		*
		*/
		const headers = useRequestHeaders();
		let appHost = '';

		if (import.meta.server) {
			appHost = headers.host;
		}

		if (import.meta.client) {
			const { hostname } = new URL(window.location.href);
			appHost = hostname;
		}

		appHost = environment.public.appHost || appHost;

		/**
		* host handling end
		*/

		const urlSearchParams = new URLSearchParams({
			appHost,
			navContext: import.meta.server,
			navLevels: 2,
			url: decodeURI(config.route),
			...config.params
		});

		if (isDebug) {
			console.log('[Umbraco Get Data] fetchData request:', {
				route: config.route,
				params: config.params,
				appHost,
				navContext: import.meta.server,
				fetchOptions: config?.fetchOptions
			});
		}

    // Test route handling
    const testRouteKeys = Object.keys(appConfig.nuxtUmbraco?.testRoutes || {});
    if (testRouteKeys.length) {
      // Sort keys by length descending to prioritize longer (more specific) matches
      testRouteKeys.sort((a, b) => b.length - a.length);

      for (const key of testRouteKeys) {
        // Check if the keys are the exact same as the route
        if (key === config.route) {
          if (isDebug) {
            console.log(`[Umbraco Get Data] fetchData using test route for key: ${key}`);
          }
          return appConfig.nuxtUmbraco.testRoutes[key];
        }

        // If the test route has no query params, check if the config.route is at least the same path
        if (!key.includes('?') && config.route.split('?')[0] === key) {
          if (isDebug) {
            console.log(`[Umbraco Get Data] fetchData using test route for key: ${key}`);
          }
          return appConfig.nuxtUmbraco.testRoutes[key];
        }
      }
    }

    // Actual data fetching
		const data = await $fetch(
			`/${UMBRACO_GET_DATA_ENDPOINT}?${urlSearchParams.toString()}`,
      {
        ...config?.fetchOptions || {},
        headers: {
          cookie: headers.cookie,
          ...config?.fetchOptions?.headers || {},
        },
      },
		);

		if (isDebug) {
			console.log('[Umbraco Get Data] fetchData response:', data);
		}

		return data;
	}

	const processData = (data = {}) => {
		const appConfig = useAppConfig();
		const isDebug = appConfig.nuxtUmbraco?.debug;

		if (isDebug) {
			console.log('[Umbraco Get Data] processData input:', data);
		}
		if (data.meta?.code) {
			// Overwrite the response code (does nothing client side)
			setResponseStatus(data.meta.code);

			// Special handlings
			switch (data.meta.code) {
				case 301:
					if (nuxtApp.ssrContext) {
						const { res } = nuxtApp.ssrContext;

						if (data.meta.redirect) {
							res.writeHead(301, {
								Location: data.meta.redirect
							});
							res.end();
						}
					} else if (data.meta.redirect) {
						window.location.replace(data.meta.redirect);
					}
					break;

				default:
					break;
			}
		}

		if (isDebug) {
			console.log('[Umbraco Get Data] processData output:', data);
		}

		return data;
	}

	// Make an $umbracoClient object available with our methods
	const umbracoClient = {
		fetchData,
		processData
	};

	return {
		provide: {
			umbracoClient
		}
	};
});
