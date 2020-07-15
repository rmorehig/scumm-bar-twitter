import { getUserByUsername, followUser } from '../handlers'

export default async (request, response) => {
  const { username } = request.query
  const user = await getUserByUsername({ username })
  followUser({ user })
  response.json({ user })
}
