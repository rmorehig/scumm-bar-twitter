import client from './client'

export const getFollowingUsers = async () => {
  return await client('/users?following_ne=false&_sort=following&_order=asc')
}
export const getUsersToFollow = async name => {
  return await client(`/users?following=false&name_like=${name}`)
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

export const getUserDetails = async username => {
  const users = await client(`/users/?username=${username}&_embed=posts`)
  const user = users[0]
  const posts = user.posts
    .map(post => ({
      ...post,
      user
    }))
    .reverse()
  return { user, posts }
}
