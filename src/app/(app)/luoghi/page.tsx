import React from 'react'
import { fetchCollectionLuoghi } from '../../../fetch/fetchCollections/fetchCollectionLuoghi'
import { fetchGlobalLuoghi } from '@/fetch/fetchGlobals/fetchGlobalLuoghi'

const LuoghiPage = async () => {
  const collectionLuoghi = await fetchCollectionLuoghi()
  const globalLuoghi = await fetchGlobalLuoghi()

  return (
    <div>
      <h1>Luoghi</h1>
      <pre>{JSON.stringify(globalLuoghi, null, 2)}</pre>
      <br></br>
      <pre>{JSON.stringify(collectionLuoghi, null, 2)}</pre>
    </div>
  )
}

export default LuoghiPage
