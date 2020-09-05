import client from 'utils/client'
import { deepFreeze } from 'utils/helpers'
import { Post } from 'domain/post/types'

async function post(content: string, userId: number): Promise<Post> {
  const data = await client('/posts/new', {
    content,
    userId,
  })
  return deepFreeze(data)
}

export const postService = { post }
