import { users } from '../mocks/db.json'

export const findUserByUsername = async ({ username }) => {
  return users.find(user => user.username === username)
}

export const findUserById = async ({ id }) => {
  return users.find(user => user.id === id)
}
