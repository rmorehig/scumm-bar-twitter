import { users as usersDb, follows as followsDb } from '../db.json'
import { getUserByUsername, getMe, getUserById } from '../users/handlers'

const getFriendsFromFollows = async follows => {
  const friends = await Promise.all(
    follows.map(({ followingId, followedAt }) =>
      getUserById({ id: followingId }, followedAt)
    )
  )
  return friends
}

export const getFriendsByUsername = async ({ username }) => {
  const user = await getUserByUsername({ username })
  const follows = followsDb.filter(follow => follow.userId === user.id)
  const friends = await getFriendsFromFollows(follows)
  return friends
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
