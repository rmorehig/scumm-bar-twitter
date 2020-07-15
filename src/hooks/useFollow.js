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
      getUsersToFollow({ name: query }).then(({ users }) => {
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
    async ({ username, followedAt }) => {
      if (followedAt) {
        const { user } = await unfollowUserService({
          username
        })
        return unfollowUser(user)
      }
      const { user } = await followUserService({
        username
      })
      followUser(user)
    },
    [followUser, unfollowUser]
  )

  return { handleSearch, loading, follow, handleFollow }
}
