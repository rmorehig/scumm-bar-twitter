import React from 'react'
import { formatDate } from 'utils/helpers'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  if (!Object.keys(post).length) {
    return
  }
  const { date, content, user } = post
  return (
    <article className="post">
      <div className="post__container">
        <div className="post__avatar">
          <img src={user?.avatar} alt="avatar" />
        </div>
        <div>
          <div>
            <Link to={`/${user?.username}`} className="post__name">
              <span>{user?.name}</span>
            </Link>
            <span className="post__username"> {user?.username}</span>
            <span className="post__divider"> · </span>
            <time className="post__date">{formatDate(date)}</time>
          </div>
          <p>{content}</p>
        </div>
      </div>
    </article>
  )
}

export default Post
