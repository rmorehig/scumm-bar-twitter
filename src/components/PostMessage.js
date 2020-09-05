import React, { useState } from 'react'
import { mockMe } from 'mocks/utils'

const PostMessage = React.memo(({ onSubmit }) => {
  const [message, setMessage] = useState('')
  const handleChange = event => {
    setMessage(event.target.value)
  }
  const handleSubmit = event => {
    event.preventDefault()
    onSubmit(message)
    setMessage('')
  }

  return (
    <header className="post-message" aria-label="post message">
      <h2 className="post-message__heading">Home</h2>
      <div className="post-message__container">
        <div className="post-message__avatar">
          <img src={mockMe.avatar} alt="avatar" />
        </div>
        <Form
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          message={message}
        />
      </div>
    </header>
  )
})

const Form = ({ handleSubmit, handleChange, message }) => {
  return (
    <form
      className="post-message__form"
      aria-label="Post message"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="What's happening?"
        className="post-message__input"
        onChange={handleChange}
        value={message}
      />
      <div>
        <button
          type="submit"
          className="post-message__button"
          aria-label="post message"
          disabled={!message}
        >
          Post
        </button>
      </div>
    </form>
  )
}
export default PostMessage
