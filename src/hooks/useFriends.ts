import { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { getFriends } from 'application/getFriends'
import { Friend } from 'domain/friend/types'

function useFriends() {
  const [friends, setFriends] = useState<Friend[]>([])
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
