import { users as usersDb, follows as followsDb } from '../db.json'

export const getUserByUsername = async ({ username }) => {
  return usersDb.find(user => user.username === username)
}

export const getUserById = async ({ id }) => {
  return usersDb.find(user => user.id === id)
}

export const getMe = async () => usersDb.find(user => user.me)

export const getUsersToFollow = async ({ user, name }) => {
  const following = await getFollowingUsers({ user })
  return usersDb.filter(user =>
    following.every(
      ({ id }) =>
        id !== user.id && !user.me && user.name.toLowerCase().includes(name)
    )
  )
}

export const getFollowingUsers = async ({ user }) => {
  return followsDb
    .filter(follow => follow.userId === user.id)
    .map(({ followingId }) => usersDb.find(({ id }) => id === followingId))
}

export const getFriendsByUsername = async ({ username }) => {
  const user = await getUserByUsername({ username })
  return followsDb
    .filter(follow => follow.userId === user.id)
    .map(({ followingId }) => usersDb.find(({ id }) => id === followingId))
}

export const followUser = ({ user }) => {
  const friend = {
    ...user,
    followedAt: new Date(),
  }
  return friend
}

export const unfollowUser = ({ user }) => {
  const unfollowed = user
  delete unfollowed.followedAt
  return unfollowed
}
