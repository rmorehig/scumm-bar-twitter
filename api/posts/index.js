import { posts } from '../db.json'

export default (_, response) => {
  response.json({ posts })
}
