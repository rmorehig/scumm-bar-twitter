import client from './client'
import { newPost, formatPost, filterPostsFromWall } from '../utils/posts'

export const getPosts = async () => {
  const posts = await client('/posts?_expand=user&_sort=date&_order=desc')
  return filterPostsFromWall(posts)
}

export const createPost = async content => {
  const post = await client('/posts', {
    method: 'POST',
    body: JSON.stringify(newPost(content))
  })
  return formatPost(post)
}
