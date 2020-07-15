import { users as usersDb, follows as followsDb } from '../db.json'

export const getUserByUsername = async ({ username }) => {
  return usersDb.find(user => user.username === username)
}

export const getUserById = async ({ id }) => {
  return usersDb.find(user => user.id === id)
}

export const getMe = async () => usersDb.find(user => user.me)

export const getUsersToFollow = async ({ me, name }) => {
  const following = await getFollowingUsers({ user: me })
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
