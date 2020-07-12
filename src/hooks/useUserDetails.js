import UserService from 'services/userService'
import useApi from './api/useApi'
import { useParams } from 'react-router-dom'

function useUserDetails() {
  const { username } = useParams()
  const { data, status } = useApi({
    service: UserService.getUserDetails,
    params: { username },
    onLoad: true
  })

  return { data, status }
}

export default useUserDetails
