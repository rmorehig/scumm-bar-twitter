import { useEffect, useCallback, useState } from 'react'
import { useQuery } from 'react-query'
import { getWall } from 'application/getWall'
import { addPostToWall } from 'application/addPostToWall'
import { Post } from 'domain/post/types'
import { User } from 'domain/user/types'

function useWall() {
  const [posts, setPosts] = useState<Post[]>([])
  const [user, setUser] = useState<User>()
  const { data, status, error } = useQuery('wall', getWall)

  useEffect(() => {
    if (data && status === 'success') {
      setPosts(data.posts)
      setUser(data.user)
    }
  }, [setPosts, data, status])

  const addPost = useCallback(
    async message => {
      const updatedPosts = await addPostToWall({
        content: message,
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
    user,
  }
}

export default useWall
