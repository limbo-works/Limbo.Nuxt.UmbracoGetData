import { defineEventHandler, readBody, appendHeader, createError } from 'h3';
import { useRuntimeConfig } from '#nitro';

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();
  const { headers: reqHeaders = {}, method, url } = event.node.req || {};
	const target = new URL(
		url.replace(/^\/api\/data/, config.getdataEndpointUrl || '/umbraco/api/spa/getdata/'),
		config.public.apiDomain
	);


	const body =
		method !== 'GET' && method !== 'HEAD'
			? await readBody(event)
			: undefined;

      const fetchOptions = config.nuxtUmbraco?.fetchOptions || {};
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

		for (const header of ['set-cookie', 'cache-control']) {
			if (response.headers.has(header)) {
				appendHeader(event, header, response.headers.get(header));
			}
		}

		return response._data;
	} catch (error) {
		return createError({
			statusCode: error.response?.status || 500,
			statusMessage: error.message,
			data: error.data,
		});
	}

});
