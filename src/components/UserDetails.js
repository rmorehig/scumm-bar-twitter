import React from 'react'
import { useHistory } from 'react-router-dom'
import ArrowLeft from 'components/icons/ArrowLeft'

const UserDetails = ({ user }) => {
  const { push } = useHistory()
  const navigateHome = () => {
    push('/')
  }
  return (
    <header aria-label="user details" className="user-details__container">
      {user?.name && (
        <button
          className="user-details__back"
          aria-label="navigate home"
          onClick={navigateHome}
        >
          <ArrowLeft />
        </button>
      )}
      <h2 className="user-details__heading">{user?.name}</h2>
    </header>
  )
}

export default UserDetails
