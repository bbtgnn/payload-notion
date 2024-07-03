import { RelationshipField, TextField } from 'payload/types'
import { Collections } from '..'

export const name: TextField = {
  name: 'name',
  type: 'text',
}

export const property: RelationshipField = {
  name: 'property',
  type: 'relationship',
  relationTo: Collections.Properties,
  hasMany: false,
  admin: {
    allowCreate: true,
  },
  required: true,
}
