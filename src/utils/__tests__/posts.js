import { formatPost, newPost } from '../posts'
import { mockMe, mockDate } from '../../mocks/utils'

describe('posts', () => {
  it('formatPost should add user details when a post is passed', () => {
    const post = {
      content: 'new message'
    }
    const expectedPost = {
      ...post,
      user: {
        ...mockMe
      }
    }
    const formattedPost = formatPost(post)
    expect(formattedPost).toEqual(expectedPost)
  })
  it('newPost should return a newPost with userId 1 and a new date', () => {
    jest.spyOn(global, 'Date').mockImplementationOnce(() => new Date(mockDate))
    const expectedPost = {
      userId: 1,
      date: new Date(mockDate),
      content: 'new message'
    }
    const post = newPost('new message')
    expect(post).toEqual(expectedPost)
  })
})
