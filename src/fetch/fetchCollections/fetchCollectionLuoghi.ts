import { getPayloadHMR } from '@payloadcms/next/utilities'
import config from '@payload-config'
import { Payload } from 'payload'

//

type FindOptions = Parameters<Payload['find']>[0]

export const find = async (options: FindOptions) => {
  const payload: Payload = await getPayloadHMR({ config })
  const result = await payload.find(options)
  return result
}
