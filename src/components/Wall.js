import React from 'react'
import Loader from './Loader'
import Post from './Post'
import usePosts from 'hooks/usePosts'
import ArrowLeft from 'assets/ArrowLeft'
import { useHistory } from 'react-router-dom'

const Wall = () => {
  const { user, loading, posts } = usePosts()
  const { push } = useHistory()
  const navigateHome = () => {
    push('/')
  }
  return (
    <section
      className="wall"
      aria-label={
        window.location.pathname === '/' ? 'home wall' : 'user details wall'
      }
    >
      <div className="wall__container">
        {user?.name && (
          <button
            className="wall__back"
            aria-label="back button"
            onClick={navigateHome}
          >
            <ArrowLeft />
          </button>
        )}
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
