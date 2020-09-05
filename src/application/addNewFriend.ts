import { AddFriendParams, Friend } from 'domain/friend/types'
import { addFriend } from 'domain/friend/behaviors'
import { friendService } from 'services/friends'

export async function addNewFriend(params: AddFriendParams): Promise<Friend[]> {
  const { friendId, username, friends } = params
  if (!friendId || !friends) {
    throw new Error('the data is not valid')
  }
  const friend = await friendService.post(friendId, username)
  const updatedFriends = addFriend(friend, friends)
  return updatedFriends
}
