import { useEffect, useState } from 'react'
import { useUsers } from 'context/users/UserContext'
import { getFollowingUsers } from 'services/users'

export default function useFollowing() {
  const [loading, setLoading] = useState(false)
  const { following, setFollowing } = useUsers([])

  useEffect(() => {
    setLoading(true)
    getFollowingUsers().then(({ users }) => {
      setFollowing(users)
      setLoading(false)
    })
  }, [setLoading, setFollowing])

  return { loading, following }
}
