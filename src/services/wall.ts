import client from 'utils/client'
import { deepFreeze } from 'utils/helpers'
import { Wall } from 'domain/wall/types'

async function get(): Promise<Wall> {
  const data = await client('/wall')
  return deepFreeze(data)
}

export const wallService = { get }
