import { useEffect } from 'react'
import { useQuery } from 'react-query'
import { getFriends } from 'application/getFriends'
import { useUsers } from 'context/UserContext'

function useFriends() {
  const { friends, setFriends } = useUsers()
  const { data, status, error } = useQuery('friends', getFriends)

  useEffect(() => {
    if (data?.length && status === 'success') {
      setFriends(data)
    }
  }, [setFriends, data, status])

  return {
    loading: status === 'loading',
    error,
    friends,
  }
}

export default useFriends
