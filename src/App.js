import React from 'react'
import Layout from 'components/Layout'
import Home from 'pages/Home'
import { BrowserRouter as Router, Switch } from 'react-router-dom'

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Home />
        </Switch>
      </Router>
    </Layout>
  )
}

export default App
