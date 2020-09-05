import React from 'react'
import Wall from 'components/Wall'
import PostMessage from 'components/PostMessage'
import Divider from 'styles/Divider'
import useWall from 'hooks/useWall'

const Home = () => {
  const { posts, addPost } = useWall()
  return (
    <>
      <PostMessage onSubmit={addPost} />
      <Divider />
      <Wall posts={posts} />
    </>
  )
}

export default Home
