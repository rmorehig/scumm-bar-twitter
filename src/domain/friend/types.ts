import { User } from 'domain/user/types'

export interface Friend extends User {
  followedAt: Date
}

export interface UpdateFriendshipParams {
  user: Friend
  friends: Friend[]
  usersToFollow: (Friend | User)[]
}

export interface UpdateFriendResult {
  friends: Friend[]
  usersToFollow: (Friend | User)[]
}
