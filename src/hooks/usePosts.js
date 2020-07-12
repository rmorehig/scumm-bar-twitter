import { useState, useEffect, useCallback } from 'react'
import { useParams } from 'react-router-dom'
import { usePostContext } from 'context/posts/PostContext'
import { getUserDetails } from 'services/users'
import PostService from 'services/postService'

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
      PostService.getPosts().then(posts => {
        setPosts(posts)
        setLoading(false)
      })
    }
  }, [setPosts, username])

  const postMessage = useCallback(
    async ({ message }) => {
      const post = await PostService.createPost({ message })
      addPost(post)
    },
    [addPost]
  )

  return { loading, posts, user, postMessage }
}
