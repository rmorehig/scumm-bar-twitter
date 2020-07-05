import React from 'react'
import Following from './Following'
import Follow from './Follow'

const Sidebar = () => {
  return (
    <div className="sidebar" role="complementary" aria-label="sidebar">
      <Following />
      <Follow />
    </div>
  )
}

export default Sidebar
