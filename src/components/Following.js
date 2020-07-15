import React from 'react'
import { Link } from 'react-router-dom'
import useFollowing from 'hooks/useFollowing'
import Loader from './Loader'

const Following = () => {
  const { following, loading } = useFollowing()
  return (
    <aside className="following" aria-label="following users">
      <h2 className="following__heading">Following</h2>
      {loading && <Loader />}
      {following && (
        <ul aria-label="following users">
          {following.map(({ id, username, name }) => (
            <li key={id} className="following__item">
              <Link to={`/${username}`}>{name}</Link>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default Following
