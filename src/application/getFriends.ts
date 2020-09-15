import { User } from 'domain/user/types'
import { friendService } from 'services/friends'

export async function getFriends(): Promise<User[]> {
  const friends = await friendService.get()
  return friends
}
