import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { usePostContext } from 'context/posts/PostContext'
import { getUserDetails } from 'services/users'
import { getWall } from 'services/posts'
import { createPost } from 'services/posts'

export default function usePosts() {
  const { posts, setPosts, addPost } = usePostContext()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const { username } = useParams()

  useEffect(() => {
    setLoading(true)
    if (username) {
      getUserDetails({ username }).then(({ user, posts }) => {
        setPosts(posts)
        setUser(user)
        setLoading(false)
      })
    } else {
      getWall().then(({ posts }) => {
        setPosts(posts)
        setLoading(false)
      })
    }
  }, [setPosts, username])

  const postMessage = useCallback(
    async ({ message }) => {
      const { post } = await createPost({ userId: 1, content: message })
      addPost(post)
    },
    [addPost]
  )

  return { loading, posts, user, postMessage }
}
