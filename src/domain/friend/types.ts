import { User } from 'domain/user/types'

export interface Friend extends User {
  followedAt: Date
}

export interface AddFriendParams {
  friendId: number
  friends: Friend[]
  username: string
}
