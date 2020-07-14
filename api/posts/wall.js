import { users as usersDb, posts as postsDb } from '../db.json'

export default (_, response) => {
  const me = usersDb.find(user => user.me)
  const following = usersDb.filter(user =>
    me.following.some(id => id === user.id)
  )
  const users = [me, ...following]
  let posts = postsDb.filter(post => users.some(({ id }) => id === post.userId))
  posts = posts.map(post => {
    const user = users.find(user => user.id === post.userId)
    return {
      ...post,
      user
    }
  })
  response.json({ posts })
}
