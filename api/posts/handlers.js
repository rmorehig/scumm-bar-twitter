import { posts as postsDb } from '../db.json'

const orderDates = (prev, next) => {
  if (prev.createdAt > next.createdAt) return -1
  if (prev.createdAt < next.createdAt) return 1
  return 0
}

export const getPostsByUser = async ({ user }) => {
  return postsDb
    .filter(post => post.userId === user.id)
    .sort(orderDates)
    .map(post => ({ ...post, user }))
}

export const getPostsFromUsers = async ({ users }) => {
  return postsDb
    .filter(post => users.some(({ id }) => id === post.userId))
    .sort(orderDates)
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
