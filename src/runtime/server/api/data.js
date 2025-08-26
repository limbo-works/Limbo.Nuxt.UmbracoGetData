import { defineEventHandler, readBody, appendHeader, createError } from 'h3';
import { useRuntimeConfig } from '#nitro';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const appConfig = config.app || {};
  const isDebug = appConfig.nuxtUmbraco?.debug;
  const { headers: reqHeaders = {}, method, url } = event.node.req || {};
	const target = new URL(
		url.replace(/^\/api\/data/, config.getdataEndpointUrl || '/umbraco/api/spa/getdata/'),
		config.public.apiDomain
	);

	if (isDebug) {
		console.log('[Umbraco Get Data] Server API request:', {
			method,
			originalUrl: url,
			targetUrl: target.toString(),
			headers: {
				'content-type': reqHeaders['content-type'],
				cookie: reqHeaders.cookie ? '[REDACTED]' : undefined,
				authorization: reqHeaders.authorization ? '[REDACTED]' : undefined
			}
		});
	}


	const body =
		method !== 'GET' && method !== 'HEAD'
			? await readBody(event)
			: undefined;

      const fetchOptions = appConfig.nuxtUmbraco?.fetchOptions || {};
	try {
		const response = await $fetch.raw(target.toString(), {
			method,
			body,
      ...fetchOptions,

      headers: {
				'content-type': reqHeaders['content-type'] || 'application/json',
        cookie: reqHeaders.cookie,
        'Authorization': reqHeaders.authorization || '',
        'X-Api-Key': config.apiKey,
        ...(fetchOptions?.headers || {}),
			},
		});

		if (isDebug) {
			console.log('[Umbraco Get Data] Server API response:', {
				status: response.status,
				headers: Object.fromEntries(response.headers.entries()),
				dataSize: response._data ? JSON.stringify(response._data).length : 0
			});
		}

		for (const header of ['set-cookie', 'cache-control']) {
			if (response.headers.has(header)) {
				appendHeader(event, header, response.headers.get(header));
			}
		}

		return response._data;
	} catch (error) {
		if (isDebug) {
			console.error('[Umbraco Get Data] Server API error:', {
				status: error.response?.status,
				message: error.message,
				data: error.data
			});
		}
		return createError({
			statusCode: error.response?.status || 500,
			statusMessage: error.message,
			data: error.data,
		});
	}

});
