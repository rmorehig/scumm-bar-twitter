import { mockFetch, mockUser, mockFriend } from 'mocks/utils'
import { updateFriendship } from 'application/updateFriendship'

describe('Update frienship', () => {
  it('adds a friend to friend list', async () => {
    window.fetch = mockFetch(mockFriend)
    const mockUsersToFollow = [mockUser]
    const result = await updateFriendship({
      user: mockUser,
      usersToFollow: mockUsersToFollow,
      friends: [],
    })
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(result.friends).toHaveLength(1)
    expect(result.friends[0]).toEqual(mockFriend)
    expect(result.usersToFollow).toHaveLength(1)
    expect(result.usersToFollow[0]).toEqual(mockFriend)
  })
  it('removes a friend from friend list', async () => {
    window.fetch = mockFetch(mockUser)
    const result = await updateFriendship({
      user: mockUser,
      usersToFollow: [mockFriend],
      friends: [mockFriend],
    })
    expect(fetch).toHaveBeenCalledTimes(1)
    expect(result.friends).toHaveLength(0)
    expect(result.usersToFollow).toHaveLength(1)
    expect(result.usersToFollow[0]).toEqual(mockUser)
  })
})
