import { useCallback, useState } from 'react'
import { getUsersToFollow } from 'services/users'
import { debounce } from 'utils/helpers'
import { useUsers } from 'context/UsersContext'

export default function useFollow() {
  const [loading, setLoading] = useState(false)
  const { follow, setFollow, followUser, unfollowUser } = useUsers()

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
  const handleFollow = user => {
    if (user.following) {
      return unfollowUser(user)
    }
    return followUser(user)
  }

  return { handleSearch, loading, follow, handleFollow }
}
