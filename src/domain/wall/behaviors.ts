import { Wall } from './types'
import { Post } from 'domain/post/types'

export function addPost(post: Post, wall: Wall): Wall {
  if (!post || !wall) {
    throw new Error('the data is not valid')
  }
  return {
    ...wall,
    posts: [post, ...wall.posts],
  }
}
