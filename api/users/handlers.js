import { users as usersDb } from '../db.json'

export const getUserByUsername = async ({ username }) => {
  return usersDb.find(user => user.username === username)
}

export const getUserById = async ({ id }) => {
  return usersDb.find(user => user.id === id)
}

export const getMe = async () => usersDb.find(user => user.me)

export const getUsersToFollow = async ({ me, name }) => {
  return usersDb.filter(user =>
    me.following.every(
      id => id !== user.id && !user.me && user.name.toLowerCase().includes(name)
    )
  )
}

export const getFollowingUsers = async ({ me }) => {
  return usersDb.filter(user => me.following.some(id => id === user.id))
}
