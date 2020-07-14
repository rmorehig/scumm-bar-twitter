import { users as usersDb } from '../db.json'

export default (_, response) => {
  const me = usersDb.find(user => user.me)
  const users = usersDb.filter(user => me.following.some(id => id === user.id))
  response.json({ users })
}
