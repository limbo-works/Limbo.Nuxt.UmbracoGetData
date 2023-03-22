import { sendProxy, defineEventHandler } from 'h3';
import { useRuntimeConfig } from '#nitro';
const config = useRuntimeConfig();

export default defineEventHandler(async (event) => {
	const target = new URL(
		event.node.req.url.replace(/^\/api\/data/, config.getdataEndpointUrl || '/umbraco/api/spa/getdata/'), 
		config.public.apiDomain
	);

	const headers = { 'X-Api-Key': config.apiKey };
	const data = await sendProxy(event, target.toString(), { headers, sendStream: false });
	return data;
});
	