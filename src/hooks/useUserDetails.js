import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import { getUserDetails } from 'services/users'

function useUserDetails() {
  const { username } = useParams()
  const { data, status, error } = useQuery({
    queryKey: `${username}-details`,
    queryFn: () => getUserDetails({ username }),
  })
  return {
    user: data?.user,
    posts: data?.posts,
    loading: status === 'loading',
    error,
  }
}

export default useUserDetails
