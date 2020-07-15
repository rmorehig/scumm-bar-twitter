import client from './client'

export const getFollowingUsers = async () => {
  return await client('/users?status=following')
}
export const getUsersToFollow = async ({ name }) => {
  return await client(`/users?name=${name}`)
}

export const getUserDetails = async username => {
  return await client(`/users/${username}`)
}

export const followUser = async ({ username }) => {
  return await client(`/users/${username}/follow`, {
    method: 'POST'
  })
}

export const unfollowUser = async ({ username }) => {
  return await client(`/users/${username}/unfollow`, {
    method: 'POST'
  })
}
