import { mockMe } from '../mocks/utils'

export const formatPost = post => ({
  ...post,
  user: {
    ...mockMe
  }
})

export const newPost = content => ({
  content,
  createdAt: new Date(),
  userId: 1
})

export const filterPostsFromWall = posts =>
  posts.filter(({ user }) => !!user?.following || user?.me)
