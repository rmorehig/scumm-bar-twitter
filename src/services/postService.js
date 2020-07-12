import { newPost, formatPost, filterPostsFromWall } from 'utils/posts'
import client from './client'

class PostService {
  static async getPosts() {
    const posts = await client('/posts?_expand=user&_sort=date&_order=desc')
    return filterPostsFromWall(posts)
  }

  static async createPost({ message }) {
    const post = await client('/posts', {
      method: 'POST',
      body: JSON.stringify(newPost(message))
    })
    return formatPost(post)
  }
}

export default PostService
