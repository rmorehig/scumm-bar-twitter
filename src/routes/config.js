import Home from 'pages/Home'
import User from 'pages/User'

const routes = [
  {
    Page: Home,
    path: '/'
  },
  {
    Page: User,
    path: '/:username'
  }
]

export default routes
