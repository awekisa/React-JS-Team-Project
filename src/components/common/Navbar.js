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
    if (data.success) {
      this.setState({
        username: data.user.username
      })
    }
  }
  
  
  render() {
    return (
      <div className='menu'>
    <aside className="sidebar-left">
        <Link to='/' className="company-logo">Logo</Link>
        <div className="sidebar-links">
        { Auth.isUserAuthenticated() ? (
          <div>
            <h3>Hi, {this.state.username}</h3>
            <Link to="/" className="link-blue" ><i className="fa fa-home"></i>Home</Link>
            <Link to='/admin' className='link-blue'><i className="fa fa-user"></i>Admin Console</Link>
            <Link to="/users/logout" className="link-red"><i className="fa fa-sign-out"></i>Logout</Link>
            <Link to="/contact" className="link-yellow"><i className="fa fa-phone"></i>Contact</Link>
            <Link to="/testimonials" className="link-green"><i className="fa fa-map-marker"></i>Testimonials</Link>
          </div>
        ) : (
          <div>
            <Link to="/" className="link-blue" ><i className="fa fa-home"></i>Home</Link>
            <Link to='/users/login'><i className="fa fa-sign-in"></i>Login</Link>
            <Link to="/contact" className="link-yellow"><i className="fa fa-phone"></i>Contact</Link>
            <Link to="/users/register" className="link-yellow"><i className="fa fa-user"></i>Register</Link>
            <Link to="/testimonials" className="link-green"><i className="fa fa-map-marker"></i>Testimonials</Link>
          </div>
        )}
        </div>
    </aside>
      </div>
    )
  }
}

export default Navbar