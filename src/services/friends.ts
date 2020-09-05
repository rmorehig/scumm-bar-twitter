import client from 'utils/client'
import { deepFreeze } from 'utils/helpers'
import { Friend } from 'domain/friend/types'

async function get(): Promise<Friend[]> {
  const data = await client(`/friends`)
  return deepFreeze(data)
}

async function put(user: Friend): Promise<Friend> {
  const data = await client(`/friends`, { user })
  return deepFreeze(data)
}

async function search(query: string): Promise<Friend[]> {
  const data = await client(`/friends/search`, { query })
  return deepFreeze(data)
}

export const friendService = { get, put, search }
