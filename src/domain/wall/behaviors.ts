import { Post } from 'domain/post/types'

export function addPost(post: Post, posts: Post[]): Post[] {
  if (!post || !posts) {
    throw new Error('the data is not valid')
  }
  return [post, ...posts]
}
