import { UpdateFriendshipParams, UpdateFriendResult } from 'domain/friend/types'
import { updateFriends } from 'domain/friend/behaviors'
import { friendService } from 'services/friends'

export async function updateFriendship({
  user,
  friends,
  usersToFollow,
}: UpdateFriendshipParams): Promise<UpdateFriendResult> {
  if (!user || !friends) {
    throw new Error('the data is not valid')
  }
  const friend = await friendService.put(user)
  const result = updateFriends(friend, friends, usersToFollow)
  return result
}
