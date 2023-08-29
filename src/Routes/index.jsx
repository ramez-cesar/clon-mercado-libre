import React from 'react'
import { Switch, Route } from 'wouter'
import Home from '../Pages/Home'
import Subscriptions from '../Pages/Subscriptions'
import ProductsByCategory from '../Pages/ProductsByCategory'
import ProductDetails from '../Pages/ProductDetails'
import Login from '../Pages/Login'
import NotFound from '../Components/NotFound'

function Routes () {
  return (
    <Switch>
      <Route path='/clon-mercado-libre' component={Home} />
      <Route path='/clon-mercado-libre/suscripciones' component={Subscriptions} />
      <Route path='/clon-mercado-libre/category/:name' component={ProductsByCategory} />
      <Route path='/clon-mercado-libre/product/:id/:name' component={ProductDetails} />
      <Route path='/clon-mercado-libre/login' component={Login} />
      <Route path='/:rest*' component={NotFound} />
    </Switch>
  )
}

export default Routes
