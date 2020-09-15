import { User } from 'domain/user/types'
import client from 'utils/client'
import { deepFreeze } from 'utils/helpers'

async function get(): Promise<User[]> {
  const data = await client(`/friends`)
  return deepFreeze(data)
}

async function put(user: User): Promise<User> {
  const data = await client(`/friends`, { user })
  return deepFreeze(data)
}

async function search(query: string): Promise<User[]> {
  const data = await client(`/friends/search`, { query })
  return deepFreeze(data)
}

export const friendService = { get, put, search }
