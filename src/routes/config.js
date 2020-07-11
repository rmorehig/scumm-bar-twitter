import Home from 'pages/Home'
import UserDetails from 'pages/UserDetails'

const routes = [
  {
    Page: Home,
    path: '/'
  },
  {
    Page: UserDetails,
    path: '/:username'
  }
]

export default routes
