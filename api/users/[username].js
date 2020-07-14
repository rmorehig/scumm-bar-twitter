import { posts as postsDb } from '../db.json'
import { findUserByUsername } from '../../src/utils/users'

export default async (request, response) => {
  const { username } = request.query
  const user = await findUserByUsername({ username })
  const posts = postsDb
    .filter(post => post.userId === user.id)
    .map(post => ({ ...post, user }))
  response.json({ user, posts })
}
