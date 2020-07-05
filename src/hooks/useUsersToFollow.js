import { useCallback, useState } from 'react'
import { getUsersToFollow } from 'api/users'
import { debounce } from 'utils/helpers'

export function useUsersToFollow() {
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  const handleSearch = useCallback(
    debounce(query => {
      setLoading(true)
      getUsersToFollow(query).then(users => {
        if (query) {
          setUsers(users)
        } else {
          setUsers([])
        }
        setLoading(false)
      })
    }),
    [setLoading, setUsers]
  )

  return { handleSearch, loading, users }
}
