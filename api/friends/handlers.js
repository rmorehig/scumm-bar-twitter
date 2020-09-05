import { users as usersDb, follows as followsDb } from '../db.json'
import { getUserByUsername, getMe } from '../users/handlers'

export const getFriendsByUsername = async ({ username }) => {
  const user = await getUserByUsername({ username })
  return followsDb
    .filter(follow => follow.userId === user.id)
    .map(({ followingId }) => usersDb.find(({ id }) => id === followingId))
}

export const updateFriend = async ({ user }) => {
  let friend = user
  if (friend.followedAt) {
    delete user.followedAt
  } else {
    friend = {
      ...friend,
      followedAt: new Date(),
    }
  }
  return friend
}

export const getUsersToFollow = async ({ query }) => {
  const me = await getMe()
  const following = await getFriendsByUsername({ username: me.username })
  return usersDb.filter(user =>
    following.every(
      ({ id }) =>
        id !== user.id && !user.me && user.name.toLowerCase().includes(query)
    )
  )
}
