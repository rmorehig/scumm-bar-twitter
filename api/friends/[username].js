import { getFriendsByUsername } from './handlers'

export default async (request, response) => {
  const { username } = request.query
  const friends = await getFriendsByUsername({ username })
  response.json(friends)
}
