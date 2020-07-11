import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { usePostContext } from 'context/posts/PostContext'
import { createPost, getPosts } from 'services/posts'
import { getUserDetails } from 'services/users'

export default function usePosts() {
  const { posts, setPosts, addPost } = usePostContext()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(false)
  const { username } = useParams()

  useEffect(() => {
    setLoading(true)
    if (username) {
      getUserDetails(username).then(({ user, posts }) => {
        setPosts(posts)
        setUser(user)
        setLoading(false)
      })
    } else {
      getPosts().then(posts => {
        setPosts(posts)
        setLoading(false)
      })
    }
  }, [setPosts, username])

  const postMessage = useCallback(
    async ({ message }) => {
      setLoading(true)
      const post = await createPost(message)
      addPost(post)
      setLoading(false)
    },
    [addPost]
  )

  return { loading, posts, user, postMessage }
}
