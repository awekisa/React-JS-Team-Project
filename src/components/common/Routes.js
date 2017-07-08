import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListProductsPage from '../products/ListProductsPage'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'
import PrivateRoute from './PrivateRoute'
import LogoutPage from '../users/LogoutPage'
import CreateProductPage from '../admin/CreateProductPage'
import ProductDetails from '../products/ProductDetails'
import AdminConsole from '../admin/AdminConsole'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListProductsPage} />
    <Route path='/users/login' component={LoginPage} />
    <Route path='/users/register' component={RegisterPage} />
    <PrivateRoute path='/users/logout' component={LogoutPage} />
    
    <PrivateRoute path='/products/details/:id' component={ProductDetails} />
    <PrivateRoute path='/admin' component={AdminConsole} />
  </Switch>
)

export default Routes