import { useEffect, useCallback } from 'react'
import { useQuery } from 'react-query'
import { usePostContext } from 'context/posts/PostContext'
import { createPost, getWall } from 'services/posts'

export default function usePosts() {
  const { posts, setPosts, addPost } = usePostContext()
  const { data, status, error } = useQuery('wall', getWall)

  useEffect(() => {
    if (status === 'success') {
      setPosts(data?.posts)
    }
  }, [setPosts, data, status])

  const postMessage = useCallback(
    async ({ message }) => {
      const { post } = await createPost({
        userId: 1,
        content: message,
      })
      addPost(post)
    },
    [addPost]
  )

  return {
    loading: status === 'loading',
    error,
    posts,
    postMessage,
  }
}
