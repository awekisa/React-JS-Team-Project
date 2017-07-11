import React from 'react'
import { Switch, Route } from 'react-router-dom'
import ListProductsPage from '../products/ListProductsPage'
import LoginPage from '../users/LoginPage'
import RegisterPage from '../users/RegisterPage'
import PrivateRoute from './PrivateRoute'
import PrivateAdminRoute from './PrivateAdminRoute'
import LogoutPage from '../users/LogoutPage'
import ProductDetails from '../products/ProductDetails'
import AdminConsole from '../admin/AdminConsole'
import NotFoundPage from './NotFoundPage'
import CreateTestimonialsPage from '../testimonials/CreateTestimonialPage'
import ContactPage from './ContactPage'

const Routes = () => (
  <Switch>
    <Route path='/' exact component={ListProductsPage} />
    <Route path='/users/login' component={LoginPage} />
    <Route path='/users/register' component={RegisterPage} />
    <PrivateRoute path='/users/logout' component={LogoutPage} />
    <PrivateRoute path='/products/details/:id' component={ProductDetails} />
    <PrivateRoute path='/testimonials/create' component={CreateTestimonialsPage} />
    <PrivateAdminRoute path='/admin' component={AdminConsole} />
    <Route path='/contact' component={ContactPage} />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
