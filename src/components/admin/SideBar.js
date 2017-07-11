import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SideBar extends Component {
  render() {
    return (
  <div className="col-md-2 nav-side-menu"><i className="fa fa-bars fa-2x toggle-btn"></i>
        <div className="menu-list">
          <ul id="menu-content" className="menu-content">
              <li>
                <a onClick={this.props.productsAdd}>
                <i className="fa fa-dashboard fa-lg"></i> Add product
                </a>
              </li>
              <li>
                <a onClick={this.props.productsEdit}>
                <i className="fa fa-gift fa-lg"></i> List products
                </a>
              </li>
              <li>
                <a onClick={this.props.categoriesAdd}>
                <i className="fa fa-cube fa-lg"></i> Add category
                </a>
              </li>
              <li>
                <a onClick={this.props.categoriesEdit}>
                <i className="fa fa-cubes fa-lg"></i> List categories
                </a>
              </li>
                            <li>
                <a onClick={this.props.testimonialsEdit}>
                <i className="fa fa-book fa-lg"></i> List testimonials
                </a>
              </li>
              <li>
                <a onClick={this.props.userThreads}>
                <i className="fa fa-gift fa-lg"></i> Check user questions
                </a>
              </li>
              <Link to='/'><i className='fa fa-arrow-left'></i>Home</Link> 
          </ul>
      </div>
  </div>
    )
  }
}

export default SideBar