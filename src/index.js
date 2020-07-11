import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { UserProvider } from 'context/UserContext'
import { PostProvider } from 'context/posts/PostContext'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <PostProvider>
        <App />
      </PostProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
