import React from 'react'
import { useFollowing } from 'hooks/useFollowing'
import Loader from './Loader'

const Following = () => {
  const { users, loading } = useFollowing()
  return (
    <aside className="following" aria-label="following users">
      <h2 className="following__heading">Following</h2>
      {loading && <Loader />}
      {users && (
        <ul aria-label="following users">
          {users.map(({ id, username, name }) => (
            <li key={id} className="following__item">
              <a href={`/${username}`}>{name}</a>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Following
