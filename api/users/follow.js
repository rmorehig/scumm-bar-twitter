import { getMe, getUsersToFollow } from './handlers'

export default async (request, response) => {
  const { name } = request.query
  const me = await getMe()
  const users = await getUsersToFollow({ me, name })
  response.json({ users })
}
