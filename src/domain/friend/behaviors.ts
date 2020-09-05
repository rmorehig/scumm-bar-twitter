import { Friend } from './types'

export function addFriend(friend: Friend, friends: Friend[]): Friend[] {
  if (!friend || !friends) {
    throw new Error('the data is not valid')
  }
  return [friend, ...friends]
}
