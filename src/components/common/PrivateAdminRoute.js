import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import Auth from '../users/Auth'

const PrivateAdminRoute = ({component: Component, ...rest}) => (
  <Route {...rest} render={props => (
      (Auth.isUserAuthenticated() && Auth.isUserAdmin()) ? (
        <Component {...props} />
      ) : (
        <Redirect to={{
          pathname: '/page-not-found',
          state: { from: props.location }
        }} />
      )
    )
  } />
)

export default PrivateAdminRoute
