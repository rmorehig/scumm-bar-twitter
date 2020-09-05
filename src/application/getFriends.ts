import { friendService } from 'services/friends'
import { Friend } from 'domain/friend/types'

export async function getFriends(): Promise<Friend[]> {
  const friends = await friendService.get('rmorehig')
  return friends
}
