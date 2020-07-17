import { useEffect } from 'react'
import { useUsers } from 'context/users/UserContext'
import { getFollowingUsers } from 'services/users'
import useAsync from './useAsync'

export default function useFollowing() {
  const { status, data, error, run } = useAsync()
  const { following, setFollowing } = useUsers([])

  useEffect(() => {
    run(getFollowingUsers())
  }, [run])

  useEffect(() => {
    setFollowing(data?.users)
  }, [data, setFollowing])

  return { loading: status === 'loading', following, error }
}
