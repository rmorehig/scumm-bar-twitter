import { useEffect, useCallback } from 'react'
import { useQuery } from 'react-query'
import { usePostContext } from 'context/posts/PostContext'
import { createPost, getWall } from 'services/posts'

export default function usePosts() {
  const { posts, setPosts, addPost } = usePostContext()
  const { data, isLoading, error } = useQuery('wall', getWall)

  useEffect(() => {
    setPosts(data?.posts)
  }, [setPosts, data])

  const postMessage = useCallback(
    async ({ message }) => {
      const { post } = await createPost({
        userId: 1,
        content: message
      })
      addPost(post)
    },
    [addPost]
  )

  return {
    loading: isLoading,
    error,
    posts,
    postMessage
  }
}
