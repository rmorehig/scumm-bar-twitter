import { NowRequest, NowResponse } from '@vercel/node'
import { getUsersToFollow } from './handlers'

export default async (request: NowRequest, response: NowResponse) => {
  const { query } = request.body
  const users = await getUsersToFollow({ query })
  return response.json(users)
}
