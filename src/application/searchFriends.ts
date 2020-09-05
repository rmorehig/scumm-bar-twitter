import { friendService } from 'services/friends'
import { Friend } from 'domain/friend/types'

export async function searchFriends(query: string): Promise<Friend[]> {
  const friends = await friendService.search(query)
  return friends
}
