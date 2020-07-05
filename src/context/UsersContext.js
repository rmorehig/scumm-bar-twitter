import React, { useState, useContext, useMemo } from 'react'

const UsersContext = React.createContext({})

function UsersContextProvider({ children }) {
  const [users, setUsers] = useState([])
  const value = useMemo(
    () => ({
      users,
      setUsers
    }),
    [users, setUsers]
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
