import React from 'react'

const Home = React.lazy(() => import('pages/Home'))
const User = React.lazy(() => import('pages/User'))

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
