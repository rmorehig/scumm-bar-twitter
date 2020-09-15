import { User } from 'domain/user/types'
import { updateFriends } from '../behaviors'

const mockUser = {
  id: 123,
  username: 'johndoe',
  name: 'John Doe',
}

const mockFriend = {
  ...mockUser,
  followedAt: '2019-07-26T23:46:55.113Z',
}

describe('Update friends', () => {
  it('adds a friend to friend list if has been followed', () => {
    const friends = [] as User[]
    const usersToFollow = [mockUser]
    const result = updateFriends(mockFriend, friends, usersToFollow)
    expect(result.friends).toHaveLength(1)
    expect(result.friends[0]).toEqual(mockFriend)
    expect(result.usersToFollow).toHaveLength(1)
    expect(result.usersToFollow[0]).toEqual(mockFriend)
  })
  it('removes a friend from friend list if has been unfollowed', () => {
    const friends = [mockFriend]
    const usersToFollow = [mockFriend]
    const result = updateFriends(mockUser, friends, usersToFollow)
    expect(result.friends).toHaveLength(0)
    expect(result.usersToFollow).toHaveLength(1)
    expect(result.usersToFollow[0]).toEqual(mockUser)
  })
})
