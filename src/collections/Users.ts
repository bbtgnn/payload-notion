import type { CollectionConfig } from 'payload/types'
import { Collections } from '.'

export const Users: CollectionConfig = {
  slug: Collections.Users,
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
