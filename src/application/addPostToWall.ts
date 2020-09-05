import { AddPostParams } from 'domain/wall/types'
import { postService } from 'services/posts'
import { addPost } from 'domain/wall/behaviors'
import { Post } from 'domain/post/types'

export async function addPostToWall(params: AddPostParams): Promise<Post[]> {
  const { userId, content, posts } = params
  if (!content || !userId) {
    throw new Error('the data is not valid')
  }
  const post = await postService.create(content, userId)
  let wall = addPost(post, {
    userId,
    posts,
  })
  return wall.posts
}
