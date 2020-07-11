import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './config'

const Router = ({ children }) => (
  <BrowserRouter>
    {children}
    <Switch>
      {routes.map(({ Page, path }) => (
        <Route key={path} exact path={path}>
          <Page />
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
)

export default Router
