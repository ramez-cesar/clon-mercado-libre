import React from 'react'
import { Switch, Route } from 'wouter'
import Home from '../Pages/Home'
import Subscriptions from '../Pages/Subscriptions'
import ProductsByCategory from '../Pages/ProductsByCategory'
import NotFound from '../Components/NotFound'

function Routes () {
  return (
    <Switch>
      <Route path='/' component={Home} />
      <Route path='/suscripciones' component={Subscriptions} />
      <Route path='/:match' component={ProductsByCategory} />
      <Route path='/:rest*' component={NotFound} />
    </Switch>
  )
}

export default Routes
