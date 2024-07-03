import type { CollectionConfig } from 'payload/types'
import { Collections } from '.'
import * as F from './fields'

export const Properties: CollectionConfig = {
  slug: Collections.Properties,
  admin: {
    useAsTitle: F.name.name,
  },
  fields: [{ ...F.name, required: true }],
}
