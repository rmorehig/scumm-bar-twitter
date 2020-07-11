import React from 'react'
import Loader from './Loader'
import Post from './Post'
import usePosts from 'hooks/usePosts'

const Wall = ({ user }) => {
  const { loading, posts } = usePosts()
  return (
    <section
      className="wall"
      aria-label={
        window.location.pathname === '/' ? 'home wall' : 'user details wall'
      }
    >
      <div className="wall__container">
        <h2 className="wall__heading">{user?.name || 'Wall'}</h2>
      </div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          posts.map(post => <Post key={post.id} post={post} />)
        )}
      </div>
    </section>
  )
}

export default Wall
