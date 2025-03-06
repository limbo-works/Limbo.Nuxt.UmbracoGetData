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
    const { nuxtUmbraco: appConfig = {} } = useAppConfig();

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

		let data = await $fetch(
			`/${UMBRACO_GET_DATA_ENDPOINT}?${urlSearchParams.toString()}`,
      {
        ...config?.fetchOptions || {},
        headers: {
          cookie: headers.cookie,
          ...config?.fetchOptions?.headers || {},
        },
      },
		);

    if (appConfig.dataProcessors?.length) {
      appConfig.dataProcessors.forEach((item) => {
        if (Array.isArray(item)) {
          const [processor, options] = item;
          data = runDataProcessor(data, processor, options, {});
        } else if (typeof item === 'function') {
          data = runDataProcessor(data, item, {}, {});
        }
      });
    }

		return data;
	}

	const processData = (data = {}) => {
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


function runDataProcessor(data, processor, options, meta) {
  if (typeof processor !== 'function') {
    return data;
  }

  options = Object.assign({
    mode: 'once',
  }, options);

  const processedData = processor(data, options, meta);
  if (options.mode === 'recursively' && typeof processedData === 'object') {
    for (const key in processedData) {
      processedData[key] = runDataProcessor(processedData[key], processor, options, meta);
    }
  }

  return processor(data, options, meta);
}
