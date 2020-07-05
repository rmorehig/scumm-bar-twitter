import React from 'react'
import SearchIcon from 'assets/SearchIcon'
import { useUsersToFollow } from 'hooks/useUsersToFollow'

const Follow = () => {
  const { handleSearch, users } = useUsersToFollow()
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
        {users && (
          <ul className="follow__results">
            {users.map(({ id, username, name }) => (
              <li key={id} className="following__item">
                <a href={`/${username}`}>{name}</a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  )
}

export default Follow
