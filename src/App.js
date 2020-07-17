import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from 'components/Layout'
import routes from 'routes/config'
import Loader from 'components/Loader'

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Router>
        <Layout>
          <Switch>
            {routes.map(({ Page, path }) => (
              <Route key={path} exact path={path}>
                <Page />
              </Route>
            ))}
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  )
}

export default App
