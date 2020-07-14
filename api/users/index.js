import { users } from '../db.json'

export default (request, response) => {
  response.json({ users })
}
