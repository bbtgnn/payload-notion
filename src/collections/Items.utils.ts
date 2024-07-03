import { Item } from '@/payload-types'
import { BasePayload, GeneratedTypes } from 'payload'
import { FieldHook, TypeWithID } from 'payload/types'

//

type Blocks = Item['blocks']
type Block = Blocks[number]
type DB = BasePayload<GeneratedTypes>

//

export const updateBlocksNames: FieldHook<TypeWithID, Blocks, Item> = async ({
  req,
  value = [],
}) => {
  const db = req.payload
  const blocksPromise = value.map((b) => renameBlock(b, db))
  return Promise.all(blocksPromise)
}

//

async function renameBlock(b: Block, db: DB): Promise<Block> {
  return {
    ...b,
    blockName: await getBlockLabel(b, db),
  }
}

async function getBlockLabel(b: Block, db: DB): Promise<string> {
  const propertyName = capitalize(await getBlockPropertyName(b, db))
  const valueString = stringifyBlockValue(b)
  return [propertyName, valueString].join(' – ')
}

async function getBlockPropertyName(b: Block, db: DB): Promise<string> {
  const propertyId = b.property.toString()
  const property = await db.findByID({ collection: 'properties', id: propertyId })
  return property.name
}

function stringifyBlockValue(b: Block): string {
  if (!b.value) return ''
  if (b.blockType == 'data') {
    return new Date(b.value).toString()
  } else if (b.blockType == 'testo') {
    return b.value
  } else {
    assertNever(b)
  }
}

function assertNever(value: never): never {
  throw new Error(`Unhandled value: ${value}`)
}

function capitalize(text: string): string {
  const first = text.at(0)?.toUpperCase()
  return first + text.slice(1)
}
