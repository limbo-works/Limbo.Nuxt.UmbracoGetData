import { sendProxy } from 'h3'

const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const target = new URL(
    event.node.req.url.replace(/^\/api\/data/, '/umbraco/api/spa/getdata/'),
    config.public.apiDomain
  )
  const headers = {
    'X-Api-Key': config.apiKey
  }
  const data = await sendProxy(event, target.toString(), {
    headers,
    sendStream: false
  })
  return data
})
