import { Friend, UpdateFriendResult } from './types'
import { User } from 'domain/user/types'
import { updateItemFromArray } from 'utils/helpers'
export function updateFriends(
  user: Friend,
  friends: Friend[],
  usersToFollow: (Friend | User)[]
): UpdateFriendResult {
  if (!user || !friends) {
    throw new Error('the data is not valid')
  }
  let updatedFriends = friends
  let updatedUsersToFollow = usersToFollow
  if (user.followedAt) {
    updatedFriends = [...updatedFriends, user]
  } else {
    updatedFriends = updatedFriends.filter(({ id }) => id !== user.id)
  }
  updatedUsersToFollow = updateItemFromArray(updatedUsersToFollow, user)
  return {
    friends: updatedFriends,
    usersToFollow: updatedUsersToFollow,
  }
}
