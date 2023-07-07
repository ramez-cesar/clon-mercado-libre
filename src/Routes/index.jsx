import React from 'react'
import { Switch, Route } from 'wouter'
import Home from '../Pages/Home'
import NotFound from '../Components/NotFound'

function Routes () {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/:rest*' component={NotFound} />
    </Switch>
  )
}

export default Routes
