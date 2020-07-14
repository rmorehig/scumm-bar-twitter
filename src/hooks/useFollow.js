import { useCallback, useState } from 'react'
import {
  getUsersToFollow,
  followUser as followUserService,
  unfollowUser as unfollowUserService
} from 'services/users'
import { debounce } from 'utils/helpers'
import { useUsers } from 'context/users/UserContext'

export default function useFollow() {
  const [loading, setLoading] = useState(false)
  const { follow, setFollow, followUser, unfollowUser } = useUsers()

  const handleSearch = useCallback(
    debounce(query => {
      setLoading(true)
      getUsersToFollow(query).then(({ users }) => {
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

  const handleFollow = useCallback(
    async ({ id, following }) => {
      if (following) {
        const user = await unfollowUserService({
          id
        })
        return unfollowUser(user)
      }
      const user = await followUserService({
        id
      })
      followUser(user)
    },
    [followUser, unfollowUser]
  )

  return { handleSearch, loading, follow, handleFollow }
}
