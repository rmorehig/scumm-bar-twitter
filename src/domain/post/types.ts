import { User } from 'domain/user/types'

export interface Post {
  id: number
  content: string
  createdAt: Date
  user: User
}
