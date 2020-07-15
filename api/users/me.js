import { getMe } from './handlers'

export default async (_, response) => {
  const user = await getMe()
  response.json({ user })
}
