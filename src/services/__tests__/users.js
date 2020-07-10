import {
  getFollowingUsers,
  getUsersToFollow,
  followUser,
  getUserDetails
} from '../users'
import {
  mockFetch,
  mockFollowing,
  mockUsersToFollow,
  mockFollowedUser,
  mockUsers
} from '../../mocks/utils'

test('getFollowingUsers should return the users I follow', async () => {
  window.fetch = mockFetch(mockFollowing)
  const following = await getFollowingUsers()
  expect(following).toEqual(mockFollowing)
  expect(fetch).toHaveBeenCalledTimes(1)
})

test('getUsersToFollow should return the users I dont follow', async () => {
  window.fetch = mockFetch(mockUsersToFollow)
  const usersToFollow = await getUsersToFollow('a')
  expect(usersToFollow).toEqual(mockUsersToFollow)
  expect(fetch).toHaveBeenCalledTimes(1)
})

test('followUser should return the updated user', async () => {
  window.fetch = mockFetch(mockFollowedUser)
  const user = await followUser({ id: 2, following: true })
  expect(user).toEqual(mockFollowedUser)
  expect(fetch).toHaveBeenCalledTimes(1)
})

test('getUserDetails should return the user info and his posts', async () => {
  window.fetch = mockFetch(mockUsers)
  const { user } = await getUserDetails('kyloren')
  expect(user).toEqual(mockUsers[0])
  expect(fetch).toHaveBeenCalledTimes(1)
})
