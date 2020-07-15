import React from 'react'
import SearchIcon from 'assets/SearchIcon'
import useFollow from 'hooks/useFollow'
import { Link } from 'react-router-dom'

const Follow = () => {
  const { handleSearch, follow, handleFollow } = useFollow()
  return (
    <aside className="follow" aria-label="users to follow">
      <h2 className="follow__heading">Follow</h2>
      <div className="follow__container">
        <div className="follow__search">
          <SearchIcon className="follow__icon" />
          <input
            className="follow__input"
            type="text"
            placeholder="Search"
            onChange={event => handleSearch(event.target.value)}
          />
        </div>
        {follow && (
          <ul className="follow__results">
            {follow.map(user => {
              const { id, username, name, followedAt } = user
              return (
                <li key={id} className="follow__item">
                  <Link to={`/${username}`}>{name}</Link>
                  <button
                    className="follow__button"
                    aria-label={`${
                      followedAt ? 'unfollow' : 'follow'
                    } ${username}`}
                    onClick={() => handleFollow(user)}
                  >
                    {followedAt ? 'Unfollow' : 'Follow'}
                  </button>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </aside>
  )
}

export default Follow
