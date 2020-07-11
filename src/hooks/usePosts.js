import { useState, useEffect, useCallback } from 'react'
import { usePostContext } from 'context/posts/PostContext'
import { createPost, getPosts } from 'services/posts'

export default function usePosts() {
  const { posts, setPosts, addPost } = usePostContext()
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getPosts().then(posts => {
      setPosts(posts)
      setLoading(false)
    })
  }, [setPosts])

  const postMessage = useCallback(
    async ({ message }) => {
      setLoading(true)
      const post = await createPost(message)
      addPost(post)
      setLoading(false)
    },
    [addPost]
  )

  return { loading, posts, postMessage }
}
