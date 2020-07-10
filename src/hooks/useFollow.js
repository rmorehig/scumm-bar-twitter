import { useCallback, useState } from 'react'
import { getUsersToFollow } from 'services/users'
import { debounce } from 'utils/helpers'
import { useUsers } from 'context/UsersContext'

export default function useFollow() {
  const [loading, setLoading] = useState(false)
  const { follow, setFollow, handleFollow } = useUsers()

  const handleSearch = useCallback(
    debounce(query => {
      setLoading(true)
      getUsersToFollow(query).then(users => {
        if (query) {
          setFollow(users)
        } else {
          setFollow([])
        }
        setLoading(false)
      })
    }),
    [setLoading, setFollow]
  )

  return { handleSearch, loading, follow, handleFollow }
}
