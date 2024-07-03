import type { CollectionConfig } from 'payload/types'
import * as B from './blocks'
import * as F from './fields'
import { Collections } from '.'
import { updateBlocksNames } from './Items.utils'

export const Items: CollectionConfig = {
  slug: Collections.Items,
  admin: {
    useAsTitle: F.name.name,
  },
  fields: [
    F.name,
    {
      name: 'blocks',
      type: 'blocks',
      blocks: [B.testo, B.data],
      hooks: {
        beforeChange: [updateBlocksNames],
      },
      required: true,
    },
  ],
}
