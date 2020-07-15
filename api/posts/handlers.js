import { posts as postsDb } from '../db.json'

export const getPostsByUser = async ({ user }) => {
  return postsDb
    .filter(post => post.userId === user.id)
    .map(post => ({ ...post, user }))
}

export const getPostsFromUsers = async ({ users }) => {
  return postsDb
    .filter(post => users.some(({ id }) => id === post.userId))
    .map(post => {
      const user = users.find(user => user.id === post.userId)
      return {
        ...post,
        user
      }
    })
}
export const createId = () => Math.random().toString(36).substr(2, 9)

export const createPost = async ({ content, user }) => ({
  id: createId(),
  content,
  userId: user.id,
  createdAt: new Date(),
  user
})
