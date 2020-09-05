import React, { useContext, useMemo, useState } from 'react'

const UserContext = React.createContext({})

function UserProvider({ children }) {
  const [friends, setFriends] = useState([])
  const [follow, setFollow] = useState([])

  const value = useMemo(
    () => ({
      friends,
      follow,
      setFriends,
      setFollow,
    }),
    [friends, follow, setFriends, setFollow]
  )
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

function useUsers() {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUsers must be called inside UserProvider')
  }
  const { friends, follow, setFriends, setFollow } = context
  return { friends, follow, setFriends, setFollow }
}

export { useUsers, UserProvider }
