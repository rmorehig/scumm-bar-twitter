import React, { useReducer, useContext, useMemo, useCallback } from 'react'
import ACTIONS from './actions'
import reducer from './reducer'
import initialState from './initialState'

const PostContext = React.createContext({})

function PostProvider({ children }) {
  const [{ posts, status }, dispatch] = useReducer(reducer, initialState)

  const setPosts = useCallback(
    posts => {
      dispatch({ type: ACTIONS.SET_POSTS, payload: { posts } })
    },
    [dispatch]
  )

  const addPost = useCallback(
    post => {
      dispatch({ type: ACTIONS.ADD_POST, payload: { post } })
    },
    [dispatch]
  )

  const value = useMemo(
    () => ({
      posts,
      status,
      setPosts,
      addPost
    }),
    [posts, status, setPosts, addPost]
  )
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>
}

function usePostContext() {
  const context = useContext(PostContext)
  if (!context) {
    throw new Error('usePostContext must be called inside PostProvider')
  }
  return context
}

export { usePostContext, PostProvider }
