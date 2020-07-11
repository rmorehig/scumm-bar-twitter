import { useState, useEffect } from 'react'
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

  const postMessage = async ({ message }) => {
    setLoading(true)
    const post = await createPost(message)
    addPost(post)
    setLoading(false)
  }

  return { loading, posts, postMessage }
}
