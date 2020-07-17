import React from 'react'
import Loader from './Loader'
import Post from './Post'

const Wall = ({ posts }) => {
  return (
    <section
      className="wall"
      aria-label={window.location.pathname === '/' ? 'home wall' : 'user wall'}
    >
      <div>
        {!posts ? (
          <Loader />
        ) : (
          posts.map(post => <Post key={post.id} post={post} />)
        )}
      </div>
    </section>
  )
}

export default Wall
