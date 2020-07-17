import React from 'react'
import Wall from 'components/Wall'
import PostMessage from 'components/PostMessage'
import usePosts from 'hooks/usePosts'

const Home = () => {
  const { posts, postMessage } = usePosts()
  return (
    <div>
      <PostMessage onSubmit={postMessage} />
      <Wall posts={posts} />
    </div>
  )
}

export default Home
