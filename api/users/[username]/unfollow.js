import { getUserByUsername, unfollowUser } from '../handlers'

export default async (request, response) => {
  const { username } = request.query
  const user = await getUserByUsername({ username })
  unfollowUser({ user })
  response.json({ user })
}
