import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import routes from 'routes/config'

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Suspense fallback={null}>
            {routes.map(({ Page, path }) => (
              <Route key={path} exact path={path}>
                <Page />
              </Route>
            ))}
          </Suspense>
        </Switch>
      </Layout>
    </Router>
  )
}

export default App
