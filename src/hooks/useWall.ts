import { useEffect, useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { getWall } from 'application/getWall'
import { addPostToWall } from 'application/addPostToWall'
import { Post } from 'domain/post/types'

function useWall() {
  const [posts, setPosts] = useState<Post[]>([])
  const { data, status, error } = useQuery('wall', getWall)

  useEffect(() => {
    if (data && data.posts && data.posts.length && status === 'success') {
      setPosts(data.posts)
    }
  }, [setPosts, data, status])

  const addPost = useCallback(
    async ({ message }) => {
      const updatedPosts = await addPostToWall({
        content: message,
        userId: 1,
        posts,
      })
      setPosts(updatedPosts)
    },
    [posts, setPosts]
  )

  return {
    loading: status === 'loading',
    error,
    posts,
    addPost,
  }
}

export default useWall
