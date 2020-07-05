import { useEffect, useState } from 'react'
import { useUsers } from 'context/UsersContext'
import { getFollowingUsers } from 'api/users'

export function useFollowing() {
  const [loading, setLoading] = useState(false)
  const { users, setUsers } = useUsers()

  useEffect(() => {
    setLoading(true)
    getFollowingUsers().then(users => {
      setUsers(users)
      setLoading(false)
    })
  }, [setLoading, setUsers])

  return { loading, users }
}
