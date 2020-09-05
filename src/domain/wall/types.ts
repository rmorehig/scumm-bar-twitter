import { Post } from 'domain/post/types'

export interface Wall {
  userId: number
  posts: Post[]
}

export interface AddPostParams {
  content: string
  userId: number
  posts: Post[]
}
