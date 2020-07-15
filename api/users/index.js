import { getMe, getFollowingUsers, getUsersToFollow } from './handlers'

export default async (request, response) => {
  const { name, status } = request.query

  const user = await getMe()
  let users = []
  if (status === 'following') {
    users = await getFollowingUsers({ user })
  } else {
    users = await getUsersToFollow({ user, name })
  }
  response.json({ users })
}
