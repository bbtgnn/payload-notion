import {
  ArrayField,
  Block,
  PointField,
  RelationshipField,
  RichTextField,
  RowField,
  Tab,
  TextField,
  UIField,
} from 'payload/types'
import { Collections } from '../index'

import { Divider } from './components/divider'
import { Header } from './components/header'

import * as F from '../fields'

//

// export const divider: UIField = {
//   name: 'divider',
//   type: 'ui',
//   admin: {
//     components: {
//       Field: Divider,
//     },
//   },
// }

// export function header(text: string): UIField {
//   return {
//     name: 'header',
//     type: 'ui',
//     admin: {
//       components: {
//         Field: () => Header(text),
//       },
//     },
//   }
// }

// //

// export const nome: TextField = {
//   name: 'nome',
//   type: 'text',
//   required: true,
//   localized: true,
// }

// export const link: TextField = {
//   name: 'link',
//   type: 'text',
// }

export const testo: Block = {
  slug: 'testo',
  fields: [
    F.property,
    {
      name: 'value',
      label: 'Testo',
      type: 'text',
      localized: true,
    },
  ],
}

export const data: Block = {
  slug: 'data',
  labels: { plural: 'Date', singular: 'Data' },
  fields: [
    F.property,
    {
      name: 'value',
      label: 'Data',
      type: 'date',
    },
  ],
}

// export const posizione: PointField = {
//   name: 'posizione',
//   type: 'point',
// }

// export const linkConNome: RowField = {
//   type: 'row',
//   fields: [nome, link],
// }

// export const contatti: ArrayField = {
//   name: 'contatti',
//   type: 'array',
//   fields: [
//     linkConNome,
//     {
//       type: 'row',
//       fields: [
//         {
//           name: 'email',
//           type: 'email',
//         },
//         {
//           name: 'telefono',
//           type: 'text',
//         },
//       ],
//     },
//   ],
// }

// export const media: RelationshipField = {
//   name: 'media',
//   type: 'relationship',
//   relationTo: Collections.Media,
// }

// export const servizi_con_link: ArrayField = {
//   name: 'servizi',
//   type: 'array',
//   fields: [linkConNome, testo],
// }

// export const servizi: ArrayField = {
//   name: 'servizi',
//   type: 'array',
//   fields: [nome, testo],
// }

// export const contenutoFields = [
//   header('Immagini e media'),
//   media,
//   divider,
//   header('Contenuti testuali'),
//   testo,
// ]

// export const tabContenuto: Tab = {
//   label: 'Contenuto',
//   fields: contenutoFields,
// }
