import client from 'utils/client'

export const getWall = async () => {
  return await client('/posts/wall')
}

export const createPost = async ({ content, userId }) => {
  return await client('/posts/new', {
    body: { content, userId }
  })
}
