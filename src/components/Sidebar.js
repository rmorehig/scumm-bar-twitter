import React from 'react'
import Friends from './Friends'
import Follow from './Follow'

const Sidebar = () => {
  return (
    <div className="sidebar" role="complementary" aria-label="sidebar">
      <Friends />
      <Follow />
    </div>
  )
}

export default Sidebar
