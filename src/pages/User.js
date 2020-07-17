import React from 'react'
import Wall from 'components/Wall'
import UserDetails from 'components/UserDetails'
import useUserDetails from 'hooks/useUserDetails'

const User = () => {
  const { user, posts } = useUserDetails()
  return (
    <div>
      <UserDetails user={user} />
      <Wall posts={posts} />
    </div>
  )
}

export default User
