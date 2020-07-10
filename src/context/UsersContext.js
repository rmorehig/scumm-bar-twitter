import React, { useReducer, useContext, useMemo, useCallback } from 'react'
import inititalState from './initialState'
import ACTIONS from './actions'

const UsersContext = React.createContext({})
const reducer = (state, { type, payload }) => {
  switch (type) {
    case ACTIONS.SET_FOLLOWING:
      return {
        ...state,
        following: payload.users
      }
    case ACTIONS.ADD_FOLLOWING:
      return {
        ...state,
        following: [...state.following, payload.user]
      }
    case ACTIONS.SET_FOLLOW:
      return {
        ...state,
        follow: payload.users
      }
    case ACTIONS.ADD_FOLLOW:
      return {
        ...state,
        follow: [...state.follow, payload.user]
      }
    default:
      return state
  }
}
function UsersContextProvider({ children }) {
  const [{ following, follow }, dispatch] = useReducer(reducer, inititalState)

  const setFollowing = useCallback(
    users => {
      dispatch({ type: ACTIONS.SET_FOLLOWING, payload: { users } })
    },
    [dispatch]
  )
  const addFollowing = useCallback(
    user => {
      dispatch({ type: ACTIONS.ADD_FOLLOWING, payload: { user } })
    },
    [dispatch]
  )

  const removeFollowing = useCallback(
    user => {
      dispatch({ type: ACTIONS.REMOVE_FOLLOWING, payload: { user } })
    },
    [dispatch]
  )

  const setFollow = useCallback(
    users => {
      dispatch({ type: ACTIONS.SET_FOLLOW, payload: { users } })
    },
    [dispatch]
  )
  const addFollow = useCallback(
    user => {
      dispatch({ type: ACTIONS.ADD_FOLLOW, payload: { user } })
    },
    [dispatch]
  )

  const removeFollow = useCallback(
    user => {
      dispatch({ type: ACTIONS.REMOVE_FOLLOW, payload: { user } })
    },
    [dispatch]
  )

  const value = useMemo(
    () => ({
      following,
      follow,
      setFollowing,
      addFollowing,
      removeFollowing,
      setFollow,
      addFollow,
      removeFollow
    }),
    [
      following,
      follow,
      setFollowing,
      addFollowing,
      removeFollowing,
      setFollow,
      addFollow,
      removeFollow
    ]
  )
  return <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
}

function useUsers() {
  const context = useContext(UsersContext)
  if (!context) {
    throw new Error('useUsers must be called inside UsersProvider')
  }
  return context
}

export { useUsers, UsersContextProvider }
