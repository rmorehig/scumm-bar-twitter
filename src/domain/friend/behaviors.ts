import { UpdateFriendResult } from './types'
import { User } from 'domain/user/types'
import { updateItemFromArray } from 'utils/helpers'

function addFriend(newFriend: User, friends: User[]): User[] {
  return [...friends, newFriend]
}

function removeFriend(newFriend: User, friends: User[]): User[] {
  return friends.filter(({ id }) => id !== newFriend.id)
}

function isFriend(user: User): boolean {
  return !!user.followedAt
}
export function updateFriends(
  user: User,
  friends: User[],
  usersToFollow: User[]
): UpdateFriendResult {
  if (!user || !friends || !usersToFollow) {
    throw new Error('the data is not valid')
  }
  const updatedFriends = isFriend(user)
    ? addFriend(user, friends)
    : removeFriend(user, friends)

  const updatedUsersToFollow = updateItemFromArray(usersToFollow, user)
  return {
    friends: updatedFriends,
    usersToFollow: updatedUsersToFollow,
  }
}
