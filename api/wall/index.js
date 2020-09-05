import { getMe, getFollowingUsers } from '../users/handlers'
import { getPostsFromUsers } from './handlers'

export default async (_, response) => {
  const me = await getMe()
  const following = await getFollowingUsers({ user: me })
  const users = [me, ...following]
  const posts = await getPostsFromUsers({ users })
  response.json({ userId: me.id, posts })
}
