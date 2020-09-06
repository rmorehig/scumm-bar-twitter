import { useCallback, useState } from 'react'
import { debounce } from 'utils/helpers'
import { useUsers } from 'context/UserContext'
import { updateFriendship } from 'application/updateFriendship'
import { searchFriends } from 'application/searchFriends'

export default function useFriendship() {
  const [status, setStatus] = useState('idle')
  const { friends, setFriends, follow, setFollow } = useUsers()

  const handleSearch = useCallback(
    debounce((query: string) => {
      setStatus('loading')
      if (query) {
        searchFriends(query).then(results => {
          setFollow(results)
        })
      } else {
        setFollow([])
      }
      setStatus('success')
    }),
    [setStatus, setFollow]
  )

  const handleFriendship = useCallback(
    async user => {
      const friendships = await updateFriendship({
        user,
        friends,
        usersToFollow: follow,
      })
      setFriends(friendships.friends)
      setFollow(friendships.usersToFollow)
    },
    [friends, setFriends, follow, setFollow]
  )

  return {
    loading: status === 'loading',
    follow,
    handleSearch,
    handleFriendship,
  }
}
