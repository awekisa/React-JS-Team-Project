import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListProductsPage from '../products/ListProductsPage'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../users/LogoutPage'
import CreateProductPage from '../products/CreateProductPage'
import ProductDetails from '../products/ProductDetails'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListProductsPage} />
    <Route path='/users/login' component={LoginPage} />
    <Route path='/users/register' component={RegisterPage} />
    <PrivateRoute path='/users/logout' component={LogoutPage} />
    <PrivateRoute path='/products/add' component={CreateProductPage} />
    <PrivateRoute path='/products/details/:id' component={ProductDetails} />
  </Switch>
)

export default Routes