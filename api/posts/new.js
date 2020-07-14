import { posts as postsDb, users as usersDb } from '../db.json'

export default (request, response) => {
  const { userId, content } = request.body
  const user = usersDb.find(user => user.id === userId)
  const post = {
    id: postsDb.length,
    content,
    userId,
    createdAt: new Date(),
    user
  }

  response.json({ post })
}
