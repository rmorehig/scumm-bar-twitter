import { posts as postsDb } from '../db.json'

export const getPostsByUser = async ({ user }) => {
  return postsDb
    .filter(post => post.userId === user.id)
    .map(post => ({ ...post, user }))
}

export const createId = () => Math.random().toString(36).substr(2, 9)
