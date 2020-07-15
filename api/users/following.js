import { getMe, getFollowingUsers } from './handlers'

export default async (_, response) => {
  const me = await getMe()
  const users = await getFollowingUsers({ user: me })
  response.json({ users })
}
