import client from './client'
import { newPost, formatPost } from '../utils/posts'

export const getWall = async () => {
  const posts = await client('/posts/wall')
  return posts
}

export const createPost = async content => {
  const post = await client('/posts', {
    method: 'POST',
    body: JSON.stringify(newPost(content))
  })
  return formatPost(post)
}
