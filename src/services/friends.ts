import client from 'utils/client'
import { deepFreeze } from 'utils/helpers'
import { Friend } from 'domain/friend/types'

async function get(username: string): Promise<Friend[]> {
  const data = await client(`/friends/${username}`)
  return deepFreeze(data)
}

async function post(userId: number, username: string): Promise<Friend> {
  const data = await client(`/friends/${username}`, { userId })
  return deepFreeze(data)
}

export const friendService = { get, post }
