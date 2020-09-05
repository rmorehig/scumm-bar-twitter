import { NowRequest, NowResponse } from '@vercel/node'
import { getFriendsByUsername, updateFriend } from './handlers'
import { getMe } from '../users/handlers'

export default async (request: NowRequest, response: NowResponse) => {
  const me = await getMe()
  if (request.method === 'GET') {
    const friends = await getFriendsByUsername({ username: me.username })
    return response.json(friends)
  }
  if (request.method === 'POST') {
    const { user } = request.body
    const friend = await updateFriend({ user })
    return response.json(friend)
  }
  return response.json({})
}
