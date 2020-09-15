import { User } from 'domain/user/types'
export interface UpdateFriendshipParams {
  user: User
  friends: User[]
  usersToFollow: User[]
}

export interface UpdateFriendResult {
  friends: User[]
  usersToFollow: User[]
}
