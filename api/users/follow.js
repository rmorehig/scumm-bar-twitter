import { users as usersDb } from '../db.json'

export default (_, response) => {
  const me = usersDb.find(user => user.me)
  const users = usersDb.filter(user =>
    me.following.every(id => id !== user.id && !user.me)
  )
  response.json({ users })
}
