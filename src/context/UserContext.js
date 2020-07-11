import React, { useReducer, useContext, useMemo, useCallback } from 'react'
import inititalState from './initialState'
import ACTIONS from './actions'
import reducer from './reducer'

const UserContext = React.createContext({})

function UserProvider({ children }) {
  const [{ following, follow }, dispatch] = useReducer(reducer, inititalState)

  const setFollowing = useCallback(
    users => {
      dispatch({ type: ACTIONS.SET_FOLLOWING_USERS, payload: { users } })
    },
    [dispatch]
  )

  const setFollow = useCallback(
    users => {
      dispatch({ type: ACTIONS.SET_FOLLOW_USERS, payload: { users } })
    },
    [dispatch]
  )
  const followUser = useCallback(
    user => {
      dispatch({ type: ACTIONS.FOLLOW_USER, payload: { user } })
    },
    [dispatch]
  )

  const unfollowUser = useCallback(
    user => {
      dispatch({ type: ACTIONS.UNFOLLOW_USER, payload: { user } })
    },
    [dispatch]
  )

  const value = useMemo(
    () => ({
      following,
      follow,
      setFollowing,
      setFollow,
      followUser,
      unfollowUser
    }),
    [following, follow, setFollowing, setFollow, followUser, unfollowUser]
  )
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUsers() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUsers must be called inside UserProvider')
  }
  return context
}

export { useUsers, UserProvider }
