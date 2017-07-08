import React, { Component } from 'react'
import Auth from '../users/Auth'
import { Link } from 'react-router-dom'
import userStore from '../../stores/UserStore'

class Navbar extends Component {
  constructor(props){
    super(props)

    this.state = {
      username: Auth.getUser().username
    }
    this.handleUserLoggedIn = this.handleUserLoggedIn.bind(this)

    userStore.on(
      userStore.eventTypes.USER_LOGGED_IN,
      this.handleUserLoggedIn)
  }

  handleUserLoggedIn(data) {
    console.log(data)
    if (data.success) {
      this.setState({
        username: data.user.username
      })
    }
  }

  render() {
    return (
      <div className='menu'>
        <Link to='/'>Home</Link>
        { Auth.isUserAuthenticated() ? (
          <div>
            <Link to='/products/add'>Add a product</Link>
            <span>{this.state.username}</span>
            <Link to='/admin'>Admin Console</Link>
            <Link to='/users/logout'>Logout</Link>
          </div>
        ) : (
          <div>
            <Link to='/users/login'>Login</Link>
            <Link to='/users/register'>Register</Link>
          </div>
        )}
      </div>
    )
  }
}

export default Navbar