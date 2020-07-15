import { getUserByUsername } from './handlers'
import { getPostsByUser } from '../posts/handlers'

export default async (request, response) => {
  const { username } = request.query
  const user = await getUserByUsername({ username })
  const posts = await getPostsByUser({ user })
  response.json({ user, posts })
}
