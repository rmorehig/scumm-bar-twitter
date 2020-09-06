import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import useFriends from 'hooks/useFriends'

const Friends = () => {
  const { friends, loading } = useFriends()
  return (
    <aside className="following" aria-label="following users">
      <h2 className="following__heading">Following</h2>
      {loading && <Loader />}
      {friends && (
        <ul aria-label="following users">
          {friends.map(({ id, username, name }) => (
            <li key={id} className="following__item">
              <Link to={`/${username}`}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Friends
