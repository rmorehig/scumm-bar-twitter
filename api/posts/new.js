import { createId } from './handlers'
import { getUserById } from '../users/handlers'

export default async (request, response) => {
  const { userId, content } = request.body
  const user = await getUserById({ id: userId })
  const post = {
    id: createId(),
    content,
    userId,
    createdAt: new Date(),
    user
  }

  response.json({ post })
}
