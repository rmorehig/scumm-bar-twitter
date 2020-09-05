import { createPost } from './handlers'
import { getUserById } from '../users/handlers'

export default async (request, response) => {
  const { userId, content } = request.body
  const user = await getUserById({ id: userId })
  const post = await createPost({ content, user })

  response.json(post)
}
