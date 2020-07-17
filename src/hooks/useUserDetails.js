import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getUserDetails } from 'services/users'
import useAsync from './useAsync'

function useUserDetails() {
  const { username } = useParams()
  const { status, data, error, run } = useAsync()

  useEffect(() => {
    run(getUserDetails({ username }))
  }, [run, username])

  return { user: data?.user, posts: data?.posts, status, error }
}

export default useUserDetails
