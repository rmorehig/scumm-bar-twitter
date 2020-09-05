import { Post } from 'domain/post/types'
import { User } from 'domain/user/types'

export interface Wall {
  user: User
  posts: Post[]
}

export interface AddPostParams {
  content: string
  userId: number
  posts: Post[]
}
