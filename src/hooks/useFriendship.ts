import { useCallback, useState } from 'react'
import { debounce } from 'utils/helpers'
import { useUsers } from 'context/users/UserContext'
import { updateFriendship } from 'application/updateFriendship'
import { searchFriends } from 'application/searchFriends'

export default function useFriendship() {
  const [loading, setLoading] = useState(false)
  const { friends, setFriends, follow, setFollow } = useUsers()

  const handleSearch = useCallback(
    debounce((query: string) => {
      setLoading(true)
      searchFriends(query).then(results => {
        if (query) {
          setFollow(results)
        } else {
          setFollow([])
        }
        setLoading(false)
      })
    }),
    [setLoading, setFollow]
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

  return { loading, follow, handleSearch, handleFriendship }
}
