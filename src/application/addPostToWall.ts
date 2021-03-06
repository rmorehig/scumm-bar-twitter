import { AddPostParams } from 'domain/wall/types'
import { postService } from 'services/posts'
import { addPost } from 'domain/wall/behaviors'
import { Post } from 'domain/post/types'

export async function addPostToWall(params: AddPostParams): Promise<Post[]> {
  const { content, posts } = params
  if (!content || !posts) {
    throw new Error('the data is not valid')
  }
  const post = await postService.post(content)
  const updatedPosts = addPost(post, posts)
  return updatedPosts
}
