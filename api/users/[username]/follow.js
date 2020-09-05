import { getUserByUsername, followUser } from '../handlers'

export default async (request, response) => {
  const { username } = request.query
  const user = await getUserByUsername({ username })
  const friend = followUser({ user })
  response.json(friend)
}
