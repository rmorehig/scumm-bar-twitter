import client from './client'

export const getWall = async () => {
  return await client('/posts/wall')
}

export const createPost = async ({ content, userId }) => {
  return await client('/posts/new', {
    method: 'POST',
    body: JSON.stringify({ content, userId })
  })
}
