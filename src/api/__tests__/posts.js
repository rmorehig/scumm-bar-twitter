import { getPosts, createPost } from '../posts'
import {
  mockFetch,
  mockPostsToFilter as mockPosts,
  mockPostBeforeCreate as mockPost
} from '../../mocks/utils'
import { formatPost } from '../../utils/posts'

test('getPosts should return my posts and from the users I follow', async () => {
  window.fetch = mockFetch(mockPosts)
  const posts = await getPosts()
  expect(posts).toEqual([mockPosts[0], mockPosts[2]])
  expect(fetch).toHaveBeenCalledTimes(1)
})

test('createPost should return the new formatted post', async () => {
  window.fetch = mockFetch({ id: 6, ...mockPost })
  const post = await createPost(mockPost)
  const formattedPost = formatPost(post)
  expect(post).toEqual({ id: 6, ...formattedPost })
  expect(fetch).toHaveBeenCalledTimes(1)
})
