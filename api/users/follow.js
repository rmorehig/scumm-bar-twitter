import { users as usersDb } from '../db.json'

export default (request, response) => {
  const { name } = request.query
  const me = usersDb.find(user => user.me)
  const users = usersDb.filter(user =>
    me.following.every(
      id => id !== user.id && !user.me && user.name.toLowerCase().includes(name)
    )
  )
  response.json({ users })
}
