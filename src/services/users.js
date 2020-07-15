import client from './client'

export const getFollowingUsers = async () => {
  return await client('/users?status=following')
}
export const getUsersToFollow = async name => {
  return await client(`/users?name=${name}`)
}

export const getUserDetails = async username => {
  return await client(`/users/${username}`)
}

export const followUser = async ({ id }) => {
  return await client(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      following: new Date()
    })
  })
}

export const unfollowUser = async ({ id }) => {
  return await client(`/users/${id}`, {
    method: 'PATCH',
    body: JSON.stringify({
      following: false
    })
  })
}
