import { users } from '../db.json'

export default (_, response) => {
  const user = users.find(user => user.me)
  response.json({ user })
}
