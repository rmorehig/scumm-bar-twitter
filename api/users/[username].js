import { users as usersDb, posts as postsDb } from '../db.json'

export default (request, response) => {
  const { username } = request.query
  const user = usersDb.find(user => user.username === username)
  const posts = postsDb.filter(post => post.userId === user.id)
  response.json({ user, posts })
}
