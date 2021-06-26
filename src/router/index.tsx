import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import routers from './config'

const Routers: React.FC = props => {
  return (
    <Switch>
      {routers.map(route => {
        return route.redirect ? (
          <Redirect to={route.redirect} />
        ) : (
          <Route exact={route.exact} path={route.path} component={route.component}></Route>
        )
      })}
    </Switch>
  )
}

export default Routers
