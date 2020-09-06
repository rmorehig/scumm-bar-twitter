import { createPost } from './handlers'
import { getMe } from '../users/handlers'

export default async (request, response) => {
  const { content } = request.body
  const user = await getMe()
  const post = await createPost({ content, user })

  response.json(post)
}
