import { User } from 'domain/user/types'
import { friendService } from 'services/friends'

export async function searchFriends(query: string): Promise<User[]> {
  const friends = await friendService.search(query)
  return friends
}
